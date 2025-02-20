import type { StructureResolver } from 'sanity/structure';
import { LiaStoreAltSolid } from 'react-icons/lia';
import { HiOutlineShoppingCart } from 'react-icons/hi2';
import { AiOutlineTags } from 'react-icons/ai';
import { RxCube } from 'react-icons/rx';
import { RxColorWheel } from 'react-icons/rx';
import { RxRulerSquare } from 'react-icons/rx';
import { RxScissors } from 'react-icons/rx';
import { RxDrawingPin } from 'react-icons/rx';
import { RxGear } from 'react-icons/rx';
import { RxCopy } from 'react-icons/rx';

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
	S.list()
		.title('Site Content')
		.items([
			S.divider(),
			S.listItem()
				.title('Home Page')
				.icon(LiaStoreAltSolid)
				.child(
					S.editor()
						.id('landingPage')
						.schemaType('landingPage')
						.documentId('homePage')
						.title('Home Page')
				),
			S.listItem()
				.title('Site Pages')
				.icon(RxCopy)
				.child(
					S.documentTypeList('page')
						.title('Pages')
						.menuItems(S.documentTypeList('page').getMenuItems())
				),
			S.divider(),
			S.listItem()
				.title('Collections')
				.icon(RxCube)
				.child(
					S.documentTypeList('collection')
						.title('Collections')
						.menuItems(S.documentTypeList('collection').getMenuItems())
				),
			S.listItem()
				.title('Products')
				.icon(HiOutlineShoppingCart)
				.child(
					S.documentTypeList('product')
						.title('Products')
						.menuItems(S.documentTypeList('product').getMenuItems())
				),
			S.listItem()
				.title('Product Sets')
				.icon(AiOutlineTags)
				.child(
					S.documentTypeList('productSet')
						.title('Product Sets')
						.menuItems(S.documentTypeList('productSet').getMenuItems())
				),
			S.divider(),
			S.listItem()
				.title('Colors')
				.icon(RxColorWheel)
				.child(
					S.documentTypeList('swatch')
						.title('Color')
						.menuItems(S.documentTypeList('swatch').getMenuItems())
				),
			S.listItem()
				.title('Sizes')
				.icon(RxRulerSquare)
				.child(
					S.documentTypeList('size')
						.title('Size')
						.menuItems(S.documentTypeList('size').getMenuItems())
				),
			S.listItem()
				.title('Fabrics')
				.icon(RxScissors)
				.child(
					S.documentTypeList('fabrics')
						.title('Product Sets')
						.menuItems(S.documentTypeList('fabrics').getMenuItems())
				),
			S.listItem()
				.title('Made In')
				.icon(RxDrawingPin)
				.child(
					S.documentTypeList('madeIn')
						.title('Locations')
						.menuItems(S.documentTypeList('madeIn').getMenuItems())
				),
			S.divider(),
			S.listItem()
				.title('Site Settings')
				.icon(RxGear)
				.child(
					S.editor()
						.id('siteSettings')
						.schemaType('siteSettings')
						.documentId('siteSettings')
						.title('Settings')
				),
			S.divider(),
			...S.documentTypeListItems().filter(
				(item) =>
					item.getId() &&
					![
						'siteSettings',
						'post',
						'category',
						'author',
						'header',
						'collection',
						'product',
						'productSet',
						'page',
						'set',
						'variantSize',
						'swatch',
						'size',
						'fabrics',
						'madeIn',
						'landingPage',
					].includes(item.getId() ?? '')
			),
		]);
