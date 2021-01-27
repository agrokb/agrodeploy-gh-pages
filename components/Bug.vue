<template>
    <div>
        <h3 class="subtitle is-3">褐飛蝨</h3>
        <div class="dropdown" :class="{'is-active':active}" @click='active = !active ' >
            <div class="dropdown-trigger">
                <button class="button" aria-haspopup="true" aria-controls="dropdown-menu2">
                <span>病因</span>
                <span class="icon is-small">
                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                </span>
                </button>
            </div>
            <div class="dropdown-menu" id="dropdown-menu2" role="menu">
                <div class="dropdown-content">
                <div class="dropdown-item">
                    <p> 第二期稻插秧後，褐飛蝨很快即遷入稻田，插秧後 2-3 週為其遷入之高峰期。第一、二及三世代分別出現於八月下旬，九月下旬及十月下旬，而第四世代成則出現於十二月上旬。由於其遷入期頗長，且在水稻生育期中褐飛蝨常有短距離遷移，因此世代間重疊頗大，各蟲期隨時可見。各世代發生密度因受遷入蟲數及氣條因子(尤以九月份之降大雨日數)之影響，年度間變異頗大。雖然如此，但其族群密度通常在第一世代很低，第二世代若蟲期常可達到每叢稻 5-10 隻之經濟為害基準。族群高峰則出現於第三或第四世代若蟲期，隨該年之族群密度與氣象條件而異。若在水稻生育中期其族群密度較低，而十月份溫度仍高時，於第四代出現高峰期之機率較多。在族群高峰之密度可到平均每叢數隻至 400 隻以上。每叢水稻若遭受 100 隻左右危害即可產生「蝨燒」現象。
                    </p>
                </div>
                <hr class="dropdown-divider">
                <div class="dropdown-item">
                    <p></p>
                </div>
                <hr class="dropdown-divider">
                </div>
            </div>
        </div>
        </br>
        <div class="dropdown mt-3 mb-3" :class="{'is-active':activeOne}" @click='activeOne = !activeOne ' >
            <div class="dropdown-trigger">
                <button class="button" aria-haspopup="true" aria-controls="dropdown-menu2">
                <span>生物農藥</span>
                <span class="icon is-small">
                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                </span>
                </button>
            </div>
            <div class="dropdown-menu" id="dropdown-menu2" role="menu">
                <div class="dropdown-content">
                <div class="dropdown-item">
                    <p>
                       窄域油
                    </p>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjbiaN1L67pgO4MMrud-NVTshnWxTJp8pyww&usqp=CAU" alt="窄域油">
                    <br>
                    <a href="https://agri.microgreen.com.tw/2014/09/ur.html">窄域油殺蟲原理</a>
                    <br>
                    <a href="http://www.ag168.com/">購買連結</a>
                </div>
                <hr class="dropdown-divider">
               
                <hr class="dropdown-divider">
                </div>
            </div>
        </div>
        <br>
        <div class="dropdown mt-3 mb-3" :class="{'is-active':activeTwo}" @click='activeTwo = !activeTwo ' >
            <div class="dropdown-trigger">
                <button class="button" aria-haspopup="true" aria-controls="dropdown-menu2">
                <span>使用方法</span>
                <span class="icon is-small">
                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                </span>
                </button>
            </div>
            <div class="dropdown-menu" id="dropdown-menu2" role="menu">
                <div class="dropdown-content">
                <a href="https://www.echiy.com/%E6%9E%AF%E8%8D%89%E8%8A%BD%E5%AD%A2%E6%A1%BF%E8%8F%8C%E5%9F%B9%E9%A4%8A.html#undefined2" class="dropdown-item">
                    參考購買連結
                </a>
                </div>
            </div>
        </div>
        </br>
         <div class="dropdown mt-3 mb-3" :class="{'is-active':activeThree}" @click='activeThree = !activeThree ' >
            <div class="dropdown-trigger">
                <button class="button" aria-haspopup="true" aria-controls="dropdown-menu2">
                <span>天氣預報</span>
                <span class="icon is-small">
                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                </span>
                </button>
            </div>
            <div class="dropdown-menu" id="dropdown-menu2" role="menu">
                <div class="dropdown-content">
                <a href="https://www.cwb.gov.tw/V8/C/W/week.html" class="dropdown-item">
                    中央氣象局
                </a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            active:false,
            activeOne:false,
            activeTwo:false,
            activeThree:false
        }
    },
}
</script>
