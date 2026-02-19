effects.blizzard.startScreenEffect(game.runtime())
game.setDialogFrame(img`
    . . . . . . . . . . . f . . . 
    . . f f . f f 3 3 3 . f f . . 
    . f f f f 3 3 . f 3 f f f . . 
    . . f 3 3 . . 3 3 3 3 . f . . 
    . 3 3 . . . 3 3 3 3 . . 3 3 . 
    3 3 f 3 3 3 3 3 3 3 3 3 3 3 . 
    3 3 3 f 3 3 f 3 . 3 3 f f 3 . 
    . 3 f 3 3 . 3 3 3 3 . 3 3 3 3 
    . 3 . 3 . 3 3 . 3 . 3 . 3 . 3 
    . 3 . . . . . . 3 3 . 3 . . 3 
    . 3 . . . . . . . . 3 . . . 3 
    . 3 . . . . . . . . 3 . 3 3 3 
    . 3 3 . . . . . . . 3 3 . . 3 
    . . 3 3 3 . . . . . . . . . 3 
    . . 3 . 3 3 3 3 3 3 3 3 3 3 3 
    `)
controller.moveSprite(null, 40, -100)
controller.moveSprite(null, 100, 100)
pause(100)
game.setGameOverScoringType(game.ScoringType.HighScore)
