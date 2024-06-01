export const AWESOME_LBRY = "https://github.com/LBRYFoundation/Awesome-LBRY";
export const EDIT_PAGE = "Edit this page";
export const REPOSITORY = "LBRYFoundation/lbry-tech";
export const GITHUB_ORG = "LBRYFoundation";

export const features = [
    {
      description: "Get your head around LBRY with 3 interactive examples.",
      destination: "/playground",
      label: "Party in the Playground",
      title: "Learn By Trying"
    },
    {
      description: "Dig into the formal specification of the LBRY protocol.",
      destination: "/spec",
      label: "Study the Spec",
      title: "Learn By Reading"
    }
]

export const resources = [
  {
    title: "Overview",
    href: "/overview",
    description: "What if anyone in the world could publish a piece of digital content, anyone else in the world could access it, for free or for payment, and that entire system worked end-to-end without any centralized authority or point of control?"
  }, {
    title: "Resources",
    href: "/resources",
    description: "Looking for API documentation, formal specifications, how-tos, resources, or the meaning of life? Find at least some of these things in the resources area."
  }, {
    title: "Specifications",
    href: "/spec",
    description: "Dig into the formal specification of the LBRY protocol."
  }
]

export const contributions = [
  {
    url: "/assets/svg/code.svg",
    title: "Coding"
  }, {
    url: "/assets/svg/wand-magic-sparkles.svg",
    title: "Creating"
  }, {
    url: "/assets/svg/keyboard.svg",
    title: "Writing"
  }, {
    url: "/assets/svg/comments.svg",
    title: "Testing"
  }
]

export const featured = [
  {
    src: "https://codeberg.org/MorsMortium/LBRY-GTK/media/branch/CRewrite/share/icons/hicolor/scalable/apps/lbry-gtk.svg",
    href: "https://codeberg.org/MorsMortium/LBRY-GTK",
    title: "LBRY GTK",
    description: "LBRY-GTK as the name suggests is a GTK client to the LBRY network."
  },
  {
    src: "https://github.com/alojzjakob/LBRYworm/raw/main/lbryworm/css/lbryworm-logo.png",
    href: "https://www.lbryworm.com/",
    title: "Bookworm",
    description: "LBRY Worm is a search engine that surfaces books from the LBRY blockchain."
  },
  {
    src: "https://user-images.githubusercontent.com/14793624/126025087-08fae6dd-e9d3-4eed-9f3a-aa15661553e3.png",
    href: "https://github.com/Hound-fm/podcatcher",
    title: "Podcatcher",
    description: "Audio media crawler for lbry."
  }
]

export const meta = {
  title: "LBRY Tech",
  color: "#27E4EB"
}

export const REDIRECTS = {
  // "/api/blockchain": "/api/lbrycrd",
  // "/api/lbry": "/api/sdk",
  // "/api/protocol": "/api/sdk",
  // "/play": "/playground",
  // "/repository-standards": "/resources/repository-standards",
  // "/resources/lbry-claimtrie": "/spec#claimtrie",
  // "/resources/schema": "/spec#metadata",
  // "/resources/signing-claim": "/resources/claim-signing",
  // "/resources/uri": "/spec#urls",
  // "/resources/video-lbryandroid": "https://odysee.com/video-2018-10-15053403:e",
  // "/resources/video-lbrycrd": "https://odysee.com/intro-to-LBRYcrd:5",
  // "/resources/video-lbrydesktop": "https://odysee.com/LBRYAppDesign:7",
  // "/resources/video-lbrysdk": "https://odysee.com/@lbrytech:1/lbrynet-dev-setup:9",
  // "/specification": "/spec",
  // "/tour": "/playground",
  // "/whitepaper": "/spec"
}

export const API_REPOS = {
  "lbry-sdk": {
    "api": "docs/api.json",
    "description":  "The LBRY SDK for building decentralized, censorship resistant, monetized, digital content apps.",
    "playground": true
  },
  "lbrycrd": {
    "api": "contrib/devtools/generated/api_v1.json",
    "description": "The blockchain that provides the digital content namespace for the LBRY protocol"
  }
}