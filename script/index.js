$(document).ready(function(){
    $("#home").on("click", () => {
        $(window).scrollTop(0);
    })

    $("#about").on("click", () => {
        $(".about-me").get(0).scrollIntoView();
    })
    const WIDTH_BOX = 55
    function windowResize() {
        canvas.width  = window.innerWidth;
        canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', windowResize);

    canvas = document.getElementById("canvas")
    ctx = canvas.getContext("2d")

    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
    width = canvas.width
    height = canvas.height
    pageX = 0, pageY = 0
    maxParticles = 1000
    rains = []

    $(document).mousemove(function (e) { 
        rect = canvas.getBoundingClientRect()
        pageX = (e.clientX - rect.left) 
        pageY = (e.clientY - rect.top)
    });

    function init(){
        for (let index = 0; index < maxParticles; index++) {
            rains.push(new RainParticles({
                x: Math.random() * width,
                y: Math.random() * height
            },
            {
                x: Math.random(),
                y: Math.random() * 15
            }, Math.random() * 15))
        }
    }
    init()
    
    function draw(){
        for (let index = 0; index < rains.length; index++) {
            rains[index].update(ctx, {width, height}, 
                {
                    position: {
                    x: pageX, 
                    y: pageY
                }, 
                boxWidth:WIDTH_BOX
            })
        }
    }

    
    function animate(){
        window.requestAnimationFrame(animate)
        ctx.fillStyle = "#0AA1DD"
        ctx.fillRect(0,0, width, height)
        ctx.fillStyle = "white"
        ctx.fillRect(pageX, pageY, WIDTH_BOX,5)
        draw()
    }

    animate()

})
