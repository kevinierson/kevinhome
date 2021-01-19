<template>
	<div>
		<div class="card-preview">
			<ul class="card-list">
				<li class="card"></li>
			</ul>
		</div>

	</div>
</template>

<script>
	export default {
		name: "CardPreview",
		data() {
			return {
				currentDate: new Date()
			}
		}
	}
</script>

<style>
	.card-preview {
		position: relative;
		width: 100%;
		height: 22em;
		padding: 10px;
		background-color: #ceeedf;
	}
	
	.card-preview:hover{
		
	}

</style>
