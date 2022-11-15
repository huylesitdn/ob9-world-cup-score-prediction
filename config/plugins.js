module.exports = ({env}) => {
  return {
    ckeditor: true,
    'strapi-plugin-populate-deep': {
      config: {
        defaultDepth: 3, // Default is 5
      }
    },
    'users-permissions': {
      config: {
        jwt: {
          expiresIn: '2y',
        },
      },
    },
  }
}