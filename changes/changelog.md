# ![Cookie Mock Logo](images/document.cookie.mock-logo-small.png) Cookie Mock Changelog

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)

## [0.1.5] - 2020-07-06
### Security
- Updated `mocha` to resolve security issue with `minimist`.

## [0.1.4] - 2019-07-22
### Security
- Updated `mocha` to resolve security issue with `lodash`.

## [0.1.3] - 2019-05-25
### Fixed
- Fixed expired date not being compared correctly.

## [0.1.1] - 2019-05-25
### Changed
- Updated scope to belong to panintelligence

## [0.1.0] - 2019-05-25
### Added
- Cookie mock that behaves like `document.cookie`. See [README.md](../README.md)
- Supports get and set behaviour
- Handles all additional properties but only uses `expires` and `max-age`