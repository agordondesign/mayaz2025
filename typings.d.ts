//declare module 'use-snipcart';

type Base = {
	_createdAt: string;
	_id: string;
	_rev: string;
	_type: string;
	_updatedAt: string;
};

interface Product extends Base {
	[x: string]: ReactNode;
	title: Title;
	categories: Category[];
	description: Block[];
	shortDescription: Block[];
	productImage: Image;
	slug: Slug;
	title: string;
	price: string;
}

interface Collection extends Base {
	[x: string]: ReactNode;
	title: Title;
	name: Name;
	BannerTitle: BannerTitle;
	banner: Image;
	description: Description;
	primaryPhoto: Product;
	secondaryPhoto: Product;
	slug: Slug;
	sortableCategories: Category[];
}

interface Page extends Base {
	[x: string]: ReactNode;
	title: Title;
	name: Name;
	slug: Slug;
}
