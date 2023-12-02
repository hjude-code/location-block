<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
?>
<div <?php echo get_block_wrapper_attributes(); ?>>
	<div class="LocationPannel">
		<p><?php echo($attributes['YearStart']) ?></p>
		<p><?php echo($attributes['YearEnd']) ?></p>
	</div>
	<div class="LocationName">
		<p><?php echo($attributes['LocationName']) ?></p>
		<p><?php echo($attributes['Address']) ?></p>
	</div>
	<div class="Positions">
		<?php echo $content ?>
	</div>
	<div class="Overview">
		<?php echo($attributes['Overview']) ?>
	</div>
</div>
