<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */

$MapURL = "style=background-image:url('" . $attributes['MapURL'] . "')"

?>
<div <?php echo get_block_wrapper_attributes(); ?>>
	<div class="LocationPannel" <?php echo $MapURL ?> >
		<h4 class="wp-block-heading" ><?php echo($attributes['Address']) ?></h4>
		<h3 class="wp-block-heading" ><?php echo($attributes['LocationName']) ?></h3>
		<p><?php echo($attributes['YearStart']) ?></p>
		<span class="rule"></span>
		<p><?php echo($attributes['YearEnd']) ?></p>
	</div>
	<div class="LocationName">
		<h3 class="wp-block-heading" ><?php echo($attributes['LocationName']) ?></h3>
		<p><?php echo($attributes['Address']) ?></p>
	</div>
	<div class="Positions wp-block-group">
		<?php echo $content ?>
		<div class="LocationMap" <?php echo $MapURL ?>></div>
	</div>
	<p class="Overview"> <?php echo($attributes['Overview']) ?> </p>
</div>
