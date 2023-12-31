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
import { useBlockProps, RichText, InnerBlocks, InspectorControls} from '@wordpress/block-editor';
import { Panel, PanelBody, PanelRow, TextControl, ColorPalette } from '@wordpress/components';
import { useSelect } from '@wordpress/data';

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
		attributes: { LocationName, Address, YearStart, YearEnd, Overview, MapURL, AccentColor, AccentTextColor },
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
	const onChangeMapURL = ( newMapURL ) => {
		setAttributes( { MapURL: newMapURL } );
	};
	const onChangeAccentColor = ( newAccentColor ) => {
		setAttributes( { AccentColor: newAccentColor } );
	};
	const onChangeAccentTextColor = ( newAccentTextColor ) => {
		setAttributes( { AccentTextColor: newAccentTextColor } );
	};

	const MapStyle = {
		backgroundImage: `url(${MapURL})`
	  };

	const colors = useSelect('core/block-editor').getSettings().colors;

	return (
		<div>
			<InspectorControls>
				<PanelBody title={ __( 'Settings') }>
					<PanelRow>
						<TextControl
						label="Map Url"
						onChange={onChangeMapURL}
						value={MapURL}
						/>
					</PanelRow>
					<PanelRow>
						<ColorPalette
							label="Map Color"
							colors={colors}
							value={AccentColor}
							onChange={onChangeAccentColor}
						/>
					</PanelRow>
					<PanelRow>
						<ColorPalette
							label="Map Text Color"
							colors={colors}
							value={AccentTextColor}
							onChange={onChangeAccentTextColor}
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
			<div { ...useBlockProps() }>
				<div class="LocationPannel" style={MapStyle} >
					<RichText
						{...blockProps}
						tagName='p'
						onChange={onChangeYearStart}
						value={YearStart}
					/>
					<span class="rule"></span>
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
					<div class="LocationMap" style={MapStyle}></div>
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
