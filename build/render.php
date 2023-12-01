<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
?>
<p <?php echo get_block_wrapper_attributes(); ?>>
	<?php echo($attributes['LocationName']) ?><br>	
	<?php echo($attributes['Address']) ?><br>	
	<?php echo($attributes['YearStart']) ?><br>	
	<?php echo($attributes['YearEnd']) ?><br>	
	<?php echo($attributes['Overview']) ?>
</p>
