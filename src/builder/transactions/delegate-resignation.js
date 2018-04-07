import feeManager from '@/managers/fee'
import configManager from '@/managers/config'
import cryptoBuilder from '@/builder/crypto'
import slots from '@/crypto/slots'
import Transaction from '@/builder/transaction'
import { TRANSACTION_TYPES } from '@/constants'

export default class DelegateResignation extends Transaction {
  /**
   * @constructor
   */
  constructor () {
    super()

    this.type = TRANSACTION_TYPES.DELEGATE_RESIGNATION
    this.fee = feeManager.get(TRANSACTION_TYPES.DELEGATE_RESIGNATION)
  }
}
