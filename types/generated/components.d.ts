import type { Schema, Struct } from '@strapi/strapi';

export interface LayoutCard extends Struct.ComponentSchema {
  collectionName: 'components_layout_cards';
  info: {
    displayName: 'card';
    icon: 'emotionHappy';
  };
  attributes: {
    description: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    rating: Schema.Attribute.Decimal;
  };
}

export interface LayoutDressStyleCard extends Struct.ComponentSchema {
  collectionName: 'components_layout_dress_style_cards';
  info: {
    displayName: 'dressStyleCard';
    icon: 'command';
  };
  attributes: {
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface LayoutDressZone extends Struct.ComponentSchema {
  collectionName: 'components_layout_dress_zones';
  info: {
    displayName: 'DressZone';
    icon: 'dashboard';
  };
  attributes: {
    box: Schema.Attribute.Component<'layout.dress-style-card', true>;
    heading: Schema.Attribute.Component<'shared.heading', false>;
  };
}

export interface LayoutHappyCustomer extends Struct.ComponentSchema {
  collectionName: 'components_layout_happy_customers';
  info: {
    displayName: 'happyCustomer';
    icon: 'emotionHappy';
  };
  attributes: {
    card: Schema.Attribute.Component<'layout.card', true>;
    heading: Schema.Attribute.Component<'shared.heading', false>;
  };
}

export interface LayoutHero extends Struct.ComponentSchema {
  collectionName: 'components_layout_heroes';
  info: {
    displayName: 'hero';
    icon: 'archive';
  };
  attributes: {
    brandsCount: Schema.Attribute.String;
    brandsLabel: Schema.Attribute.String;
    cover: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    customersCount: Schema.Attribute.String;
    customersLabel: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    link: Schema.Attribute.Component<'layout.link', true>;
    OurClient: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    productsCount: Schema.Attribute.String;
    productsLabel: Schema.Attribute.String;
    subHeading: Schema.Attribute.String;
  };
}

export interface LayoutLink extends Struct.ComponentSchema {
  collectionName: 'components_layout_links';
  info: {
    displayName: 'link';
    icon: 'arrowRight';
  };
  attributes: {
    label: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface LayoutNewArrival extends Struct.ComponentSchema {
  collectionName: 'components_layout_new_arrivals';
  info: {
    displayName: 'card';
    icon: 'dashboard';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files'>;
    price: Schema.Attribute.Integer;
    rating: Schema.Attribute.Decimal;
    title: Schema.Attribute.String;
  };
}

export interface LayoutNewStock extends Struct.ComponentSchema {
  collectionName: 'components_layout_new_stocks';
  info: {
    displayName: 'new_stock';
    icon: 'bell';
  };
  attributes: {
    card: Schema.Attribute.Component<'layout.new-arrival', true>;
    heading: Schema.Attribute.Component<'shared.heading', false>;
  };
}

export interface LayoutNewsLetter extends Struct.ComponentSchema {
  collectionName: 'components_layout_news_letters';
  info: {
    displayName: 'newsLetter';
    icon: 'envelop';
  };
  attributes: {
    button: Schema.Attribute.Component<'shared.button', false>;
    heading: Schema.Attribute.Component<'shared.heading', false>;
  };
}

export interface LayoutTopSelling extends Struct.ComponentSchema {
  collectionName: 'components_layout_top_sellings';
  info: {
    displayName: 'topSelling';
  };
  attributes: {
    card: Schema.Attribute.Component<'layout.new-arrival', true>;
    heading: Schema.Attribute.Component<'shared.heading', false>;
  };
}

export interface SharedButton extends Struct.ComponentSchema {
  collectionName: 'components_shared_buttons';
  info: {
    displayName: 'Button';
    icon: 'priceTag';
  };
  attributes: {
    Button: Schema.Attribute.String;
  };
}

export interface SharedHeading extends Struct.ComponentSchema {
  collectionName: 'components_shared_headings';
  info: {
    displayName: 'Heading';
    icon: 'bold';
  };
  attributes: {
    name: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {};
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSections extends Struct.ComponentSchema {
  collectionName: 'components_shared_sections';
  info: {
    displayName: 'Sections';
  };
  attributes: {};
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'layout.card': LayoutCard;
      'layout.dress-style-card': LayoutDressStyleCard;
      'layout.dress-zone': LayoutDressZone;
      'layout.happy-customer': LayoutHappyCustomer;
      'layout.hero': LayoutHero;
      'layout.link': LayoutLink;
      'layout.new-arrival': LayoutNewArrival;
      'layout.new-stock': LayoutNewStock;
      'layout.news-letter': LayoutNewsLetter;
      'layout.top-selling': LayoutTopSelling;
      'shared.button': SharedButton;
      'shared.heading': SharedHeading;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.sections': SharedSections;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
