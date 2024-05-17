/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.structures = (function() {

  /**
   * Namespace structures.
   * @exports structures
   * @namespace
   */
  var structures = {};

  structures.input = (function() {

    /**
     * Properties of an input.
     * @memberof structures
     * @interface Iinput
     * @property {Uint8Array|null} [txHash] input txHash
     * @property {number|null} [nTxOutput] input nTxOutput
     */

    /**
     * Constructs a new input.
     * @memberof structures
     * @classdesc Represents an input.
     * @implements Iinput
     * @constructor
     * @param {structures.Iinput=} [properties] Properties to set
     */
    function input(properties) {
      if (properties) {
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) {
            this[keys[i]] = properties[keys[i]];
          }
      }
    }

    /**
     * input txHash.
     * @member {Uint8Array} txHash
     * @memberof structures.input
     * @instance
     */
    input.prototype.txHash = $util.newBuffer([]);

    /**
     * input nTxOutput.
     * @member {number} nTxOutput
     * @memberof structures.input
     * @instance
     */
    input.prototype.nTxOutput = 0;

    /**
     * Creates a new input instance using the specified properties.
     * @function create
     * @memberof structures.input
     * @static
     * @param {structures.Iinput=} [properties] Properties to set
     * @returns {structures.input} input instance
     */
    input.create = function create(properties) {
      return new input(properties);
    };

    /**
     * Encodes the specified input message. Does not implicitly {@link structures.input.verify|verify} messages.
     * @function encode
     * @memberof structures.input
     * @static
     * @param {structures.Iinput} message input message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    input.encode = function encode(message, writer) {
      if (!writer) {
        writer = $Writer.create();
      }
      if (message.txHash != null && Object.hasOwnProperty.call(message, "txHash")) {
        writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.txHash);
      }
      if (message.nTxOutput != null && Object.hasOwnProperty.call(message, "nTxOutput")) {
        writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.nTxOutput);
      }
      return writer;
    };

    /**
     * Encodes the specified input message, length delimited. Does not implicitly {@link structures.input.verify|verify} messages.
     * @function encodeDelimited
     * @memberof structures.input
     * @static
     * @param {structures.Iinput} message input message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    input.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an input message from the specified reader or buffer.
     * @function decode
     * @memberof structures.input
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {structures.input} input
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    input.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) {
        reader = $Reader.create(reader);
      }
      var end = length === undefined ? reader.len : reader.pos + length, message = new $root.structures.input();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1: {
            message.txHash = reader.bytes();
            break;
          }
          case 2: {
            message.nTxOutput = reader.uint32();
            break;
          }
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes an input message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof structures.input
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {structures.input} input
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    input.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) {
        reader = new $Reader(reader);
      }
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an input message.
     * @function verify
     * @memberof structures.input
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    input.verify = function verify(message) {
      if (typeof message !== "object" || message === null) {
        return "object expected";
      }
      if (message.txHash != null && message.hasOwnProperty("txHash")) {
        if (!(message.txHash && typeof message.txHash.length === "number" || $util.isString(message.txHash))) {
          return "txHash: buffer expected";
        }
      }
      if (message.nTxOutput != null && message.hasOwnProperty("nTxOutput")) {
        if (!$util.isInteger(message.nTxOutput)) {
          return "nTxOutput: integer expected";
        }
      }
      return null;
    };

    /**
     * Creates an input message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof structures.input
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {structures.input} input
     */
    input.fromObject = function fromObject(object) {
      if (object instanceof $root.structures.input) {
        return object;
      }
      var message = new $root.structures.input();
      if (object.txHash != null) {
        if (typeof object.txHash === "string") {
          $util.base64.decode(object.txHash, message.txHash = $util.newBuffer($util.base64.length(object.txHash)), 0);
        } else if (object.txHash.length >= 0) {
          message.txHash = object.txHash;
        }
      }
      if (object.nTxOutput != null) {
        message.nTxOutput = object.nTxOutput >>> 0;
      }
      return message;
    };

    /**
     * Creates a plain object from an input message. Also converts values to other types if specified.
     * @function toObject
     * @memberof structures.input
     * @static
     * @param {structures.input} message input
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    input.toObject = function toObject(message, options) {
      if (!options) {
        options = {};
      }
      var object = {};
      if (options.defaults) {
        if (options.bytes === String) {
          object.txHash = "";
        } else {
          object.txHash = [];
          if (options.bytes !== Array) {
            object.txHash = $util.newBuffer(object.txHash);
          }
        }
        object.nTxOutput = 0;
      }
      if (message.txHash != null && message.hasOwnProperty("txHash")) {
        object.txHash =
          options.bytes === String ? $util.base64.encode(message.txHash, 0, message.txHash.length) : options.bytes ===
                                                                                                     Array
            ? Array.prototype.slice.call(message.txHash)
            : message.txHash;
      }
      if (message.nTxOutput != null && message.hasOwnProperty("nTxOutput")) {
        object.nTxOutput = message.nTxOutput;
      }
      return object;
    };

    /**
     * Converts this input to JSON.
     * @function toJSON
     * @memberof structures.input
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    input.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for input
     * @function getTypeUrl
     * @memberof structures.input
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    input.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
      if (typeUrlPrefix === undefined) {
        typeUrlPrefix = "type.googleapis.com";
      }
      return typeUrlPrefix + "/structures.input";
    };

    return input;
  })();

  structures.output = (function() {

    /**
     * Properties of an output.
     * @memberof structures
     * @interface Ioutput
     * @property {number|Long|null} [amount] output amount
     * @property {Uint8Array|null} [receiverAddr] output receiverAddr
     * @property {string|null} [contractCode] output contractCode
     * @property {Uint8Array|null} [addrChangeReceiver] output addrChangeReceiver
     */

    /**
     * Constructs a new output.
     * @memberof structures
     * @classdesc Represents an output.
     * @implements Ioutput
     * @constructor
     * @param {structures.Ioutput=} [properties] Properties to set
     */
    function output(properties) {
      if (properties) {
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) {
            this[keys[i]] = properties[keys[i]];
          }
      }
    }

    /**
     * output amount.
     * @member {number|Long} amount
     * @memberof structures.output
     * @instance
     */
    output.prototype.amount = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;

    /**
     * output receiverAddr.
     * @member {Uint8Array} receiverAddr
     * @memberof structures.output
     * @instance
     */
    output.prototype.receiverAddr = $util.newBuffer([]);

    /**
     * output contractCode.
     * @member {string} contractCode
     * @memberof structures.output
     * @instance
     */
    output.prototype.contractCode = "";

    /**
     * output addrChangeReceiver.
     * @member {Uint8Array} addrChangeReceiver
     * @memberof structures.output
     * @instance
     */
    output.prototype.addrChangeReceiver = $util.newBuffer([]);

    /**
     * Creates a new output instance using the specified properties.
     * @function create
     * @memberof structures.output
     * @static
     * @param {structures.Ioutput=} [properties] Properties to set
     * @returns {structures.output} output instance
     */
    output.create = function create(properties) {
      return new output(properties);
    };

    /**
     * Encodes the specified output message. Does not implicitly {@link structures.output.verify|verify} messages.
     * @function encode
     * @memberof structures.output
     * @static
     * @param {structures.Ioutput} message output message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    output.encode = function encode(message, writer) {
      if (!writer) {
        writer = $Writer.create();
      }
      if (message.amount != null && Object.hasOwnProperty.call(message, "amount")) {
        writer.uint32(/* id 1, wireType 1 =*/9).fixed64(message.amount);
      }
      if (message.receiverAddr != null && Object.hasOwnProperty.call(message, "receiverAddr")) {
        writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.receiverAddr);
      }
      if (message.contractCode != null && Object.hasOwnProperty.call(message, "contractCode")) {
        writer.uint32(/* id 3, wireType 2 =*/26).string(message.contractCode);
      }
      if (message.addrChangeReceiver != null && Object.hasOwnProperty.call(message, "addrChangeReceiver")) {
        writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.addrChangeReceiver);
      }
      return writer;
    };

    /**
     * Encodes the specified output message, length delimited. Does not implicitly {@link structures.output.verify|verify} messages.
     * @function encodeDelimited
     * @memberof structures.output
     * @static
     * @param {structures.Ioutput} message output message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    output.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an output message from the specified reader or buffer.
     * @function decode
     * @memberof structures.output
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {structures.output} output
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    output.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) {
        reader = $Reader.create(reader);
      }
      var end = length === undefined ? reader.len : reader.pos + length, message = new $root.structures.output();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1: {
            message.amount = reader.fixed64();
            break;
          }
          case 2: {
            message.receiverAddr = reader.bytes();
            break;
          }
          case 3: {
            message.contractCode = reader.string();
            break;
          }
          case 4: {
            message.addrChangeReceiver = reader.bytes();
            break;
          }
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes an output message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof structures.output
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {structures.output} output
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    output.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) {
        reader = new $Reader(reader);
      }
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an output message.
     * @function verify
     * @memberof structures.output
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    output.verify = function verify(message) {
      if (typeof message !== "object" || message === null) {
        return "object expected";
      }
      if (message.amount != null && message.hasOwnProperty("amount")) {
        if (!$util.isInteger(message.amount) &&
            !(message.amount && $util.isInteger(message.amount.low) && $util.isInteger(message.amount.high))) {
          return "amount: integer|Long expected";
        }
      }
      if (message.receiverAddr != null && message.hasOwnProperty("receiverAddr")) {
        if (!(message.receiverAddr && typeof message.receiverAddr.length === "number" ||
              $util.isString(message.receiverAddr))) {
          return "receiverAddr: buffer expected";
        }
      }
      if (message.contractCode != null && message.hasOwnProperty("contractCode")) {
        if (!$util.isString(message.contractCode)) {
          return "contractCode: string expected";
        }
      }
      if (message.addrChangeReceiver != null && message.hasOwnProperty("addrChangeReceiver")) {
        if (!(message.addrChangeReceiver && typeof message.addrChangeReceiver.length === "number" ||
              $util.isString(message.addrChangeReceiver))) {
          return "addrChangeReceiver: buffer expected";
        }
      }
      return null;
    };

    /**
     * Creates an output message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof structures.output
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {structures.output} output
     */
    output.fromObject = function fromObject(object) {
      if (object instanceof $root.structures.output) {
        return object;
      }
      var message = new $root.structures.output();
      if (object.amount != null) {
        if ($util.Long) {
          (message.amount = $util.Long.fromValue(object.amount)).unsigned = false;
        } else if (typeof object.amount === "string") {
          message.amount = parseInt(object.amount, 10);
        } else if (typeof object.amount === "number") {
          message.amount = object.amount;
        } else if (typeof object.amount === "object") {
          message.amount = new $util.LongBits(object.amount.low >>> 0, object.amount.high >>> 0).toNumber();
        }
      }
      if (object.receiverAddr != null) {
        if (typeof object.receiverAddr === "string") {
          $util.base64.decode(object.receiverAddr,
            message.receiverAddr = $util.newBuffer($util.base64.length(object.receiverAddr)), 0
          );
        } else if (object.receiverAddr.length >= 0) {
          message.receiverAddr = object.receiverAddr;
        }
      }
      if (object.contractCode != null) {
        message.contractCode = String(object.contractCode);
      }
      if (object.addrChangeReceiver != null) {
        if (typeof object.addrChangeReceiver === "string") {
          $util.base64.decode(object.addrChangeReceiver,
            message.addrChangeReceiver = $util.newBuffer($util.base64.length(object.addrChangeReceiver)), 0
          );
        } else if (object.addrChangeReceiver.length >= 0) {
          message.addrChangeReceiver = object.addrChangeReceiver;
        }
      }
      return message;
    };

    /**
     * Creates a plain object from an output message. Also converts values to other types if specified.
     * @function toObject
     * @memberof structures.output
     * @static
     * @param {structures.output} message output
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    output.toObject = function toObject(message, options) {
      if (!options) {
        options = {};
      }
      var object = {};
      if (options.defaults) {
        if ($util.Long) {
          var long = new $util.Long(0, 0, false);
          object.amount =
            options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
        } else {
          object.amount = options.longs === String ? "0" : 0;
        }
        if (options.bytes === String) {
          object.receiverAddr = "";
        } else {
          object.receiverAddr = [];
          if (options.bytes !== Array) {
            object.receiverAddr = $util.newBuffer(object.receiverAddr);
          }
        }
        object.contractCode = "";
        if (options.bytes === String) {
          object.addrChangeReceiver = "";
        } else {
          object.addrChangeReceiver = [];
          if (options.bytes !== Array) {
            object.addrChangeReceiver = $util.newBuffer(object.addrChangeReceiver);
          }
        }
      }
      if (message.amount != null && message.hasOwnProperty("amount")) {
        if (typeof message.amount === "number") {
          object.amount = options.longs === String ? String(message.amount) : message.amount;
        } else {
          object.amount =
            options.longs === String ? $util.Long.prototype.toString.call(message.amount) : options.longs === Number
              ? new $util.LongBits(message.amount.low >>> 0, message.amount.high >>> 0).toNumber()
              : message.amount;
        }
      }
      if (message.receiverAddr != null && message.hasOwnProperty("receiverAddr")) {
        object.receiverAddr = options.bytes === String
          ? $util.base64.encode(message.receiverAddr, 0, message.receiverAddr.length)
          : options.bytes === Array ? Array.prototype.slice.call(message.receiverAddr) : message.receiverAddr;
      }
      if (message.contractCode != null && message.hasOwnProperty("contractCode")) {
        object.contractCode = message.contractCode;
      }
      if (message.addrChangeReceiver != null && message.hasOwnProperty("addrChangeReceiver")) {
        object.addrChangeReceiver = options.bytes === String ? $util.base64.encode(message.addrChangeReceiver, 0,
          message.addrChangeReceiver.length
        ) : options.bytes === Array
          ? Array.prototype.slice.call(message.addrChangeReceiver)
          : message.addrChangeReceiver;
      }
      return object;
    };

    /**
     * Converts this output to JSON.
     * @function toJSON
     * @memberof structures.output
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    output.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for output
     * @function getTypeUrl
     * @memberof structures.output
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    output.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
      if (typeUrlPrefix === undefined) {
        typeUrlPrefix = "type.googleapis.com";
      }
      return typeUrlPrefix + "/structures.output";
    };

    return output;
  })();

  structures.TransactionPayload = (function() {

    /**
     * Properties of a TransactionPayload.
     * @memberof structures
     * @interface ITransactionPayload
     * @property {number|null} [version] TransactionPayload version
     * @property {number|null} [conciliumId] TransactionPayload conciliumId
     * @property {Array.<structures.Iinput>|null} [ins] TransactionPayload ins
     * @property {Array.<structures.Ioutput>|null} [outs] TransactionPayload outs
     */

    /**
     * Constructs a new TransactionPayload.
     * @memberof structures
     * @classdesc Represents a TransactionPayload.
     * @implements ITransactionPayload
     * @constructor
     * @param {structures.ITransactionPayload=} [properties] Properties to set
     */
    function TransactionPayload(properties) {
      this.ins = [];
      this.outs = [];
      if (properties) {
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) {
            this[keys[i]] = properties[keys[i]];
          }
      }
    }

    /**
     * TransactionPayload version.
     * @member {number} version
     * @memberof structures.TransactionPayload
     * @instance
     */
    TransactionPayload.prototype.version = 0;

    /**
     * TransactionPayload conciliumId.
     * @member {number} conciliumId
     * @memberof structures.TransactionPayload
     * @instance
     */
    TransactionPayload.prototype.conciliumId = 0;

    /**
     * TransactionPayload ins.
     * @member {Array.<structures.Iinput>} ins
     * @memberof structures.TransactionPayload
     * @instance
     */
    TransactionPayload.prototype.ins = $util.emptyArray;

    /**
     * TransactionPayload outs.
     * @member {Array.<structures.Ioutput>} outs
     * @memberof structures.TransactionPayload
     * @instance
     */
    TransactionPayload.prototype.outs = $util.emptyArray;

    /**
     * Creates a new TransactionPayload instance using the specified properties.
     * @function create
     * @memberof structures.TransactionPayload
     * @static
     * @param {structures.ITransactionPayload=} [properties] Properties to set
     * @returns {structures.TransactionPayload} TransactionPayload instance
     */
    TransactionPayload.create = function create(properties) {
      return new TransactionPayload(properties);
    };

    /**
     * Encodes the specified TransactionPayload message. Does not implicitly {@link structures.TransactionPayload.verify|verify} messages.
     * @function encode
     * @memberof structures.TransactionPayload
     * @static
     * @param {structures.ITransactionPayload} message TransactionPayload message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TransactionPayload.encode = function encode(message, writer) {
      if (!writer) {
        writer = $Writer.create();
      }
      if (message.ins != null && message.ins.length) {
        for (var i = 0; i < message.ins.length; ++i)
          $root.structures.input.encode(message.ins[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
      }
      if (message.outs != null && message.outs.length) {
        for (var i = 0; i < message.outs.length; ++i)
          $root.structures.output.encode(message.outs[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
      }
      if (message.version != null && Object.hasOwnProperty.call(message, "version")) {
        writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.version);
      }
      if (message.conciliumId != null && Object.hasOwnProperty.call(message, "conciliumId")) {
        writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.conciliumId);
      }
      return writer;
    };

    /**
     * Encodes the specified TransactionPayload message, length delimited. Does not implicitly {@link structures.TransactionPayload.verify|verify} messages.
     * @function encodeDelimited
     * @memberof structures.TransactionPayload
     * @static
     * @param {structures.ITransactionPayload} message TransactionPayload message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TransactionPayload.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a TransactionPayload message from the specified reader or buffer.
     * @function decode
     * @memberof structures.TransactionPayload
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {structures.TransactionPayload} TransactionPayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TransactionPayload.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) {
        reader = $Reader.create(reader);
      }
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.structures.TransactionPayload();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 3: {
            message.version = reader.uint32();
            break;
          }
          case 4: {
            message.conciliumId = reader.uint32();
            break;
          }
          case 1: {
            if (!(message.ins && message.ins.length)) {
              message.ins = [];
            }
            message.ins.push($root.structures.input.decode(reader, reader.uint32()));
            break;
          }
          case 2: {
            if (!(message.outs && message.outs.length)) {
              message.outs = [];
            }
            message.outs.push($root.structures.output.decode(reader, reader.uint32()));
            break;
          }
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes a TransactionPayload message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof structures.TransactionPayload
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {structures.TransactionPayload} TransactionPayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TransactionPayload.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) {
        reader = new $Reader(reader);
      }
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a TransactionPayload message.
     * @function verify
     * @memberof structures.TransactionPayload
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    TransactionPayload.verify = function verify(message) {
      if (typeof message !== "object" || message === null) {
        return "object expected";
      }
      if (message.version != null && message.hasOwnProperty("version")) {
        if (!$util.isInteger(message.version)) {
          return "version: integer expected";
        }
      }
      if (message.conciliumId != null && message.hasOwnProperty("conciliumId")) {
        if (!$util.isInteger(message.conciliumId)) {
          return "conciliumId: integer expected";
        }
      }
      if (message.ins != null && message.hasOwnProperty("ins")) {
        if (!Array.isArray(message.ins)) {
          return "ins: array expected";
        }
        for (var i = 0; i < message.ins.length; ++i) {
          var error = $root.structures.input.verify(message.ins[i]);
          if (error) {
            return "ins." + error;
          }
        }
      }
      if (message.outs != null && message.hasOwnProperty("outs")) {
        if (!Array.isArray(message.outs)) {
          return "outs: array expected";
        }
        for (var i = 0; i < message.outs.length; ++i) {
          var error = $root.structures.output.verify(message.outs[i]);
          if (error) {
            return "outs." + error;
          }
        }
      }
      return null;
    };

    /**
     * Creates a TransactionPayload message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof structures.TransactionPayload
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {structures.TransactionPayload} TransactionPayload
     */
    TransactionPayload.fromObject = function fromObject(object) {
      if (object instanceof $root.structures.TransactionPayload) {
        return object;
      }
      var message = new $root.structures.TransactionPayload();
      if (object.version != null) {
        message.version = object.version >>> 0;
      }
      if (object.conciliumId != null) {
        message.conciliumId = object.conciliumId >>> 0;
      }
      if (object.ins) {
        if (!Array.isArray(object.ins)) {
          throw TypeError(".structures.TransactionPayload.ins: array expected");
        }
        message.ins = [];
        for (var i = 0; i < object.ins.length; ++i) {
          if (typeof object.ins[i] !== "object") {
            throw TypeError(".structures.TransactionPayload.ins: object expected");
          }
          message.ins[i] = $root.structures.input.fromObject(object.ins[i]);
        }
      }
      if (object.outs) {
        if (!Array.isArray(object.outs)) {
          throw TypeError(".structures.TransactionPayload.outs: array expected");
        }
        message.outs = [];
        for (var i = 0; i < object.outs.length; ++i) {
          if (typeof object.outs[i] !== "object") {
            throw TypeError(".structures.TransactionPayload.outs: object expected");
          }
          message.outs[i] = $root.structures.output.fromObject(object.outs[i]);
        }
      }
      return message;
    };

    /**
     * Creates a plain object from a TransactionPayload message. Also converts values to other types if specified.
     * @function toObject
     * @memberof structures.TransactionPayload
     * @static
     * @param {structures.TransactionPayload} message TransactionPayload
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    TransactionPayload.toObject = function toObject(message, options) {
      if (!options) {
        options = {};
      }
      var object = {};
      if (options.arrays || options.defaults) {
        object.ins = [];
        object.outs = [];
      }
      if (options.defaults) {
        object.version = 0;
        object.conciliumId = 0;
      }
      if (message.ins && message.ins.length) {
        object.ins = [];
        for (var j = 0; j < message.ins.length; ++j)
          object.ins[j] = $root.structures.input.toObject(message.ins[j], options);
      }
      if (message.outs && message.outs.length) {
        object.outs = [];
        for (var j = 0; j < message.outs.length; ++j)
          object.outs[j] = $root.structures.output.toObject(message.outs[j], options);
      }
      if (message.version != null && message.hasOwnProperty("version")) {
        object.version = message.version;
      }
      if (message.conciliumId != null && message.hasOwnProperty("conciliumId")) {
        object.conciliumId = message.conciliumId;
      }
      return object;
    };

    /**
     * Converts this TransactionPayload to JSON.
     * @function toJSON
     * @memberof structures.TransactionPayload
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    TransactionPayload.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for TransactionPayload
     * @function getTypeUrl
     * @memberof structures.TransactionPayload
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    TransactionPayload.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
      if (typeUrlPrefix === undefined) {
        typeUrlPrefix = "type.googleapis.com";
      }
      return typeUrlPrefix + "/structures.TransactionPayload";
    };

    return TransactionPayload;
  })();

  /**
   * ClaimHashMethod enum.
   * @name structures.ClaimHashMethod
   * @enum {number}
   * @property {number} SIGHASH_ALL=0 SIGHASH_ALL value
   * @property {number} SIGHASH_NONE=100 SIGHASH_NONE value
   * @property {number} SIGHASH_SINGLE=101 SIGHASH_SINGLE value
   * @property {number} SIGHASH_ANYONECANPAY=102 SIGHASH_ANYONECANPAY value
   */
  structures.ClaimHashMethod = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "SIGHASH_ALL"] = 0;
    values[valuesById[100] = "SIGHASH_NONE"] = 100;
    values[valuesById[101] = "SIGHASH_SINGLE"] = 101;
    values[valuesById[102] = "SIGHASH_ANYONECANPAY"] = 102;
    return values;
  })();

  structures.Transaction = (function() {

    /**
     * Properties of a Transaction.
     * @memberof structures
     * @interface ITransaction
     * @property {structures.ITransactionPayload|null} [payload] Transaction payload
     * @property {Array.<Uint8Array>|null} [claimProofs] Transaction claimProofs
     * @property {Uint8Array|null} [txSignature] Transaction txSignature
     */

    /**
     * Constructs a new Transaction.
     * @memberof structures
     * @classdesc Represents a Transaction.
     * @implements ITransaction
     * @constructor
     * @param {structures.ITransaction=} [properties] Properties to set
     */
    function Transaction(properties) {
      this.claimProofs = [];
      if (properties) {
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) {
            this[keys[i]] = properties[keys[i]];
          }
      }
    }

    /**
     * Transaction payload.
     * @member {structures.ITransactionPayload|null|undefined} payload
     * @memberof structures.Transaction
     * @instance
     */
    Transaction.prototype.payload = null;

    /**
     * Transaction claimProofs.
     * @member {Array.<Uint8Array>} claimProofs
     * @memberof structures.Transaction
     * @instance
     */
    Transaction.prototype.claimProofs = $util.emptyArray;

    /**
     * Transaction txSignature.
     * @member {Uint8Array} txSignature
     * @memberof structures.Transaction
     * @instance
     */
    Transaction.prototype.txSignature = $util.newBuffer([]);

    /**
     * Creates a new Transaction instance using the specified properties.
     * @function create
     * @memberof structures.Transaction
     * @static
     * @param {structures.ITransaction=} [properties] Properties to set
     * @returns {structures.Transaction} Transaction instance
     */
    Transaction.create = function create(properties) {
      return new Transaction(properties);
    };

    /**
     * Encodes the specified Transaction message. Does not implicitly {@link structures.Transaction.verify|verify} messages.
     * @function encode
     * @memberof structures.Transaction
     * @static
     * @param {structures.ITransaction} message Transaction message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Transaction.encode = function encode(message, writer) {
      if (!writer) {
        writer = $Writer.create();
      }
      if (message.payload != null && Object.hasOwnProperty.call(message, "payload")) {
        $root.structures.TransactionPayload.encode(message.payload, writer.uint32(/* id 1, wireType 2 =*/10).fork())
          .ldelim();
      }
      if (message.claimProofs != null && message.claimProofs.length) {
        for (var i = 0; i < message.claimProofs.length; ++i)
          writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.claimProofs[i]);
      }
      if (message.txSignature != null && Object.hasOwnProperty.call(message, "txSignature")) {
        writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.txSignature);
      }
      return writer;
    };

    /**
     * Encodes the specified Transaction message, length delimited. Does not implicitly {@link structures.Transaction.verify|verify} messages.
     * @function encodeDelimited
     * @memberof structures.Transaction
     * @static
     * @param {structures.ITransaction} message Transaction message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Transaction.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Transaction message from the specified reader or buffer.
     * @function decode
     * @memberof structures.Transaction
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {structures.Transaction} Transaction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Transaction.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) {
        reader = $Reader.create(reader);
      }
      var end = length === undefined ? reader.len : reader.pos + length, message = new $root.structures.Transaction();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1: {
            message.payload = $root.structures.TransactionPayload.decode(reader, reader.uint32());
            break;
          }
          case 2: {
            if (!(message.claimProofs && message.claimProofs.length)) {
              message.claimProofs = [];
            }
            message.claimProofs.push(reader.bytes());
            break;
          }
          case 3: {
            message.txSignature = reader.bytes();
            break;
          }
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes a Transaction message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof structures.Transaction
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {structures.Transaction} Transaction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Transaction.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) {
        reader = new $Reader(reader);
      }
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Transaction message.
     * @function verify
     * @memberof structures.Transaction
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Transaction.verify = function verify(message) {
      if (typeof message !== "object" || message === null) {
        return "object expected";
      }
      if (message.payload != null && message.hasOwnProperty("payload")) {
        var error = $root.structures.TransactionPayload.verify(message.payload);
        if (error) {
          return "payload." + error;
        }
      }
      if (message.claimProofs != null && message.hasOwnProperty("claimProofs")) {
        if (!Array.isArray(message.claimProofs)) {
          return "claimProofs: array expected";
        }
        for (var i = 0; i < message.claimProofs.length; ++i)
          if (!(message.claimProofs[i] && typeof message.claimProofs[i].length === "number" ||
                $util.isString(message.claimProofs[i]))) {
            return "claimProofs: buffer[] expected";
          }
      }
      if (message.txSignature != null && message.hasOwnProperty("txSignature")) {
        if (!(message.txSignature && typeof message.txSignature.length === "number" ||
              $util.isString(message.txSignature))) {
          return "txSignature: buffer expected";
        }
      }
      return null;
    };

    /**
     * Creates a Transaction message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof structures.Transaction
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {structures.Transaction} Transaction
     */
    Transaction.fromObject = function fromObject(object) {
      if (object instanceof $root.structures.Transaction) {
        return object;
      }
      var message = new $root.structures.Transaction();
      if (object.payload != null) {
        if (typeof object.payload !== "object") {
          throw TypeError(".structures.Transaction.payload: object expected");
        }
        message.payload = $root.structures.TransactionPayload.fromObject(object.payload);
      }
      if (object.claimProofs) {
        if (!Array.isArray(object.claimProofs)) {
          throw TypeError(".structures.Transaction.claimProofs: array expected");
        }
        message.claimProofs = [];
        for (var i = 0; i < object.claimProofs.length; ++i)
          if (typeof object.claimProofs[i] === "string") {
            $util.base64.decode(object.claimProofs[i],
              message.claimProofs[i] = $util.newBuffer($util.base64.length(object.claimProofs[i])), 0
            );
          } else if (object.claimProofs[i].length >= 0) {
            message.claimProofs[i] = object.claimProofs[i];
          }
      }
      if (object.txSignature != null) {
        if (typeof object.txSignature === "string") {
          $util.base64.decode(object.txSignature,
            message.txSignature = $util.newBuffer($util.base64.length(object.txSignature)), 0
          );
        } else if (object.txSignature.length >= 0) {
          message.txSignature = object.txSignature;
        }
      }
      return message;
    };

    /**
     * Creates a plain object from a Transaction message. Also converts values to other types if specified.
     * @function toObject
     * @memberof structures.Transaction
     * @static
     * @param {structures.Transaction} message Transaction
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Transaction.toObject = function toObject(message, options) {
      if (!options) {
        options = {};
      }
      var object = {};
      if (options.arrays || options.defaults) {
        object.claimProofs = [];
      }
      if (options.defaults) {
        object.payload = null;
        if (options.bytes === String) {
          object.txSignature = "";
        } else {
          object.txSignature = [];
          if (options.bytes !== Array) {
            object.txSignature = $util.newBuffer(object.txSignature);
          }
        }
      }
      if (message.payload != null && message.hasOwnProperty("payload")) {
        object.payload = $root.structures.TransactionPayload.toObject(message.payload, options);
      }
      if (message.claimProofs && message.claimProofs.length) {
        object.claimProofs = [];
        for (var j = 0; j < message.claimProofs.length; ++j)
          object.claimProofs[j] = options.bytes === String
            ? $util.base64.encode(message.claimProofs[j], 0, message.claimProofs[j].length)
            : options.bytes === Array ? Array.prototype.slice.call(message.claimProofs[j]) : message.claimProofs[j];
      }
      if (message.txSignature != null && message.hasOwnProperty("txSignature")) {
        object.txSignature = options.bytes === String
          ? $util.base64.encode(message.txSignature, 0, message.txSignature.length)
          : options.bytes === Array ? Array.prototype.slice.call(message.txSignature) : message.txSignature;
      }
      return object;
    };

    /**
     * Converts this Transaction to JSON.
     * @function toJSON
     * @memberof structures.Transaction
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Transaction.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for Transaction
     * @function getTypeUrl
     * @memberof structures.Transaction
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Transaction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
      if (typeUrlPrefix === undefined) {
        typeUrlPrefix = "type.googleapis.com";
      }
      return typeUrlPrefix + "/structures.Transaction";
    };

    return Transaction;
  })();

  structures.BlockHeader = (function() {

    /**
     * Properties of a BlockHeader.
     * @memberof structures
     * @interface IBlockHeader
     * @property {Array.<Uint8Array>|null} [parentHashes] BlockHeader parentHashes
     * @property {Uint8Array|null} [merkleRoot] BlockHeader merkleRoot
     * @property {number|null} [conciliumId] BlockHeader conciliumId
     * @property {number|null} [timestamp] BlockHeader timestamp
     * @property {number|null} [version] BlockHeader version
     * @property {number|null} [height] BlockHeader height
     */

    /**
     * Constructs a new BlockHeader.
     * @memberof structures
     * @classdesc Represents a BlockHeader.
     * @implements IBlockHeader
     * @constructor
     * @param {structures.IBlockHeader=} [properties] Properties to set
     */
    function BlockHeader(properties) {
      this.parentHashes = [];
      if (properties) {
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) {
            this[keys[i]] = properties[keys[i]];
          }
      }
    }

    /**
     * BlockHeader parentHashes.
     * @member {Array.<Uint8Array>} parentHashes
     * @memberof structures.BlockHeader
     * @instance
     */
    BlockHeader.prototype.parentHashes = $util.emptyArray;

    /**
     * BlockHeader merkleRoot.
     * @member {Uint8Array} merkleRoot
     * @memberof structures.BlockHeader
     * @instance
     */
    BlockHeader.prototype.merkleRoot = $util.newBuffer([]);

    /**
     * BlockHeader conciliumId.
     * @member {number} conciliumId
     * @memberof structures.BlockHeader
     * @instance
     */
    BlockHeader.prototype.conciliumId = 0;

    /**
     * BlockHeader timestamp.
     * @member {number} timestamp
     * @memberof structures.BlockHeader
     * @instance
     */
    BlockHeader.prototype.timestamp = 0;

    /**
     * BlockHeader version.
     * @member {number} version
     * @memberof structures.BlockHeader
     * @instance
     */
    BlockHeader.prototype.version = 0;

    /**
     * BlockHeader height.
     * @member {number} height
     * @memberof structures.BlockHeader
     * @instance
     */
    BlockHeader.prototype.height = 0;

    /**
     * Creates a new BlockHeader instance using the specified properties.
     * @function create
     * @memberof structures.BlockHeader
     * @static
     * @param {structures.IBlockHeader=} [properties] Properties to set
     * @returns {structures.BlockHeader} BlockHeader instance
     */
    BlockHeader.create = function create(properties) {
      return new BlockHeader(properties);
    };

    /**
     * Encodes the specified BlockHeader message. Does not implicitly {@link structures.BlockHeader.verify|verify} messages.
     * @function encode
     * @memberof structures.BlockHeader
     * @static
     * @param {structures.IBlockHeader} message BlockHeader message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BlockHeader.encode = function encode(message, writer) {
      if (!writer) {
        writer = $Writer.create();
      }
      if (message.parentHashes != null && message.parentHashes.length) {
        for (var i = 0; i < message.parentHashes.length; ++i)
          writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.parentHashes[i]);
      }
      if (message.merkleRoot != null && Object.hasOwnProperty.call(message, "merkleRoot")) {
        writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.merkleRoot);
      }
      if (message.conciliumId != null && Object.hasOwnProperty.call(message, "conciliumId")) {
        writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.conciliumId);
      }
      if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp")) {
        writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.timestamp);
      }
      if (message.version != null && Object.hasOwnProperty.call(message, "version")) {
        writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.version);
      }
      if (message.height != null && Object.hasOwnProperty.call(message, "height")) {
        writer.uint32(/* id 8, wireType 0 =*/64).uint32(message.height);
      }
      return writer;
    };

    /**
     * Encodes the specified BlockHeader message, length delimited. Does not implicitly {@link structures.BlockHeader.verify|verify} messages.
     * @function encodeDelimited
     * @memberof structures.BlockHeader
     * @static
     * @param {structures.IBlockHeader} message BlockHeader message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BlockHeader.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a BlockHeader message from the specified reader or buffer.
     * @function decode
     * @memberof structures.BlockHeader
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {structures.BlockHeader} BlockHeader
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BlockHeader.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) {
        reader = $Reader.create(reader);
      }
      var end = length === undefined ? reader.len : reader.pos + length, message = new $root.structures.BlockHeader();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1: {
            if (!(message.parentHashes && message.parentHashes.length)) {
              message.parentHashes = [];
            }
            message.parentHashes.push(reader.bytes());
            break;
          }
          case 2: {
            message.merkleRoot = reader.bytes();
            break;
          }
          case 3: {
            message.conciliumId = reader.uint32();
            break;
          }
          case 6: {
            message.timestamp = reader.uint32();
            break;
          }
          case 7: {
            message.version = reader.uint32();
            break;
          }
          case 8: {
            message.height = reader.uint32();
            break;
          }
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes a BlockHeader message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof structures.BlockHeader
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {structures.BlockHeader} BlockHeader
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BlockHeader.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) {
        reader = new $Reader(reader);
      }
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a BlockHeader message.
     * @function verify
     * @memberof structures.BlockHeader
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    BlockHeader.verify = function verify(message) {
      if (typeof message !== "object" || message === null) {
        return "object expected";
      }
      if (message.parentHashes != null && message.hasOwnProperty("parentHashes")) {
        if (!Array.isArray(message.parentHashes)) {
          return "parentHashes: array expected";
        }
        for (var i = 0; i < message.parentHashes.length; ++i)
          if (!(message.parentHashes[i] && typeof message.parentHashes[i].length === "number" ||
                $util.isString(message.parentHashes[i]))) {
            return "parentHashes: buffer[] expected";
          }
      }
      if (message.merkleRoot != null && message.hasOwnProperty("merkleRoot")) {
        if (!(message.merkleRoot && typeof message.merkleRoot.length === "number" ||
              $util.isString(message.merkleRoot))) {
          return "merkleRoot: buffer expected";
        }
      }
      if (message.conciliumId != null && message.hasOwnProperty("conciliumId")) {
        if (!$util.isInteger(message.conciliumId)) {
          return "conciliumId: integer expected";
        }
      }
      if (message.timestamp != null && message.hasOwnProperty("timestamp")) {
        if (!$util.isInteger(message.timestamp)) {
          return "timestamp: integer expected";
        }
      }
      if (message.version != null && message.hasOwnProperty("version")) {
        if (!$util.isInteger(message.version)) {
          return "version: integer expected";
        }
      }
      if (message.height != null && message.hasOwnProperty("height")) {
        if (!$util.isInteger(message.height)) {
          return "height: integer expected";
        }
      }
      return null;
    };

    /**
     * Creates a BlockHeader message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof structures.BlockHeader
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {structures.BlockHeader} BlockHeader
     */
    BlockHeader.fromObject = function fromObject(object) {
      if (object instanceof $root.structures.BlockHeader) {
        return object;
      }
      var message = new $root.structures.BlockHeader();
      if (object.parentHashes) {
        if (!Array.isArray(object.parentHashes)) {
          throw TypeError(".structures.BlockHeader.parentHashes: array expected");
        }
        message.parentHashes = [];
        for (var i = 0; i < object.parentHashes.length; ++i)
          if (typeof object.parentHashes[i] === "string") {
            $util.base64.decode(object.parentHashes[i],
              message.parentHashes[i] = $util.newBuffer($util.base64.length(object.parentHashes[i])), 0
            );
          } else if (object.parentHashes[i].length >= 0) {
            message.parentHashes[i] = object.parentHashes[i];
          }
      }
      if (object.merkleRoot != null) {
        if (typeof object.merkleRoot === "string") {
          $util.base64.decode(object.merkleRoot,
            message.merkleRoot = $util.newBuffer($util.base64.length(object.merkleRoot)), 0
          );
        } else if (object.merkleRoot.length >= 0) {
          message.merkleRoot = object.merkleRoot;
        }
      }
      if (object.conciliumId != null) {
        message.conciliumId = object.conciliumId >>> 0;
      }
      if (object.timestamp != null) {
        message.timestamp = object.timestamp >>> 0;
      }
      if (object.version != null) {
        message.version = object.version >>> 0;
      }
      if (object.height != null) {
        message.height = object.height >>> 0;
      }
      return message;
    };

    /**
     * Creates a plain object from a BlockHeader message. Also converts values to other types if specified.
     * @function toObject
     * @memberof structures.BlockHeader
     * @static
     * @param {structures.BlockHeader} message BlockHeader
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    BlockHeader.toObject = function toObject(message, options) {
      if (!options) {
        options = {};
      }
      var object = {};
      if (options.arrays || options.defaults) {
        object.parentHashes = [];
      }
      if (options.defaults) {
        if (options.bytes === String) {
          object.merkleRoot = "";
        } else {
          object.merkleRoot = [];
          if (options.bytes !== Array) {
            object.merkleRoot = $util.newBuffer(object.merkleRoot);
          }
        }
        object.conciliumId = 0;
        object.timestamp = 0;
        object.version = 0;
        object.height = 0;
      }
      if (message.parentHashes && message.parentHashes.length) {
        object.parentHashes = [];
        for (var j = 0; j < message.parentHashes.length; ++j)
          object.parentHashes[j] = options.bytes === String
            ? $util.base64.encode(message.parentHashes[j], 0, message.parentHashes[j].length)
            : options.bytes === Array ? Array.prototype.slice.call(message.parentHashes[j]) : message.parentHashes[j];
      }
      if (message.merkleRoot != null && message.hasOwnProperty("merkleRoot")) {
        object.merkleRoot = options.bytes === String
          ? $util.base64.encode(message.merkleRoot, 0, message.merkleRoot.length)
          : options.bytes === Array ? Array.prototype.slice.call(message.merkleRoot) : message.merkleRoot;
      }
      if (message.conciliumId != null && message.hasOwnProperty("conciliumId")) {
        object.conciliumId = message.conciliumId;
      }
      if (message.timestamp != null && message.hasOwnProperty("timestamp")) {
        object.timestamp = message.timestamp;
      }
      if (message.version != null && message.hasOwnProperty("version")) {
        object.version = message.version;
      }
      if (message.height != null && message.hasOwnProperty("height")) {
        object.height = message.height;
      }
      return object;
    };

    /**
     * Converts this BlockHeader to JSON.
     * @function toJSON
     * @memberof structures.BlockHeader
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    BlockHeader.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for BlockHeader
     * @function getTypeUrl
     * @memberof structures.BlockHeader
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    BlockHeader.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
      if (typeUrlPrefix === undefined) {
        typeUrlPrefix = "type.googleapis.com";
      }
      return typeUrlPrefix + "/structures.BlockHeader";
    };

    return BlockHeader;
  })();

  structures.Block = (function() {

    /**
     * Properties of a Block.
     * @memberof structures
     * @interface IBlock
     * @property {structures.IBlockHeader|null} [header] Block header
     * @property {Array.<structures.ITransaction>|null} [txns] Block txns
     * @property {Array.<Uint8Array>|null} [signatures] Block signatures
     */

    /**
     * Constructs a new Block.
     * @memberof structures
     * @classdesc Represents a Block.
     * @implements IBlock
     * @constructor
     * @param {structures.IBlock=} [properties] Properties to set
     */
    function Block(properties) {
      this.txns = [];
      this.signatures = [];
      if (properties) {
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) {
            this[keys[i]] = properties[keys[i]];
          }
      }
    }

    /**
     * Block header.
     * @member {structures.IBlockHeader|null|undefined} header
     * @memberof structures.Block
     * @instance
     */
    Block.prototype.header = null;

    /**
     * Block txns.
     * @member {Array.<structures.ITransaction>} txns
     * @memberof structures.Block
     * @instance
     */
    Block.prototype.txns = $util.emptyArray;

    /**
     * Block signatures.
     * @member {Array.<Uint8Array>} signatures
     * @memberof structures.Block
     * @instance
     */
    Block.prototype.signatures = $util.emptyArray;

    /**
     * Creates a new Block instance using the specified properties.
     * @function create
     * @memberof structures.Block
     * @static
     * @param {structures.IBlock=} [properties] Properties to set
     * @returns {structures.Block} Block instance
     */
    Block.create = function create(properties) {
      return new Block(properties);
    };

    /**
     * Encodes the specified Block message. Does not implicitly {@link structures.Block.verify|verify} messages.
     * @function encode
     * @memberof structures.Block
     * @static
     * @param {structures.IBlock} message Block message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Block.encode = function encode(message, writer) {
      if (!writer) {
        writer = $Writer.create();
      }
      if (message.header != null && Object.hasOwnProperty.call(message, "header")) {
        $root.structures.BlockHeader.encode(message.header, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
      }
      if (message.txns != null && message.txns.length) {
        for (var i = 0; i < message.txns.length; ++i)
          $root.structures.Transaction.encode(message.txns[i], writer.uint32(/* id 2, wireType 2 =*/18).fork())
            .ldelim();
      }
      if (message.signatures != null && message.signatures.length) {
        for (var i = 0; i < message.signatures.length; ++i)
          writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.signatures[i]);
      }
      return writer;
    };

    /**
     * Encodes the specified Block message, length delimited. Does not implicitly {@link structures.Block.verify|verify} messages.
     * @function encodeDelimited
     * @memberof structures.Block
     * @static
     * @param {structures.IBlock} message Block message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Block.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Block message from the specified reader or buffer.
     * @function decode
     * @memberof structures.Block
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {structures.Block} Block
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Block.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) {
        reader = $Reader.create(reader);
      }
      var end = length === undefined ? reader.len : reader.pos + length, message = new $root.structures.Block();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1: {
            message.header = $root.structures.BlockHeader.decode(reader, reader.uint32());
            break;
          }
          case 2: {
            if (!(message.txns && message.txns.length)) {
              message.txns = [];
            }
            message.txns.push($root.structures.Transaction.decode(reader, reader.uint32()));
            break;
          }
          case 3: {
            if (!(message.signatures && message.signatures.length)) {
              message.signatures = [];
            }
            message.signatures.push(reader.bytes());
            break;
          }
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes a Block message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof structures.Block
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {structures.Block} Block
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Block.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) {
        reader = new $Reader(reader);
      }
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Block message.
     * @function verify
     * @memberof structures.Block
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Block.verify = function verify(message) {
      if (typeof message !== "object" || message === null) {
        return "object expected";
      }
      if (message.header != null && message.hasOwnProperty("header")) {
        var error = $root.structures.BlockHeader.verify(message.header);
        if (error) {
          return "header." + error;
        }
      }
      if (message.txns != null && message.hasOwnProperty("txns")) {
        if (!Array.isArray(message.txns)) {
          return "txns: array expected";
        }
        for (var i = 0; i < message.txns.length; ++i) {
          var error = $root.structures.Transaction.verify(message.txns[i]);
          if (error) {
            return "txns." + error;
          }
        }
      }
      if (message.signatures != null && message.hasOwnProperty("signatures")) {
        if (!Array.isArray(message.signatures)) {
          return "signatures: array expected";
        }
        for (var i = 0; i < message.signatures.length; ++i)
          if (!(message.signatures[i] && typeof message.signatures[i].length === "number" ||
                $util.isString(message.signatures[i]))) {
            return "signatures: buffer[] expected";
          }
      }
      return null;
    };

    /**
     * Creates a Block message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof structures.Block
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {structures.Block} Block
     */
    Block.fromObject = function fromObject(object) {
      if (object instanceof $root.structures.Block) {
        return object;
      }
      var message = new $root.structures.Block();
      if (object.header != null) {
        if (typeof object.header !== "object") {
          throw TypeError(".structures.Block.header: object expected");
        }
        message.header = $root.structures.BlockHeader.fromObject(object.header);
      }
      if (object.txns) {
        if (!Array.isArray(object.txns)) {
          throw TypeError(".structures.Block.txns: array expected");
        }
        message.txns = [];
        for (var i = 0; i < object.txns.length; ++i) {
          if (typeof object.txns[i] !== "object") {
            throw TypeError(".structures.Block.txns: object expected");
          }
          message.txns[i] = $root.structures.Transaction.fromObject(object.txns[i]);
        }
      }
      if (object.signatures) {
        if (!Array.isArray(object.signatures)) {
          throw TypeError(".structures.Block.signatures: array expected");
        }
        message.signatures = [];
        for (var i = 0; i < object.signatures.length; ++i)
          if (typeof object.signatures[i] === "string") {
            $util.base64.decode(object.signatures[i],
              message.signatures[i] = $util.newBuffer($util.base64.length(object.signatures[i])), 0
            );
          } else if (object.signatures[i].length >= 0) {
            message.signatures[i] = object.signatures[i];
          }
      }
      return message;
    };

    /**
     * Creates a plain object from a Block message. Also converts values to other types if specified.
     * @function toObject
     * @memberof structures.Block
     * @static
     * @param {structures.Block} message Block
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Block.toObject = function toObject(message, options) {
      if (!options) {
        options = {};
      }
      var object = {};
      if (options.arrays || options.defaults) {
        object.txns = [];
        object.signatures = [];
      }
      if (options.defaults) {
        object.header = null;
      }
      if (message.header != null && message.hasOwnProperty("header")) {
        object.header = $root.structures.BlockHeader.toObject(message.header, options);
      }
      if (message.txns && message.txns.length) {
        object.txns = [];
        for (var j = 0; j < message.txns.length; ++j)
          object.txns[j] = $root.structures.Transaction.toObject(message.txns[j], options);
      }
      if (message.signatures && message.signatures.length) {
        object.signatures = [];
        for (var j = 0; j < message.signatures.length; ++j)
          object.signatures[j] = options.bytes === String
            ? $util.base64.encode(message.signatures[j], 0, message.signatures[j].length)
            : options.bytes === Array ? Array.prototype.slice.call(message.signatures[j]) : message.signatures[j];
      }
      return object;
    };

    /**
     * Converts this Block to JSON.
     * @function toJSON
     * @memberof structures.Block
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Block.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for Block
     * @function getTypeUrl
     * @memberof structures.Block
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Block.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
      if (typeUrlPrefix === undefined) {
        typeUrlPrefix = "type.googleapis.com";
      }
      return typeUrlPrefix + "/structures.Block";
    };

    return Block;
  })();

  /**
   * InventoryTypes enum.
   * @name structures.InventoryTypes
   * @enum {number}
   * @property {number} INV_TX=11 INV_TX value
   * @property {number} INV_BLOCK=21 INV_BLOCK value
   */
  structures.InventoryTypes = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[11] = "INV_TX"] = 11;
    values[valuesById[21] = "INV_BLOCK"] = 21;
    return values;
  })();

  structures.InventoryVector = (function() {

    /**
     * Properties of an InventoryVector.
     * @memberof structures
     * @interface IInventoryVector
     * @property {structures.InventoryTypes|null} [type] InventoryVector type
     * @property {Uint8Array|null} [hash] InventoryVector hash
     */

    /**
     * Constructs a new InventoryVector.
     * @memberof structures
     * @classdesc Represents an InventoryVector.
     * @implements IInventoryVector
     * @constructor
     * @param {structures.IInventoryVector=} [properties] Properties to set
     */
    function InventoryVector(properties) {
      if (properties) {
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) {
            this[keys[i]] = properties[keys[i]];
          }
      }
    }

    /**
     * InventoryVector type.
     * @member {structures.InventoryTypes} type
     * @memberof structures.InventoryVector
     * @instance
     */
    InventoryVector.prototype.type = 11;

    /**
     * InventoryVector hash.
     * @member {Uint8Array} hash
     * @memberof structures.InventoryVector
     * @instance
     */
    InventoryVector.prototype.hash = $util.newBuffer([]);

    /**
     * Creates a new InventoryVector instance using the specified properties.
     * @function create
     * @memberof structures.InventoryVector
     * @static
     * @param {structures.IInventoryVector=} [properties] Properties to set
     * @returns {structures.InventoryVector} InventoryVector instance
     */
    InventoryVector.create = function create(properties) {
      return new InventoryVector(properties);
    };

    /**
     * Encodes the specified InventoryVector message. Does not implicitly {@link structures.InventoryVector.verify|verify} messages.
     * @function encode
     * @memberof structures.InventoryVector
     * @static
     * @param {structures.IInventoryVector} message InventoryVector message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    InventoryVector.encode = function encode(message, writer) {
      if (!writer) {
        writer = $Writer.create();
      }
      if (message.type != null && Object.hasOwnProperty.call(message, "type")) {
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
      }
      if (message.hash != null && Object.hasOwnProperty.call(message, "hash")) {
        writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.hash);
      }
      return writer;
    };

    /**
     * Encodes the specified InventoryVector message, length delimited. Does not implicitly {@link structures.InventoryVector.verify|verify} messages.
     * @function encodeDelimited
     * @memberof structures.InventoryVector
     * @static
     * @param {structures.IInventoryVector} message InventoryVector message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    InventoryVector.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an InventoryVector message from the specified reader or buffer.
     * @function decode
     * @memberof structures.InventoryVector
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {structures.InventoryVector} InventoryVector
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    InventoryVector.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) {
        reader = $Reader.create(reader);
      }
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.structures.InventoryVector();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1: {
            message.type = reader.int32();
            break;
          }
          case 2: {
            message.hash = reader.bytes();
            break;
          }
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes an InventoryVector message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof structures.InventoryVector
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {structures.InventoryVector} InventoryVector
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    InventoryVector.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) {
        reader = new $Reader(reader);
      }
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an InventoryVector message.
     * @function verify
     * @memberof structures.InventoryVector
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    InventoryVector.verify = function verify(message) {
      if (typeof message !== "object" || message === null) {
        return "object expected";
      }
      if (message.type != null && message.hasOwnProperty("type")) {
        switch (message.type) {
          default:
            return "type: enum value expected";
          case 11:
          case 21:
            break;
        }
      }
      if (message.hash != null && message.hasOwnProperty("hash")) {
        if (!(message.hash && typeof message.hash.length === "number" || $util.isString(message.hash))) {
          return "hash: buffer expected";
        }
      }
      return null;
    };

    /**
     * Creates an InventoryVector message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof structures.InventoryVector
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {structures.InventoryVector} InventoryVector
     */
    InventoryVector.fromObject = function fromObject(object) {
      if (object instanceof $root.structures.InventoryVector) {
        return object;
      }
      var message = new $root.structures.InventoryVector();
      switch (object.type) {
        default:
          if (typeof object.type === "number") {
            message.type = object.type;
            break;
          }
          break;
        case "INV_TX":
        case 11:
          message.type = 11;
          break;
        case "INV_BLOCK":
        case 21:
          message.type = 21;
          break;
      }
      if (object.hash != null) {
        if (typeof object.hash === "string") {
          $util.base64.decode(object.hash, message.hash = $util.newBuffer($util.base64.length(object.hash)), 0);
        } else if (object.hash.length >= 0) {
          message.hash = object.hash;
        }
      }
      return message;
    };

    /**
     * Creates a plain object from an InventoryVector message. Also converts values to other types if specified.
     * @function toObject
     * @memberof structures.InventoryVector
     * @static
     * @param {structures.InventoryVector} message InventoryVector
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    InventoryVector.toObject = function toObject(message, options) {
      if (!options) {
        options = {};
      }
      var object = {};
      if (options.defaults) {
        object.type = options.enums === String ? "INV_TX" : 11;
        if (options.bytes === String) {
          object.hash = "";
        } else {
          object.hash = [];
          if (options.bytes !== Array) {
            object.hash = $util.newBuffer(object.hash);
          }
        }
      }
      if (message.type != null && message.hasOwnProperty("type")) {
        object.type = options.enums === String ? $root.structures.InventoryTypes[message.type] === undefined
          ? message.type
          : $root.structures.InventoryTypes[message.type] : message.type;
      }
      if (message.hash != null && message.hasOwnProperty("hash")) {
        object.hash =
          options.bytes === String ? $util.base64.encode(message.hash, 0, message.hash.length) : options.bytes === Array
            ? Array.prototype.slice.call(message.hash)
            : message.hash;
      }
      return object;
    };

    /**
     * Converts this InventoryVector to JSON.
     * @function toJSON
     * @memberof structures.InventoryVector
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    InventoryVector.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for InventoryVector
     * @function getTypeUrl
     * @memberof structures.InventoryVector
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    InventoryVector.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
      if (typeUrlPrefix === undefined) {
        typeUrlPrefix = "type.googleapis.com";
      }
      return typeUrlPrefix + "/structures.InventoryVector";
    };

    return InventoryVector;
  })();

  structures.Inventory = (function() {

    /**
     * Properties of an Inventory.
     * @memberof structures
     * @interface IInventory
     * @property {Array.<structures.IInventoryVector>|null} [invVector] Inventory invVector
     */

    /**
     * Constructs a new Inventory.
     * @memberof structures
     * @classdesc Represents an Inventory.
     * @implements IInventory
     * @constructor
     * @param {structures.IInventory=} [properties] Properties to set
     */
    function Inventory(properties) {
      this.invVector = [];
      if (properties) {
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) {
            this[keys[i]] = properties[keys[i]];
          }
      }
    }

    /**
     * Inventory invVector.
     * @member {Array.<structures.IInventoryVector>} invVector
     * @memberof structures.Inventory
     * @instance
     */
    Inventory.prototype.invVector = $util.emptyArray;

    /**
     * Creates a new Inventory instance using the specified properties.
     * @function create
     * @memberof structures.Inventory
     * @static
     * @param {structures.IInventory=} [properties] Properties to set
     * @returns {structures.Inventory} Inventory instance
     */
    Inventory.create = function create(properties) {
      return new Inventory(properties);
    };

    /**
     * Encodes the specified Inventory message. Does not implicitly {@link structures.Inventory.verify|verify} messages.
     * @function encode
     * @memberof structures.Inventory
     * @static
     * @param {structures.IInventory} message Inventory message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Inventory.encode = function encode(message, writer) {
      if (!writer) {
        writer = $Writer.create();
      }
      if (message.invVector != null && message.invVector.length) {
        for (var i = 0; i < message.invVector.length; ++i)
          $root.structures.InventoryVector.encode(message.invVector[i], writer.uint32(/* id 1, wireType 2 =*/10).fork())
            .ldelim();
      }
      return writer;
    };

    /**
     * Encodes the specified Inventory message, length delimited. Does not implicitly {@link structures.Inventory.verify|verify} messages.
     * @function encodeDelimited
     * @memberof structures.Inventory
     * @static
     * @param {structures.IInventory} message Inventory message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Inventory.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an Inventory message from the specified reader or buffer.
     * @function decode
     * @memberof structures.Inventory
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {structures.Inventory} Inventory
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Inventory.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) {
        reader = $Reader.create(reader);
      }
      var end = length === undefined ? reader.len : reader.pos + length, message = new $root.structures.Inventory();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1: {
            if (!(message.invVector && message.invVector.length)) {
              message.invVector = [];
            }
            message.invVector.push($root.structures.InventoryVector.decode(reader, reader.uint32()));
            break;
          }
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes an Inventory message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof structures.Inventory
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {structures.Inventory} Inventory
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Inventory.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) {
        reader = new $Reader(reader);
      }
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an Inventory message.
     * @function verify
     * @memberof structures.Inventory
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Inventory.verify = function verify(message) {
      if (typeof message !== "object" || message === null) {
        return "object expected";
      }
      if (message.invVector != null && message.hasOwnProperty("invVector")) {
        if (!Array.isArray(message.invVector)) {
          return "invVector: array expected";
        }
        for (var i = 0; i < message.invVector.length; ++i) {
          var error = $root.structures.InventoryVector.verify(message.invVector[i]);
          if (error) {
            return "invVector." + error;
          }
        }
      }
      return null;
    };

    /**
     * Creates an Inventory message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof structures.Inventory
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {structures.Inventory} Inventory
     */
    Inventory.fromObject = function fromObject(object) {
      if (object instanceof $root.structures.Inventory) {
        return object;
      }
      var message = new $root.structures.Inventory();
      if (object.invVector) {
        if (!Array.isArray(object.invVector)) {
          throw TypeError(".structures.Inventory.invVector: array expected");
        }
        message.invVector = [];
        for (var i = 0; i < object.invVector.length; ++i) {
          if (typeof object.invVector[i] !== "object") {
            throw TypeError(".structures.Inventory.invVector: object expected");
          }
          message.invVector[i] = $root.structures.InventoryVector.fromObject(object.invVector[i]);
        }
      }
      return message;
    };

    /**
     * Creates a plain object from an Inventory message. Also converts values to other types if specified.
     * @function toObject
     * @memberof structures.Inventory
     * @static
     * @param {structures.Inventory} message Inventory
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Inventory.toObject = function toObject(message, options) {
      if (!options) {
        options = {};
      }
      var object = {};
      if (options.arrays || options.defaults) {
        object.invVector = [];
      }
      if (message.invVector && message.invVector.length) {
        object.invVector = [];
        for (var j = 0; j < message.invVector.length; ++j)
          object.invVector[j] = $root.structures.InventoryVector.toObject(message.invVector[j], options);
      }
      return object;
    };

    /**
     * Converts this Inventory to JSON.
     * @function toJSON
     * @memberof structures.Inventory
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Inventory.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for Inventory
     * @function getTypeUrl
     * @memberof structures.Inventory
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Inventory.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
      if (typeUrlPrefix === undefined) {
        typeUrlPrefix = "type.googleapis.com";
      }
      return typeUrlPrefix + "/structures.Inventory";
    };

    return Inventory;
  })();

  structures.UTXO = (function() {

    /**
     * Properties of a UTXO.
     * @memberof structures
     * @interface IUTXO
     * @property {Array.<number>|null} [arrIndexes] UTXO arrIndexes
     * @property {Array.<structures.Ioutput>|null} [arrOutputs] UTXO arrOutputs
     */

    /**
     * Constructs a new UTXO.
     * @memberof structures
     * @classdesc Represents a UTXO.
     * @implements IUTXO
     * @constructor
     * @param {structures.IUTXO=} [properties] Properties to set
     */
    function UTXO(properties) {
      this.arrIndexes = [];
      this.arrOutputs = [];
      if (properties) {
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) {
            this[keys[i]] = properties[keys[i]];
          }
      }
    }

    /**
     * UTXO arrIndexes.
     * @member {Array.<number>} arrIndexes
     * @memberof structures.UTXO
     * @instance
     */
    UTXO.prototype.arrIndexes = $util.emptyArray;

    /**
     * UTXO arrOutputs.
     * @member {Array.<structures.Ioutput>} arrOutputs
     * @memberof structures.UTXO
     * @instance
     */
    UTXO.prototype.arrOutputs = $util.emptyArray;

    /**
     * Creates a new UTXO instance using the specified properties.
     * @function create
     * @memberof structures.UTXO
     * @static
     * @param {structures.IUTXO=} [properties] Properties to set
     * @returns {structures.UTXO} UTXO instance
     */
    UTXO.create = function create(properties) {
      return new UTXO(properties);
    };

    /**
     * Encodes the specified UTXO message. Does not implicitly {@link structures.UTXO.verify|verify} messages.
     * @function encode
     * @memberof structures.UTXO
     * @static
     * @param {structures.IUTXO} message UTXO message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UTXO.encode = function encode(message, writer) {
      if (!writer) {
        writer = $Writer.create();
      }
      if (message.arrIndexes != null && message.arrIndexes.length) {
        writer.uint32(/* id 1, wireType 2 =*/10).fork();
        for (var i = 0; i < message.arrIndexes.length; ++i)
          writer.uint32(message.arrIndexes[i]);
        writer.ldelim();
      }
      if (message.arrOutputs != null && message.arrOutputs.length) {
        for (var i = 0; i < message.arrOutputs.length; ++i)
          $root.structures.output.encode(message.arrOutputs[i], writer.uint32(/* id 2, wireType 2 =*/18).fork())
            .ldelim();
      }
      return writer;
    };

    /**
     * Encodes the specified UTXO message, length delimited. Does not implicitly {@link structures.UTXO.verify|verify} messages.
     * @function encodeDelimited
     * @memberof structures.UTXO
     * @static
     * @param {structures.IUTXO} message UTXO message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UTXO.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a UTXO message from the specified reader or buffer.
     * @function decode
     * @memberof structures.UTXO
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {structures.UTXO} UTXO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UTXO.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) {
        reader = $Reader.create(reader);
      }
      var end = length === undefined ? reader.len : reader.pos + length, message = new $root.structures.UTXO();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1: {
            if (!(message.arrIndexes && message.arrIndexes.length)) {
              message.arrIndexes = [];
            }
            if ((tag & 7) === 2) {
              var end2 = reader.uint32() + reader.pos;
              while (reader.pos < end2)
                message.arrIndexes.push(reader.uint32());
            } else {
              message.arrIndexes.push(reader.uint32());
            }
            break;
          }
          case 2: {
            if (!(message.arrOutputs && message.arrOutputs.length)) {
              message.arrOutputs = [];
            }
            message.arrOutputs.push($root.structures.output.decode(reader, reader.uint32()));
            break;
          }
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes a UTXO message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof structures.UTXO
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {structures.UTXO} UTXO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UTXO.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) {
        reader = new $Reader(reader);
      }
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a UTXO message.
     * @function verify
     * @memberof structures.UTXO
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    UTXO.verify = function verify(message) {
      if (typeof message !== "object" || message === null) {
        return "object expected";
      }
      if (message.arrIndexes != null && message.hasOwnProperty("arrIndexes")) {
        if (!Array.isArray(message.arrIndexes)) {
          return "arrIndexes: array expected";
        }
        for (var i = 0; i < message.arrIndexes.length; ++i)
          if (!$util.isInteger(message.arrIndexes[i])) {
            return "arrIndexes: integer[] expected";
          }
      }
      if (message.arrOutputs != null && message.hasOwnProperty("arrOutputs")) {
        if (!Array.isArray(message.arrOutputs)) {
          return "arrOutputs: array expected";
        }
        for (var i = 0; i < message.arrOutputs.length; ++i) {
          var error = $root.structures.output.verify(message.arrOutputs[i]);
          if (error) {
            return "arrOutputs." + error;
          }
        }
      }
      return null;
    };

    /**
     * Creates a UTXO message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof structures.UTXO
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {structures.UTXO} UTXO
     */
    UTXO.fromObject = function fromObject(object) {
      if (object instanceof $root.structures.UTXO) {
        return object;
      }
      var message = new $root.structures.UTXO();
      if (object.arrIndexes) {
        if (!Array.isArray(object.arrIndexes)) {
          throw TypeError(".structures.UTXO.arrIndexes: array expected");
        }
        message.arrIndexes = [];
        for (var i = 0; i < object.arrIndexes.length; ++i)
          message.arrIndexes[i] = object.arrIndexes[i] >>> 0;
      }
      if (object.arrOutputs) {
        if (!Array.isArray(object.arrOutputs)) {
          throw TypeError(".structures.UTXO.arrOutputs: array expected");
        }
        message.arrOutputs = [];
        for (var i = 0; i < object.arrOutputs.length; ++i) {
          if (typeof object.arrOutputs[i] !== "object") {
            throw TypeError(".structures.UTXO.arrOutputs: object expected");
          }
          message.arrOutputs[i] = $root.structures.output.fromObject(object.arrOutputs[i]);
        }
      }
      return message;
    };

    /**
     * Creates a plain object from a UTXO message. Also converts values to other types if specified.
     * @function toObject
     * @memberof structures.UTXO
     * @static
     * @param {structures.UTXO} message UTXO
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    UTXO.toObject = function toObject(message, options) {
      if (!options) {
        options = {};
      }
      var object = {};
      if (options.arrays || options.defaults) {
        object.arrIndexes = [];
        object.arrOutputs = [];
      }
      if (message.arrIndexes && message.arrIndexes.length) {
        object.arrIndexes = [];
        for (var j = 0; j < message.arrIndexes.length; ++j)
          object.arrIndexes[j] = message.arrIndexes[j];
      }
      if (message.arrOutputs && message.arrOutputs.length) {
        object.arrOutputs = [];
        for (var j = 0; j < message.arrOutputs.length; ++j)
          object.arrOutputs[j] = $root.structures.output.toObject(message.arrOutputs[j], options);
      }
      return object;
    };

    /**
     * Converts this UTXO to JSON.
     * @function toJSON
     * @memberof structures.UTXO
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    UTXO.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for UTXO
     * @function getTypeUrl
     * @memberof structures.UTXO
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    UTXO.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
      if (typeUrlPrefix === undefined) {
        typeUrlPrefix = "type.googleapis.com";
      }
      return typeUrlPrefix + "/structures.UTXO";
    };

    return UTXO;
  })();

  structures.BlockInfo = (function() {

    /**
     * Properties of a BlockInfo.
     * @memberof structures
     * @interface IBlockInfo
     * @property {structures.IBlockHeader|null} [header] BlockInfo header
     * @property {number|null} [flags] BlockInfo flags
     */

    /**
     * Constructs a new BlockInfo.
     * @memberof structures
     * @classdesc Represents a BlockInfo.
     * @implements IBlockInfo
     * @constructor
     * @param {structures.IBlockInfo=} [properties] Properties to set
     */
    function BlockInfo(properties) {
      if (properties) {
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) {
            this[keys[i]] = properties[keys[i]];
          }
      }
    }

    /**
     * BlockInfo header.
     * @member {structures.IBlockHeader|null|undefined} header
     * @memberof structures.BlockInfo
     * @instance
     */
    BlockInfo.prototype.header = null;

    /**
     * BlockInfo flags.
     * @member {number} flags
     * @memberof structures.BlockInfo
     * @instance
     */
    BlockInfo.prototype.flags = 0;

    /**
     * Creates a new BlockInfo instance using the specified properties.
     * @function create
     * @memberof structures.BlockInfo
     * @static
     * @param {structures.IBlockInfo=} [properties] Properties to set
     * @returns {structures.BlockInfo} BlockInfo instance
     */
    BlockInfo.create = function create(properties) {
      return new BlockInfo(properties);
    };

    /**
     * Encodes the specified BlockInfo message. Does not implicitly {@link structures.BlockInfo.verify|verify} messages.
     * @function encode
     * @memberof structures.BlockInfo
     * @static
     * @param {structures.IBlockInfo} message BlockInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BlockInfo.encode = function encode(message, writer) {
      if (!writer) {
        writer = $Writer.create();
      }
      if (message.header != null && Object.hasOwnProperty.call(message, "header")) {
        $root.structures.BlockHeader.encode(message.header, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
      }
      if (message.flags != null && Object.hasOwnProperty.call(message, "flags")) {
        writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.flags);
      }
      return writer;
    };

    /**
     * Encodes the specified BlockInfo message, length delimited. Does not implicitly {@link structures.BlockInfo.verify|verify} messages.
     * @function encodeDelimited
     * @memberof structures.BlockInfo
     * @static
     * @param {structures.IBlockInfo} message BlockInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BlockInfo.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a BlockInfo message from the specified reader or buffer.
     * @function decode
     * @memberof structures.BlockInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {structures.BlockInfo} BlockInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BlockInfo.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) {
        reader = $Reader.create(reader);
      }
      var end = length === undefined ? reader.len : reader.pos + length, message = new $root.structures.BlockInfo();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1: {
            message.header = $root.structures.BlockHeader.decode(reader, reader.uint32());
            break;
          }
          case 2: {
            message.flags = reader.uint32();
            break;
          }
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes a BlockInfo message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof structures.BlockInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {structures.BlockInfo} BlockInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BlockInfo.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) {
        reader = new $Reader(reader);
      }
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a BlockInfo message.
     * @function verify
     * @memberof structures.BlockInfo
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    BlockInfo.verify = function verify(message) {
      if (typeof message !== "object" || message === null) {
        return "object expected";
      }
      if (message.header != null && message.hasOwnProperty("header")) {
        var error = $root.structures.BlockHeader.verify(message.header);
        if (error) {
          return "header." + error;
        }
      }
      if (message.flags != null && message.hasOwnProperty("flags")) {
        if (!$util.isInteger(message.flags)) {
          return "flags: integer expected";
        }
      }
      return null;
    };

    /**
     * Creates a BlockInfo message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof structures.BlockInfo
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {structures.BlockInfo} BlockInfo
     */
    BlockInfo.fromObject = function fromObject(object) {
      if (object instanceof $root.structures.BlockInfo) {
        return object;
      }
      var message = new $root.structures.BlockInfo();
      if (object.header != null) {
        if (typeof object.header !== "object") {
          throw TypeError(".structures.BlockInfo.header: object expected");
        }
        message.header = $root.structures.BlockHeader.fromObject(object.header);
      }
      if (object.flags != null) {
        message.flags = object.flags >>> 0;
      }
      return message;
    };

    /**
     * Creates a plain object from a BlockInfo message. Also converts values to other types if specified.
     * @function toObject
     * @memberof structures.BlockInfo
     * @static
     * @param {structures.BlockInfo} message BlockInfo
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    BlockInfo.toObject = function toObject(message, options) {
      if (!options) {
        options = {};
      }
      var object = {};
      if (options.defaults) {
        object.header = null;
        object.flags = 0;
      }
      if (message.header != null && message.hasOwnProperty("header")) {
        object.header = $root.structures.BlockHeader.toObject(message.header, options);
      }
      if (message.flags != null && message.hasOwnProperty("flags")) {
        object.flags = message.flags;
      }
      return object;
    };

    /**
     * Converts this BlockInfo to JSON.
     * @function toJSON
     * @memberof structures.BlockInfo
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    BlockInfo.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for BlockInfo
     * @function getTypeUrl
     * @memberof structures.BlockInfo
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    BlockInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
      if (typeUrlPrefix === undefined) {
        typeUrlPrefix = "type.googleapis.com";
      }
      return typeUrlPrefix + "/structures.BlockInfo";
    };

    return BlockInfo;
  })();

  structures.Contract = (function() {

    /**
     * Properties of a Contract.
     * @memberof structures
     * @interface IContract
     * @property {Uint8Array|null} [contractData] Contract contractData
     * @property {string|null} [contractCode] Contract contractCode
     * @property {number|null} [conciliumId] Contract conciliumId
     * @property {number|Long|null} [balance] Contract balance
     * @property {number|null} [version] Contract version
     */

    /**
     * Constructs a new Contract.
     * @memberof structures
     * @classdesc Represents a Contract.
     * @implements IContract
     * @constructor
     * @param {structures.IContract=} [properties] Properties to set
     */
    function Contract(properties) {
      if (properties) {
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) {
            this[keys[i]] = properties[keys[i]];
          }
      }
    }

    /**
     * Contract contractData.
     * @member {Uint8Array} contractData
     * @memberof structures.Contract
     * @instance
     */
    Contract.prototype.contractData = $util.newBuffer([]);

    /**
     * Contract contractCode.
     * @member {string} contractCode
     * @memberof structures.Contract
     * @instance
     */
    Contract.prototype.contractCode = "";

    /**
     * Contract conciliumId.
     * @member {number} conciliumId
     * @memberof structures.Contract
     * @instance
     */
    Contract.prototype.conciliumId = 0;

    /**
     * Contract balance.
     * @member {number|Long} balance
     * @memberof structures.Contract
     * @instance
     */
    Contract.prototype.balance = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;

    /**
     * Contract version.
     * @member {number} version
     * @memberof structures.Contract
     * @instance
     */
    Contract.prototype.version = 0;

    /**
     * Creates a new Contract instance using the specified properties.
     * @function create
     * @memberof structures.Contract
     * @static
     * @param {structures.IContract=} [properties] Properties to set
     * @returns {structures.Contract} Contract instance
     */
    Contract.create = function create(properties) {
      return new Contract(properties);
    };

    /**
     * Encodes the specified Contract message. Does not implicitly {@link structures.Contract.verify|verify} messages.
     * @function encode
     * @memberof structures.Contract
     * @static
     * @param {structures.IContract} message Contract message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Contract.encode = function encode(message, writer) {
      if (!writer) {
        writer = $Writer.create();
      }
      if (message.contractData != null && Object.hasOwnProperty.call(message, "contractData")) {
        writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.contractData);
      }
      if (message.contractCode != null && Object.hasOwnProperty.call(message, "contractCode")) {
        writer.uint32(/* id 2, wireType 2 =*/18).string(message.contractCode);
      }
      if (message.conciliumId != null && Object.hasOwnProperty.call(message, "conciliumId")) {
        writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.conciliumId);
      }
      if (message.balance != null && Object.hasOwnProperty.call(message, "balance")) {
        writer.uint32(/* id 4, wireType 1 =*/33).fixed64(message.balance);
      }
      if (message.version != null && Object.hasOwnProperty.call(message, "version")) {
        writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.version);
      }
      return writer;
    };

    /**
     * Encodes the specified Contract message, length delimited. Does not implicitly {@link structures.Contract.verify|verify} messages.
     * @function encodeDelimited
     * @memberof structures.Contract
     * @static
     * @param {structures.IContract} message Contract message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Contract.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Contract message from the specified reader or buffer.
     * @function decode
     * @memberof structures.Contract
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {structures.Contract} Contract
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Contract.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) {
        reader = $Reader.create(reader);
      }
      var end = length === undefined ? reader.len : reader.pos + length, message = new $root.structures.Contract();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1: {
            message.contractData = reader.bytes();
            break;
          }
          case 2: {
            message.contractCode = reader.string();
            break;
          }
          case 3: {
            message.conciliumId = reader.uint32();
            break;
          }
          case 4: {
            message.balance = reader.fixed64();
            break;
          }
          case 5: {
            message.version = reader.uint32();
            break;
          }
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes a Contract message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof structures.Contract
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {structures.Contract} Contract
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Contract.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) {
        reader = new $Reader(reader);
      }
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Contract message.
     * @function verify
     * @memberof structures.Contract
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Contract.verify = function verify(message) {
      if (typeof message !== "object" || message === null) {
        return "object expected";
      }
      if (message.contractData != null && message.hasOwnProperty("contractData")) {
        if (!(message.contractData && typeof message.contractData.length === "number" ||
              $util.isString(message.contractData))) {
          return "contractData: buffer expected";
        }
      }
      if (message.contractCode != null && message.hasOwnProperty("contractCode")) {
        if (!$util.isString(message.contractCode)) {
          return "contractCode: string expected";
        }
      }
      if (message.conciliumId != null && message.hasOwnProperty("conciliumId")) {
        if (!$util.isInteger(message.conciliumId)) {
          return "conciliumId: integer expected";
        }
      }
      if (message.balance != null && message.hasOwnProperty("balance")) {
        if (!$util.isInteger(message.balance) &&
            !(message.balance && $util.isInteger(message.balance.low) && $util.isInteger(message.balance.high))) {
          return "balance: integer|Long expected";
        }
      }
      if (message.version != null && message.hasOwnProperty("version")) {
        if (!$util.isInteger(message.version)) {
          return "version: integer expected";
        }
      }
      return null;
    };

    /**
     * Creates a Contract message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof structures.Contract
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {structures.Contract} Contract
     */
    Contract.fromObject = function fromObject(object) {
      if (object instanceof $root.structures.Contract) {
        return object;
      }
      var message = new $root.structures.Contract();
      if (object.contractData != null) {
        if (typeof object.contractData === "string") {
          $util.base64.decode(object.contractData,
            message.contractData = $util.newBuffer($util.base64.length(object.contractData)), 0
          );
        } else if (object.contractData.length >= 0) {
          message.contractData = object.contractData;
        }
      }
      if (object.contractCode != null) {
        message.contractCode = String(object.contractCode);
      }
      if (object.conciliumId != null) {
        message.conciliumId = object.conciliumId >>> 0;
      }
      if (object.balance != null) {
        if ($util.Long) {
          (message.balance = $util.Long.fromValue(object.balance)).unsigned = false;
        } else if (typeof object.balance === "string") {
          message.balance = parseInt(object.balance, 10);
        } else if (typeof object.balance === "number") {
          message.balance = object.balance;
        } else if (typeof object.balance === "object") {
          message.balance = new $util.LongBits(object.balance.low >>> 0, object.balance.high >>> 0).toNumber();
        }
      }
      if (object.version != null) {
        message.version = object.version >>> 0;
      }
      return message;
    };

    /**
     * Creates a plain object from a Contract message. Also converts values to other types if specified.
     * @function toObject
     * @memberof structures.Contract
     * @static
     * @param {structures.Contract} message Contract
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Contract.toObject = function toObject(message, options) {
      if (!options) {
        options = {};
      }
      var object = {};
      if (options.defaults) {
        if (options.bytes === String) {
          object.contractData = "";
        } else {
          object.contractData = [];
          if (options.bytes !== Array) {
            object.contractData = $util.newBuffer(object.contractData);
          }
        }
        object.contractCode = "";
        object.conciliumId = 0;
        if ($util.Long) {
          var long = new $util.Long(0, 0, false);
          object.balance =
            options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
        } else {
          object.balance = options.longs === String ? "0" : 0;
        }
        object.version = 0;
      }
      if (message.contractData != null && message.hasOwnProperty("contractData")) {
        object.contractData = options.bytes === String
          ? $util.base64.encode(message.contractData, 0, message.contractData.length)
          : options.bytes === Array ? Array.prototype.slice.call(message.contractData) : message.contractData;
      }
      if (message.contractCode != null && message.hasOwnProperty("contractCode")) {
        object.contractCode = message.contractCode;
      }
      if (message.conciliumId != null && message.hasOwnProperty("conciliumId")) {
        object.conciliumId = message.conciliumId;
      }
      if (message.balance != null && message.hasOwnProperty("balance")) {
        if (typeof message.balance === "number") {
          object.balance = options.longs === String ? String(message.balance) : message.balance;
        } else {
          object.balance =
            options.longs === String ? $util.Long.prototype.toString.call(message.balance) : options.longs === Number
              ? new $util.LongBits(message.balance.low >>> 0, message.balance.high >>> 0).toNumber()
              : message.balance;
        }
      }
      if (message.version != null && message.hasOwnProperty("version")) {
        object.version = message.version;
      }
      return object;
    };

    /**
     * Converts this Contract to JSON.
     * @function toJSON
     * @memberof structures.Contract
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Contract.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for Contract
     * @function getTypeUrl
     * @memberof structures.Contract
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Contract.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
      if (typeUrlPrefix === undefined) {
        typeUrlPrefix = "type.googleapis.com";
      }
      return typeUrlPrefix + "/structures.Contract";
    };

    return Contract;
  })();

  /**
   * TxStatuses enum.
   * @name structures.TxStatuses
   * @enum {number}
   * @property {number} TX_STATUS_FAILED=0 TX_STATUS_FAILED value
   * @property {number} TX_STATUS_OK=1 TX_STATUS_OK value
   */
  structures.TxStatuses = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "TX_STATUS_FAILED"] = 0;
    values[valuesById[1] = "TX_STATUS_OK"] = 1;
    return values;
  })();

  structures.TxReceipt = (function() {

    /**
     * Properties of a TxReceipt.
     * @memberof structures
     * @interface ITxReceipt
     * @property {Uint8Array|null} [contractAddress] TxReceipt contractAddress
     * @property {number|null} [coinsUsed] TxReceipt coinsUsed
     * @property {structures.TxStatuses|null} [status] TxReceipt status
     * @property {string|null} [message] TxReceipt message
     * @property {Array.<Uint8Array>|null} [internalTxns] TxReceipt internalTxns
     * @property {Array.<structures.Ioutput>|null} [coins] TxReceipt coins
     */

    /**
     * Constructs a new TxReceipt.
     * @memberof structures
     * @classdesc Represents a TxReceipt.
     * @implements ITxReceipt
     * @constructor
     * @param {structures.ITxReceipt=} [properties] Properties to set
     */
    function TxReceipt(properties) {
      this.internalTxns = [];
      this.coins = [];
      if (properties) {
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) {
            this[keys[i]] = properties[keys[i]];
          }
      }
    }

    /**
     * TxReceipt contractAddress.
     * @member {Uint8Array} contractAddress
     * @memberof structures.TxReceipt
     * @instance
     */
    TxReceipt.prototype.contractAddress = $util.newBuffer([]);

    /**
     * TxReceipt coinsUsed.
     * @member {number} coinsUsed
     * @memberof structures.TxReceipt
     * @instance
     */
    TxReceipt.prototype.coinsUsed = 0;

    /**
     * TxReceipt status.
     * @member {structures.TxStatuses} status
     * @memberof structures.TxReceipt
     * @instance
     */
    TxReceipt.prototype.status = 0;

    /**
     * TxReceipt message.
     * @member {string} message
     * @memberof structures.TxReceipt
     * @instance
     */
    TxReceipt.prototype.message = "";

    /**
     * TxReceipt internalTxns.
     * @member {Array.<Uint8Array>} internalTxns
     * @memberof structures.TxReceipt
     * @instance
     */
    TxReceipt.prototype.internalTxns = $util.emptyArray;

    /**
     * TxReceipt coins.
     * @member {Array.<structures.Ioutput>} coins
     * @memberof structures.TxReceipt
     * @instance
     */
    TxReceipt.prototype.coins = $util.emptyArray;

    /**
     * Creates a new TxReceipt instance using the specified properties.
     * @function create
     * @memberof structures.TxReceipt
     * @static
     * @param {structures.ITxReceipt=} [properties] Properties to set
     * @returns {structures.TxReceipt} TxReceipt instance
     */
    TxReceipt.create = function create(properties) {
      return new TxReceipt(properties);
    };

    /**
     * Encodes the specified TxReceipt message. Does not implicitly {@link structures.TxReceipt.verify|verify} messages.
     * @function encode
     * @memberof structures.TxReceipt
     * @static
     * @param {structures.ITxReceipt} message TxReceipt message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TxReceipt.encode = function encode(message, writer) {
      if (!writer) {
        writer = $Writer.create();
      }
      if (message.contractAddress != null && Object.hasOwnProperty.call(message, "contractAddress")) {
        writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.contractAddress);
      }
      if (message.coinsUsed != null && Object.hasOwnProperty.call(message, "coinsUsed")) {
        writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.coinsUsed);
      }
      if (message.status != null && Object.hasOwnProperty.call(message, "status")) {
        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.status);
      }
      if (message.internalTxns != null && message.internalTxns.length) {
        for (var i = 0; i < message.internalTxns.length; ++i)
          writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.internalTxns[i]);
      }
      if (message.message != null && Object.hasOwnProperty.call(message, "message")) {
        writer.uint32(/* id 5, wireType 2 =*/42).string(message.message);
      }
      if (message.coins != null && message.coins.length) {
        for (var i = 0; i < message.coins.length; ++i)
          $root.structures.output.encode(message.coins[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
      }
      return writer;
    };

    /**
     * Encodes the specified TxReceipt message, length delimited. Does not implicitly {@link structures.TxReceipt.verify|verify} messages.
     * @function encodeDelimited
     * @memberof structures.TxReceipt
     * @static
     * @param {structures.ITxReceipt} message TxReceipt message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TxReceipt.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a TxReceipt message from the specified reader or buffer.
     * @function decode
     * @memberof structures.TxReceipt
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {structures.TxReceipt} TxReceipt
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TxReceipt.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) {
        reader = $Reader.create(reader);
      }
      var end = length === undefined ? reader.len : reader.pos + length, message = new $root.structures.TxReceipt();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1: {
            message.contractAddress = reader.bytes();
            break;
          }
          case 2: {
            message.coinsUsed = reader.uint32();
            break;
          }
          case 3: {
            message.status = reader.int32();
            break;
          }
          case 5: {
            message.message = reader.string();
            break;
          }
          case 4: {
            if (!(message.internalTxns && message.internalTxns.length)) {
              message.internalTxns = [];
            }
            message.internalTxns.push(reader.bytes());
            break;
          }
          case 6: {
            if (!(message.coins && message.coins.length)) {
              message.coins = [];
            }
            message.coins.push($root.structures.output.decode(reader, reader.uint32()));
            break;
          }
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes a TxReceipt message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof structures.TxReceipt
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {structures.TxReceipt} TxReceipt
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TxReceipt.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) {
        reader = new $Reader(reader);
      }
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a TxReceipt message.
     * @function verify
     * @memberof structures.TxReceipt
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    TxReceipt.verify = function verify(message) {
      if (typeof message !== "object" || message === null) {
        return "object expected";
      }
      if (message.contractAddress != null && message.hasOwnProperty("contractAddress")) {
        if (!(message.contractAddress && typeof message.contractAddress.length === "number" ||
              $util.isString(message.contractAddress))) {
          return "contractAddress: buffer expected";
        }
      }
      if (message.coinsUsed != null && message.hasOwnProperty("coinsUsed")) {
        if (!$util.isInteger(message.coinsUsed)) {
          return "coinsUsed: integer expected";
        }
      }
      if (message.status != null && message.hasOwnProperty("status")) {
        switch (message.status) {
          default:
            return "status: enum value expected";
          case 0:
          case 1:
            break;
        }
      }
      if (message.message != null && message.hasOwnProperty("message")) {
        if (!$util.isString(message.message)) {
          return "message: string expected";
        }
      }
      if (message.internalTxns != null && message.hasOwnProperty("internalTxns")) {
        if (!Array.isArray(message.internalTxns)) {
          return "internalTxns: array expected";
        }
        for (var i = 0; i < message.internalTxns.length; ++i)
          if (!(message.internalTxns[i] && typeof message.internalTxns[i].length === "number" ||
                $util.isString(message.internalTxns[i]))) {
            return "internalTxns: buffer[] expected";
          }
      }
      if (message.coins != null && message.hasOwnProperty("coins")) {
        if (!Array.isArray(message.coins)) {
          return "coins: array expected";
        }
        for (var i = 0; i < message.coins.length; ++i) {
          var error = $root.structures.output.verify(message.coins[i]);
          if (error) {
            return "coins." + error;
          }
        }
      }
      return null;
    };

    /**
     * Creates a TxReceipt message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof structures.TxReceipt
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {structures.TxReceipt} TxReceipt
     */
    TxReceipt.fromObject = function fromObject(object) {
      if (object instanceof $root.structures.TxReceipt) {
        return object;
      }
      var message = new $root.structures.TxReceipt();
      if (object.contractAddress != null) {
        if (typeof object.contractAddress === "string") {
          $util.base64.decode(object.contractAddress,
            message.contractAddress = $util.newBuffer($util.base64.length(object.contractAddress)), 0
          );
        } else if (object.contractAddress.length >= 0) {
          message.contractAddress = object.contractAddress;
        }
      }
      if (object.coinsUsed != null) {
        message.coinsUsed = object.coinsUsed >>> 0;
      }
      switch (object.status) {
        default:
          if (typeof object.status === "number") {
            message.status = object.status;
            break;
          }
          break;
        case "TX_STATUS_FAILED":
        case 0:
          message.status = 0;
          break;
        case "TX_STATUS_OK":
        case 1:
          message.status = 1;
          break;
      }
      if (object.message != null) {
        message.message = String(object.message);
      }
      if (object.internalTxns) {
        if (!Array.isArray(object.internalTxns)) {
          throw TypeError(".structures.TxReceipt.internalTxns: array expected");
        }
        message.internalTxns = [];
        for (var i = 0; i < object.internalTxns.length; ++i)
          if (typeof object.internalTxns[i] === "string") {
            $util.base64.decode(object.internalTxns[i],
              message.internalTxns[i] = $util.newBuffer($util.base64.length(object.internalTxns[i])), 0
            );
          } else if (object.internalTxns[i].length >= 0) {
            message.internalTxns[i] = object.internalTxns[i];
          }
      }
      if (object.coins) {
        if (!Array.isArray(object.coins)) {
          throw TypeError(".structures.TxReceipt.coins: array expected");
        }
        message.coins = [];
        for (var i = 0; i < object.coins.length; ++i) {
          if (typeof object.coins[i] !== "object") {
            throw TypeError(".structures.TxReceipt.coins: object expected");
          }
          message.coins[i] = $root.structures.output.fromObject(object.coins[i]);
        }
      }
      return message;
    };

    /**
     * Creates a plain object from a TxReceipt message. Also converts values to other types if specified.
     * @function toObject
     * @memberof structures.TxReceipt
     * @static
     * @param {structures.TxReceipt} message TxReceipt
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    TxReceipt.toObject = function toObject(message, options) {
      if (!options) {
        options = {};
      }
      var object = {};
      if (options.arrays || options.defaults) {
        object.internalTxns = [];
        object.coins = [];
      }
      if (options.defaults) {
        if (options.bytes === String) {
          object.contractAddress = "";
        } else {
          object.contractAddress = [];
          if (options.bytes !== Array) {
            object.contractAddress = $util.newBuffer(object.contractAddress);
          }
        }
        object.coinsUsed = 0;
        object.status = options.enums === String ? "TX_STATUS_FAILED" : 0;
        object.message = "";
      }
      if (message.contractAddress != null && message.hasOwnProperty("contractAddress")) {
        object.contractAddress = options.bytes === String
          ? $util.base64.encode(message.contractAddress, 0, message.contractAddress.length)
          : options.bytes === Array ? Array.prototype.slice.call(message.contractAddress) : message.contractAddress;
      }
      if (message.coinsUsed != null && message.hasOwnProperty("coinsUsed")) {
        object.coinsUsed = message.coinsUsed;
      }
      if (message.status != null && message.hasOwnProperty("status")) {
        object.status = options.enums === String ? $root.structures.TxStatuses[message.status] === undefined
          ? message.status
          : $root.structures.TxStatuses[message.status] : message.status;
      }
      if (message.internalTxns && message.internalTxns.length) {
        object.internalTxns = [];
        for (var j = 0; j < message.internalTxns.length; ++j)
          object.internalTxns[j] = options.bytes === String
            ? $util.base64.encode(message.internalTxns[j], 0, message.internalTxns[j].length)
            : options.bytes === Array ? Array.prototype.slice.call(message.internalTxns[j]) : message.internalTxns[j];
      }
      if (message.message != null && message.hasOwnProperty("message")) {
        object.message = message.message;
      }
      if (message.coins && message.coins.length) {
        object.coins = [];
        for (var j = 0; j < message.coins.length; ++j)
          object.coins[j] = $root.structures.output.toObject(message.coins[j], options);
      }
      return object;
    };

    /**
     * Converts this TxReceipt to JSON.
     * @function toJSON
     * @memberof structures.TxReceipt
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    TxReceipt.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for TxReceipt
     * @function getTypeUrl
     * @memberof structures.TxReceipt
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    TxReceipt.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
      if (typeUrlPrefix === undefined) {
        typeUrlPrefix = "type.googleapis.com";
      }
      return typeUrlPrefix + "/structures.TxReceipt";
    };

    return TxReceipt;
  })();

  return structures;
})();

module.exports = $root;
