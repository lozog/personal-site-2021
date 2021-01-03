# Liam Ozog Personal Site

This is the source code for Liam Ozog's personal site. Built using React, hosted with Netlify.

## Run
```
yarn && yarn start
```
or
```
yarn && netlify dev
```

## Build & Deploy
```
yarn build
netlify deploy --prod
```

## Email Contact Form
The contact form triggers a [Netlify function](https://docs.netlify.com/functions/overview/) on the `form-submission` event. From there, [Mailgun](mailgun.com) is used to send the email to me. This requires several environment variables to be set.
