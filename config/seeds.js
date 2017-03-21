require('dotenv').config()

var mongoose = require('./database'),
    Api = require('../models/api')

var apis = [
  {
    name: 'Yelp',
    about: "Yelp's Fusion API allows you to get the best local business information and user reviews of over million businesses in 32 countries. This tutorial provides an overview of the capabilities our new API offers, provides instructions of how to authenticate API calls, and walks through a simple scenario using the API.",
    url: 'https://www.yelp.com/developers/documentation/v3/get_started',
    support: true,
    free: false,
    authentication: true,
    deprecated: false,
    tools: 6,
    category: 'Recommendations'
    rating: {
      install: 4,
      readability: 5,
      technicality: 5
    }
  },
  {
    name: 'Spotify',
    about: "Our Web API lets your applications fetch data from the Spotify music catalog and manage user’s playlists and saved music."

    "Based on simple REST principles, our Web API endpoints return metadata in JSON format about artists, albums, and tracks directly from the Spotify catalogue. The API also provides access to user-related data such as playlists and music saved in a ‘Your Music’ library, subject to user’s authorization.",
    url: 'https://developer.spotify.com/web-api/',
    support: true,
    free: false,
    authentication: true,
    deprecated: false,
    tools: 10,
    category: 'Music'
    rating: {
      install: 5,
      readability: 5,
      technicality: 5
    }
  },
  {
    name: 'Uber',
    about: "Increase engagement with your services and earn new revenue from Uber. Available in more than 400 cities, with millions of riders each day, Uber is the smartest way to get around. Quickly get your users moving with an Uber Ride Request button or Deeplink into the Uber app. Embed the entire Uber ride flow in your own app with just a few lines of code using the Ride Request Widget. Want to go deeper? Build a custom integration with the Ride Requests and Client Libraries.",
    url: 'https://developer.uber.com',
    support: true,
    free: false,
    authentication: true,
    deprecated: false,
    tools: 4,
    category: 'Transportation'
    rating: {
      install: 4,
      readability: 3,
      technicality: 5
    }
  },
  {
    name: 'Fitbit',
    about: "Fitbit provides a Web API for accessing data from Fitbit activity trackers, Aria scale, and manually entered logs. Anyone can develop an application to access and modify a Fitbit user's data on their behalf, so long as it complies with Fitbit's API Terms of Use.",
    url: 'https://dev.fitbit.com/',
    support: true,
    free: false,
    authentication: true,
    deprecated: false,
    tools: 9,
    category: 'Fitness'
    rating: {
      install: ,3
      readability: 5,
      technicality: 3
    }
  },
  {
    name: 'Instagram',
    about: "The Instagram API Platform can be used to build non-automated, authentic, high-quality apps and services that: Help individuals share their own content with 3rd party apps. Help brands and advertisers understand, manage their audience and media rights. Help broadcasters and publishers discover content, get digital rights to media, and share media with proper attribution.",
    url: 'https://www.instagram.com/developer/',
    support: true,
    free: false,
    authentication: true,
    deprecated: false,
    tools: 1,
    category: 'Photos'
    rating: {
      install: 4,
      readability: 4,
      technicality: 5
    }
  },
  {
    name: 'YouTube',
    about: "APIs and Tools that let you bring the YouTube experience to your webpage , application, or device.",
    url: 'https://www.youtube.com/yt/dev/api-resources.html',
    support: true,
    free: false,
    authentication: true,
    deprecated: false,
    tools: 1,
    category: 'Video'
    rating: {
      install: 3,
      readability: 4,
      technicality: 5
    }
  },
  {
    name: 'Amazon',
    about: "API exposes Amazon's product data and e-commerce functionality. This allows developers, web site publishers and others to leverage the Amazon Product Discovery features that Amazon uses to power its own business, and potentially make money as an Amazon affiliate. Additionally, the API has features allowing developers to advertise proucts, let users search for Amazon products and help users discover Amazon products.",
    url: 'https://developer.amazon.com/services-and-apis',
    support: true,
    free: false,
    authentication: true,
    deprecated: false,
    tools: 4,
    category: 'Shopping'
    rating: {
      install: 3,
      readability: 4,
      technicality: 4
    }
  },
  {
    name: 'Zillow',
    about: "",
    url: '',
    support: ,
    free: ,
    authentication: ,
    deprecated: ,
    tools: ,
    category: ''
    rating: {
      install: ,
      readability: ,
      technicality:
    }
  },
  {
    name: 'Google Maps',
    about: "",
    url: '',
    support: ,
    free: ,
    authentication: ,
    deprecated: ,
    tools: ,
    category: ''
    rating: {
      install: ,
      readability: ,
      technicality:
    }
  },
  {
    name: 'Etsy',
    about: "",
    url: '',
    support: ,
    free: ,
    authentication: ,
    deprecated: ,
    tools: ,
    category: ''
    rating: {
      install: ,
      readability: ,
      technicality:
    }
  },
  {
    name: 'Weather Channel',
    about: "",
    url: '',
    support: ,
    free: ,
    authentication: ,
    deprecated: ,
    tools: ,
    category: ''
    rating: {
      install: ,
      readability: ,
      technicality:
    }
  },








  //
