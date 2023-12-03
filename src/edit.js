/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText, InnerBlocks} from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit( props) {

	const {
		attributes: { LocationName, Address, YearStart, YearEnd, Overview },
		setAttributes,
		className,
	} = props;

	const blockProps = useBlockProps();

	const onChangeLocation = ( newLocationName ) => {
		setAttributes( { LocationName: newLocationName } );
	};
	const onChangeAddress = ( newAddress ) => {
		setAttributes( { Address: newAddress } );
	};
	const onChangeYearStart = ( newYearStart ) => {
		setAttributes( { YearStart: newYearStart } );
	};
	const onChangeYearEnd = ( newYearEnd ) => {
		setAttributes( { YearEnd: newYearEnd } );
	};
	const onChangeOverview = ( newOverview ) => {
		setAttributes( { Overview: newOverview } );
	};

	return (
		<div>
			<div { ...useBlockProps() }>
				<div class="LocationPannel">
					<RichText
						{...blockProps}
						tagName='p'
						onChange={onChangeYearStart}
						value={YearStart}
					/>
					<span class="vr"></span>
					<RichText
						{...blockProps}
						tagName='p'
						onChange={onChangeYearEnd}
						value={YearEnd}
					/>
				</div>
				<div class="LocationName">
					<RichText 
						{...blockProps}
						tagName='h3'
						onChange={onChangeLocation}
						value={LocationName}
					/>
					<RichText
					{...blockProps}
					tagName='p'
					onChange={onChangeAddress}
					value={Address}
					/>
				</div>
				<div class="Positions">
					<InnerBlocks/>
				</div>
				<div class="Overview">
					<RichText
						{...blockProps}
						tagName='p'
						onChange={onChangeOverview}
						value={Overview}
					/>
				</div>
				
				
			</div>
		</div>
	);
}
