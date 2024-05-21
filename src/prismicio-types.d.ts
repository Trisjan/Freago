// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from '@prismicio/client';

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

/**
 * Item in *Navigation → Links*
 */
export interface NavigationDocumentDataLinksItem {
	/**
	 * Label field in *Navigation → Links*
	 *
	 * - **Field Type**: Title
	 * - **Placeholder**: Optional - Label for the link
	 * - **API ID Path**: navigation.links[].label
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	label: prismic.TitleField;

	/**
	 * Link field in *Navigation → Links*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: Link for navigation item
	 * - **API ID Path**: navigation.links[].link
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	link: prismic.LinkField;
}

/**
 * Content for Navigation documents
 */
interface NavigationDocumentData {
	/**
	 * Links field in *Navigation*
	 *
	 * - **Field Type**: Group
	 * - **Placeholder**: *None*
	 * - **API ID Path**: navigation.links[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#group
	 */
	links: prismic.GroupField<Simplify<NavigationDocumentDataLinksItem>>;
}

/**
 * Navigation document from Prismic
 *
 * - **API ID**: `navigation`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type NavigationDocument<Lang extends string = string> = prismic.PrismicDocumentWithoutUID<
	Simplify<NavigationDocumentData>,
	'navigation',
	Lang
>;

type PageDocumentDataSlicesSlice =
	| HeroSlice
	| QuoteSlice
	| TextSlice
	| ImageSlice
	| ImageCardsSlice
	| TextWithImageSlice;

/**
 * Content for Page documents
 */
interface PageDocumentData {
	/**
	 * Title field in *Page*
	 *
	 * - **Field Type**: Title
	 * - **Placeholder**: *None*
	 * - **API ID Path**: page.title
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	title: prismic.TitleField;

	/**
	 * Parent field in *Page*
	 *
	 * - **Field Type**: Content Relationship
	 * - **Placeholder**: *None*
	 * - **API ID Path**: page.parent
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	parent: prismic.ContentRelationshipField<'page'>;

	/**
	 * Slice Zone field in *Page*
	 *
	 * - **Field Type**: Slice Zone
	 * - **Placeholder**: *None*
	 * - **API ID Path**: page.slices[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#slices
	 */
	slices: prismic.SliceZone<PageDocumentDataSlicesSlice> /**
	 * Meta Title field in *Page*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: A title of the page used for social media and search engines
	 * - **API ID Path**: page.meta_title
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */;
	meta_title: prismic.KeyTextField;

	/**
	 * Meta Description field in *Page*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: A brief summary of the page
	 * - **API ID Path**: page.meta_description
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	meta_description: prismic.KeyTextField;

	/**
	 * Meta Image field in *Page*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: page.meta_image
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	meta_image: prismic.ImageField<never>;
}

/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> = prismic.PrismicDocumentWithUID<
	Simplify<PageDocumentData>,
	'page',
	Lang
>;

/**
 * Content for Settings documents
 */
interface SettingsDocumentData {
	/**
	 * Site Title field in *Settings*
	 *
	 * - **Field Type**: Title
	 * - **Placeholder**: Title of the site
	 * - **API ID Path**: settings.siteTitle
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	siteTitle: prismic.TitleField;
}

/**
 * Settings document from Prismic
 *
 * - **API ID**: `settings`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SettingsDocument<Lang extends string = string> = prismic.PrismicDocumentWithoutUID<
	Simplify<SettingsDocumentData>,
	'settings',
	Lang
>;

export type AllDocumentTypes = NavigationDocument | PageDocument | SettingsDocument;

/**
 * Primary content in *Bulletpoints → Primary*
 */
export interface BulletpointsSliceDefaultPrimary {
	/**
	 * Title field in *Bulletpoints → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: bulletpoints.primary.title
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	title: prismic.RichTextField;
}

/**
 * Primary content in *Bulletpoints → Items*
 */
export interface BulletpointsSliceDefaultItem {
	/**
	 * Points field in *Bulletpoints → Items*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: bulletpoints.items[].points
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	points: prismic.RichTextField;
}

/**
 * Default variation for Bulletpoints Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BulletpointsSliceDefault = prismic.SharedSliceVariation<
	'default',
	Simplify<BulletpointsSliceDefaultPrimary>,
	Simplify<BulletpointsSliceDefaultItem>
>;

/**
 * Slice variation for *Bulletpoints*
 */
type BulletpointsSliceVariation = BulletpointsSliceDefault;

/**
 * Bulletpoints Shared Slice
 *
 * - **API ID**: `bulletpoints`
 * - **Description**: Bulletpoints
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BulletpointsSlice = prismic.SharedSlice<'bulletpoints', BulletpointsSliceVariation>;

/**
 * Primary content in *Hero → Primary*
 */
export interface HeroSliceDefaultPrimary {
	/**
	 * Text field in *Hero → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: hero.primary.text
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	text: prismic.RichTextField;

	/**
	 * Button Link field in *Hero → Primary*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: *None*
	 * - **API ID Path**: hero.primary.buttonLink
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	buttonLink: prismic.LinkField;

	/**
	 * Button Text field in *Hero → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: hero.primary.buttonText
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	buttonText: prismic.KeyTextField;

	/**
	 * Background Image field in *Hero → Primary*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: hero.primary.backgroundImage
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	backgroundImage: prismic.ImageField<never>;
}

/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
	'default',
	Simplify<HeroSliceDefaultPrimary>,
	never
>;

/**
 * Primary content in *Hero → Primary*
 */
export interface HeroSliceHeroDefaultPrimary {
	/**
	 * Text field in *Hero → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: hero.primary.text
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	text: prismic.RichTextField;

	/**
	 * Background Image field in *Hero → Primary*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: hero.primary.backgroundImage
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	backgroundImage: prismic.ImageField<never>;
}

/**
 * Hero Default variation for Hero Slice
 *
 * - **API ID**: `heroDefault`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceHeroDefault = prismic.SharedSliceVariation<
	'heroDefault',
	Simplify<HeroSliceHeroDefaultPrimary>,
	never
>;

/**
 * Slice variation for *Hero*
 */
type HeroSliceVariation = HeroSliceDefault | HeroSliceHeroDefault;

/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSlice = prismic.SharedSlice<'hero', HeroSliceVariation>;

/**
 * Primary content in *Image → Primary*
 */
export interface ImageSliceDefaultPrimary {
	/**
	 * Image field in *Image → Primary*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: image.primary.image
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	image: prismic.ImageField<never>;
}

/**
 * Default variation for Image Slice
 *
 * - **API ID**: `default`
 * - **Description**: Image
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageSliceDefault = prismic.SharedSliceVariation<
	'default',
	Simplify<ImageSliceDefaultPrimary>,
	never
>;

/**
 * Primary content in *Image → Primary*
 */
export interface ImageSliceBannerPrimary {
	/**
	 * Image field in *Image → Primary*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: image.primary.image
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	image: prismic.ImageField<never>;
}

/**
 * Banner variation for Image Slice
 *
 * - **API ID**: `banner`
 * - **Description**: Image
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageSliceBanner = prismic.SharedSliceVariation<
	'banner',
	Simplify<ImageSliceBannerPrimary>,
	never
>;

/**
 * Slice variation for *Image*
 */
type ImageSliceVariation = ImageSliceDefault | ImageSliceBanner;

/**
 * Image Shared Slice
 *
 * - **API ID**: `image`
 * - **Description**: Image
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageSlice = prismic.SharedSlice<'image', ImageSliceVariation>;

/**
 * Primary content in *ImageCards → Primary*
 */
export interface ImageCardsSliceDefaultPrimary {
	/**
	 * Heading field in *ImageCards → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: image_cards.primary.heading
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	heading: prismic.RichTextField;
}

/**
 * Primary content in *ImageCards → Items*
 */
export interface ImageCardsSliceDefaultItem {
	/**
	 * Image field in *ImageCards → Items*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: image_cards.items[].image
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	image: prismic.ImageField<never>;

	/**
	 * Text field in *ImageCards → Items*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: image_cards.items[].text
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	text: prismic.RichTextField;

	/**
	 * Button Link field in *ImageCards → Items*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: *None*
	 * - **API ID Path**: image_cards.items[].buttonLink
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	buttonLink: prismic.LinkField;

	/**
	 * Button Text field in *ImageCards → Items*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: image_cards.items[].buttonText
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	buttonText: prismic.KeyTextField;
}

/**
 * Default variation for ImageCards Slice
 *
 * - **API ID**: `default`
 * - **Description**: ImageCards
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageCardsSliceDefault = prismic.SharedSliceVariation<
	'default',
	Simplify<ImageCardsSliceDefaultPrimary>,
	Simplify<ImageCardsSliceDefaultItem>
>;

/**
 * Slice variation for *ImageCards*
 */
type ImageCardsSliceVariation = ImageCardsSliceDefault;

/**
 * ImageCards Shared Slice
 *
 * - **API ID**: `image_cards`
 * - **Description**: ImageCards
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageCardsSlice = prismic.SharedSlice<'image_cards', ImageCardsSliceVariation>;

/**
 * Primary content in *Quote → Primary*
 */
export interface QuoteSliceDefaultPrimary {
	/**
	 * Quote field in *Quote → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: quote.primary.quote
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	quote: prismic.RichTextField;

	/**
	 * Source field in *Quote → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: quote.primary.source
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	source: prismic.KeyTextField;
}

/**
 * Default variation for Quote Slice
 *
 * - **API ID**: `default`
 * - **Description**: Quote
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type QuoteSliceDefault = prismic.SharedSliceVariation<
	'default',
	Simplify<QuoteSliceDefaultPrimary>,
	never
>;

/**
 * Slice variation for *Quote*
 */
type QuoteSliceVariation = QuoteSliceDefault;

/**
 * Quote Shared Slice
 *
 * - **API ID**: `quote`
 * - **Description**: Quote
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type QuoteSlice = prismic.SharedSlice<'quote', QuoteSliceVariation>;

/**
 * Primary content in *Text → Primary*
 */
export interface TextSliceDefaultPrimary {
	/**
	 * Text field in *Text → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: text.primary.text
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	text: prismic.RichTextField;
}

/**
 * Default variation for Text Slice
 *
 * - **API ID**: `default`
 * - **Description**: Text
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextSliceDefault = prismic.SharedSliceVariation<
	'default',
	Simplify<TextSliceDefaultPrimary>,
	never
>;

/**
 * Primary content in *Text → Primary*
 */
export interface TextSliceTwoColumnsPrimary {
	/**
	 * Text field in *Text → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: text.primary.text
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	text: prismic.RichTextField;
}

/**
 * Two Columns variation for Text Slice
 *
 * - **API ID**: `twoColumns`
 * - **Description**: Text
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextSliceTwoColumns = prismic.SharedSliceVariation<
	'twoColumns',
	Simplify<TextSliceTwoColumnsPrimary>,
	never
>;

/**
 * Slice variation for *Text*
 */
type TextSliceVariation = TextSliceDefault | TextSliceTwoColumns;

/**
 * Text Shared Slice
 *
 * - **API ID**: `text`
 * - **Description**: Text
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextSlice = prismic.SharedSlice<'text', TextSliceVariation>;

/**
 * Primary content in *TextWithImage → Primary*
 */
export interface TextWithImageSliceDefaultPrimary {
	/**
	 * Text field in *TextWithImage → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: text_with_image.primary.text
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	text: prismic.RichTextField;

	/**
	 * Image field in *TextWithImage → Primary*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: text_with_image.primary.image
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	image: prismic.ImageField<never>;
}

/**
 * Default variation for TextWithImage Slice
 *
 * - **API ID**: `default`
 * - **Description**: TextWithImage
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextWithImageSliceDefault = prismic.SharedSliceVariation<
	'default',
	Simplify<TextWithImageSliceDefaultPrimary>,
	never
>;

/**
 * Primary content in *TextWithImage → Primary*
 */
export interface TextWithImageSliceWithButtonPrimary {
	/**
	 * Text field in *TextWithImage → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: text_with_image.primary.text
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	text: prismic.RichTextField;

	/**
	 * Button Link field in *TextWithImage → Primary*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: *None*
	 * - **API ID Path**: text_with_image.primary.buttonLink
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	buttonLink: prismic.LinkField;

	/**
	 * Button Text field in *TextWithImage → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: text_with_image.primary.buttonText
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	buttonText: prismic.KeyTextField;

	/**
	 * Image field in *TextWithImage → Primary*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: text_with_image.primary.image
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	image: prismic.ImageField<never>;
}

/**
 * With Button variation for TextWithImage Slice
 *
 * - **API ID**: `withButton`
 * - **Description**: TextWithImage
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextWithImageSliceWithButton = prismic.SharedSliceVariation<
	'withButton',
	Simplify<TextWithImageSliceWithButtonPrimary>,
	never
>;

/**
 * Slice variation for *TextWithImage*
 */
type TextWithImageSliceVariation = TextWithImageSliceDefault | TextWithImageSliceWithButton;

/**
 * TextWithImage Shared Slice
 *
 * - **API ID**: `text_with_image`
 * - **Description**: TextWithImage
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextWithImageSlice = prismic.SharedSlice<
	'text_with_image',
	TextWithImageSliceVariation
>;

/**
 * Primary content in *ThreeGridLayout → Primary*
 */
export interface ThreeGridLayoutSliceDefaultPrimary {
	/**
	 * top left field in *ThreeGridLayout → Primary*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: *None*
	 * - **API ID Path**: three_grid_layout.primary.top_left
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	top_left: prismic.LinkField;

	/**
	 * top left text field in *ThreeGridLayout → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: three_grid_layout.primary.top_left_text
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	top_left_text: prismic.RichTextField;

	/**
	 * top right field in *ThreeGridLayout → Primary*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: *None*
	 * - **API ID Path**: three_grid_layout.primary.top_right
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	top_right: prismic.LinkField;

	/**
	 * top right text field in *ThreeGridLayout → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: three_grid_layout.primary.top_right_text
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	top_right_text: prismic.RichTextField;

	/**
	 * bottom field in *ThreeGridLayout → Primary*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: *None*
	 * - **API ID Path**: three_grid_layout.primary.bottom
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	bottom: prismic.LinkField;

	/**
	 * bottom text field in *ThreeGridLayout → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: three_grid_layout.primary.bottom_text
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	bottom_text: prismic.RichTextField;
}

/**
 * Default variation for ThreeGridLayout Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ThreeGridLayoutSliceDefault = prismic.SharedSliceVariation<
	'default',
	Simplify<ThreeGridLayoutSliceDefaultPrimary>,
	never
>;

/**
 * Slice variation for *ThreeGridLayout*
 */
type ThreeGridLayoutSliceVariation = ThreeGridLayoutSliceDefault;

/**
 * ThreeGridLayout Shared Slice
 *
 * - **API ID**: `three_grid_layout`
 * - **Description**: ThreeGridLayout
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ThreeGridLayoutSlice = prismic.SharedSlice<
	'three_grid_layout',
	ThreeGridLayoutSliceVariation
>;

declare module '@prismicio/client' {
	interface CreateClient {
		(
			repositoryNameOrEndpoint: string,
			options?: prismic.ClientConfig
		): prismic.Client<AllDocumentTypes>;
	}

	namespace Content {
		export type {
			NavigationDocument,
			NavigationDocumentData,
			NavigationDocumentDataLinksItem,
			PageDocument,
			PageDocumentData,
			PageDocumentDataSlicesSlice,
			SettingsDocument,
			SettingsDocumentData,
			AllDocumentTypes,
			BulletpointsSlice,
			BulletpointsSliceDefaultPrimary,
			BulletpointsSliceDefaultItem,
			BulletpointsSliceVariation,
			BulletpointsSliceDefault,
			HeroSlice,
			HeroSliceDefaultPrimary,
			HeroSliceHeroDefaultPrimary,
			HeroSliceVariation,
			HeroSliceDefault,
			HeroSliceHeroDefault,
			ImageSlice,
			ImageSliceDefaultPrimary,
			ImageSliceBannerPrimary,
			ImageSliceVariation,
			ImageSliceDefault,
			ImageSliceBanner,
			ImageCardsSlice,
			ImageCardsSliceDefaultPrimary,
			ImageCardsSliceDefaultItem,
			ImageCardsSliceVariation,
			ImageCardsSliceDefault,
			QuoteSlice,
			QuoteSliceDefaultPrimary,
			QuoteSliceVariation,
			QuoteSliceDefault,
			TextSlice,
			TextSliceDefaultPrimary,
			TextSliceTwoColumnsPrimary,
			TextSliceVariation,
			TextSliceDefault,
			TextSliceTwoColumns,
			TextWithImageSlice,
			TextWithImageSliceDefaultPrimary,
			TextWithImageSliceWithButtonPrimary,
			TextWithImageSliceVariation,
			TextWithImageSliceDefault,
			TextWithImageSliceWithButton,
			ThreeGridLayoutSlice,
			ThreeGridLayoutSliceDefaultPrimary,
			ThreeGridLayoutSliceVariation,
			ThreeGridLayoutSliceDefault
		};
	}
}
