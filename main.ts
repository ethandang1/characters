sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    info.stopCountdown()
})
scene.setBackgroundColor(11)
scene.setBackgroundImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
info.startCountdown(10)
let cat = sprites.create(img`
e e e . . . . e e e . . . . 
c d d c . . c d d c . . . . 
c b d d f f d d b c . . . . 
c 3 b d d b d b 3 c . . . . 
f b 3 d d d d 3 b f . . . . 
e d d d d d d d d e . . . . 
e d f d d d d f d e . b f b 
f d d f d d f d d f . f d f 
f b d d b b d d 2 f . f d f 
. f 2 2 2 2 2 2 b b f f d f 
. f b d d d d d d b b d b f 
. f d d d d d b d d f f f . 
. f d f f f d f f d f . . . 
. f f . . f f . . f f . . . 
`, SpriteKind.Player)
cat.setPosition(80, 88)
let messageDad = "ahhhh"
controller.moveSprite(cat, 100, 100)
cat.say(messageDad)
let girl1 = sprites.create(img`
. . . f 4 4 f f f f . . . . . . 
. . f 4 5 5 4 5 f b f f . . . . 
. . f 5 5 5 5 4 e 3 3 b f . . . 
. . f e 4 4 4 e 3 3 3 3 b f . . 
. . f 3 3 3 3 3 3 3 3 3 3 f . . 
. f 3 3 e e 3 b e 3 3 3 3 f . . 
. f 3 3 e e e f f 3 3 3 3 f . . 
. f 3 e e e f b f b b b b f . . 
. . f e 4 4 f 1 e b b b b f . . 
. . . f 4 4 4 4 f b b b b f f . 
. . . f e e e f f f b b b b f . 
. . . f d d d e 4 4 f b b f . . 
. . . f d d d e 4 4 e f f . . . 
. . f b d b d b e e b f . . . . 
. . f f 1 d 1 d 1 d f f . . . . 
. . . . f f b b f f . . . . . . 
`, SpriteKind.Player)
girl1.say(messageDad)
girl1.setPosition(144, 98)
let girl2 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . f f f f f f . . . . . . 
. . . f 2 f e e e e f f . . . . 
. . f 2 2 2 f e e e e f f . . . 
. . f e e e e f f e e e f . . . 
. f e 2 2 2 2 e e f f f f . . . 
. f 2 e f f f f 2 2 2 e f . . . 
. f f f e e e f f f f f f f . . 
. f e e 4 4 f b e 4 4 e f f . . 
. . f e d d f 1 4 d 4 e e f . . 
. . . f d d d d 4 e e e f . . . 
. . . f e 4 4 4 e d d 4 . . . . 
. . . f 2 2 2 2 e d d e . . . . 
. . f f 5 5 4 4 f e e f . . . . 
. . f f f f f f f f f f . . . . 
. . . f f f . . . f f . . . . . 
`, SpriteKind.Player)
girl2.say(messageDad)
girl2.setPosition(29, 63)
let girl3 = sprites.create(img`
. . . . . . 5 . 5 . . . . . . . 
. . . . . f 5 5 5 f . . . . . . 
. . . . f 6 2 5 5 6 f . . . . . 
. . . f 6 6 6 6 1 6 6 f . . . . 
. . . f 6 6 6 6 6 1 6 f . . . . 
. . . f d f d 6 6 6 1 f . . . . 
. . . f d f d 6 6 6 6 f f . . . 
. . . f d 3 d d 6 6 6 f 6 f . . 
. . . . f d d d f f 6 f f . . . 
. . . . . f f 5 3 f 6 6 6 f . . 
. . . . f 5 3 3 f f f f f . . . 
. . . . f 3 3 f d f . . . . . . 
. . . . . f 3 f d f . . . . . . 
. . . . f 3 5 3 f d f . . . . . 
. . . . f f 3 3 f f . . . . . . 
. . . . . . f f f . . . . . . . 
`, SpriteKind.Player)
girl3.say(messageDad)
girl3.setPosition(87, 26)
let car = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . 3 3 3 3 3 3 3 3 . . 
. . . . . 3 c 3 3 3 3 3 3 d 3 . 
. . . . 3 c c 3 3 3 3 3 3 d c 3 
. . d 3 d c c 3 d d d d d d c c 
. d 3 3 d c b a a a a a a a 3 c 
. 3 3 3 d b a a b b b a b b a 3 
. 3 3 3 3 3 a b b b b a b b b a 
. 3 3 3 3 a 3 3 3 3 3 a 3 3 3 a 
. 3 d d 3 a f a a a f a a a a a 
. d d 3 a a a f a a f a a a a a 
. a a a a a a a f f f a a a a a 
. a a a a f f f a a a a f f f f 
. . . a f f f f f a a f f f f f 
. . . . f f f f . . . . f f f . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
car.follow(cat, 50)
game.onUpdateInterval(500, function () {
    cat.y += controller.dx()
    cat.x += controller.dy()
})
