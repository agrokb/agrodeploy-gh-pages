<template>
    <div>
        <h3 class="subtitle is-3">紋枯病</h3>
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
                    <p> 稻紋枯病在環境適宜，溫度24~28℃之
                        高濕環境下，發病後約3~4天，病斑上或附
                        近稻表面組織上的菌絲會開始形成菌核，
                        菌核初呈白色菌絲團，經過約2天時間轉為
                        褐色，菌核接觸寄主組織之一面常向內
                        凹，而成不正之扁球形，紋枯病與其他菌
                        核性病害之主要區別，為病株外表會形成
                        菌核。
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
                       枯草桿菌
                    </p>
                    <img src="https://www.echiy.com/upload_files/C-000/C-301/_medium_/IMG_7871.JPG" alt="枯草桿菌">
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
