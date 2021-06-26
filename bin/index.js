var soljsonSources = [];
var soljsonReleases = {
  "0.4.24": "soljson_v0.4.24.js",
  "0.4.25": "soljson_v0.4.25.js",
  "0.5.4": "soljson_v0.5.4.js",
  "0.5.8": "soljson_v0.5.8.js",
  "0.5.9": "soljson_v0.5.9.js",
  "0.5.10": "soljson_v0.5.10.js",
  "0.5.12": "soljson_v0.5.12.js",
  "0.5.13": "soljson_v0.5.13.js",
  "0.5.14": "soljson_v0.5.14.js",
  "0.5.15": "soljson_v0.5.15.js",
  "0.6.0": "soljson_v0.6.0.js",
};

if (typeof module !== "undefined")
  module.exports = {
    allVersions: soljsonSources,
    releases: soljsonReleases,
  };
