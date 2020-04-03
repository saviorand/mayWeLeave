# Airtable-integrated listing website

### Integrated with [Airtable](https://airtable.com/)

## Live demo

Find live demo at https://mayweleave.com/

## How to use

### Set up Airtable integration

Sign up an Airtable account. When you have an account go to [this base](https://airtable.com/shrlYuICEwEdAUir3) and click `Copy base` button at the top right corner of the interface

### Set up Airtable API keys

Copy the `.env.example` file to `.env` and fill it with your unique values:

```
AIRTABLE_API_KEY=""
AIRTABLE_BASE_ID=""
AIRTABLE_TABLE_NAME=""
```

Your API key and Base ID are in "Help" -> "API Documentation". 
Example table name is "Destinations" (note this is case-sensitive).

If you want to customize the database refer to [`gatsby-source-airtable` plugin documentation](https://www.gatsbyjs.org/packages/gatsby-source-airtable/).

## Run commands

#### `gatsby develop`

Start the project on your localhost

#### `gatsby build`

Serve a production build to the `./public` folder (this can be served on a static hosting like Netlify or ZEIT)
