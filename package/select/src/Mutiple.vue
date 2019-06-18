<template>
	<div class="vs-select-mutiple" tabindex="0" @focus="focus" @blur="blur">
		<select name="" class="vs-hidden"></select>
		<div class="form-control">
			aaaaaaaaaaaaaaaaaaaaaaaaa
		</div>
		<ul class="vs-ul-to-select">
			<li class="vs-select-mutiple-option">
				<span>aaaaaaaaaaaaa</span>
				<span class="iconfont icon-xuanze"></span>
			</li>
			<li class="vs-select-mutiple-option">
				<span>aaaaaaaaaaaaa</span>
				<span class="iconfont icon-xuanze"></span>
			</li>
			<li class="vs-select-mutiple-option">
				<span>aaaaaaaaaaaaa</span>
				<span class="iconfont icon-xuanze"></span>
			</li>
			<li class="vs-select-mutiple-option">
				<span>aaaaaaaaaaaaa</span>
				<span class="iconfont icon-xuanze"></span>
			</li>
			<li class="vs-select-mutiple-option">
				<span>aaaaaaaaaaaaa</span>
				<span class="iconfont icon-xuanze"></span>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		methods: {
			focus(e) {
				for (let el of e.target.children) {
					if (el.className.split(' ').includes('vs-ul-to-select')) {
						el.style.display = 'block'
					}
				}	
			},
			blur(e) {
				for (let el of e.target.children) {
					if (el.className.split(' ').includes('vs-ul-to-select')) {
						el.style.display = 'none'
					}
				}
			}
		}
	}
</script>
