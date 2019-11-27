<template>
    <div style="background-color: black; width: 100vw; height: 100vh; display: flex;align-items: center;">
<!--        <div @mousemove="getPositionXY" class="earth">-->
<!--            <div class="earth-child">-->
<!--                <div class="mouse">-->
<!--                    <div>-->
<!--                        X : {{x}}-->
<!--                    </div>-->
<!--                    <div>-->
<!--                        Y : {{y}}-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->
<!--        <dl>-->
<!--            <dd class="rotate0" style="transform: rotateY(18deg) translateZ(1500px) ;"></dd>-->
<!--            <dd class="rotate36" style="transform: rotateY(54deg) translateZ(1500px)"></dd>-->
<!--            <dd class="rotate72" style="transform: rotateY(90deg) translateZ(1500px)"></dd>-->
<!--            <dd class="rotate108" style="transform: rotateY(126deg) translateZ(1500px)"></dd>-->
<!--            <dd class="rotate144" style="transform: rotateY(162deg) translateZ(1500px)"></dd>-->
<!--            <dd class="rotate180" style="transform: rotateY(198deg) translateZ(1500px)"></dd>-->
<!--            <dd class="rotate216" style="transform: rotateY(234deg) translateZ(1500px)"></dd>-->
<!--            <dd class="rotate252" style="transform: rotateY(270deg) translateZ(1500px)"></dd>-->
<!--            <dd class="rotate288" style="transform: rotateY(306deg) translateZ(1500px)"></dd>-->
<!--            <dd class="rotate324" style="transform: rotateY(342deg) translateZ(1500px)"></dd>-->
<!--        </dl>-->
        <dl>
            <dd class="rotate0" style="transform: rotateY(18deg) translateZ(200px) ;"></dd>
            <dd class="rotate18" style="transform: rotateY(36deg) translateZ(200px) ;"></dd>
            <dd class="rotate36" style="transform: rotateY(54deg) translateZ(200px)"></dd>
            <dd class="rotate54" style="transform: rotateY(72deg) translateZ(200px)"></dd>
            <dd class="rotate72" style="transform: rotateY(90deg) translateZ(200px)"></dd>
            <dd class="rotate90" style="transform: rotateY(108deg) translateZ(200px)"></dd>
            <dd class="rotate108" style="transform: rotateY(126deg) translateZ(200px)"></dd>
            <dd class="rotate126" style="transform: rotateY(144deg) translateZ(200px)"></dd>
            <dd class="rotate144" style="transform: rotateY(162deg) translateZ(200px)"></dd>
            <dd class="rotate162" style="transform: rotateY(180deg) translateZ(200px)"></dd>
            <dd class="rotate180" style="transform: rotateY(198deg) translateZ(200px)"></dd>
            <dd class="rotate192" style="transform: rotateY(216deg) translateZ(200px)"></dd>
            <dd class="rotate216" style="transform: rotateY(234deg) translateZ(200px)"></dd>
            <dd class="rotate234" style="transform: rotateY(252deg) translateZ(200px)"></dd>
            <dd class="rotate252" style="transform: rotateY(270deg) translateZ(200px)"></dd>
            <dd class="rotate270" style="transform: rotateY(288deg) translateZ(200px)"></dd>
            <dd class="rotate288" style="transform: rotateY(306deg) translateZ(200px)"></dd>
            <dd class="rotate306" style="transform: rotateY(324deg) translateZ(200px)"></dd>
            <dd class="rotate324" style="transform: rotateY(342deg) translateZ(200px)"></dd>
            <dd class="rotate342" style="transform: rotateY(0deg) translateZ(200px)"></dd>
        </dl>
    </div>
</template>

<script>
    $(document).ready(function () {
        // $('.rotate0').css('display', 'none')
        // $('.rotate36').css('display', 'none')
        // $('.rotate252').css('display', 'none')
        // $('.rotate288').css('display', 'none')
        // $('.rotate324').css('display', 'none')
        $('dl').eq(0).css('transform', 'rotateX(-10deg) rotateY(0deg)')
        window.onmousedown = function (e) {
            var dl = $('dl').eq(0)[0];
            e = e || window.event;
            var mouseX = e.clientX, mouseY = e.clientY;
            var transform = dl.style.transform;
            var rotateX = transform.substr(transform.indexOf('rotateX(') + 8);
            var rotateY = transform.substr(transform.indexOf('rotateY(') + 8);
            rotateX = parseInt(rotateX.substring(0, rotateX.indexOf('deg')));
            rotateY = parseInt(rotateY.substring(0, rotateY.indexOf('deg')));
            window.onmousemove = function (e) {
                e = e || window.event;
                var x = rotateX - (e.clientY - mouseY);
                var y = rotateY + (e.clientX - mouseX);
                if (x > 360 || x < -360)
                    x %= 360;
                if (y > 360 || y < -360)
                    y %= 360;
                let clientY = y
                if(clientY < 0) {
                    clientY = Math.abs(clientY)
                    while(clientY >= 360) {
                        clientY -= 360
                    }
                    clientY = 360 - clientY
                }
                while(clientY >= 360) {
                    clientY -= 360
                }
                // checkRotate(clientY)
                $('dl').css('transform', "rotateX(" + x + "deg) rotateY(" + y + "deg)")
            }
            window.onmouseup = function () {
                window.onmousemove = null;
            }
        }

        function checkRotate(y) {
            $('dd').css('display', 'block')
            if(0 < y && y <= 36) {
                $('.rotate0').css('display', 'none')
                $('.rotate36').css('display', 'none')
                $('.rotate252').css('display', 'none')
                $('.rotate288').css('display', 'none')
                $('.rotate324').css('display', 'none')
            } else if (36 < y && y <= 72) {
                $('.rotate0').css('display', 'none')
                $('.rotate216').css('display', 'none')
                $('.rotate252').css('display', 'none')
                $('.rotate288').css('display', 'none')
                $('.rotate324').css('display', 'none')
            } else if (72 < y && y <= 108) {
                $('.rotate180').css('display', 'none')
                $('.rotate216').css('display', 'none')
                $('.rotate252').css('display', 'none')
                $('.rotate288').css('display', 'none')
                $('.rotate324').css('display', 'none')
            } else if (108 < y && y <= 144) {
                $('.rotate144').css('display', 'none')
                $('.rotate180').css('display', 'none')
                $('.rotate216').css('display', 'none')
                $('.rotate252').css('display', 'none')
                $('.rotate288').css('display', 'none')
            } else if (144 < y && y <= 180) {
                $('.rotate108').css('display', 'none')
                $('.rotate144').css('display', 'none')
                $('.rotate180').css('display', 'none')
                $('.rotate216').css('display', 'none')
                $('.rotate252').css('display', 'none')
            } else if (180 < y && y <= 216) {
                $('.rotate72').css('display', 'none')
                $('.rotate108').css('display', 'none')
                $('.rotate144').css('display', 'none')
                $('.rotate180').css('display', 'none')
                $('.rotate216').css('display', 'none')
            } else if (216 < y && y <= 242) {
                $('.rotate36').css('display', 'none')
                $('.rotate72').css('display', 'none')
                $('.rotate108').css('display', 'none')
                $('.rotate144').css('display', 'none')
                $('.rotate180').css('display', 'none')
            } else if (242 < y && y <= 288) {
                $('.rotate0').css('display', 'none')
                $('.rotate36').css('display', 'none')
                $('.rotate72').css('display', 'none')
                $('.rotate108').css('display', 'none')
                $('.rotate144').css('display', 'none')
            } else if (288 < y && y <= 324) {
                $('.rotate324').css('display', 'none')
                $('.rotate0').css('display', 'none')
                $('.rotate36').css('display', 'none')
                $('.rotate72').css('display', 'none')
                $('.rotate108').css('display', 'none')
            } else if (324 < y && y <= 360) {
                $('.rotate288').css('display', 'none')
                $('.rotate324').css('display', 'none')
                $('.rotate0').css('display', 'none')
                $('.rotate36').css('display', 'none')
                $('.rotate72').css('display', 'none')
            }
        }
    });

    export default {
        layout : 'account',
        data() {
            return {
                x : 0,
                y : 0
            }
        },
        methods : {
            getPositionXY(e) {
                this.x = e.clientX
                this.y = e.clientY
            }
        }
    }
</script>

<style>
    dl {
        position: relative;
        margin-left: 400px;
        text-align:center ;
        transform-style: preserve-3d;
    }
    dd {
        position: absolute;
        top : 0;
        left: 0;
        /*width: 975px;*/
        width: 64px;
        /*height: 360px;*/
        height: 100px;
        background-size: cover;
        background-repeat: no-repeat;
        background-image: url(/global_assets/images/universe.jpg);
    }
    .earth {
        background-image: url(/global_assets/images/universe.jpg);
        width: 100vw;
        height: 100vh;
        background-repeat: no-repeat;
        background-size: cover;
        display: flex;
        align-items: center;
    }
    .earth .earth-child {
        width: 400px;
        height: 400px;
        margin: 0 auto;
    }
    .earth .mouse {
        border-radius: 50%;
        width: 100%;
        height: 100%;
        background-color: green;
        color: white;
        box-shadow: 0 0 10px 10px rgba(4, 6, 40, 0.7)
    }
</style>
