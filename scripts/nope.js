// Description
//  > nope
//

module.exports = function(robot){
  robot.hear(/^([\s\w'@.-:]*)\s*([-+]{2}|—)(?:\s+(?:for|because|cause|cuz)\s+(.+))?$/i, function(msg){
    msg.send("Nope. https://github.com/tudev/owlbot/issues")
  })
}
