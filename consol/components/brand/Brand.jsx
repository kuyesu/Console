import React from 'react';
import { google, slack, atlassian, dropbox, shopify } from './imports';
import { Image } from "@nextui-org/react";
const Brand = () => (
  <div className="gpt3__brand section__padding">
    <div>
      <Image src="/assets/google.png" />
    </div>
    <div>
      <Image src="/assets/slack.png" />
    </div>
    <div>
      <Image src="/assets/atlassian.png" />
    </div>
    <div>
      <Image src="/assets/dropbox.png" />
    </div>
    <div>
      <Image src="/assets/shopify.png" />
    </div>
  </div>
);

export default Brand;
