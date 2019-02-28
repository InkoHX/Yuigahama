const { Command, KlasaMessage } = require('klasa')
const os = require('os')
const {Utils} = require('../../../Yui')

/**
 * @extends Command
 */
module.exports = class BotInfo extends Command {

  constructor(...args) {
    super(...args, {
      description: ''
    })
  }

  /**
   * 
   * @param {KlasaMessage} message 
   */
  async run(message) {
    const info = [
      `Platform       :: ${Utils.getPlatform()}`,
      `CPU            :: ${os.cpus()[0].model}`,
      `Memory         :: ${(os.totalmem() / 1024 / 1024 / 1024).toFixed(1)} GB`,
    ].join('\n')
    return message.sendCode('asciidoc', info)
  }
}
