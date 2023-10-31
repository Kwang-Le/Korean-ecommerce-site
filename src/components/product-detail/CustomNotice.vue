<script>
export default {
	data() {
		return {
			customOpened: false
		}
	},
	methods: {
		toggleCustomDetail() {
			this.customOpened = !this.customOpened
		}
	},
}
</script>

<template>
	<div class="custom-img" @click="toggleCustomDetail">
		<img src="https://w.ladicdn.com/59fa862eefd437215e453a87/code-20230924023949-vtw3k.gif" alt="">
	</div>
	<div class="wrapper-custom" v-if="customOpened">
		<div class="cust-mask" style="display: block;">
			<div class="cust-box">
				<div class="cust-close" @click="toggleCustomDetail">
					<i class="bi bi-x-circle"></i>
				</div>
				<div class="cust-top text-center">
					<div class="cust-top-line"></div>
					<div class="cust-top-text">개인통관 고유부호 발급 안내</div>
					<img src="https://pic.compgoo.com/front/res/img/cust-service/kr/code-bg.png?_t=1697876982&amp;_s=ada89e87e2550890d9bb5d2f701de89a&amp;_token=103cecea93c0b367d8be7fe03cc0f585&amp;_e=10&amp;_c=2514ffee488ad895ed3ba0385d83cea7"
						alt="" data-loaded="true">
					<div class="cust-top-box">
						<div class="cust-top-tips">
							<p class="font-f">해외 쇼핑할 때 필수!</p>
							<p>나만의 통관고유부호</p>
						</div>
					</div>
				</div>
				<div class="get-code">
					<div class="get-code-test clearfix">
						<p class="fl font-f">*</p>
						<p class="fl font-f">개인정보 유출 문제를 예방하기 위해 관세청에서 도입한 서비스입니다.</p>
					</div>
					<div class="get-code-test clearfix">
						<p class="fl font-f">*</p>
						<p class="fl font-f">한 번 발급 받은 고유부호 같은 번호로 계속 사용 가능합니다.</p>
					</div>
					<div class="get-code-test clearfix">
						<p class="fl font-f">*</p>
						<div class="fl font-f" style="flex: 1;">
							<p class="font-f">발급 전용페이지에서 발급받을 수 있으며,</p>
							<p class="font-f">본인 명의의 휴대폰 혹은 공인인증서가 필요합니다.</p>
						</div>
					</div>
					<a class="get-code-btn" href="https://m.customs.go.kr/pms/html/mos/extr/MOS0101053S.do">개인통관고유부호 발급
						하러가기</a>
				</div>
				<div class="cust-step">
					<div class="step-title bg-f">
						<div class="step-title-cen">
							<img src="https://pic.compgoo.com/front/res/img/cust-service/kr/step1.png?_t=1697876982&amp;_s=f7e8b60b3135ede4caf524d74db613dc&amp;_token=103cecea93c0b367d8be7fe03cc0f585&amp;_e=10&amp;_c=bf10d04d6d522c67a3efec2062fc3176"
								data-loaded="true">
							<span>개인통관 고유부호 발급 전용 홈페이지로 이동</span>
						</div>
					</div>
					<div class="step-box">
						<img src="https://pic.compgoo.com/front/res/img/cust-service/kr/code-eg.png?_t=1697876982&amp;_s=d2752394a230ce0b12f371da37839415&amp;_token=103cecea93c0b367d8be7fe03cc0f585&amp;_e=10&amp;_c=ca074f61dd49c108b1dda0701eabb084"
							data-loaded="true">
					</div>
					<div class="step-title bg-f">
						<div class="step-title-cen">
							<img src="https://pic.compgoo.com/front/res/img/cust-service/kr/step2.png?_t=1697876982&amp;_s=1ad1f7083405be58f7a5fef899123514&amp;_token=103cecea93c0b367d8be7fe03cc0f585&amp;_e=10&amp;_c=b5e859e9473171d455d3b0c9462c5b91"
								data-loaded="true">
							<span>통관번호 입력하세요</span>
						</div>
					</div>
					<div class="step-box bg-f">
						<div class="from-item">
							<label>통관번호<i class="red">*</i></label>
							<div class="cus-code-area">
								<input type="number" name="cus-code" class="from-input" pattern="[0-9]*"
									oninput="value=value.replace(/[^\d]/g,'');if(value.length>12) value=value.slice(0,12);"
									placeholder="P(12자리 통관번호를 입력하세요)" max="12" maxlength="12" value="">
							</div>
						</div>
						<div class="from-item">
							<label>전화번호<i class="red">*</i></label>
							<input type="text" name="code-phone" class="from-input" placeholder="필수" value="">
						</div>
						<a href="javascript:void(0);" class="code-btns ga-event text-center" ga-src="address"
							ga-type="passid" id="code-btn" data-type="cus-code2">확인 </a>
						<p class="step-tips">참고사항: 택배가 통관을 잘 할수 있도록 통관번호를 입력해 주십시오.</p>
					</div>
					<img src="https://pic.compgoo.com/front/res/img/cust-service/kr/code-kf.png?_t=1697876982&amp;_s=768a8e625a4fa4fe04650737b0cb87f3&amp;_token=103cecea93c0b367d8be7fe03cc0f585&amp;_e=10&amp;_c=8fed4c603cc2f44994c38f42ba2d6d71"
						data-loaded="true">
					<div class="cust-code-footer bg-f">
						<p>고객님, 도움이 필요하시면 언제든지 연락주세요.</p>
						<p>（운영시간에 따라 다소 답변이 지연될 수 있습니다만 100% 답변 드립니다.)</p>
						<p>E-mail:<a href="mailto:service@meeiiy.com">service@meeiiy.com</a></p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script></script>

<style scoped>
@media only screen and (max-width: 640px) {
	.cust-box {
		margin-left: 0 !important;
		left: 0 !important;
	}

	.cust-close {
		right: 15px !important;
		margin-right: 15px !important;
	}

}

.custom-img {
	position: fixed;
	right: 20px;
	top: 350px;
	display: block;
	z-index: 2016;
	cursor: pointer;
}

.custom-img img {
	width: 60px;
	height: auto;
}

.cust-mask {
	left: 0;
	right: 0;
	background-color: rgba(0, 0, 0, .2);
	z-index: 1060;
	display: none;
}

.cust-close {
	cursor: pointer;
	position: fixed;
	top: 15px;
	right: 50%;
	margin-right: -310px;
	z-index: 1001;
}

.cust-box,
.cust-mask {
	top: 0;
	bottom: 0;
	position: fixed;
}


.cust-box {
	width: 100%;
	max-width: 640px;
	left: 50%;
	margin-left: -320px;
	background: #7ad6ff;
	overflow-y: auto;
}

.cust-box,
.cust-mask {
	top: 0;
	bottom: 0;
	position: fixed;
}

.cust-top {
	width: 100%;
	height: auto;
	min-height: 300px;
	position: relative;
	padding-top: 50px;
}

.cust-top-line {
	width: 100%;
	height: 1px;
	background: #fff;
}

.cust-top-text {
	width: auto;
	height: 50px;
	line-height: 50px;
	padding: 0 15px;
	background: #7ad6ff;
	position: relative;
	top: -25px;
	font-size: 20px;
	color: #fff;
}

img {
	width: 100%;
	vertical-align: middle;
}

.cust-top-box {
	background: #29b7f7;
	padding: 20px 0;
}

.cust-top-tips {
	width: auto;
	border-width: 1px 0;
	font-size: 30px;
	padding: 10px;
}

.get-code,
.step-title {
	padding: 15px;
}

.get-code-test {
	width: 100%;
	clear: both;
	float: none;
	display: flex;
	justify-content: space-between;
}

.get-code-test p {
	margin: 0;
	font-size: 18px;
	line-height: 1.8;
	font-weight: 600;
}

.fl {
	float: left;
}

.step-title {
	width: 100%;
	height: 100px;
}

.step-title-cen {
	width: 100%;
	height: 100%;
	border-bottom: 1px solid #959595;
	font-size: 16px;
	padding-bottom: 5px;
	display: flex;
	align-items: flex-end;
}

.step-title-cen img {
	width: 60px;
}

.step-title-cen span {
	font-size: 18px;
	line-height: 30px;
	margin-left: 8px;
}

.from-item {
	display: flex;
	align-items: center;
	justify-content: space-between;
	font-size: 16px;
}

.cus-code-area {
	position: relative;
	display: flex;
	flex: 1;
	margin-left: 10px;
}

.from-input {
	padding-left: 17px;
}

.from-input {
	border: 1px solid #959595;
	height: 35px;
	padding: 0 8px;
	line-height: 35px;
	margin-left: 10px;
	flex: 1;
	background: 0 0;
}

.bg-f {
	background: #fff;
}

.code-btns {
	width: 160px;
	height: 40px;
	line-height: 35px;
	display: block;
	margin: 15px auto;
	font-size: 16px;
	font-weight: 600;
	background-color: #306ff0;
	color: #f1d5d5;
}

.step-tips {
	font-size: 16px;
	color: #306ff0;
	font-weight: 600;
}

.cust-box::-webkit-scrollbar {
	width: 2px;
	height: 1px;
}
</style>