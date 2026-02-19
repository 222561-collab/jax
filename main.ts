effects.blizzard.startScreenEffect(game.runtime())
game.setDialogFrame(img`
    . . . . . . . . . . . f . . . 
    . . f f . f f f f . . f f . . 
    . f f f f f . . f f f f f . . 
    . . f . . . . . f . . . f . . 
    . . f . . . . . . . . . f . . 
    . f f . . . . . f . . . f . . 
    . f . f f f f f . f f f f . . 
    . f f f . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    `)
controller.moveSprite(null, 40, -100)
controller.moveSprite(null, 100, 100)
pause(100)
game.setGameOverScoringType(game.ScoringType.HighScore)
