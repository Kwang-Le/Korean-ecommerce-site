<template>
    <div class="wrapper-forms">
        <div class="card">
            <div class="card-body">
                <form action="">
                    <div class="mb-3">
                        <label for="customer-name" class="form-label text-danger">성명：</label>
                        <input type="text" class="form-control" id="customer-name" aria-describedby="nameHelp">
                        <div id="nameHelp" class="form-text"></div>
                    </div>
                    <div class="mb-3">
                        <label for="phone-number" class="form-label text-danger">전화번호:</label>
                        <div class="d-flex ">
                            <input type="text" class="form-control phone-field" id="phone-number-first" value="010"
                                disabled>
                            <p>-</p>
                            <input type="text" class="form-control phone-field" id="phone-number-second">
                            <p>-</p>
                            <input type="text" class="form-control phone-field" id="phone-number-third">
                            <span id="phoneHelpInline" class="form-text text-danger">
                                주문정보 수신주의
                            </span>
                        </div>

                    </div>
                    <div class="d-flex ">
                        <div class="mb-3 col-6">
                            <label for="choose-city" class="form-label text-danger">시·도를 선택함.</label>
                            <select id="choose-city" class="form-select">
                                <option>서울</option>
                                <option>경기도</option>
                                <option>인천</option>
                                <option>강원도</option>
                                <option>충청북도</option>
                                <option>세종시</option>
                                <option>충청남도</option>
                                <option>대전</option>
                                <option>경상북도</option>
                                <option>대구</option>
                                <option>울산</option>
                                <option>부산</option>
                                <option>경상남도</option>
                                <option>전라북도</option>
                                <option>전라남도</option>
                                <option>광주</option>
                                <option>제주도</option>
                            </select>
                        </div>
                        <div class="mb-3 col-6">
                            <label for="choose-ward" class="form-label text-danger">구·시·군 선택.</label>
                            <select id="choose-ward" class="form-select">
                                <option>강북구</option>
                                <option>도봉구</option>
                                <option>노원구</option>
                                <option>중랑구</option>
                                <option>동대문구</option>
                                <option>성북구</option>
                                <option>종로구</option>
                                <option>은평구</option>
                                <option>서대문구</option>
                                <option>마포구</option>
                                <option>용산구</option>
                                <option>중구</option>
                                <option>성동구</option>
                                <option>광진구</option>
                                <option>강동구</option>
                                <option>송파구</option>
                                <option>강남구</option>
                                <option>서초구</option>
                                <option>동작구</option>
                                <option>영등포구</option>
                                <option>강서구</option>
                                <option>양천구</option>
                                <option>구로구</option>
                                <option>금천구</option>
                                <option>관악구</option>
                                <option>제주도</option>
                            </select>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="address" class="text-danger">상세주소（동/읍/면 -도로명 - 건물명 - 동,호수）:</label>
                        <textarea class="form-control" name="address" id="address" value="" nullmsg="상세주소를 입력하십시오"
                            errormsg="상세주소 정확하게 입력해 주세요." style="background-color: rgb(255, 255, 255);"></textarea>
                    </div>
                    <div class="mb-3">
                        <label for="zip-code" class="form-label text-danger">성명：</label>
                        <input type="text" class="form-control" id="zip-code" aria-describedby="nameHelp">
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label text-danger">메일주소:</label>
                        <input type="text" class="form-control" id="email" aria-describedby="nameHelp">
                    </div>
                    <div class="mb-3">
                        <input type="checkbox" id="coupon-permisson" name="coupon-permisson" value="true">
                        <label for="coupon-permisson" class="text-danger" style="margin-left: 10px;">상점 할인 행사 수신이 허용됩니다.</label>
                    </div>
                </form>
            </div>
        </div>

    </div>
</template>

<style scoped>
#phone-number-first {
    width: 73px;
    height: 40px;
}

#phone-number-second {
    width: 100px;
    height: 40px;
}

#phone-number-third {
    width: 100px;
    height: 40px;
}

.wrapper-forms {
    width: 640px;
}

@media only screen and (max-width: 640px) {
    .wrapper-forms {
        max-width: 100%;
    }

    .card {
        max-width: 100%;
    }
}
</style>