const withCss = require('@zeit/next-css');
const withFonts = require('next-fonts');

module.exports = withFonts(
  withCss({
    webpack5: false,
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.target = 'electron-renderer';
      }

      if (isServer) {
        const antStyles = /antd\/.*?\/style\/css.*?/;
        const origExternals = [...config.externals];
        config.externals = [ // eslint-disable-line
          (context, request, callback) => { // eslint-disable-line
            if (request.match(antStyles)) return callback();
            if (typeof origExternals[0] === 'function') {
              origExternals[0](context, request, callback);
            } else {
              callback();
            }
          },
          ...(typeof origExternals[0] === 'function' ? [] : origExternals),
        ];

        config.module.rules.unshift({
          test: antStyles,
          use: 'null-loader',
        });
      }

      return config
    },
    async rewrites() {
      return [
        {
          source: '/:path*',
          destination: `http://localhost:5000/:path*`
        }
      ];
    },
  }));