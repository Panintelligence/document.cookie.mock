// See https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie

class DocumentCookie {
    constructor() {
        this.value = {};
    }

    getKeyValuePairByKey(cookie, key) {
        const splitNewValue = String(cookie).split(';');
        const keyValue = splitNewValue.find((v) => {
            const keyValuePair = v.split('=');
            return keyValuePair[0].toLowerCase().trim() === key.trim();
        });

        if (keyValue && keyValue.split('=').length > 1) {
            return keyValue.split('=')[1];
        }
        return null;
    }

    get cookie() {
        let now = new Date();
        const values = this.value;
        return Object.keys(values).filter(function (key) {
            return values[key].expires === null || now <= new Date(values[key].expires);
        }).map(function (key) {
            if (key === '') {
                return values[key].value;
            }
            return key ? `${key}=${values[key].value}` : '';
        }).join("; ");
    }

    set cookie(v) {
        const keyValue = String(v).split(';')[0];
        const keyValueSplit = keyValue.split('=');
        if (keyValueSplit.length == 0) {
            return;
        }

        const key = keyValueSplit.length > 1 ? keyValueSplit[0].trim() : '';
        const value = keyValueSplit.length > 1 ? keyValueSplit[1] : keyValueSplit[0];
        let expires = this.getKeyValuePairByKey(v, "expires");
        const maxAge = this.getKeyValuePairByKey(v, "max-age");
        if (maxAge) {
            let date = new Date();
            date.setTime(date.getTime() + (maxAge * 1000));
            expires = date.toUTCString();
        }
        this.value[key] = {
            value: value.trim(),
            domain: this.getKeyValuePairByKey(v, "domain"),
            expires: expires,
            maxAge: maxAge,
            secure: this.getKeyValuePairByKey(v, "secure"),
            samesite: this.getKeyValuePairByKey(v, "samesite"),
            path: this.getKeyValuePairByKey(v, "path")
        }
    }
};

// Use this as document
module.exports = DocumentCookie;