/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.syft_proto = (function() {

    /**
     * Namespace syft_proto.
     * @exports syft_proto
     * @namespace
     */
    var syft_proto = {};

    syft_proto.execution = (function() {

        /**
         * Namespace execution.
         * @memberof syft_proto
         * @namespace
         */
        var execution = {};

        execution.v1 = (function() {

            /**
             * Namespace v1.
             * @memberof syft_proto.execution
             * @namespace
             */
            var v1 = {};

            v1.CommunicationAction = (function() {

                /**
                 * Properties of a CommunicationAction.
                 * @memberof syft_proto.execution.v1
                 * @interface ICommunicationAction
                 * @property {string|null} [command] CommunicationAction command
                 * @property {syft_proto.types.syft.v1.IId|null} [target_id] CommunicationAction target_id
                 * @property {syft_proto.generic.pointers.v1.IPointerTensor|null} [target_pointer] CommunicationAction target_pointer
                 * @property {syft_proto.execution.v1.IPlaceholderId|null} [target_placeholder_id] CommunicationAction target_placeholder_id
                 * @property {syft_proto.types.torch.v1.ITorchTensor|null} [target_tensor] CommunicationAction target_tensor
                 * @property {Array.<syft_proto.types.syft.v1.IArg>|null} [args] CommunicationAction args
                 * @property {Object.<string,syft_proto.types.syft.v1.IArg>|null} [kwargs] CommunicationAction kwargs
                 * @property {Array.<syft_proto.types.syft.v1.IId>|null} [return_ids] CommunicationAction return_ids
                 * @property {Array.<syft_proto.execution.v1.IPlaceholderId>|null} [return_placeholder_ids] CommunicationAction return_placeholder_ids
                 */

                /**
                 * Constructs a new CommunicationAction.
                 * @memberof syft_proto.execution.v1
                 * @classdesc Represents a CommunicationAction.
                 * @implements ICommunicationAction
                 * @constructor
                 * @param {syft_proto.execution.v1.ICommunicationAction=} [properties] Properties to set
                 */
                function CommunicationAction(properties) {
                    this.args = [];
                    this.kwargs = {};
                    this.return_ids = [];
                    this.return_placeholder_ids = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * CommunicationAction command.
                 * @member {string} command
                 * @memberof syft_proto.execution.v1.CommunicationAction
                 * @instance
                 */
                CommunicationAction.prototype.command = "";

                /**
                 * CommunicationAction target_id.
                 * @member {syft_proto.types.syft.v1.IId|null|undefined} target_id
                 * @memberof syft_proto.execution.v1.CommunicationAction
                 * @instance
                 */
                CommunicationAction.prototype.target_id = null;

                /**
                 * CommunicationAction target_pointer.
                 * @member {syft_proto.generic.pointers.v1.IPointerTensor|null|undefined} target_pointer
                 * @memberof syft_proto.execution.v1.CommunicationAction
                 * @instance
                 */
                CommunicationAction.prototype.target_pointer = null;

                /**
                 * CommunicationAction target_placeholder_id.
                 * @member {syft_proto.execution.v1.IPlaceholderId|null|undefined} target_placeholder_id
                 * @memberof syft_proto.execution.v1.CommunicationAction
                 * @instance
                 */
                CommunicationAction.prototype.target_placeholder_id = null;

                /**
                 * CommunicationAction target_tensor.
                 * @member {syft_proto.types.torch.v1.ITorchTensor|null|undefined} target_tensor
                 * @memberof syft_proto.execution.v1.CommunicationAction
                 * @instance
                 */
                CommunicationAction.prototype.target_tensor = null;

                /**
                 * CommunicationAction args.
                 * @member {Array.<syft_proto.types.syft.v1.IArg>} args
                 * @memberof syft_proto.execution.v1.CommunicationAction
                 * @instance
                 */
                CommunicationAction.prototype.args = $util.emptyArray;

                /**
                 * CommunicationAction kwargs.
                 * @member {Object.<string,syft_proto.types.syft.v1.IArg>} kwargs
                 * @memberof syft_proto.execution.v1.CommunicationAction
                 * @instance
                 */
                CommunicationAction.prototype.kwargs = $util.emptyObject;

                /**
                 * CommunicationAction return_ids.
                 * @member {Array.<syft_proto.types.syft.v1.IId>} return_ids
                 * @memberof syft_proto.execution.v1.CommunicationAction
                 * @instance
                 */
                CommunicationAction.prototype.return_ids = $util.emptyArray;

                /**
                 * CommunicationAction return_placeholder_ids.
                 * @member {Array.<syft_proto.execution.v1.IPlaceholderId>} return_placeholder_ids
                 * @memberof syft_proto.execution.v1.CommunicationAction
                 * @instance
                 */
                CommunicationAction.prototype.return_placeholder_ids = $util.emptyArray;

                // OneOf field names bound to virtual getters and setters
                var $oneOfFields;

                /**
                 * CommunicationAction target.
                 * @member {"target_id"|"target_pointer"|"target_placeholder_id"|"target_tensor"|undefined} target
                 * @memberof syft_proto.execution.v1.CommunicationAction
                 * @instance
                 */
                Object.defineProperty(CommunicationAction.prototype, "target", {
                    get: $util.oneOfGetter($oneOfFields = ["target_id", "target_pointer", "target_placeholder_id", "target_tensor"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                /**
                 * Creates a new CommunicationAction instance using the specified properties.
                 * @function create
                 * @memberof syft_proto.execution.v1.CommunicationAction
                 * @static
                 * @param {syft_proto.execution.v1.ICommunicationAction=} [properties] Properties to set
                 * @returns {syft_proto.execution.v1.CommunicationAction} CommunicationAction instance
                 */
                CommunicationAction.create = function create(properties) {
                    return new CommunicationAction(properties);
                };

                /**
                 * Encodes the specified CommunicationAction message. Does not implicitly {@link syft_proto.execution.v1.CommunicationAction.verify|verify} messages.
                 * @function encode
                 * @memberof syft_proto.execution.v1.CommunicationAction
                 * @static
                 * @param {syft_proto.execution.v1.ICommunicationAction} message CommunicationAction message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CommunicationAction.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.command != null && message.hasOwnProperty("command"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.command);
                    if (message.target_pointer != null && message.hasOwnProperty("target_pointer"))
                        $root.syft_proto.generic.pointers.v1.PointerTensor.encode(message.target_pointer, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.target_placeholder_id != null && message.hasOwnProperty("target_placeholder_id"))
                        $root.syft_proto.execution.v1.PlaceholderId.encode(message.target_placeholder_id, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    if (message.target_tensor != null && message.hasOwnProperty("target_tensor"))
                        $root.syft_proto.types.torch.v1.TorchTensor.encode(message.target_tensor, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    if (message.args != null && message.args.length)
                        for (var i = 0; i < message.args.length; ++i)
                            $root.syft_proto.types.syft.v1.Arg.encode(message.args[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                    if (message.kwargs != null && message.hasOwnProperty("kwargs"))
                        for (var keys = Object.keys(message.kwargs), i = 0; i < keys.length; ++i) {
                            writer.uint32(/* id 6, wireType 2 =*/50).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                            $root.syft_proto.types.syft.v1.Arg.encode(message.kwargs[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                        }
                    if (message.return_ids != null && message.return_ids.length)
                        for (var i = 0; i < message.return_ids.length; ++i)
                            $root.syft_proto.types.syft.v1.Id.encode(message.return_ids[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                    if (message.return_placeholder_ids != null && message.return_placeholder_ids.length)
                        for (var i = 0; i < message.return_placeholder_ids.length; ++i)
                            $root.syft_proto.execution.v1.PlaceholderId.encode(message.return_placeholder_ids[i], writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                    if (message.target_id != null && message.hasOwnProperty("target_id"))
                        $root.syft_proto.types.syft.v1.Id.encode(message.target_id, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified CommunicationAction message, length delimited. Does not implicitly {@link syft_proto.execution.v1.CommunicationAction.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof syft_proto.execution.v1.CommunicationAction
                 * @static
                 * @param {syft_proto.execution.v1.ICommunicationAction} message CommunicationAction message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CommunicationAction.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a CommunicationAction message from the specified reader or buffer.
                 * @function decode
                 * @memberof syft_proto.execution.v1.CommunicationAction
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {syft_proto.execution.v1.CommunicationAction} CommunicationAction
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CommunicationAction.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.syft_proto.execution.v1.CommunicationAction(), key;
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.command = reader.string();
                            break;
                        case 9:
                            message.target_id = $root.syft_proto.types.syft.v1.Id.decode(reader, reader.uint32());
                            break;
                        case 2:
                            message.target_pointer = $root.syft_proto.generic.pointers.v1.PointerTensor.decode(reader, reader.uint32());
                            break;
                        case 3:
                            message.target_placeholder_id = $root.syft_proto.execution.v1.PlaceholderId.decode(reader, reader.uint32());
                            break;
                        case 4:
                            message.target_tensor = $root.syft_proto.types.torch.v1.TorchTensor.decode(reader, reader.uint32());
                            break;
                        case 5:
                            if (!(message.args && message.args.length))
                                message.args = [];
                            message.args.push($root.syft_proto.types.syft.v1.Arg.decode(reader, reader.uint32()));
                            break;
                        case 6:
                            reader.skip().pos++;
                            if (message.kwargs === $util.emptyObject)
                                message.kwargs = {};
                            key = reader.string();
                            reader.pos++;
                            message.kwargs[key] = $root.syft_proto.types.syft.v1.Arg.decode(reader, reader.uint32());
                            break;
                        case 7:
                            if (!(message.return_ids && message.return_ids.length))
                                message.return_ids = [];
                            message.return_ids.push($root.syft_proto.types.syft.v1.Id.decode(reader, reader.uint32()));
                            break;
                        case 8:
                            if (!(message.return_placeholder_ids && message.return_placeholder_ids.length))
                                message.return_placeholder_ids = [];
                            message.return_placeholder_ids.push($root.syft_proto.execution.v1.PlaceholderId.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a CommunicationAction message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof syft_proto.execution.v1.CommunicationAction
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {syft_proto.execution.v1.CommunicationAction} CommunicationAction
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CommunicationAction.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a CommunicationAction message.
                 * @function verify
                 * @memberof syft_proto.execution.v1.CommunicationAction
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                CommunicationAction.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    var properties = {};
                    if (message.command != null && message.hasOwnProperty("command"))
                        if (!$util.isString(message.command))
                            return "command: string expected";
                    if (message.target_id != null && message.hasOwnProperty("target_id")) {
                        properties.target = 1;
                        {
                            var error = $root.syft_proto.types.syft.v1.Id.verify(message.target_id);
                            if (error)
                                return "target_id." + error;
                        }
                    }
                    if (message.target_pointer != null && message.hasOwnProperty("target_pointer")) {
                        if (properties.target === 1)
                            return "target: multiple values";
                        properties.target = 1;
                        {
                            var error = $root.syft_proto.generic.pointers.v1.PointerTensor.verify(message.target_pointer);
                            if (error)
                                return "target_pointer." + error;
                        }
                    }
                    if (message.target_placeholder_id != null && message.hasOwnProperty("target_placeholder_id")) {
                        if (properties.target === 1)
                            return "target: multiple values";
                        properties.target = 1;
                        {
                            var error = $root.syft_proto.execution.v1.PlaceholderId.verify(message.target_placeholder_id);
                            if (error)
                                return "target_placeholder_id." + error;
                        }
                    }
                    if (message.target_tensor != null && message.hasOwnProperty("target_tensor")) {
                        if (properties.target === 1)
                            return "target: multiple values";
                        properties.target = 1;
                        {
                            var error = $root.syft_proto.types.torch.v1.TorchTensor.verify(message.target_tensor);
                            if (error)
                                return "target_tensor." + error;
                        }
                    }
                    if (message.args != null && message.hasOwnProperty("args")) {
                        if (!Array.isArray(message.args))
                            return "args: array expected";
                        for (var i = 0; i < message.args.length; ++i) {
                            var error = $root.syft_proto.types.syft.v1.Arg.verify(message.args[i]);
                            if (error)
                                return "args." + error;
                        }
                    }
                    if (message.kwargs != null && message.hasOwnProperty("kwargs")) {
                        if (!$util.isObject(message.kwargs))
                            return "kwargs: object expected";
                        var key = Object.keys(message.kwargs);
                        for (var i = 0; i < key.length; ++i) {
                            var error = $root.syft_proto.types.syft.v1.Arg.verify(message.kwargs[key[i]]);
                            if (error)
                                return "kwargs." + error;
                        }
                    }
                    if (message.return_ids != null && message.hasOwnProperty("return_ids")) {
                        if (!Array.isArray(message.return_ids))
                            return "return_ids: array expected";
                        for (var i = 0; i < message.return_ids.length; ++i) {
                            var error = $root.syft_proto.types.syft.v1.Id.verify(message.return_ids[i]);
                            if (error)
                                return "return_ids." + error;
                        }
                    }
                    if (message.return_placeholder_ids != null && message.hasOwnProperty("return_placeholder_ids")) {
                        if (!Array.isArray(message.return_placeholder_ids))
                            return "return_placeholder_ids: array expected";
                        for (var i = 0; i < message.return_placeholder_ids.length; ++i) {
                            var error = $root.syft_proto.execution.v1.PlaceholderId.verify(message.return_placeholder_ids[i]);
                            if (error)
                                return "return_placeholder_ids." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates a CommunicationAction message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof syft_proto.execution.v1.CommunicationAction
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {syft_proto.execution.v1.CommunicationAction} CommunicationAction
                 */
                CommunicationAction.fromObject = function fromObject(object) {
                    if (object instanceof $root.syft_proto.execution.v1.CommunicationAction)
                        return object;
                    var message = new $root.syft_proto.execution.v1.CommunicationAction();
                    if (object.command != null)
                        message.command = String(object.command);
                    if (object.target_id != null) {
                        if (typeof object.target_id !== "object")
                            throw TypeError(".syft_proto.execution.v1.CommunicationAction.target_id: object expected");
                        message.target_id = $root.syft_proto.types.syft.v1.Id.fromObject(object.target_id);
                    }
                    if (object.target_pointer != null) {
                        if (typeof object.target_pointer !== "object")
                            throw TypeError(".syft_proto.execution.v1.CommunicationAction.target_pointer: object expected");
                        message.target_pointer = $root.syft_proto.generic.pointers.v1.PointerTensor.fromObject(object.target_pointer);
                    }
                    if (object.target_placeholder_id != null) {
                        if (typeof object.target_placeholder_id !== "object")
                            throw TypeError(".syft_proto.execution.v1.CommunicationAction.target_placeholder_id: object expected");
                        message.target_placeholder_id = $root.syft_proto.execution.v1.PlaceholderId.fromObject(object.target_placeholder_id);
                    }
                    if (object.target_tensor != null) {
                        if (typeof object.target_tensor !== "object")
                            throw TypeError(".syft_proto.execution.v1.CommunicationAction.target_tensor: object expected");
                        message.target_tensor = $root.syft_proto.types.torch.v1.TorchTensor.fromObject(object.target_tensor);
                    }
                    if (object.args) {
                        if (!Array.isArray(object.args))
                            throw TypeError(".syft_proto.execution.v1.CommunicationAction.args: array expected");
                        message.args = [];
                        for (var i = 0; i < object.args.length; ++i) {
                            if (typeof object.args[i] !== "object")
                                throw TypeError(".syft_proto.execution.v1.CommunicationAction.args: object expected");
                            message.args[i] = $root.syft_proto.types.syft.v1.Arg.fromObject(object.args[i]);
                        }
                    }
                    if (object.kwargs) {
                        if (typeof object.kwargs !== "object")
                            throw TypeError(".syft_proto.execution.v1.CommunicationAction.kwargs: object expected");
                        message.kwargs = {};
                        for (var keys = Object.keys(object.kwargs), i = 0; i < keys.length; ++i) {
                            if (typeof object.kwargs[keys[i]] !== "object")
                                throw TypeError(".syft_proto.execution.v1.CommunicationAction.kwargs: object expected");
                            message.kwargs[keys[i]] = $root.syft_proto.types.syft.v1.Arg.fromObject(object.kwargs[keys[i]]);
                        }
                    }
                    if (object.return_ids) {
                        if (!Array.isArray(object.return_ids))
                            throw TypeError(".syft_proto.execution.v1.CommunicationAction.return_ids: array expected");
                        message.return_ids = [];
                        for (var i = 0; i < object.return_ids.length; ++i) {
                            if (typeof object.return_ids[i] !== "object")
                                throw TypeError(".syft_proto.execution.v1.CommunicationAction.return_ids: object expected");
                            message.return_ids[i] = $root.syft_proto.types.syft.v1.Id.fromObject(object.return_ids[i]);
                        }
                    }
                    if (object.return_placeholder_ids) {
                        if (!Array.isArray(object.return_placeholder_ids))
                            throw TypeError(".syft_proto.execution.v1.CommunicationAction.return_placeholder_ids: array expected");
                        message.return_placeholder_ids = [];
                        for (var i = 0; i < object.return_placeholder_ids.length; ++i) {
                            if (typeof object.return_placeholder_ids[i] !== "object")
                                throw TypeError(".syft_proto.execution.v1.CommunicationAction.return_placeholder_ids: object expected");
                            message.return_placeholder_ids[i] = $root.syft_proto.execution.v1.PlaceholderId.fromObject(object.return_placeholder_ids[i]);
                        }
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a CommunicationAction message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof syft_proto.execution.v1.CommunicationAction
                 * @static
                 * @param {syft_proto.execution.v1.CommunicationAction} message CommunicationAction
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                CommunicationAction.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults) {
                        object.args = [];
                        object.return_ids = [];
                        object.return_placeholder_ids = [];
                    }
                    if (options.objects || options.defaults)
                        object.kwargs = {};
                    if (options.defaults)
                        object.command = "";
                    if (message.command != null && message.hasOwnProperty("command"))
                        object.command = message.command;
                    if (message.target_pointer != null && message.hasOwnProperty("target_pointer")) {
                        object.target_pointer = $root.syft_proto.generic.pointers.v1.PointerTensor.toObject(message.target_pointer, options);
                        if (options.oneofs)
                            object.target = "target_pointer";
                    }
                    if (message.target_placeholder_id != null && message.hasOwnProperty("target_placeholder_id")) {
                        object.target_placeholder_id = $root.syft_proto.execution.v1.PlaceholderId.toObject(message.target_placeholder_id, options);
                        if (options.oneofs)
                            object.target = "target_placeholder_id";
                    }
                    if (message.target_tensor != null && message.hasOwnProperty("target_tensor")) {
                        object.target_tensor = $root.syft_proto.types.torch.v1.TorchTensor.toObject(message.target_tensor, options);
                        if (options.oneofs)
                            object.target = "target_tensor";
                    }
                    if (message.args && message.args.length) {
                        object.args = [];
                        for (var j = 0; j < message.args.length; ++j)
                            object.args[j] = $root.syft_proto.types.syft.v1.Arg.toObject(message.args[j], options);
                    }
                    var keys2;
                    if (message.kwargs && (keys2 = Object.keys(message.kwargs)).length) {
                        object.kwargs = {};
                        for (var j = 0; j < keys2.length; ++j)
                            object.kwargs[keys2[j]] = $root.syft_proto.types.syft.v1.Arg.toObject(message.kwargs[keys2[j]], options);
                    }
                    if (message.return_ids && message.return_ids.length) {
                        object.return_ids = [];
                        for (var j = 0; j < message.return_ids.length; ++j)
                            object.return_ids[j] = $root.syft_proto.types.syft.v1.Id.toObject(message.return_ids[j], options);
                    }
                    if (message.return_placeholder_ids && message.return_placeholder_ids.length) {
                        object.return_placeholder_ids = [];
                        for (var j = 0; j < message.return_placeholder_ids.length; ++j)
                            object.return_placeholder_ids[j] = $root.syft_proto.execution.v1.PlaceholderId.toObject(message.return_placeholder_ids[j], options);
                    }
                    if (message.target_id != null && message.hasOwnProperty("target_id")) {
                        object.target_id = $root.syft_proto.types.syft.v1.Id.toObject(message.target_id, options);
                        if (options.oneofs)
                            object.target = "target_id";
                    }
                    return object;
                };

                /**
                 * Converts this CommunicationAction to JSON.
                 * @function toJSON
                 * @memberof syft_proto.execution.v1.CommunicationAction
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                CommunicationAction.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return CommunicationAction;
            })();

            v1.PlaceholderId = (function() {

                /**
                 * Properties of a PlaceholderId.
                 * @memberof syft_proto.execution.v1
                 * @interface IPlaceholderId
                 * @property {syft_proto.types.syft.v1.IId|null} [id] PlaceholderId id
                 */

                /**
                 * Constructs a new PlaceholderId.
                 * @memberof syft_proto.execution.v1
                 * @classdesc Represents a PlaceholderId.
                 * @implements IPlaceholderId
                 * @constructor
                 * @param {syft_proto.execution.v1.IPlaceholderId=} [properties] Properties to set
                 */
                function PlaceholderId(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * PlaceholderId id.
                 * @member {syft_proto.types.syft.v1.IId|null|undefined} id
                 * @memberof syft_proto.execution.v1.PlaceholderId
                 * @instance
                 */
                PlaceholderId.prototype.id = null;

                /**
                 * Creates a new PlaceholderId instance using the specified properties.
                 * @function create
                 * @memberof syft_proto.execution.v1.PlaceholderId
                 * @static
                 * @param {syft_proto.execution.v1.IPlaceholderId=} [properties] Properties to set
                 * @returns {syft_proto.execution.v1.PlaceholderId} PlaceholderId instance
                 */
                PlaceholderId.create = function create(properties) {
                    return new PlaceholderId(properties);
                };

                /**
                 * Encodes the specified PlaceholderId message. Does not implicitly {@link syft_proto.execution.v1.PlaceholderId.verify|verify} messages.
                 * @function encode
                 * @memberof syft_proto.execution.v1.PlaceholderId
                 * @static
                 * @param {syft_proto.execution.v1.IPlaceholderId} message PlaceholderId message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                PlaceholderId.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && message.hasOwnProperty("id"))
                        $root.syft_proto.types.syft.v1.Id.encode(message.id, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified PlaceholderId message, length delimited. Does not implicitly {@link syft_proto.execution.v1.PlaceholderId.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof syft_proto.execution.v1.PlaceholderId
                 * @static
                 * @param {syft_proto.execution.v1.IPlaceholderId} message PlaceholderId message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                PlaceholderId.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a PlaceholderId message from the specified reader or buffer.
                 * @function decode
                 * @memberof syft_proto.execution.v1.PlaceholderId
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {syft_proto.execution.v1.PlaceholderId} PlaceholderId
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                PlaceholderId.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.syft_proto.execution.v1.PlaceholderId();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.id = $root.syft_proto.types.syft.v1.Id.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a PlaceholderId message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof syft_proto.execution.v1.PlaceholderId
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {syft_proto.execution.v1.PlaceholderId} PlaceholderId
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                PlaceholderId.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a PlaceholderId message.
                 * @function verify
                 * @memberof syft_proto.execution.v1.PlaceholderId
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                PlaceholderId.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.id != null && message.hasOwnProperty("id")) {
                        var error = $root.syft_proto.types.syft.v1.Id.verify(message.id);
                        if (error)
                            return "id." + error;
                    }
                    return null;
                };

                /**
                 * Creates a PlaceholderId message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof syft_proto.execution.v1.PlaceholderId
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {syft_proto.execution.v1.PlaceholderId} PlaceholderId
                 */
                PlaceholderId.fromObject = function fromObject(object) {
                    if (object instanceof $root.syft_proto.execution.v1.PlaceholderId)
                        return object;
                    var message = new $root.syft_proto.execution.v1.PlaceholderId();
                    if (object.id != null) {
                        if (typeof object.id !== "object")
                            throw TypeError(".syft_proto.execution.v1.PlaceholderId.id: object expected");
                        message.id = $root.syft_proto.types.syft.v1.Id.fromObject(object.id);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a PlaceholderId message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof syft_proto.execution.v1.PlaceholderId
                 * @static
                 * @param {syft_proto.execution.v1.PlaceholderId} message PlaceholderId
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                PlaceholderId.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.id = null;
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = $root.syft_proto.types.syft.v1.Id.toObject(message.id, options);
                    return object;
                };

                /**
                 * Converts this PlaceholderId to JSON.
                 * @function toJSON
                 * @memberof syft_proto.execution.v1.PlaceholderId
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                PlaceholderId.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return PlaceholderId;
            })();

            v1.Placeholder = (function() {

                /**
                 * Properties of a Placeholder.
                 * @memberof syft_proto.execution.v1
                 * @interface IPlaceholder
                 * @property {syft_proto.types.torch.v1.ITorchTensor|null} [child_tensor] Placeholder child_tensor
                 * @property {syft_proto.types.torch.v1.IParameter|null} [child_parameter] Placeholder child_parameter
                 * @property {syft_proto.types.syft.v1.IId|null} [id] Placeholder id
                 * @property {Array.<string>|null} [tags] Placeholder tags
                 * @property {string|null} [description] Placeholder description
                 * @property {syft_proto.types.syft.v1.IShape|null} [expected_shape] Placeholder expected_shape
                 */

                /**
                 * Constructs a new Placeholder.
                 * @memberof syft_proto.execution.v1
                 * @classdesc Represents a Placeholder.
                 * @implements IPlaceholder
                 * @constructor
                 * @param {syft_proto.execution.v1.IPlaceholder=} [properties] Properties to set
                 */
                function Placeholder(properties) {
                    this.tags = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Placeholder child_tensor.
                 * @member {syft_proto.types.torch.v1.ITorchTensor|null|undefined} child_tensor
                 * @memberof syft_proto.execution.v1.Placeholder
                 * @instance
                 */
                Placeholder.prototype.child_tensor = null;

                /**
                 * Placeholder child_parameter.
                 * @member {syft_proto.types.torch.v1.IParameter|null|undefined} child_parameter
                 * @memberof syft_proto.execution.v1.Placeholder
                 * @instance
                 */
                Placeholder.prototype.child_parameter = null;

                /**
                 * Placeholder id.
                 * @member {syft_proto.types.syft.v1.IId|null|undefined} id
                 * @memberof syft_proto.execution.v1.Placeholder
                 * @instance
                 */
                Placeholder.prototype.id = null;

                /**
                 * Placeholder tags.
                 * @member {Array.<string>} tags
                 * @memberof syft_proto.execution.v1.Placeholder
                 * @instance
                 */
                Placeholder.prototype.tags = $util.emptyArray;

                /**
                 * Placeholder description.
                 * @member {string} description
                 * @memberof syft_proto.execution.v1.Placeholder
                 * @instance
                 */
                Placeholder.prototype.description = "";

                /**
                 * Placeholder expected_shape.
                 * @member {syft_proto.types.syft.v1.IShape|null|undefined} expected_shape
                 * @memberof syft_proto.execution.v1.Placeholder
                 * @instance
                 */
                Placeholder.prototype.expected_shape = null;

                // OneOf field names bound to virtual getters and setters
                var $oneOfFields;

                /**
                 * Placeholder child.
                 * @member {"child_tensor"|"child_parameter"|undefined} child
                 * @memberof syft_proto.execution.v1.Placeholder
                 * @instance
                 */
                Object.defineProperty(Placeholder.prototype, "child", {
                    get: $util.oneOfGetter($oneOfFields = ["child_tensor", "child_parameter"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                /**
                 * Creates a new Placeholder instance using the specified properties.
                 * @function create
                 * @memberof syft_proto.execution.v1.Placeholder
                 * @static
                 * @param {syft_proto.execution.v1.IPlaceholder=} [properties] Properties to set
                 * @returns {syft_proto.execution.v1.Placeholder} Placeholder instance
                 */
                Placeholder.create = function create(properties) {
                    return new Placeholder(properties);
                };

                /**
                 * Encodes the specified Placeholder message. Does not implicitly {@link syft_proto.execution.v1.Placeholder.verify|verify} messages.
                 * @function encode
                 * @memberof syft_proto.execution.v1.Placeholder
                 * @static
                 * @param {syft_proto.execution.v1.IPlaceholder} message Placeholder message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Placeholder.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.child_tensor != null && message.hasOwnProperty("child_tensor"))
                        $root.syft_proto.types.torch.v1.TorchTensor.encode(message.child_tensor, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.child_parameter != null && message.hasOwnProperty("child_parameter"))
                        $root.syft_proto.types.torch.v1.Parameter.encode(message.child_parameter, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.id != null && message.hasOwnProperty("id"))
                        $root.syft_proto.types.syft.v1.Id.encode(message.id, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    if (message.tags != null && message.tags.length)
                        for (var i = 0; i < message.tags.length; ++i)
                            writer.uint32(/* id 4, wireType 2 =*/34).string(message.tags[i]);
                    if (message.description != null && message.hasOwnProperty("description"))
                        writer.uint32(/* id 5, wireType 2 =*/42).string(message.description);
                    if (message.expected_shape != null && message.hasOwnProperty("expected_shape"))
                        $root.syft_proto.types.syft.v1.Shape.encode(message.expected_shape, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified Placeholder message, length delimited. Does not implicitly {@link syft_proto.execution.v1.Placeholder.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof syft_proto.execution.v1.Placeholder
                 * @static
                 * @param {syft_proto.execution.v1.IPlaceholder} message Placeholder message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Placeholder.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Placeholder message from the specified reader or buffer.
                 * @function decode
                 * @memberof syft_proto.execution.v1.Placeholder
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {syft_proto.execution.v1.Placeholder} Placeholder
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Placeholder.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.syft_proto.execution.v1.Placeholder();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.child_tensor = $root.syft_proto.types.torch.v1.TorchTensor.decode(reader, reader.uint32());
                            break;
                        case 2:
                            message.child_parameter = $root.syft_proto.types.torch.v1.Parameter.decode(reader, reader.uint32());
                            break;
                        case 3:
                            message.id = $root.syft_proto.types.syft.v1.Id.decode(reader, reader.uint32());
                            break;
                        case 4:
                            if (!(message.tags && message.tags.length))
                                message.tags = [];
                            message.tags.push(reader.string());
                            break;
                        case 5:
                            message.description = reader.string();
                            break;
                        case 6:
                            message.expected_shape = $root.syft_proto.types.syft.v1.Shape.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Placeholder message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof syft_proto.execution.v1.Placeholder
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {syft_proto.execution.v1.Placeholder} Placeholder
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Placeholder.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Placeholder message.
                 * @function verify
                 * @memberof syft_proto.execution.v1.Placeholder
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Placeholder.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    var properties = {};
                    if (message.child_tensor != null && message.hasOwnProperty("child_tensor")) {
                        properties.child = 1;
                        {
                            var error = $root.syft_proto.types.torch.v1.TorchTensor.verify(message.child_tensor);
                            if (error)
                                return "child_tensor." + error;
                        }
                    }
                    if (message.child_parameter != null && message.hasOwnProperty("child_parameter")) {
                        if (properties.child === 1)
                            return "child: multiple values";
                        properties.child = 1;
                        {
                            var error = $root.syft_proto.types.torch.v1.Parameter.verify(message.child_parameter);
                            if (error)
                                return "child_parameter." + error;
                        }
                    }
                    if (message.id != null && message.hasOwnProperty("id")) {
                        var error = $root.syft_proto.types.syft.v1.Id.verify(message.id);
                        if (error)
                            return "id." + error;
                    }
                    if (message.tags != null && message.hasOwnProperty("tags")) {
                        if (!Array.isArray(message.tags))
                            return "tags: array expected";
                        for (var i = 0; i < message.tags.length; ++i)
                            if (!$util.isString(message.tags[i]))
                                return "tags: string[] expected";
                    }
                    if (message.description != null && message.hasOwnProperty("description"))
                        if (!$util.isString(message.description))
                            return "description: string expected";
                    if (message.expected_shape != null && message.hasOwnProperty("expected_shape")) {
                        var error = $root.syft_proto.types.syft.v1.Shape.verify(message.expected_shape);
                        if (error)
                            return "expected_shape." + error;
                    }
                    return null;
                };

                /**
                 * Creates a Placeholder message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof syft_proto.execution.v1.Placeholder
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {syft_proto.execution.v1.Placeholder} Placeholder
                 */
                Placeholder.fromObject = function fromObject(object) {
                    if (object instanceof $root.syft_proto.execution.v1.Placeholder)
                        return object;
                    var message = new $root.syft_proto.execution.v1.Placeholder();
                    if (object.child_tensor != null) {
                        if (typeof object.child_tensor !== "object")
                            throw TypeError(".syft_proto.execution.v1.Placeholder.child_tensor: object expected");
                        message.child_tensor = $root.syft_proto.types.torch.v1.TorchTensor.fromObject(object.child_tensor);
                    }
                    if (object.child_parameter != null) {
                        if (typeof object.child_parameter !== "object")
                            throw TypeError(".syft_proto.execution.v1.Placeholder.child_parameter: object expected");
                        message.child_parameter = $root.syft_proto.types.torch.v1.Parameter.fromObject(object.child_parameter);
                    }
                    if (object.id != null) {
                        if (typeof object.id !== "object")
                            throw TypeError(".syft_proto.execution.v1.Placeholder.id: object expected");
                        message.id = $root.syft_proto.types.syft.v1.Id.fromObject(object.id);
                    }
                    if (object.tags) {
                        if (!Array.isArray(object.tags))
                            throw TypeError(".syft_proto.execution.v1.Placeholder.tags: array expected");
                        message.tags = [];
                        for (var i = 0; i < object.tags.length; ++i)
                            message.tags[i] = String(object.tags[i]);
                    }
                    if (object.description != null)
                        message.description = String(object.description);
                    if (object.expected_shape != null) {
                        if (typeof object.expected_shape !== "object")
                            throw TypeError(".syft_proto.execution.v1.Placeholder.expected_shape: object expected");
                        message.expected_shape = $root.syft_proto.types.syft.v1.Shape.fromObject(object.expected_shape);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a Placeholder message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof syft_proto.execution.v1.Placeholder
                 * @static
                 * @param {syft_proto.execution.v1.Placeholder} message Placeholder
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Placeholder.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.tags = [];
                    if (options.defaults) {
                        object.id = null;
                        object.description = "";
                        object.expected_shape = null;
                    }
                    if (message.child_tensor != null && message.hasOwnProperty("child_tensor")) {
                        object.child_tensor = $root.syft_proto.types.torch.v1.TorchTensor.toObject(message.child_tensor, options);
                        if (options.oneofs)
                            object.child = "child_tensor";
                    }
                    if (message.child_parameter != null && message.hasOwnProperty("child_parameter")) {
                        object.child_parameter = $root.syft_proto.types.torch.v1.Parameter.toObject(message.child_parameter, options);
                        if (options.oneofs)
                            object.child = "child_parameter";
                    }
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = $root.syft_proto.types.syft.v1.Id.toObject(message.id, options);
                    if (message.tags && message.tags.length) {
                        object.tags = [];
                        for (var j = 0; j < message.tags.length; ++j)
                            object.tags[j] = message.tags[j];
                    }
                    if (message.description != null && message.hasOwnProperty("description"))
                        object.description = message.description;
                    if (message.expected_shape != null && message.hasOwnProperty("expected_shape"))
                        object.expected_shape = $root.syft_proto.types.syft.v1.Shape.toObject(message.expected_shape, options);
                    return object;
                };

                /**
                 * Converts this Placeholder to JSON.
                 * @function toJSON
                 * @memberof syft_proto.execution.v1.Placeholder
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Placeholder.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Placeholder;
            })();

            v1.ComputationAction = (function() {

                /**
                 * Properties of a ComputationAction.
                 * @memberof syft_proto.execution.v1
                 * @interface IComputationAction
                 * @property {string|null} [command] ComputationAction command
                 * @property {syft_proto.types.syft.v1.IId|null} [target_id] ComputationAction target_id
                 * @property {syft_proto.generic.pointers.v1.IPointerTensor|null} [target_pointer] ComputationAction target_pointer
                 * @property {syft_proto.execution.v1.IPlaceholderId|null} [target_placeholder_id] ComputationAction target_placeholder_id
                 * @property {syft_proto.types.torch.v1.ITorchTensor|null} [target_tensor] ComputationAction target_tensor
                 * @property {Array.<syft_proto.types.syft.v1.IArg>|null} [args] ComputationAction args
                 * @property {Object.<string,syft_proto.types.syft.v1.IArg>|null} [kwargs] ComputationAction kwargs
                 * @property {Array.<syft_proto.types.syft.v1.IId>|null} [return_ids] ComputationAction return_ids
                 * @property {Array.<syft_proto.execution.v1.IPlaceholderId>|null} [return_placeholder_ids] ComputationAction return_placeholder_ids
                 */

                /**
                 * Constructs a new ComputationAction.
                 * @memberof syft_proto.execution.v1
                 * @classdesc Represents a ComputationAction.
                 * @implements IComputationAction
                 * @constructor
                 * @param {syft_proto.execution.v1.IComputationAction=} [properties] Properties to set
                 */
                function ComputationAction(properties) {
                    this.args = [];
                    this.kwargs = {};
                    this.return_ids = [];
                    this.return_placeholder_ids = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ComputationAction command.
                 * @member {string} command
                 * @memberof syft_proto.execution.v1.ComputationAction
                 * @instance
                 */
                ComputationAction.prototype.command = "";

                /**
                 * ComputationAction target_id.
                 * @member {syft_proto.types.syft.v1.IId|null|undefined} target_id
                 * @memberof syft_proto.execution.v1.ComputationAction
                 * @instance
                 */
                ComputationAction.prototype.target_id = null;

                /**
                 * ComputationAction target_pointer.
                 * @member {syft_proto.generic.pointers.v1.IPointerTensor|null|undefined} target_pointer
                 * @memberof syft_proto.execution.v1.ComputationAction
                 * @instance
                 */
                ComputationAction.prototype.target_pointer = null;

                /**
                 * ComputationAction target_placeholder_id.
                 * @member {syft_proto.execution.v1.IPlaceholderId|null|undefined} target_placeholder_id
                 * @memberof syft_proto.execution.v1.ComputationAction
                 * @instance
                 */
                ComputationAction.prototype.target_placeholder_id = null;

                /**
                 * ComputationAction target_tensor.
                 * @member {syft_proto.types.torch.v1.ITorchTensor|null|undefined} target_tensor
                 * @memberof syft_proto.execution.v1.ComputationAction
                 * @instance
                 */
                ComputationAction.prototype.target_tensor = null;

                /**
                 * ComputationAction args.
                 * @member {Array.<syft_proto.types.syft.v1.IArg>} args
                 * @memberof syft_proto.execution.v1.ComputationAction
                 * @instance
                 */
                ComputationAction.prototype.args = $util.emptyArray;

                /**
                 * ComputationAction kwargs.
                 * @member {Object.<string,syft_proto.types.syft.v1.IArg>} kwargs
                 * @memberof syft_proto.execution.v1.ComputationAction
                 * @instance
                 */
                ComputationAction.prototype.kwargs = $util.emptyObject;

                /**
                 * ComputationAction return_ids.
                 * @member {Array.<syft_proto.types.syft.v1.IId>} return_ids
                 * @memberof syft_proto.execution.v1.ComputationAction
                 * @instance
                 */
                ComputationAction.prototype.return_ids = $util.emptyArray;

                /**
                 * ComputationAction return_placeholder_ids.
                 * @member {Array.<syft_proto.execution.v1.IPlaceholderId>} return_placeholder_ids
                 * @memberof syft_proto.execution.v1.ComputationAction
                 * @instance
                 */
                ComputationAction.prototype.return_placeholder_ids = $util.emptyArray;

                // OneOf field names bound to virtual getters and setters
                var $oneOfFields;

                /**
                 * ComputationAction target.
                 * @member {"target_id"|"target_pointer"|"target_placeholder_id"|"target_tensor"|undefined} target
                 * @memberof syft_proto.execution.v1.ComputationAction
                 * @instance
                 */
                Object.defineProperty(ComputationAction.prototype, "target", {
                    get: $util.oneOfGetter($oneOfFields = ["target_id", "target_pointer", "target_placeholder_id", "target_tensor"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                /**
                 * Creates a new ComputationAction instance using the specified properties.
                 * @function create
                 * @memberof syft_proto.execution.v1.ComputationAction
                 * @static
                 * @param {syft_proto.execution.v1.IComputationAction=} [properties] Properties to set
                 * @returns {syft_proto.execution.v1.ComputationAction} ComputationAction instance
                 */
                ComputationAction.create = function create(properties) {
                    return new ComputationAction(properties);
                };

                /**
                 * Encodes the specified ComputationAction message. Does not implicitly {@link syft_proto.execution.v1.ComputationAction.verify|verify} messages.
                 * @function encode
                 * @memberof syft_proto.execution.v1.ComputationAction
                 * @static
                 * @param {syft_proto.execution.v1.IComputationAction} message ComputationAction message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ComputationAction.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.command != null && message.hasOwnProperty("command"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.command);
                    if (message.target_pointer != null && message.hasOwnProperty("target_pointer"))
                        $root.syft_proto.generic.pointers.v1.PointerTensor.encode(message.target_pointer, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.target_placeholder_id != null && message.hasOwnProperty("target_placeholder_id"))
                        $root.syft_proto.execution.v1.PlaceholderId.encode(message.target_placeholder_id, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    if (message.target_tensor != null && message.hasOwnProperty("target_tensor"))
                        $root.syft_proto.types.torch.v1.TorchTensor.encode(message.target_tensor, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    if (message.args != null && message.args.length)
                        for (var i = 0; i < message.args.length; ++i)
                            $root.syft_proto.types.syft.v1.Arg.encode(message.args[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                    if (message.kwargs != null && message.hasOwnProperty("kwargs"))
                        for (var keys = Object.keys(message.kwargs), i = 0; i < keys.length; ++i) {
                            writer.uint32(/* id 6, wireType 2 =*/50).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                            $root.syft_proto.types.syft.v1.Arg.encode(message.kwargs[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                        }
                    if (message.return_ids != null && message.return_ids.length)
                        for (var i = 0; i < message.return_ids.length; ++i)
                            $root.syft_proto.types.syft.v1.Id.encode(message.return_ids[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                    if (message.return_placeholder_ids != null && message.return_placeholder_ids.length)
                        for (var i = 0; i < message.return_placeholder_ids.length; ++i)
                            $root.syft_proto.execution.v1.PlaceholderId.encode(message.return_placeholder_ids[i], writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                    if (message.target_id != null && message.hasOwnProperty("target_id"))
                        $root.syft_proto.types.syft.v1.Id.encode(message.target_id, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified ComputationAction message, length delimited. Does not implicitly {@link syft_proto.execution.v1.ComputationAction.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof syft_proto.execution.v1.ComputationAction
                 * @static
                 * @param {syft_proto.execution.v1.IComputationAction} message ComputationAction message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ComputationAction.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a ComputationAction message from the specified reader or buffer.
                 * @function decode
                 * @memberof syft_proto.execution.v1.ComputationAction
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {syft_proto.execution.v1.ComputationAction} ComputationAction
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ComputationAction.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.syft_proto.execution.v1.ComputationAction(), key;
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.command = reader.string();
                            break;
                        case 9:
                            message.target_id = $root.syft_proto.types.syft.v1.Id.decode(reader, reader.uint32());
                            break;
                        case 2:
                            message.target_pointer = $root.syft_proto.generic.pointers.v1.PointerTensor.decode(reader, reader.uint32());
                            break;
                        case 3:
                            message.target_placeholder_id = $root.syft_proto.execution.v1.PlaceholderId.decode(reader, reader.uint32());
                            break;
                        case 4:
                            message.target_tensor = $root.syft_proto.types.torch.v1.TorchTensor.decode(reader, reader.uint32());
                            break;
                        case 5:
                            if (!(message.args && message.args.length))
                                message.args = [];
                            message.args.push($root.syft_proto.types.syft.v1.Arg.decode(reader, reader.uint32()));
                            break;
                        case 6:
                            reader.skip().pos++;
                            if (message.kwargs === $util.emptyObject)
                                message.kwargs = {};
                            key = reader.string();
                            reader.pos++;
                            message.kwargs[key] = $root.syft_proto.types.syft.v1.Arg.decode(reader, reader.uint32());
                            break;
                        case 7:
                            if (!(message.return_ids && message.return_ids.length))
                                message.return_ids = [];
                            message.return_ids.push($root.syft_proto.types.syft.v1.Id.decode(reader, reader.uint32()));
                            break;
                        case 8:
                            if (!(message.return_placeholder_ids && message.return_placeholder_ids.length))
                                message.return_placeholder_ids = [];
                            message.return_placeholder_ids.push($root.syft_proto.execution.v1.PlaceholderId.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a ComputationAction message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof syft_proto.execution.v1.ComputationAction
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {syft_proto.execution.v1.ComputationAction} ComputationAction
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ComputationAction.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a ComputationAction message.
                 * @function verify
                 * @memberof syft_proto.execution.v1.ComputationAction
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ComputationAction.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    var properties = {};
                    if (message.command != null && message.hasOwnProperty("command"))
                        if (!$util.isString(message.command))
                            return "command: string expected";
                    if (message.target_id != null && message.hasOwnProperty("target_id")) {
                        properties.target = 1;
                        {
                            var error = $root.syft_proto.types.syft.v1.Id.verify(message.target_id);
                            if (error)
                                return "target_id." + error;
                        }
                    }
                    if (message.target_pointer != null && message.hasOwnProperty("target_pointer")) {
                        if (properties.target === 1)
                            return "target: multiple values";
                        properties.target = 1;
                        {
                            var error = $root.syft_proto.generic.pointers.v1.PointerTensor.verify(message.target_pointer);
                            if (error)
                                return "target_pointer." + error;
                        }
                    }
                    if (message.target_placeholder_id != null && message.hasOwnProperty("target_placeholder_id")) {
                        if (properties.target === 1)
                            return "target: multiple values";
                        properties.target = 1;
                        {
                            var error = $root.syft_proto.execution.v1.PlaceholderId.verify(message.target_placeholder_id);
                            if (error)
                                return "target_placeholder_id." + error;
                        }
                    }
                    if (message.target_tensor != null && message.hasOwnProperty("target_tensor")) {
                        if (properties.target === 1)
                            return "target: multiple values";
                        properties.target = 1;
                        {
                            var error = $root.syft_proto.types.torch.v1.TorchTensor.verify(message.target_tensor);
                            if (error)
                                return "target_tensor." + error;
                        }
                    }
                    if (message.args != null && message.hasOwnProperty("args")) {
                        if (!Array.isArray(message.args))
                            return "args: array expected";
                        for (var i = 0; i < message.args.length; ++i) {
                            var error = $root.syft_proto.types.syft.v1.Arg.verify(message.args[i]);
                            if (error)
                                return "args." + error;
                        }
                    }
                    if (message.kwargs != null && message.hasOwnProperty("kwargs")) {
                        if (!$util.isObject(message.kwargs))
                            return "kwargs: object expected";
                        var key = Object.keys(message.kwargs);
                        for (var i = 0; i < key.length; ++i) {
                            var error = $root.syft_proto.types.syft.v1.Arg.verify(message.kwargs[key[i]]);
                            if (error)
                                return "kwargs." + error;
                        }
                    }
                    if (message.return_ids != null && message.hasOwnProperty("return_ids")) {
                        if (!Array.isArray(message.return_ids))
                            return "return_ids: array expected";
                        for (var i = 0; i < message.return_ids.length; ++i) {
                            var error = $root.syft_proto.types.syft.v1.Id.verify(message.return_ids[i]);
                            if (error)
                                return "return_ids." + error;
                        }
                    }
                    if (message.return_placeholder_ids != null && message.hasOwnProperty("return_placeholder_ids")) {
                        if (!Array.isArray(message.return_placeholder_ids))
                            return "return_placeholder_ids: array expected";
                        for (var i = 0; i < message.return_placeholder_ids.length; ++i) {
                            var error = $root.syft_proto.execution.v1.PlaceholderId.verify(message.return_placeholder_ids[i]);
                            if (error)
                                return "return_placeholder_ids." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates a ComputationAction message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof syft_proto.execution.v1.ComputationAction
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {syft_proto.execution.v1.ComputationAction} ComputationAction
                 */
                ComputationAction.fromObject = function fromObject(object) {
                    if (object instanceof $root.syft_proto.execution.v1.ComputationAction)
                        return object;
                    var message = new $root.syft_proto.execution.v1.ComputationAction();
                    if (object.command != null)
                        message.command = String(object.command);
                    if (object.target_id != null) {
                        if (typeof object.target_id !== "object")
                            throw TypeError(".syft_proto.execution.v1.ComputationAction.target_id: object expected");
                        message.target_id = $root.syft_proto.types.syft.v1.Id.fromObject(object.target_id);
                    }
                    if (object.target_pointer != null) {
                        if (typeof object.target_pointer !== "object")
                            throw TypeError(".syft_proto.execution.v1.ComputationAction.target_pointer: object expected");
                        message.target_pointer = $root.syft_proto.generic.pointers.v1.PointerTensor.fromObject(object.target_pointer);
                    }
                    if (object.target_placeholder_id != null) {
                        if (typeof object.target_placeholder_id !== "object")
                            throw TypeError(".syft_proto.execution.v1.ComputationAction.target_placeholder_id: object expected");
                        message.target_placeholder_id = $root.syft_proto.execution.v1.PlaceholderId.fromObject(object.target_placeholder_id);
                    }
                    if (object.target_tensor != null) {
                        if (typeof object.target_tensor !== "object")
                            throw TypeError(".syft_proto.execution.v1.ComputationAction.target_tensor: object expected");
                        message.target_tensor = $root.syft_proto.types.torch.v1.TorchTensor.fromObject(object.target_tensor);
                    }
                    if (object.args) {
                        if (!Array.isArray(object.args))
                            throw TypeError(".syft_proto.execution.v1.ComputationAction.args: array expected");
                        message.args = [];
                        for (var i = 0; i < object.args.length; ++i) {
                            if (typeof object.args[i] !== "object")
                                throw TypeError(".syft_proto.execution.v1.ComputationAction.args: object expected");
                            message.args[i] = $root.syft_proto.types.syft.v1.Arg.fromObject(object.args[i]);
                        }
                    }
                    if (object.kwargs) {
                        if (typeof object.kwargs !== "object")
                            throw TypeError(".syft_proto.execution.v1.ComputationAction.kwargs: object expected");
                        message.kwargs = {};
                        for (var keys = Object.keys(object.kwargs), i = 0; i < keys.length; ++i) {
                            if (typeof object.kwargs[keys[i]] !== "object")
                                throw TypeError(".syft_proto.execution.v1.ComputationAction.kwargs: object expected");
                            message.kwargs[keys[i]] = $root.syft_proto.types.syft.v1.Arg.fromObject(object.kwargs[keys[i]]);
                        }
                    }
                    if (object.return_ids) {
                        if (!Array.isArray(object.return_ids))
                            throw TypeError(".syft_proto.execution.v1.ComputationAction.return_ids: array expected");
                        message.return_ids = [];
                        for (var i = 0; i < object.return_ids.length; ++i) {
                            if (typeof object.return_ids[i] !== "object")
                                throw TypeError(".syft_proto.execution.v1.ComputationAction.return_ids: object expected");
                            message.return_ids[i] = $root.syft_proto.types.syft.v1.Id.fromObject(object.return_ids[i]);
                        }
                    }
                    if (object.return_placeholder_ids) {
                        if (!Array.isArray(object.return_placeholder_ids))
                            throw TypeError(".syft_proto.execution.v1.ComputationAction.return_placeholder_ids: array expected");
                        message.return_placeholder_ids = [];
                        for (var i = 0; i < object.return_placeholder_ids.length; ++i) {
                            if (typeof object.return_placeholder_ids[i] !== "object")
                                throw TypeError(".syft_proto.execution.v1.ComputationAction.return_placeholder_ids: object expected");
                            message.return_placeholder_ids[i] = $root.syft_proto.execution.v1.PlaceholderId.fromObject(object.return_placeholder_ids[i]);
                        }
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a ComputationAction message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof syft_proto.execution.v1.ComputationAction
                 * @static
                 * @param {syft_proto.execution.v1.ComputationAction} message ComputationAction
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ComputationAction.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults) {
                        object.args = [];
                        object.return_ids = [];
                        object.return_placeholder_ids = [];
                    }
                    if (options.objects || options.defaults)
                        object.kwargs = {};
                    if (options.defaults)
                        object.command = "";
                    if (message.command != null && message.hasOwnProperty("command"))
                        object.command = message.command;
                    if (message.target_pointer != null && message.hasOwnProperty("target_pointer")) {
                        object.target_pointer = $root.syft_proto.generic.pointers.v1.PointerTensor.toObject(message.target_pointer, options);
                        if (options.oneofs)
                            object.target = "target_pointer";
                    }
                    if (message.target_placeholder_id != null && message.hasOwnProperty("target_placeholder_id")) {
                        object.target_placeholder_id = $root.syft_proto.execution.v1.PlaceholderId.toObject(message.target_placeholder_id, options);
                        if (options.oneofs)
                            object.target = "target_placeholder_id";
                    }
                    if (message.target_tensor != null && message.hasOwnProperty("target_tensor")) {
                        object.target_tensor = $root.syft_proto.types.torch.v1.TorchTensor.toObject(message.target_tensor, options);
                        if (options.oneofs)
                            object.target = "target_tensor";
                    }
                    if (message.args && message.args.length) {
                        object.args = [];
                        for (var j = 0; j < message.args.length; ++j)
                            object.args[j] = $root.syft_proto.types.syft.v1.Arg.toObject(message.args[j], options);
                    }
                    var keys2;
                    if (message.kwargs && (keys2 = Object.keys(message.kwargs)).length) {
                        object.kwargs = {};
                        for (var j = 0; j < keys2.length; ++j)
                            object.kwargs[keys2[j]] = $root.syft_proto.types.syft.v1.Arg.toObject(message.kwargs[keys2[j]], options);
                    }
                    if (message.return_ids && message.return_ids.length) {
                        object.return_ids = [];
                        for (var j = 0; j < message.return_ids.length; ++j)
                            object.return_ids[j] = $root.syft_proto.types.syft.v1.Id.toObject(message.return_ids[j], options);
                    }
                    if (message.return_placeholder_ids && message.return_placeholder_ids.length) {
                        object.return_placeholder_ids = [];
                        for (var j = 0; j < message.return_placeholder_ids.length; ++j)
                            object.return_placeholder_ids[j] = $root.syft_proto.execution.v1.PlaceholderId.toObject(message.return_placeholder_ids[j], options);
                    }
                    if (message.target_id != null && message.hasOwnProperty("target_id")) {
                        object.target_id = $root.syft_proto.types.syft.v1.Id.toObject(message.target_id, options);
                        if (options.oneofs)
                            object.target = "target_id";
                    }
                    return object;
                };

                /**
                 * Converts this ComputationAction to JSON.
                 * @function toJSON
                 * @memberof syft_proto.execution.v1.ComputationAction
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ComputationAction.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return ComputationAction;
            })();

            v1.Plan = (function() {

                /**
                 * Properties of a Plan.
                 * @memberof syft_proto.execution.v1
                 * @interface IPlan
                 * @property {syft_proto.types.syft.v1.IId|null} [id] Plan id
                 * @property {syft_proto.execution.v1.IRole|null} [role] Plan role
                 * @property {boolean|null} [include_state] Plan include_state
                 * @property {string|null} [name] Plan name
                 * @property {Array.<string>|null} [tags] Plan tags
                 * @property {string|null} [description] Plan description
                 * @property {Uint8Array|null} [torchscript] Plan torchscript
                 * @property {syft_proto.execution.v1.INestedTypeWrapper|null} [input_types] Plan input_types
                 * @property {string|null} [base_framework] Plan base_framework
                 * @property {Object.<string,syft_proto.execution.v1.IRole>|null} [roles] Plan roles
                 */

                /**
                 * Constructs a new Plan.
                 * @memberof syft_proto.execution.v1
                 * @classdesc Represents a Plan.
                 * @implements IPlan
                 * @constructor
                 * @param {syft_proto.execution.v1.IPlan=} [properties] Properties to set
                 */
                function Plan(properties) {
                    this.tags = [];
                    this.roles = {};
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Plan id.
                 * @member {syft_proto.types.syft.v1.IId|null|undefined} id
                 * @memberof syft_proto.execution.v1.Plan
                 * @instance
                 */
                Plan.prototype.id = null;

                /**
                 * Plan role.
                 * @member {syft_proto.execution.v1.IRole|null|undefined} role
                 * @memberof syft_proto.execution.v1.Plan
                 * @instance
                 */
                Plan.prototype.role = null;

                /**
                 * Plan include_state.
                 * @member {boolean} include_state
                 * @memberof syft_proto.execution.v1.Plan
                 * @instance
                 */
                Plan.prototype.include_state = false;

                /**
                 * Plan name.
                 * @member {string} name
                 * @memberof syft_proto.execution.v1.Plan
                 * @instance
                 */
                Plan.prototype.name = "";

                /**
                 * Plan tags.
                 * @member {Array.<string>} tags
                 * @memberof syft_proto.execution.v1.Plan
                 * @instance
                 */
                Plan.prototype.tags = $util.emptyArray;

                /**
                 * Plan description.
                 * @member {string} description
                 * @memberof syft_proto.execution.v1.Plan
                 * @instance
                 */
                Plan.prototype.description = "";

                /**
                 * Plan torchscript.
                 * @member {Uint8Array} torchscript
                 * @memberof syft_proto.execution.v1.Plan
                 * @instance
                 */
                Plan.prototype.torchscript = $util.newBuffer([]);

                /**
                 * Plan input_types.
                 * @member {syft_proto.execution.v1.INestedTypeWrapper|null|undefined} input_types
                 * @memberof syft_proto.execution.v1.Plan
                 * @instance
                 */
                Plan.prototype.input_types = null;

                /**
                 * Plan base_framework.
                 * @member {string} base_framework
                 * @memberof syft_proto.execution.v1.Plan
                 * @instance
                 */
                Plan.prototype.base_framework = "";

                /**
                 * Plan roles.
                 * @member {Object.<string,syft_proto.execution.v1.IRole>} roles
                 * @memberof syft_proto.execution.v1.Plan
                 * @instance
                 */
                Plan.prototype.roles = $util.emptyObject;

                /**
                 * Creates a new Plan instance using the specified properties.
                 * @function create
                 * @memberof syft_proto.execution.v1.Plan
                 * @static
                 * @param {syft_proto.execution.v1.IPlan=} [properties] Properties to set
                 * @returns {syft_proto.execution.v1.Plan} Plan instance
                 */
                Plan.create = function create(properties) {
                    return new Plan(properties);
                };

                /**
                 * Encodes the specified Plan message. Does not implicitly {@link syft_proto.execution.v1.Plan.verify|verify} messages.
                 * @function encode
                 * @memberof syft_proto.execution.v1.Plan
                 * @static
                 * @param {syft_proto.execution.v1.IPlan} message Plan message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Plan.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && message.hasOwnProperty("id"))
                        $root.syft_proto.types.syft.v1.Id.encode(message.id, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.role != null && message.hasOwnProperty("role"))
                        $root.syft_proto.execution.v1.Role.encode(message.role, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.include_state != null && message.hasOwnProperty("include_state"))
                        writer.uint32(/* id 3, wireType 0 =*/24).bool(message.include_state);
                    if (message.name != null && message.hasOwnProperty("name"))
                        writer.uint32(/* id 4, wireType 2 =*/34).string(message.name);
                    if (message.tags != null && message.tags.length)
                        for (var i = 0; i < message.tags.length; ++i)
                            writer.uint32(/* id 5, wireType 2 =*/42).string(message.tags[i]);
                    if (message.description != null && message.hasOwnProperty("description"))
                        writer.uint32(/* id 6, wireType 2 =*/50).string(message.description);
                    if (message.torchscript != null && message.hasOwnProperty("torchscript"))
                        writer.uint32(/* id 7, wireType 2 =*/58).bytes(message.torchscript);
                    if (message.input_types != null && message.hasOwnProperty("input_types"))
                        $root.syft_proto.execution.v1.NestedTypeWrapper.encode(message.input_types, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                    if (message.base_framework != null && message.hasOwnProperty("base_framework"))
                        writer.uint32(/* id 9, wireType 2 =*/74).string(message.base_framework);
                    if (message.roles != null && message.hasOwnProperty("roles"))
                        for (var keys = Object.keys(message.roles), i = 0; i < keys.length; ++i) {
                            writer.uint32(/* id 10, wireType 2 =*/82).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                            $root.syft_proto.execution.v1.Role.encode(message.roles[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                        }
                    return writer;
                };

                /**
                 * Encodes the specified Plan message, length delimited. Does not implicitly {@link syft_proto.execution.v1.Plan.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof syft_proto.execution.v1.Plan
                 * @static
                 * @param {syft_proto.execution.v1.IPlan} message Plan message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Plan.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Plan message from the specified reader or buffer.
                 * @function decode
                 * @memberof syft_proto.execution.v1.Plan
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {syft_proto.execution.v1.Plan} Plan
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Plan.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.syft_proto.execution.v1.Plan(), key;
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.id = $root.syft_proto.types.syft.v1.Id.decode(reader, reader.uint32());
                            break;
                        case 2:
                            message.role = $root.syft_proto.execution.v1.Role.decode(reader, reader.uint32());
                            break;
                        case 3:
                            message.include_state = reader.bool();
                            break;
                        case 4:
                            message.name = reader.string();
                            break;
                        case 5:
                            if (!(message.tags && message.tags.length))
                                message.tags = [];
                            message.tags.push(reader.string());
                            break;
                        case 6:
                            message.description = reader.string();
                            break;
                        case 7:
                            message.torchscript = reader.bytes();
                            break;
                        case 8:
                            message.input_types = $root.syft_proto.execution.v1.NestedTypeWrapper.decode(reader, reader.uint32());
                            break;
                        case 9:
                            message.base_framework = reader.string();
                            break;
                        case 10:
                            reader.skip().pos++;
                            if (message.roles === $util.emptyObject)
                                message.roles = {};
                            key = reader.string();
                            reader.pos++;
                            message.roles[key] = $root.syft_proto.execution.v1.Role.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Plan message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof syft_proto.execution.v1.Plan
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {syft_proto.execution.v1.Plan} Plan
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Plan.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Plan message.
                 * @function verify
                 * @memberof syft_proto.execution.v1.Plan
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Plan.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.id != null && message.hasOwnProperty("id")) {
                        var error = $root.syft_proto.types.syft.v1.Id.verify(message.id);
                        if (error)
                            return "id." + error;
                    }
                    if (message.role != null && message.hasOwnProperty("role")) {
                        var error = $root.syft_proto.execution.v1.Role.verify(message.role);
                        if (error)
                            return "role." + error;
                    }
                    if (message.include_state != null && message.hasOwnProperty("include_state"))
                        if (typeof message.include_state !== "boolean")
                            return "include_state: boolean expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.tags != null && message.hasOwnProperty("tags")) {
                        if (!Array.isArray(message.tags))
                            return "tags: array expected";
                        for (var i = 0; i < message.tags.length; ++i)
                            if (!$util.isString(message.tags[i]))
                                return "tags: string[] expected";
                    }
                    if (message.description != null && message.hasOwnProperty("description"))
                        if (!$util.isString(message.description))
                            return "description: string expected";
                    if (message.torchscript != null && message.hasOwnProperty("torchscript"))
                        if (!(message.torchscript && typeof message.torchscript.length === "number" || $util.isString(message.torchscript)))
                            return "torchscript: buffer expected";
                    if (message.input_types != null && message.hasOwnProperty("input_types")) {
                        var error = $root.syft_proto.execution.v1.NestedTypeWrapper.verify(message.input_types);
                        if (error)
                            return "input_types." + error;
                    }
                    if (message.base_framework != null && message.hasOwnProperty("base_framework"))
                        if (!$util.isString(message.base_framework))
                            return "base_framework: string expected";
                    if (message.roles != null && message.hasOwnProperty("roles")) {
                        if (!$util.isObject(message.roles))
                            return "roles: object expected";
                        var key = Object.keys(message.roles);
                        for (var i = 0; i < key.length; ++i) {
                            var error = $root.syft_proto.execution.v1.Role.verify(message.roles[key[i]]);
                            if (error)
                                return "roles." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates a Plan message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof syft_proto.execution.v1.Plan
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {syft_proto.execution.v1.Plan} Plan
                 */
                Plan.fromObject = function fromObject(object) {
                    if (object instanceof $root.syft_proto.execution.v1.Plan)
                        return object;
                    var message = new $root.syft_proto.execution.v1.Plan();
                    if (object.id != null) {
                        if (typeof object.id !== "object")
                            throw TypeError(".syft_proto.execution.v1.Plan.id: object expected");
                        message.id = $root.syft_proto.types.syft.v1.Id.fromObject(object.id);
                    }
                    if (object.role != null) {
                        if (typeof object.role !== "object")
                            throw TypeError(".syft_proto.execution.v1.Plan.role: object expected");
                        message.role = $root.syft_proto.execution.v1.Role.fromObject(object.role);
                    }
                    if (object.include_state != null)
                        message.include_state = Boolean(object.include_state);
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.tags) {
                        if (!Array.isArray(object.tags))
                            throw TypeError(".syft_proto.execution.v1.Plan.tags: array expected");
                        message.tags = [];
                        for (var i = 0; i < object.tags.length; ++i)
                            message.tags[i] = String(object.tags[i]);
                    }
                    if (object.description != null)
                        message.description = String(object.description);
                    if (object.torchscript != null)
                        if (typeof object.torchscript === "string")
                            $util.base64.decode(object.torchscript, message.torchscript = $util.newBuffer($util.base64.length(object.torchscript)), 0);
                        else if (object.torchscript.length)
                            message.torchscript = object.torchscript;
                    if (object.input_types != null) {
                        if (typeof object.input_types !== "object")
                            throw TypeError(".syft_proto.execution.v1.Plan.input_types: object expected");
                        message.input_types = $root.syft_proto.execution.v1.NestedTypeWrapper.fromObject(object.input_types);
                    }
                    if (object.base_framework != null)
                        message.base_framework = String(object.base_framework);
                    if (object.roles) {
                        if (typeof object.roles !== "object")
                            throw TypeError(".syft_proto.execution.v1.Plan.roles: object expected");
                        message.roles = {};
                        for (var keys = Object.keys(object.roles), i = 0; i < keys.length; ++i) {
                            if (typeof object.roles[keys[i]] !== "object")
                                throw TypeError(".syft_proto.execution.v1.Plan.roles: object expected");
                            message.roles[keys[i]] = $root.syft_proto.execution.v1.Role.fromObject(object.roles[keys[i]]);
                        }
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a Plan message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof syft_proto.execution.v1.Plan
                 * @static
                 * @param {syft_proto.execution.v1.Plan} message Plan
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Plan.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.tags = [];
                    if (options.objects || options.defaults)
                        object.roles = {};
                    if (options.defaults) {
                        object.id = null;
                        object.role = null;
                        object.include_state = false;
                        object.name = "";
                        object.description = "";
                        if (options.bytes === String)
                            object.torchscript = "";
                        else {
                            object.torchscript = [];
                            if (options.bytes !== Array)
                                object.torchscript = $util.newBuffer(object.torchscript);
                        }
                        object.input_types = null;
                        object.base_framework = "";
                    }
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = $root.syft_proto.types.syft.v1.Id.toObject(message.id, options);
                    if (message.role != null && message.hasOwnProperty("role"))
                        object.role = $root.syft_proto.execution.v1.Role.toObject(message.role, options);
                    if (message.include_state != null && message.hasOwnProperty("include_state"))
                        object.include_state = message.include_state;
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.tags && message.tags.length) {
                        object.tags = [];
                        for (var j = 0; j < message.tags.length; ++j)
                            object.tags[j] = message.tags[j];
                    }
                    if (message.description != null && message.hasOwnProperty("description"))
                        object.description = message.description;
                    if (message.torchscript != null && message.hasOwnProperty("torchscript"))
                        object.torchscript = options.bytes === String ? $util.base64.encode(message.torchscript, 0, message.torchscript.length) : options.bytes === Array ? Array.prototype.slice.call(message.torchscript) : message.torchscript;
                    if (message.input_types != null && message.hasOwnProperty("input_types"))
                        object.input_types = $root.syft_proto.execution.v1.NestedTypeWrapper.toObject(message.input_types, options);
                    if (message.base_framework != null && message.hasOwnProperty("base_framework"))
                        object.base_framework = message.base_framework;
                    var keys2;
                    if (message.roles && (keys2 = Object.keys(message.roles)).length) {
                        object.roles = {};
                        for (var j = 0; j < keys2.length; ++j)
                            object.roles[keys2[j]] = $root.syft_proto.execution.v1.Role.toObject(message.roles[keys2[j]], options);
                    }
                    return object;
                };

                /**
                 * Converts this Plan to JSON.
                 * @function toJSON
                 * @memberof syft_proto.execution.v1.Plan
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Plan.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Plan;
            })();

            v1.Role = (function() {

                /**
                 * Properties of a Role.
                 * @memberof syft_proto.execution.v1
                 * @interface IRole
                 * @property {syft_proto.types.syft.v1.IId|null} [id] Role id
                 * @property {Array.<syft_proto.execution.v1.IComputationAction>|null} [actions] Role actions
                 * @property {syft_proto.execution.v1.IState|null} [state] Role state
                 * @property {Array.<syft_proto.execution.v1.IPlaceholder>|null} [placeholders] Role placeholders
                 * @property {Array.<syft_proto.types.syft.v1.IId>|null} [input_placeholder_ids] Role input_placeholder_ids
                 * @property {Array.<syft_proto.types.syft.v1.IId>|null} [output_placeholder_ids] Role output_placeholder_ids
                 * @property {Array.<string>|null} [tags] Role tags
                 * @property {string|null} [description] Role description
                 */

                /**
                 * Constructs a new Role.
                 * @memberof syft_proto.execution.v1
                 * @classdesc Represents a Role.
                 * @implements IRole
                 * @constructor
                 * @param {syft_proto.execution.v1.IRole=} [properties] Properties to set
                 */
                function Role(properties) {
                    this.actions = [];
                    this.placeholders = [];
                    this.input_placeholder_ids = [];
                    this.output_placeholder_ids = [];
                    this.tags = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Role id.
                 * @member {syft_proto.types.syft.v1.IId|null|undefined} id
                 * @memberof syft_proto.execution.v1.Role
                 * @instance
                 */
                Role.prototype.id = null;

                /**
                 * Role actions.
                 * @member {Array.<syft_proto.execution.v1.IComputationAction>} actions
                 * @memberof syft_proto.execution.v1.Role
                 * @instance
                 */
                Role.prototype.actions = $util.emptyArray;

                /**
                 * Role state.
                 * @member {syft_proto.execution.v1.IState|null|undefined} state
                 * @memberof syft_proto.execution.v1.Role
                 * @instance
                 */
                Role.prototype.state = null;

                /**
                 * Role placeholders.
                 * @member {Array.<syft_proto.execution.v1.IPlaceholder>} placeholders
                 * @memberof syft_proto.execution.v1.Role
                 * @instance
                 */
                Role.prototype.placeholders = $util.emptyArray;

                /**
                 * Role input_placeholder_ids.
                 * @member {Array.<syft_proto.types.syft.v1.IId>} input_placeholder_ids
                 * @memberof syft_proto.execution.v1.Role
                 * @instance
                 */
                Role.prototype.input_placeholder_ids = $util.emptyArray;

                /**
                 * Role output_placeholder_ids.
                 * @member {Array.<syft_proto.types.syft.v1.IId>} output_placeholder_ids
                 * @memberof syft_proto.execution.v1.Role
                 * @instance
                 */
                Role.prototype.output_placeholder_ids = $util.emptyArray;

                /**
                 * Role tags.
                 * @member {Array.<string>} tags
                 * @memberof syft_proto.execution.v1.Role
                 * @instance
                 */
                Role.prototype.tags = $util.emptyArray;

                /**
                 * Role description.
                 * @member {string} description
                 * @memberof syft_proto.execution.v1.Role
                 * @instance
                 */
                Role.prototype.description = "";

                /**
                 * Creates a new Role instance using the specified properties.
                 * @function create
                 * @memberof syft_proto.execution.v1.Role
                 * @static
                 * @param {syft_proto.execution.v1.IRole=} [properties] Properties to set
                 * @returns {syft_proto.execution.v1.Role} Role instance
                 */
                Role.create = function create(properties) {
                    return new Role(properties);
                };

                /**
                 * Encodes the specified Role message. Does not implicitly {@link syft_proto.execution.v1.Role.verify|verify} messages.
                 * @function encode
                 * @memberof syft_proto.execution.v1.Role
                 * @static
                 * @param {syft_proto.execution.v1.IRole} message Role message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Role.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && message.hasOwnProperty("id"))
                        $root.syft_proto.types.syft.v1.Id.encode(message.id, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.actions != null && message.actions.length)
                        for (var i = 0; i < message.actions.length; ++i)
                            $root.syft_proto.execution.v1.ComputationAction.encode(message.actions[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.state != null && message.hasOwnProperty("state"))
                        $root.syft_proto.execution.v1.State.encode(message.state, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    if (message.placeholders != null && message.placeholders.length)
                        for (var i = 0; i < message.placeholders.length; ++i)
                            $root.syft_proto.execution.v1.Placeholder.encode(message.placeholders[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    if (message.input_placeholder_ids != null && message.input_placeholder_ids.length)
                        for (var i = 0; i < message.input_placeholder_ids.length; ++i)
                            $root.syft_proto.types.syft.v1.Id.encode(message.input_placeholder_ids[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                    if (message.output_placeholder_ids != null && message.output_placeholder_ids.length)
                        for (var i = 0; i < message.output_placeholder_ids.length; ++i)
                            $root.syft_proto.types.syft.v1.Id.encode(message.output_placeholder_ids[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                    if (message.tags != null && message.tags.length)
                        for (var i = 0; i < message.tags.length; ++i)
                            writer.uint32(/* id 7, wireType 2 =*/58).string(message.tags[i]);
                    if (message.description != null && message.hasOwnProperty("description"))
                        writer.uint32(/* id 8, wireType 2 =*/66).string(message.description);
                    return writer;
                };

                /**
                 * Encodes the specified Role message, length delimited. Does not implicitly {@link syft_proto.execution.v1.Role.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof syft_proto.execution.v1.Role
                 * @static
                 * @param {syft_proto.execution.v1.IRole} message Role message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Role.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Role message from the specified reader or buffer.
                 * @function decode
                 * @memberof syft_proto.execution.v1.Role
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {syft_proto.execution.v1.Role} Role
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Role.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.syft_proto.execution.v1.Role();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.id = $root.syft_proto.types.syft.v1.Id.decode(reader, reader.uint32());
                            break;
                        case 2:
                            if (!(message.actions && message.actions.length))
                                message.actions = [];
                            message.actions.push($root.syft_proto.execution.v1.ComputationAction.decode(reader, reader.uint32()));
                            break;
                        case 3:
                            message.state = $root.syft_proto.execution.v1.State.decode(reader, reader.uint32());
                            break;
                        case 4:
                            if (!(message.placeholders && message.placeholders.length))
                                message.placeholders = [];
                            message.placeholders.push($root.syft_proto.execution.v1.Placeholder.decode(reader, reader.uint32()));
                            break;
                        case 5:
                            if (!(message.input_placeholder_ids && message.input_placeholder_ids.length))
                                message.input_placeholder_ids = [];
                            message.input_placeholder_ids.push($root.syft_proto.types.syft.v1.Id.decode(reader, reader.uint32()));
                            break;
                        case 6:
                            if (!(message.output_placeholder_ids && message.output_placeholder_ids.length))
                                message.output_placeholder_ids = [];
                            message.output_placeholder_ids.push($root.syft_proto.types.syft.v1.Id.decode(reader, reader.uint32()));
                            break;
                        case 7:
                            if (!(message.tags && message.tags.length))
                                message.tags = [];
                            message.tags.push(reader.string());
                            break;
                        case 8:
                            message.description = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Role message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof syft_proto.execution.v1.Role
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {syft_proto.execution.v1.Role} Role
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Role.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Role message.
                 * @function verify
                 * @memberof syft_proto.execution.v1.Role
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Role.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.id != null && message.hasOwnProperty("id")) {
                        var error = $root.syft_proto.types.syft.v1.Id.verify(message.id);
                        if (error)
                            return "id." + error;
                    }
                    if (message.actions != null && message.hasOwnProperty("actions")) {
                        if (!Array.isArray(message.actions))
                            return "actions: array expected";
                        for (var i = 0; i < message.actions.length; ++i) {
                            var error = $root.syft_proto.execution.v1.ComputationAction.verify(message.actions[i]);
                            if (error)
                                return "actions." + error;
                        }
                    }
                    if (message.state != null && message.hasOwnProperty("state")) {
                        var error = $root.syft_proto.execution.v1.State.verify(message.state);
                        if (error)
                            return "state." + error;
                    }
                    if (message.placeholders != null && message.hasOwnProperty("placeholders")) {
                        if (!Array.isArray(message.placeholders))
                            return "placeholders: array expected";
                        for (var i = 0; i < message.placeholders.length; ++i) {
                            var error = $root.syft_proto.execution.v1.Placeholder.verify(message.placeholders[i]);
                            if (error)
                                return "placeholders." + error;
                        }
                    }
                    if (message.input_placeholder_ids != null && message.hasOwnProperty("input_placeholder_ids")) {
                        if (!Array.isArray(message.input_placeholder_ids))
                            return "input_placeholder_ids: array expected";
                        for (var i = 0; i < message.input_placeholder_ids.length; ++i) {
                            var error = $root.syft_proto.types.syft.v1.Id.verify(message.input_placeholder_ids[i]);
                            if (error)
                                return "input_placeholder_ids." + error;
                        }
                    }
                    if (message.output_placeholder_ids != null && message.hasOwnProperty("output_placeholder_ids")) {
                        if (!Array.isArray(message.output_placeholder_ids))
                            return "output_placeholder_ids: array expected";
                        for (var i = 0; i < message.output_placeholder_ids.length; ++i) {
                            var error = $root.syft_proto.types.syft.v1.Id.verify(message.output_placeholder_ids[i]);
                            if (error)
                                return "output_placeholder_ids." + error;
                        }
                    }
                    if (message.tags != null && message.hasOwnProperty("tags")) {
                        if (!Array.isArray(message.tags))
                            return "tags: array expected";
                        for (var i = 0; i < message.tags.length; ++i)
                            if (!$util.isString(message.tags[i]))
                                return "tags: string[] expected";
                    }
                    if (message.description != null && message.hasOwnProperty("description"))
                        if (!$util.isString(message.description))
                            return "description: string expected";
                    return null;
                };

                /**
                 * Creates a Role message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof syft_proto.execution.v1.Role
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {syft_proto.execution.v1.Role} Role
                 */
                Role.fromObject = function fromObject(object) {
                    if (object instanceof $root.syft_proto.execution.v1.Role)
                        return object;
                    var message = new $root.syft_proto.execution.v1.Role();
                    if (object.id != null) {
                        if (typeof object.id !== "object")
                            throw TypeError(".syft_proto.execution.v1.Role.id: object expected");
                        message.id = $root.syft_proto.types.syft.v1.Id.fromObject(object.id);
                    }
                    if (object.actions) {
                        if (!Array.isArray(object.actions))
                            throw TypeError(".syft_proto.execution.v1.Role.actions: array expected");
                        message.actions = [];
                        for (var i = 0; i < object.actions.length; ++i) {
                            if (typeof object.actions[i] !== "object")
                                throw TypeError(".syft_proto.execution.v1.Role.actions: object expected");
                            message.actions[i] = $root.syft_proto.execution.v1.ComputationAction.fromObject(object.actions[i]);
                        }
                    }
                    if (object.state != null) {
                        if (typeof object.state !== "object")
                            throw TypeError(".syft_proto.execution.v1.Role.state: object expected");
                        message.state = $root.syft_proto.execution.v1.State.fromObject(object.state);
                    }
                    if (object.placeholders) {
                        if (!Array.isArray(object.placeholders))
                            throw TypeError(".syft_proto.execution.v1.Role.placeholders: array expected");
                        message.placeholders = [];
                        for (var i = 0; i < object.placeholders.length; ++i) {
                            if (typeof object.placeholders[i] !== "object")
                                throw TypeError(".syft_proto.execution.v1.Role.placeholders: object expected");
                            message.placeholders[i] = $root.syft_proto.execution.v1.Placeholder.fromObject(object.placeholders[i]);
                        }
                    }
                    if (object.input_placeholder_ids) {
                        if (!Array.isArray(object.input_placeholder_ids))
                            throw TypeError(".syft_proto.execution.v1.Role.input_placeholder_ids: array expected");
                        message.input_placeholder_ids = [];
                        for (var i = 0; i < object.input_placeholder_ids.length; ++i) {
                            if (typeof object.input_placeholder_ids[i] !== "object")
                                throw TypeError(".syft_proto.execution.v1.Role.input_placeholder_ids: object expected");
                            message.input_placeholder_ids[i] = $root.syft_proto.types.syft.v1.Id.fromObject(object.input_placeholder_ids[i]);
                        }
                    }
                    if (object.output_placeholder_ids) {
                        if (!Array.isArray(object.output_placeholder_ids))
                            throw TypeError(".syft_proto.execution.v1.Role.output_placeholder_ids: array expected");
                        message.output_placeholder_ids = [];
                        for (var i = 0; i < object.output_placeholder_ids.length; ++i) {
                            if (typeof object.output_placeholder_ids[i] !== "object")
                                throw TypeError(".syft_proto.execution.v1.Role.output_placeholder_ids: object expected");
                            message.output_placeholder_ids[i] = $root.syft_proto.types.syft.v1.Id.fromObject(object.output_placeholder_ids[i]);
                        }
                    }
                    if (object.tags) {
                        if (!Array.isArray(object.tags))
                            throw TypeError(".syft_proto.execution.v1.Role.tags: array expected");
                        message.tags = [];
                        for (var i = 0; i < object.tags.length; ++i)
                            message.tags[i] = String(object.tags[i]);
                    }
                    if (object.description != null)
                        message.description = String(object.description);
                    return message;
                };

                /**
                 * Creates a plain object from a Role message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof syft_proto.execution.v1.Role
                 * @static
                 * @param {syft_proto.execution.v1.Role} message Role
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Role.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults) {
                        object.actions = [];
                        object.placeholders = [];
                        object.input_placeholder_ids = [];
                        object.output_placeholder_ids = [];
                        object.tags = [];
                    }
                    if (options.defaults) {
                        object.id = null;
                        object.state = null;
                        object.description = "";
                    }
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = $root.syft_proto.types.syft.v1.Id.toObject(message.id, options);
                    if (message.actions && message.actions.length) {
                        object.actions = [];
                        for (var j = 0; j < message.actions.length; ++j)
                            object.actions[j] = $root.syft_proto.execution.v1.ComputationAction.toObject(message.actions[j], options);
                    }
                    if (message.state != null && message.hasOwnProperty("state"))
                        object.state = $root.syft_proto.execution.v1.State.toObject(message.state, options);
                    if (message.placeholders && message.placeholders.length) {
                        object.placeholders = [];
                        for (var j = 0; j < message.placeholders.length; ++j)
                            object.placeholders[j] = $root.syft_proto.execution.v1.Placeholder.toObject(message.placeholders[j], options);
                    }
                    if (message.input_placeholder_ids && message.input_placeholder_ids.length) {
                        object.input_placeholder_ids = [];
                        for (var j = 0; j < message.input_placeholder_ids.length; ++j)
                            object.input_placeholder_ids[j] = $root.syft_proto.types.syft.v1.Id.toObject(message.input_placeholder_ids[j], options);
                    }
                    if (message.output_placeholder_ids && message.output_placeholder_ids.length) {
                        object.output_placeholder_ids = [];
                        for (var j = 0; j < message.output_placeholder_ids.length; ++j)
                            object.output_placeholder_ids[j] = $root.syft_proto.types.syft.v1.Id.toObject(message.output_placeholder_ids[j], options);
                    }
                    if (message.tags && message.tags.length) {
                        object.tags = [];
                        for (var j = 0; j < message.tags.length; ++j)
                            object.tags[j] = message.tags[j];
                    }
                    if (message.description != null && message.hasOwnProperty("description"))
                        object.description = message.description;
                    return object;
                };

                /**
                 * Converts this Role to JSON.
                 * @function toJSON
                 * @memberof syft_proto.execution.v1.Role
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Role.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Role;
            })();

            v1.State = (function() {

                /**
                 * Properties of a State.
                 * @memberof syft_proto.execution.v1
                 * @interface IState
                 * @property {Array.<syft_proto.execution.v1.IPlaceholder>|null} [placeholders] State placeholders
                 * @property {Array.<syft_proto.execution.v1.IStateTensor>|null} [tensors] State tensors
                 */

                /**
                 * Constructs a new State.
                 * @memberof syft_proto.execution.v1
                 * @classdesc Represents a State.
                 * @implements IState
                 * @constructor
                 * @param {syft_proto.execution.v1.IState=} [properties] Properties to set
                 */
                function State(properties) {
                    this.placeholders = [];
                    this.tensors = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * State placeholders.
                 * @member {Array.<syft_proto.execution.v1.IPlaceholder>} placeholders
                 * @memberof syft_proto.execution.v1.State
                 * @instance
                 */
                State.prototype.placeholders = $util.emptyArray;

                /**
                 * State tensors.
                 * @member {Array.<syft_proto.execution.v1.IStateTensor>} tensors
                 * @memberof syft_proto.execution.v1.State
                 * @instance
                 */
                State.prototype.tensors = $util.emptyArray;

                /**
                 * Creates a new State instance using the specified properties.
                 * @function create
                 * @memberof syft_proto.execution.v1.State
                 * @static
                 * @param {syft_proto.execution.v1.IState=} [properties] Properties to set
                 * @returns {syft_proto.execution.v1.State} State instance
                 */
                State.create = function create(properties) {
                    return new State(properties);
                };

                /**
                 * Encodes the specified State message. Does not implicitly {@link syft_proto.execution.v1.State.verify|verify} messages.
                 * @function encode
                 * @memberof syft_proto.execution.v1.State
                 * @static
                 * @param {syft_proto.execution.v1.IState} message State message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                State.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.placeholders != null && message.placeholders.length)
                        for (var i = 0; i < message.placeholders.length; ++i)
                            $root.syft_proto.execution.v1.Placeholder.encode(message.placeholders[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.tensors != null && message.tensors.length)
                        for (var i = 0; i < message.tensors.length; ++i)
                            $root.syft_proto.execution.v1.StateTensor.encode(message.tensors[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified State message, length delimited. Does not implicitly {@link syft_proto.execution.v1.State.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof syft_proto.execution.v1.State
                 * @static
                 * @param {syft_proto.execution.v1.IState} message State message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                State.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a State message from the specified reader or buffer.
                 * @function decode
                 * @memberof syft_proto.execution.v1.State
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {syft_proto.execution.v1.State} State
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                State.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.syft_proto.execution.v1.State();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.placeholders && message.placeholders.length))
                                message.placeholders = [];
                            message.placeholders.push($root.syft_proto.execution.v1.Placeholder.decode(reader, reader.uint32()));
                            break;
                        case 2:
                            if (!(message.tensors && message.tensors.length))
                                message.tensors = [];
                            message.tensors.push($root.syft_proto.execution.v1.StateTensor.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a State message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof syft_proto.execution.v1.State
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {syft_proto.execution.v1.State} State
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                State.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a State message.
                 * @function verify
                 * @memberof syft_proto.execution.v1.State
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                State.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.placeholders != null && message.hasOwnProperty("placeholders")) {
                        if (!Array.isArray(message.placeholders))
                            return "placeholders: array expected";
                        for (var i = 0; i < message.placeholders.length; ++i) {
                            var error = $root.syft_proto.execution.v1.Placeholder.verify(message.placeholders[i]);
                            if (error)
                                return "placeholders." + error;
                        }
                    }
                    if (message.tensors != null && message.hasOwnProperty("tensors")) {
                        if (!Array.isArray(message.tensors))
                            return "tensors: array expected";
                        for (var i = 0; i < message.tensors.length; ++i) {
                            var error = $root.syft_proto.execution.v1.StateTensor.verify(message.tensors[i]);
                            if (error)
                                return "tensors." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates a State message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof syft_proto.execution.v1.State
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {syft_proto.execution.v1.State} State
                 */
                State.fromObject = function fromObject(object) {
                    if (object instanceof $root.syft_proto.execution.v1.State)
                        return object;
                    var message = new $root.syft_proto.execution.v1.State();
                    if (object.placeholders) {
                        if (!Array.isArray(object.placeholders))
                            throw TypeError(".syft_proto.execution.v1.State.placeholders: array expected");
                        message.placeholders = [];
                        for (var i = 0; i < object.placeholders.length; ++i) {
                            if (typeof object.placeholders[i] !== "object")
                                throw TypeError(".syft_proto.execution.v1.State.placeholders: object expected");
                            message.placeholders[i] = $root.syft_proto.execution.v1.Placeholder.fromObject(object.placeholders[i]);
                        }
                    }
                    if (object.tensors) {
                        if (!Array.isArray(object.tensors))
                            throw TypeError(".syft_proto.execution.v1.State.tensors: array expected");
                        message.tensors = [];
                        for (var i = 0; i < object.tensors.length; ++i) {
                            if (typeof object.tensors[i] !== "object")
                                throw TypeError(".syft_proto.execution.v1.State.tensors: object expected");
                            message.tensors[i] = $root.syft_proto.execution.v1.StateTensor.fromObject(object.tensors[i]);
                        }
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a State message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof syft_proto.execution.v1.State
                 * @static
                 * @param {syft_proto.execution.v1.State} message State
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                State.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults) {
                        object.placeholders = [];
                        object.tensors = [];
                    }
                    if (message.placeholders && message.placeholders.length) {
                        object.placeholders = [];
                        for (var j = 0; j < message.placeholders.length; ++j)
                            object.placeholders[j] = $root.syft_proto.execution.v1.Placeholder.toObject(message.placeholders[j], options);
                    }
                    if (message.tensors && message.tensors.length) {
                        object.tensors = [];
                        for (var j = 0; j < message.tensors.length; ++j)
                            object.tensors[j] = $root.syft_proto.execution.v1.StateTensor.toObject(message.tensors[j], options);
                    }
                    return object;
                };

                /**
                 * Converts this State to JSON.
                 * @function toJSON
                 * @memberof syft_proto.execution.v1.State
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                State.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return State;
            })();

            v1.StateTensor = (function() {

                /**
                 * Properties of a StateTensor.
                 * @memberof syft_proto.execution.v1
                 * @interface IStateTensor
                 * @property {syft_proto.types.torch.v1.ITorchTensor|null} [torch_tensor] StateTensor torch_tensor
                 * @property {syft_proto.types.torch.v1.IParameter|null} [torch_param] StateTensor torch_param
                 */

                /**
                 * Constructs a new StateTensor.
                 * @memberof syft_proto.execution.v1
                 * @classdesc Represents a StateTensor.
                 * @implements IStateTensor
                 * @constructor
                 * @param {syft_proto.execution.v1.IStateTensor=} [properties] Properties to set
                 */
                function StateTensor(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * StateTensor torch_tensor.
                 * @member {syft_proto.types.torch.v1.ITorchTensor|null|undefined} torch_tensor
                 * @memberof syft_proto.execution.v1.StateTensor
                 * @instance
                 */
                StateTensor.prototype.torch_tensor = null;

                /**
                 * StateTensor torch_param.
                 * @member {syft_proto.types.torch.v1.IParameter|null|undefined} torch_param
                 * @memberof syft_proto.execution.v1.StateTensor
                 * @instance
                 */
                StateTensor.prototype.torch_param = null;

                // OneOf field names bound to virtual getters and setters
                var $oneOfFields;

                /**
                 * StateTensor tensor.
                 * @member {"torch_tensor"|"torch_param"|undefined} tensor
                 * @memberof syft_proto.execution.v1.StateTensor
                 * @instance
                 */
                Object.defineProperty(StateTensor.prototype, "tensor", {
                    get: $util.oneOfGetter($oneOfFields = ["torch_tensor", "torch_param"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                /**
                 * Creates a new StateTensor instance using the specified properties.
                 * @function create
                 * @memberof syft_proto.execution.v1.StateTensor
                 * @static
                 * @param {syft_proto.execution.v1.IStateTensor=} [properties] Properties to set
                 * @returns {syft_proto.execution.v1.StateTensor} StateTensor instance
                 */
                StateTensor.create = function create(properties) {
                    return new StateTensor(properties);
                };

                /**
                 * Encodes the specified StateTensor message. Does not implicitly {@link syft_proto.execution.v1.StateTensor.verify|verify} messages.
                 * @function encode
                 * @memberof syft_proto.execution.v1.StateTensor
                 * @static
                 * @param {syft_proto.execution.v1.IStateTensor} message StateTensor message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                StateTensor.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.torch_tensor != null && message.hasOwnProperty("torch_tensor"))
                        $root.syft_proto.types.torch.v1.TorchTensor.encode(message.torch_tensor, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.torch_param != null && message.hasOwnProperty("torch_param"))
                        $root.syft_proto.types.torch.v1.Parameter.encode(message.torch_param, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified StateTensor message, length delimited. Does not implicitly {@link syft_proto.execution.v1.StateTensor.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof syft_proto.execution.v1.StateTensor
                 * @static
                 * @param {syft_proto.execution.v1.IStateTensor} message StateTensor message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                StateTensor.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a StateTensor message from the specified reader or buffer.
                 * @function decode
                 * @memberof syft_proto.execution.v1.StateTensor
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {syft_proto.execution.v1.StateTensor} StateTensor
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                StateTensor.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.syft_proto.execution.v1.StateTensor();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.torch_tensor = $root.syft_proto.types.torch.v1.TorchTensor.decode(reader, reader.uint32());
                            break;
                        case 2:
                            message.torch_param = $root.syft_proto.types.torch.v1.Parameter.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a StateTensor message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof syft_proto.execution.v1.StateTensor
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {syft_proto.execution.v1.StateTensor} StateTensor
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                StateTensor.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a StateTensor message.
                 * @function verify
                 * @memberof syft_proto.execution.v1.StateTensor
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                StateTensor.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    var properties = {};
                    if (message.torch_tensor != null && message.hasOwnProperty("torch_tensor")) {
                        properties.tensor = 1;
                        {
                            var error = $root.syft_proto.types.torch.v1.TorchTensor.verify(message.torch_tensor);
                            if (error)
                                return "torch_tensor." + error;
                        }
                    }
                    if (message.torch_param != null && message.hasOwnProperty("torch_param")) {
                        if (properties.tensor === 1)
                            return "tensor: multiple values";
                        properties.tensor = 1;
                        {
                            var error = $root.syft_proto.types.torch.v1.Parameter.verify(message.torch_param);
                            if (error)
                                return "torch_param." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates a StateTensor message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof syft_proto.execution.v1.StateTensor
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {syft_proto.execution.v1.StateTensor} StateTensor
                 */
                StateTensor.fromObject = function fromObject(object) {
                    if (object instanceof $root.syft_proto.execution.v1.StateTensor)
                        return object;
                    var message = new $root.syft_proto.execution.v1.StateTensor();
                    if (object.torch_tensor != null) {
                        if (typeof object.torch_tensor !== "object")
                            throw TypeError(".syft_proto.execution.v1.StateTensor.torch_tensor: object expected");
                        message.torch_tensor = $root.syft_proto.types.torch.v1.TorchTensor.fromObject(object.torch_tensor);
                    }
                    if (object.torch_param != null) {
                        if (typeof object.torch_param !== "object")
                            throw TypeError(".syft_proto.execution.v1.StateTensor.torch_param: object expected");
                        message.torch_param = $root.syft_proto.types.torch.v1.Parameter.fromObject(object.torch_param);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a StateTensor message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof syft_proto.execution.v1.StateTensor
                 * @static
                 * @param {syft_proto.execution.v1.StateTensor} message StateTensor
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                StateTensor.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (message.torch_tensor != null && message.hasOwnProperty("torch_tensor")) {
                        object.torch_tensor = $root.syft_proto.types.torch.v1.TorchTensor.toObject(message.torch_tensor, options);
                        if (options.oneofs)
                            object.tensor = "torch_tensor";
                    }
                    if (message.torch_param != null && message.hasOwnProperty("torch_param")) {
                        object.torch_param = $root.syft_proto.types.torch.v1.Parameter.toObject(message.torch_param, options);
                        if (options.oneofs)
                            object.tensor = "torch_param";
                    }
                    return object;
                };

                /**
                 * Converts this StateTensor to JSON.
                 * @function toJSON
                 * @memberof syft_proto.execution.v1.StateTensor
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                StateTensor.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return StateTensor;
            })();

            v1.InputTypeDescriptor = (function() {

                /**
                 * Properties of an InputTypeDescriptor.
                 * @memberof syft_proto.execution.v1
                 * @interface IInputTypeDescriptor
                 * @property {string|null} [type_name] InputTypeDescriptor type_name
                 */

                /**
                 * Constructs a new InputTypeDescriptor.
                 * @memberof syft_proto.execution.v1
                 * @classdesc Represents an InputTypeDescriptor.
                 * @implements IInputTypeDescriptor
                 * @constructor
                 * @param {syft_proto.execution.v1.IInputTypeDescriptor=} [properties] Properties to set
                 */
                function InputTypeDescriptor(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * InputTypeDescriptor type_name.
                 * @member {string} type_name
                 * @memberof syft_proto.execution.v1.InputTypeDescriptor
                 * @instance
                 */
                InputTypeDescriptor.prototype.type_name = "";

                /**
                 * Creates a new InputTypeDescriptor instance using the specified properties.
                 * @function create
                 * @memberof syft_proto.execution.v1.InputTypeDescriptor
                 * @static
                 * @param {syft_proto.execution.v1.IInputTypeDescriptor=} [properties] Properties to set
                 * @returns {syft_proto.execution.v1.InputTypeDescriptor} InputTypeDescriptor instance
                 */
                InputTypeDescriptor.create = function create(properties) {
                    return new InputTypeDescriptor(properties);
                };

                /**
                 * Encodes the specified InputTypeDescriptor message. Does not implicitly {@link syft_proto.execution.v1.InputTypeDescriptor.verify|verify} messages.
                 * @function encode
                 * @memberof syft_proto.execution.v1.InputTypeDescriptor
                 * @static
                 * @param {syft_proto.execution.v1.IInputTypeDescriptor} message InputTypeDescriptor message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                InputTypeDescriptor.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.type_name != null && message.hasOwnProperty("type_name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.type_name);
                    return writer;
                };

                /**
                 * Encodes the specified InputTypeDescriptor message, length delimited. Does not implicitly {@link syft_proto.execution.v1.InputTypeDescriptor.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof syft_proto.execution.v1.InputTypeDescriptor
                 * @static
                 * @param {syft_proto.execution.v1.IInputTypeDescriptor} message InputTypeDescriptor message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                InputTypeDescriptor.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an InputTypeDescriptor message from the specified reader or buffer.
                 * @function decode
                 * @memberof syft_proto.execution.v1.InputTypeDescriptor
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {syft_proto.execution.v1.InputTypeDescriptor} InputTypeDescriptor
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                InputTypeDescriptor.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.syft_proto.execution.v1.InputTypeDescriptor();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.type_name = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes an InputTypeDescriptor message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof syft_proto.execution.v1.InputTypeDescriptor
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {syft_proto.execution.v1.InputTypeDescriptor} InputTypeDescriptor
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                InputTypeDescriptor.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an InputTypeDescriptor message.
                 * @function verify
                 * @memberof syft_proto.execution.v1.InputTypeDescriptor
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                InputTypeDescriptor.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.type_name != null && message.hasOwnProperty("type_name"))
                        if (!$util.isString(message.type_name))
                            return "type_name: string expected";
                    return null;
                };

                /**
                 * Creates an InputTypeDescriptor message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof syft_proto.execution.v1.InputTypeDescriptor
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {syft_proto.execution.v1.InputTypeDescriptor} InputTypeDescriptor
                 */
                InputTypeDescriptor.fromObject = function fromObject(object) {
                    if (object instanceof $root.syft_proto.execution.v1.InputTypeDescriptor)
                        return object;
                    var message = new $root.syft_proto.execution.v1.InputTypeDescriptor();
                    if (object.type_name != null)
                        message.type_name = String(object.type_name);
                    return message;
                };

                /**
                 * Creates a plain object from an InputTypeDescriptor message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof syft_proto.execution.v1.InputTypeDescriptor
                 * @static
                 * @param {syft_proto.execution.v1.InputTypeDescriptor} message InputTypeDescriptor
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                InputTypeDescriptor.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.type_name = "";
                    if (message.type_name != null && message.hasOwnProperty("type_name"))
                        object.type_name = message.type_name;
                    return object;
                };

                /**
                 * Converts this InputTypeDescriptor to JSON.
                 * @function toJSON
                 * @memberof syft_proto.execution.v1.InputTypeDescriptor
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                InputTypeDescriptor.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return InputTypeDescriptor;
            })();

            v1.NestedTypeWrapper = (function() {

                /**
                 * Properties of a NestedTypeWrapper.
                 * @memberof syft_proto.execution.v1
                 * @interface INestedTypeWrapper
                 * @property {syft_proto.execution.v1.NestedTypeWrapper.ITypeContainer|null} [nested_types] NestedTypeWrapper nested_types
                 */

                /**
                 * Constructs a new NestedTypeWrapper.
                 * @memberof syft_proto.execution.v1
                 * @classdesc Represents a NestedTypeWrapper.
                 * @implements INestedTypeWrapper
                 * @constructor
                 * @param {syft_proto.execution.v1.INestedTypeWrapper=} [properties] Properties to set
                 */
                function NestedTypeWrapper(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * NestedTypeWrapper nested_types.
                 * @member {syft_proto.execution.v1.NestedTypeWrapper.ITypeContainer|null|undefined} nested_types
                 * @memberof syft_proto.execution.v1.NestedTypeWrapper
                 * @instance
                 */
                NestedTypeWrapper.prototype.nested_types = null;

                /**
                 * Creates a new NestedTypeWrapper instance using the specified properties.
                 * @function create
                 * @memberof syft_proto.execution.v1.NestedTypeWrapper
                 * @static
                 * @param {syft_proto.execution.v1.INestedTypeWrapper=} [properties] Properties to set
                 * @returns {syft_proto.execution.v1.NestedTypeWrapper} NestedTypeWrapper instance
                 */
                NestedTypeWrapper.create = function create(properties) {
                    return new NestedTypeWrapper(properties);
                };

                /**
                 * Encodes the specified NestedTypeWrapper message. Does not implicitly {@link syft_proto.execution.v1.NestedTypeWrapper.verify|verify} messages.
                 * @function encode
                 * @memberof syft_proto.execution.v1.NestedTypeWrapper
                 * @static
                 * @param {syft_proto.execution.v1.INestedTypeWrapper} message NestedTypeWrapper message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                NestedTypeWrapper.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.nested_types != null && message.hasOwnProperty("nested_types"))
                        $root.syft_proto.execution.v1.NestedTypeWrapper.TypeContainer.encode(message.nested_types, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified NestedTypeWrapper message, length delimited. Does not implicitly {@link syft_proto.execution.v1.NestedTypeWrapper.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof syft_proto.execution.v1.NestedTypeWrapper
                 * @static
                 * @param {syft_proto.execution.v1.INestedTypeWrapper} message NestedTypeWrapper message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                NestedTypeWrapper.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a NestedTypeWrapper message from the specified reader or buffer.
                 * @function decode
                 * @memberof syft_proto.execution.v1.NestedTypeWrapper
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {syft_proto.execution.v1.NestedTypeWrapper} NestedTypeWrapper
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                NestedTypeWrapper.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.syft_proto.execution.v1.NestedTypeWrapper();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.nested_types = $root.syft_proto.execution.v1.NestedTypeWrapper.TypeContainer.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a NestedTypeWrapper message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof syft_proto.execution.v1.NestedTypeWrapper
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {syft_proto.execution.v1.NestedTypeWrapper} NestedTypeWrapper
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                NestedTypeWrapper.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a NestedTypeWrapper message.
                 * @function verify
                 * @memberof syft_proto.execution.v1.NestedTypeWrapper
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                NestedTypeWrapper.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.nested_types != null && message.hasOwnProperty("nested_types")) {
                        var error = $root.syft_proto.execution.v1.NestedTypeWrapper.TypeContainer.verify(message.nested_types);
                        if (error)
                            return "nested_types." + error;
                    }
                    return null;
                };

                /**
                 * Creates a NestedTypeWrapper message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof syft_proto.execution.v1.NestedTypeWrapper
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {syft_proto.execution.v1.NestedTypeWrapper} NestedTypeWrapper
                 */
                NestedTypeWrapper.fromObject = function fromObject(object) {
                    if (object instanceof $root.syft_proto.execution.v1.NestedTypeWrapper)
                        return object;
                    var message = new $root.syft_proto.execution.v1.NestedTypeWrapper();
                    if (object.nested_types != null) {
                        if (typeof object.nested_types !== "object")
                            throw TypeError(".syft_proto.execution.v1.NestedTypeWrapper.nested_types: object expected");
                        message.nested_types = $root.syft_proto.execution.v1.NestedTypeWrapper.TypeContainer.fromObject(object.nested_types);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a NestedTypeWrapper message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof syft_proto.execution.v1.NestedTypeWrapper
                 * @static
                 * @param {syft_proto.execution.v1.NestedTypeWrapper} message NestedTypeWrapper
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                NestedTypeWrapper.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.nested_types = null;
                    if (message.nested_types != null && message.hasOwnProperty("nested_types"))
                        object.nested_types = $root.syft_proto.execution.v1.NestedTypeWrapper.TypeContainer.toObject(message.nested_types, options);
                    return object;
                };

                /**
                 * Converts this NestedTypeWrapper to JSON.
                 * @function toJSON
                 * @memberof syft_proto.execution.v1.NestedTypeWrapper
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                NestedTypeWrapper.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                NestedTypeWrapper.TypeList = (function() {

                    /**
                     * Properties of a TypeList.
                     * @memberof syft_proto.execution.v1.NestedTypeWrapper
                     * @interface ITypeList
                     * @property {Array.<syft_proto.execution.v1.INestedTypeWrapper>|null} [nested_types] TypeList nested_types
                     */

                    /**
                     * Constructs a new TypeList.
                     * @memberof syft_proto.execution.v1.NestedTypeWrapper
                     * @classdesc Represents a TypeList.
                     * @implements ITypeList
                     * @constructor
                     * @param {syft_proto.execution.v1.NestedTypeWrapper.ITypeList=} [properties] Properties to set
                     */
                    function TypeList(properties) {
                        this.nested_types = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * TypeList nested_types.
                     * @member {Array.<syft_proto.execution.v1.INestedTypeWrapper>} nested_types
                     * @memberof syft_proto.execution.v1.NestedTypeWrapper.TypeList
                     * @instance
                     */
                    TypeList.prototype.nested_types = $util.emptyArray;

                    /**
                     * Creates a new TypeList instance using the specified properties.
                     * @function create
                     * @memberof syft_proto.execution.v1.NestedTypeWrapper.TypeList
                     * @static
                     * @param {syft_proto.execution.v1.NestedTypeWrapper.ITypeList=} [properties] Properties to set
                     * @returns {syft_proto.execution.v1.NestedTypeWrapper.TypeList} TypeList instance
                     */
                    TypeList.create = function create(properties) {
                        return new TypeList(properties);
                    };

                    /**
                     * Encodes the specified TypeList message. Does not implicitly {@link syft_proto.execution.v1.NestedTypeWrapper.TypeList.verify|verify} messages.
                     * @function encode
                     * @memberof syft_proto.execution.v1.NestedTypeWrapper.TypeList
                     * @static
                     * @param {syft_proto.execution.v1.NestedTypeWrapper.ITypeList} message TypeList message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    TypeList.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.nested_types != null && message.nested_types.length)
                            for (var i = 0; i < message.nested_types.length; ++i)
                                $root.syft_proto.execution.v1.NestedTypeWrapper.encode(message.nested_types[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified TypeList message, length delimited. Does not implicitly {@link syft_proto.execution.v1.NestedTypeWrapper.TypeList.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof syft_proto.execution.v1.NestedTypeWrapper.TypeList
                     * @static
                     * @param {syft_proto.execution.v1.NestedTypeWrapper.ITypeList} message TypeList message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    TypeList.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a TypeList message from the specified reader or buffer.
                     * @function decode
                     * @memberof syft_proto.execution.v1.NestedTypeWrapper.TypeList
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {syft_proto.execution.v1.NestedTypeWrapper.TypeList} TypeList
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    TypeList.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.syft_proto.execution.v1.NestedTypeWrapper.TypeList();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                if (!(message.nested_types && message.nested_types.length))
                                    message.nested_types = [];
                                message.nested_types.push($root.syft_proto.execution.v1.NestedTypeWrapper.decode(reader, reader.uint32()));
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a TypeList message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof syft_proto.execution.v1.NestedTypeWrapper.TypeList
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {syft_proto.execution.v1.NestedTypeWrapper.TypeList} TypeList
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    TypeList.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a TypeList message.
                     * @function verify
                     * @memberof syft_proto.execution.v1.NestedTypeWrapper.TypeList
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    TypeList.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.nested_types != null && message.hasOwnProperty("nested_types")) {
                            if (!Array.isArray(message.nested_types))
                                return "nested_types: array expected";
                            for (var i = 0; i < message.nested_types.length; ++i) {
                                var error = $root.syft_proto.execution.v1.NestedTypeWrapper.verify(message.nested_types[i]);
                                if (error)
                                    return "nested_types." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates a TypeList message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof syft_proto.execution.v1.NestedTypeWrapper.TypeList
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {syft_proto.execution.v1.NestedTypeWrapper.TypeList} TypeList
                     */
                    TypeList.fromObject = function fromObject(object) {
                        if (object instanceof $root.syft_proto.execution.v1.NestedTypeWrapper.TypeList)
                            return object;
                        var message = new $root.syft_proto.execution.v1.NestedTypeWrapper.TypeList();
                        if (object.nested_types) {
                            if (!Array.isArray(object.nested_types))
                                throw TypeError(".syft_proto.execution.v1.NestedTypeWrapper.TypeList.nested_types: array expected");
                            message.nested_types = [];
                            for (var i = 0; i < object.nested_types.length; ++i) {
                                if (typeof object.nested_types[i] !== "object")
                                    throw TypeError(".syft_proto.execution.v1.NestedTypeWrapper.TypeList.nested_types: object expected");
                                message.nested_types[i] = $root.syft_proto.execution.v1.NestedTypeWrapper.fromObject(object.nested_types[i]);
                            }
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a TypeList message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof syft_proto.execution.v1.NestedTypeWrapper.TypeList
                     * @static
                     * @param {syft_proto.execution.v1.NestedTypeWrapper.TypeList} message TypeList
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    TypeList.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.nested_types = [];
                        if (message.nested_types && message.nested_types.length) {
                            object.nested_types = [];
                            for (var j = 0; j < message.nested_types.length; ++j)
                                object.nested_types[j] = $root.syft_proto.execution.v1.NestedTypeWrapper.toObject(message.nested_types[j], options);
                        }
                        return object;
                    };

                    /**
                     * Converts this TypeList to JSON.
                     * @function toJSON
                     * @memberof syft_proto.execution.v1.NestedTypeWrapper.TypeList
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    TypeList.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return TypeList;
                })();

                NestedTypeWrapper.TypeTuple = (function() {

                    /**
                     * Properties of a TypeTuple.
                     * @memberof syft_proto.execution.v1.NestedTypeWrapper
                     * @interface ITypeTuple
                     * @property {Array.<syft_proto.execution.v1.INestedTypeWrapper>|null} [nested_types] TypeTuple nested_types
                     */

                    /**
                     * Constructs a new TypeTuple.
                     * @memberof syft_proto.execution.v1.NestedTypeWrapper
                     * @classdesc Represents a TypeTuple.
                     * @implements ITypeTuple
                     * @constructor
                     * @param {syft_proto.execution.v1.NestedTypeWrapper.ITypeTuple=} [properties] Properties to set
                     */
                    function TypeTuple(properties) {
                        this.nested_types = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * TypeTuple nested_types.
                     * @member {Array.<syft_proto.execution.v1.INestedTypeWrapper>} nested_types
                     * @memberof syft_proto.execution.v1.NestedTypeWrapper.TypeTuple
                     * @instance
                     */
                    TypeTuple.prototype.nested_types = $util.emptyArray;

                    /**
                     * Creates a new TypeTuple instance using the specified properties.
                     * @function create
                     * @memberof syft_proto.execution.v1.NestedTypeWrapper.TypeTuple
                     * @static
                     * @param {syft_proto.execution.v1.NestedTypeWrapper.ITypeTuple=} [properties] Properties to set
                     * @returns {syft_proto.execution.v1.NestedTypeWrapper.TypeTuple} TypeTuple instance
                     */
                    TypeTuple.create = function create(properties) {
                        return new TypeTuple(properties);
                    };

                    /**
                     * Encodes the specified TypeTuple message. Does not implicitly {@link syft_proto.execution.v1.NestedTypeWrapper.TypeTuple.verify|verify} messages.
                     * @function encode
                     * @memberof syft_proto.execution.v1.NestedTypeWrapper.TypeTuple
                     * @static
                     * @param {syft_proto.execution.v1.NestedTypeWrapper.ITypeTuple} message TypeTuple message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    TypeTuple.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.nested_types != null && message.nested_types.length)
                            for (var i = 0; i < message.nested_types.length; ++i)
                                $root.syft_proto.execution.v1.NestedTypeWrapper.encode(message.nested_types[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified TypeTuple message, length delimited. Does not implicitly {@link syft_proto.execution.v1.NestedTypeWrapper.TypeTuple.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof syft_proto.execution.v1.NestedTypeWrapper.TypeTuple
                     * @static
                     * @param {syft_proto.execution.v1.NestedTypeWrapper.ITypeTuple} message TypeTuple message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    TypeTuple.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a TypeTuple message from the specified reader or buffer.
                     * @function decode
                     * @memberof syft_proto.execution.v1.NestedTypeWrapper.TypeTuple
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {syft_proto.execution.v1.NestedTypeWrapper.TypeTuple} TypeTuple
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    TypeTuple.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.syft_proto.execution.v1.NestedTypeWrapper.TypeTuple();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                if (!(message.nested_types && message.nested_types.length))
                                    message.nested_types = [];
                                message.nested_types.push($root.syft_proto.execution.v1.NestedTypeWrapper.decode(reader, reader.uint32()));
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a TypeTuple message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof syft_proto.execution.v1.NestedTypeWrapper.TypeTuple
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {syft_proto.execution.v1.NestedTypeWrapper.TypeTuple} TypeTuple
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    TypeTuple.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a TypeTuple message.
                     * @function verify
                     * @memberof syft_proto.execution.v1.NestedTypeWrapper.TypeTuple
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    TypeTuple.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.nested_types != null && message.hasOwnProperty("nested_types")) {
                            if (!Array.isArray(message.nested_types))
                                return "nested_types: array expected";
                            for (var i = 0; i < message.nested_types.length; ++i) {
                                var error = $root.syft_proto.execution.v1.NestedTypeWrapper.verify(message.nested_types[i]);
                                if (error)
                                    return "nested_types." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates a TypeTuple message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof syft_proto.execution.v1.NestedTypeWrapper.TypeTuple
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {syft_proto.execution.v1.NestedTypeWrapper.TypeTuple} TypeTuple
                     */
                    TypeTuple.fromObject = function fromObject(object) {
                        if (object instanceof $root.syft_proto.execution.v1.NestedTypeWrapper.TypeTuple)
                            return object;
                        var message = new $root.syft_proto.execution.v1.NestedTypeWrapper.TypeTuple();
                        if (object.nested_types) {
                            if (!Array.isArray(object.nested_types))
                                throw TypeError(".syft_proto.execution.v1.NestedTypeWrapper.TypeTuple.nested_types: array expected");
                            message.nested_types = [];
                            for (var i = 0; i < object.nested_types.length; ++i) {
                                if (typeof object.nested_types[i] !== "object")
                                    throw TypeError(".syft_proto.execution.v1.NestedTypeWrapper.TypeTuple.nested_types: object expected");
                                message.nested_types[i] = $root.syft_proto.execution.v1.NestedTypeWrapper.fromObject(object.nested_types[i]);
                            }
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a TypeTuple message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof syft_proto.execution.v1.NestedTypeWrapper.TypeTuple
                     * @static
                     * @param {syft_proto.execution.v1.NestedTypeWrapper.TypeTuple} message TypeTuple
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    TypeTuple.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.nested_types = [];
                        if (message.nested_types && message.nested_types.length) {
                            object.nested_types = [];
                            for (var j = 0; j < message.nested_types.length; ++j)
                                object.nested_types[j] = $root.syft_proto.execution.v1.NestedTypeWrapper.toObject(message.nested_types[j], options);
                        }
                        return object;
                    };

                    /**
                     * Converts this TypeTuple to JSON.
                     * @function toJSON
                     * @memberof syft_proto.execution.v1.NestedTypeWrapper.TypeTuple
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    TypeTuple.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return TypeTuple;
                })();

                NestedTypeWrapper.TypeMap = (function() {

                    /**
                     * Properties of a TypeMap.
                     * @memberof syft_proto.execution.v1.NestedTypeWrapper
                     * @interface ITypeMap
                     * @property {Object.<string,syft_proto.execution.v1.INestedTypeWrapper>|null} [nested_types] TypeMap nested_types
                     */

                    /**
                     * Constructs a new TypeMap.
                     * @memberof syft_proto.execution.v1.NestedTypeWrapper
                     * @classdesc Represents a TypeMap.
                     * @implements ITypeMap
                     * @constructor
                     * @param {syft_proto.execution.v1.NestedTypeWrapper.ITypeMap=} [properties] Properties to set
                     */
                    function TypeMap(properties) {
                        this.nested_types = {};
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * TypeMap nested_types.
                     * @member {Object.<string,syft_proto.execution.v1.INestedTypeWrapper>} nested_types
                     * @memberof syft_proto.execution.v1.NestedTypeWrapper.TypeMap
                     * @instance
                     */
                    TypeMap.prototype.nested_types = $util.emptyObject;

                    /**
                     * Creates a new TypeMap instance using the specified properties.
                     * @function create
                     * @memberof syft_proto.execution.v1.NestedTypeWrapper.TypeMap
                     * @static
                     * @param {syft_proto.execution.v1.NestedTypeWrapper.ITypeMap=} [properties] Properties to set
                     * @returns {syft_proto.execution.v1.NestedTypeWrapper.TypeMap} TypeMap instance
                     */
                    TypeMap.create = function create(properties) {
                        return new TypeMap(properties);
                    };

                    /**
                     * Encodes the specified TypeMap message. Does not implicitly {@link syft_proto.execution.v1.NestedTypeWrapper.TypeMap.verify|verify} messages.
                     * @function encode
                     * @memberof syft_proto.execution.v1.NestedTypeWrapper.TypeMap
                     * @static
                     * @param {syft_proto.execution.v1.NestedTypeWrapper.ITypeMap} message TypeMap message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    TypeMap.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.nested_types != null && message.hasOwnProperty("nested_types"))
                            for (var keys = Object.keys(message.nested_types), i = 0; i < keys.length; ++i) {
                                writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                                $root.syft_proto.execution.v1.NestedTypeWrapper.encode(message.nested_types[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                            }
                        return writer;
                    };

                    /**
                     * Encodes the specified TypeMap message, length delimited. Does not implicitly {@link syft_proto.execution.v1.NestedTypeWrapper.TypeMap.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof syft_proto.execution.v1.NestedTypeWrapper.TypeMap
                     * @static
                     * @param {syft_proto.execution.v1.NestedTypeWrapper.ITypeMap} message TypeMap message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    TypeMap.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a TypeMap message from the specified reader or buffer.
                     * @function decode
                     * @memberof syft_proto.execution.v1.NestedTypeWrapper.TypeMap
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {syft_proto.execution.v1.NestedTypeWrapper.TypeMap} TypeMap
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    TypeMap.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.syft_proto.execution.v1.NestedTypeWrapper.TypeMap(), key;
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                reader.skip().pos++;
                                if (message.nested_types === $util.emptyObject)
                                    message.nested_types = {};
                                key = reader.string();
                                reader.pos++;
                                message.nested_types[key] = $root.syft_proto.execution.v1.NestedTypeWrapper.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a TypeMap message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof syft_proto.execution.v1.NestedTypeWrapper.TypeMap
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {syft_proto.execution.v1.NestedTypeWrapper.TypeMap} TypeMap
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    TypeMap.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a TypeMap message.
                     * @function verify
                     * @memberof syft_proto.execution.v1.NestedTypeWrapper.TypeMap
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    TypeMap.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.nested_types != null && message.hasOwnProperty("nested_types")) {
                            if (!$util.isObject(message.nested_types))
                                return "nested_types: object expected";
                            var key = Object.keys(message.nested_types);
                            for (var i = 0; i < key.length; ++i) {
                                var error = $root.syft_proto.execution.v1.NestedTypeWrapper.verify(message.nested_types[key[i]]);
                                if (error)
                                    return "nested_types." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates a TypeMap message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof syft_proto.execution.v1.NestedTypeWrapper.TypeMap
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {syft_proto.execution.v1.NestedTypeWrapper.TypeMap} TypeMap
                     */
                    TypeMap.fromObject = function fromObject(object) {
                        if (object instanceof $root.syft_proto.execution.v1.NestedTypeWrapper.TypeMap)
                            return object;
                        var message = new $root.syft_proto.execution.v1.NestedTypeWrapper.TypeMap();
                        if (object.nested_types) {
                            if (typeof object.nested_types !== "object")
                                throw TypeError(".syft_proto.execution.v1.NestedTypeWrapper.TypeMap.nested_types: object expected");
                            message.nested_types = {};
                            for (var keys = Object.keys(object.nested_types), i = 0; i < keys.length; ++i) {
                                if (typeof object.nested_types[keys[i]] !== "object")
                                    throw TypeError(".syft_proto.execution.v1.NestedTypeWrapper.TypeMap.nested_types: object expected");
                                message.nested_types[keys[i]] = $root.syft_proto.execution.v1.NestedTypeWrapper.fromObject(object.nested_types[keys[i]]);
                            }
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a TypeMap message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof syft_proto.execution.v1.NestedTypeWrapper.TypeMap
                     * @static
                     * @param {syft_proto.execution.v1.NestedTypeWrapper.TypeMap} message TypeMap
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    TypeMap.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.objects || options.defaults)
                            object.nested_types = {};
                        var keys2;
                        if (message.nested_types && (keys2 = Object.keys(message.nested_types)).length) {
                            object.nested_types = {};
                            for (var j = 0; j < keys2.length; ++j)
                                object.nested_types[keys2[j]] = $root.syft_proto.execution.v1.NestedTypeWrapper.toObject(message.nested_types[keys2[j]], options);
                        }
                        return object;
                    };

                    /**
                     * Converts this TypeMap to JSON.
                     * @function toJSON
                     * @memberof syft_proto.execution.v1.NestedTypeWrapper.TypeMap
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    TypeMap.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return TypeMap;
                })();

                NestedTypeWrapper.TypeContainer = (function() {

                    /**
                     * Properties of a TypeContainer.
                     * @memberof syft_proto.execution.v1.NestedTypeWrapper
                     * @interface ITypeContainer
                     * @property {syft_proto.execution.v1.IInputTypeDescriptor|null} [nested_type] TypeContainer nested_type
                     * @property {syft_proto.execution.v1.NestedTypeWrapper.ITypeList|null} [nested_type_list] TypeContainer nested_type_list
                     * @property {syft_proto.execution.v1.NestedTypeWrapper.ITypeTuple|null} [nested_type_tuple] TypeContainer nested_type_tuple
                     * @property {syft_proto.execution.v1.NestedTypeWrapper.ITypeMap|null} [nested_type_dict] TypeContainer nested_type_dict
                     */

                    /**
                     * Constructs a new TypeContainer.
                     * @memberof syft_proto.execution.v1.NestedTypeWrapper
                     * @classdesc Represents a TypeContainer.
                     * @implements ITypeContainer
                     * @constructor
                     * @param {syft_proto.execution.v1.NestedTypeWrapper.ITypeContainer=} [properties] Properties to set
                     */
                    function TypeContainer(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * TypeContainer nested_type.
                     * @member {syft_proto.execution.v1.IInputTypeDescriptor|null|undefined} nested_type
                     * @memberof syft_proto.execution.v1.NestedTypeWrapper.TypeContainer
                     * @instance
                     */
                    TypeContainer.prototype.nested_type = null;

                    /**
                     * TypeContainer nested_type_list.
                     * @member {syft_proto.execution.v1.NestedTypeWrapper.ITypeList|null|undefined} nested_type_list
                     * @memberof syft_proto.execution.v1.NestedTypeWrapper.TypeContainer
                     * @instance
                     */
                    TypeContainer.prototype.nested_type_list = null;

                    /**
                     * TypeContainer nested_type_tuple.
                     * @member {syft_proto.execution.v1.NestedTypeWrapper.ITypeTuple|null|undefined} nested_type_tuple
                     * @memberof syft_proto.execution.v1.NestedTypeWrapper.TypeContainer
                     * @instance
                     */
                    TypeContainer.prototype.nested_type_tuple = null;

                    /**
                     * TypeContainer nested_type_dict.
                     * @member {syft_proto.execution.v1.NestedTypeWrapper.ITypeMap|null|undefined} nested_type_dict
                     * @memberof syft_proto.execution.v1.NestedTypeWrapper.TypeContainer
                     * @instance
                     */
                    TypeContainer.prototype.nested_type_dict = null;

                    // OneOf field names bound to virtual getters and setters
                    var $oneOfFields;

                    /**
                     * TypeContainer nested_container.
                     * @member {"nested_type"|"nested_type_list"|"nested_type_tuple"|"nested_type_dict"|undefined} nested_container
                     * @memberof syft_proto.execution.v1.NestedTypeWrapper.TypeContainer
                     * @instance
                     */
                    Object.defineProperty(TypeContainer.prototype, "nested_container", {
                        get: $util.oneOfGetter($oneOfFields = ["nested_type", "nested_type_list", "nested_type_tuple", "nested_type_dict"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * Creates a new TypeContainer instance using the specified properties.
                     * @function create
                     * @memberof syft_proto.execution.v1.NestedTypeWrapper.TypeContainer
                     * @static
                     * @param {syft_proto.execution.v1.NestedTypeWrapper.ITypeContainer=} [properties] Properties to set
                     * @returns {syft_proto.execution.v1.NestedTypeWrapper.TypeContainer} TypeContainer instance
                     */
                    TypeContainer.create = function create(properties) {
                        return new TypeContainer(properties);
                    };

                    /**
                     * Encodes the specified TypeContainer message. Does not implicitly {@link syft_proto.execution.v1.NestedTypeWrapper.TypeContainer.verify|verify} messages.
                     * @function encode
                     * @memberof syft_proto.execution.v1.NestedTypeWrapper.TypeContainer
                     * @static
                     * @param {syft_proto.execution.v1.NestedTypeWrapper.ITypeContainer} message TypeContainer message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    TypeContainer.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.nested_type != null && message.hasOwnProperty("nested_type"))
                            $root.syft_proto.execution.v1.InputTypeDescriptor.encode(message.nested_type, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        if (message.nested_type_list != null && message.hasOwnProperty("nested_type_list"))
                            $root.syft_proto.execution.v1.NestedTypeWrapper.TypeList.encode(message.nested_type_list, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                        if (message.nested_type_tuple != null && message.hasOwnProperty("nested_type_tuple"))
                            $root.syft_proto.execution.v1.NestedTypeWrapper.TypeTuple.encode(message.nested_type_tuple, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                        if (message.nested_type_dict != null && message.hasOwnProperty("nested_type_dict"))
                            $root.syft_proto.execution.v1.NestedTypeWrapper.TypeMap.encode(message.nested_type_dict, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified TypeContainer message, length delimited. Does not implicitly {@link syft_proto.execution.v1.NestedTypeWrapper.TypeContainer.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof syft_proto.execution.v1.NestedTypeWrapper.TypeContainer
                     * @static
                     * @param {syft_proto.execution.v1.NestedTypeWrapper.ITypeContainer} message TypeContainer message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    TypeContainer.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a TypeContainer message from the specified reader or buffer.
                     * @function decode
                     * @memberof syft_proto.execution.v1.NestedTypeWrapper.TypeContainer
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {syft_proto.execution.v1.NestedTypeWrapper.TypeContainer} TypeContainer
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    TypeContainer.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.syft_proto.execution.v1.NestedTypeWrapper.TypeContainer();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.nested_type = $root.syft_proto.execution.v1.InputTypeDescriptor.decode(reader, reader.uint32());
                                break;
                            case 2:
                                message.nested_type_list = $root.syft_proto.execution.v1.NestedTypeWrapper.TypeList.decode(reader, reader.uint32());
                                break;
                            case 3:
                                message.nested_type_tuple = $root.syft_proto.execution.v1.NestedTypeWrapper.TypeTuple.decode(reader, reader.uint32());
                                break;
                            case 4:
                                message.nested_type_dict = $root.syft_proto.execution.v1.NestedTypeWrapper.TypeMap.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a TypeContainer message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof syft_proto.execution.v1.NestedTypeWrapper.TypeContainer
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {syft_proto.execution.v1.NestedTypeWrapper.TypeContainer} TypeContainer
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    TypeContainer.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a TypeContainer message.
                     * @function verify
                     * @memberof syft_proto.execution.v1.NestedTypeWrapper.TypeContainer
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    TypeContainer.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        var properties = {};
                        if (message.nested_type != null && message.hasOwnProperty("nested_type")) {
                            properties.nested_container = 1;
                            {
                                var error = $root.syft_proto.execution.v1.InputTypeDescriptor.verify(message.nested_type);
                                if (error)
                                    return "nested_type." + error;
                            }
                        }
                        if (message.nested_type_list != null && message.hasOwnProperty("nested_type_list")) {
                            if (properties.nested_container === 1)
                                return "nested_container: multiple values";
                            properties.nested_container = 1;
                            {
                                var error = $root.syft_proto.execution.v1.NestedTypeWrapper.TypeList.verify(message.nested_type_list);
                                if (error)
                                    return "nested_type_list." + error;
                            }
                        }
                        if (message.nested_type_tuple != null && message.hasOwnProperty("nested_type_tuple")) {
                            if (properties.nested_container === 1)
                                return "nested_container: multiple values";
                            properties.nested_container = 1;
                            {
                                var error = $root.syft_proto.execution.v1.NestedTypeWrapper.TypeTuple.verify(message.nested_type_tuple);
                                if (error)
                                    return "nested_type_tuple." + error;
                            }
                        }
                        if (message.nested_type_dict != null && message.hasOwnProperty("nested_type_dict")) {
                            if (properties.nested_container === 1)
                                return "nested_container: multiple values";
                            properties.nested_container = 1;
                            {
                                var error = $root.syft_proto.execution.v1.NestedTypeWrapper.TypeMap.verify(message.nested_type_dict);
                                if (error)
                                    return "nested_type_dict." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates a TypeContainer message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof syft_proto.execution.v1.NestedTypeWrapper.TypeContainer
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {syft_proto.execution.v1.NestedTypeWrapper.TypeContainer} TypeContainer
                     */
                    TypeContainer.fromObject = function fromObject(object) {
                        if (object instanceof $root.syft_proto.execution.v1.NestedTypeWrapper.TypeContainer)
                            return object;
                        var message = new $root.syft_proto.execution.v1.NestedTypeWrapper.TypeContainer();
                        if (object.nested_type != null) {
                            if (typeof object.nested_type !== "object")
                                throw TypeError(".syft_proto.execution.v1.NestedTypeWrapper.TypeContainer.nested_type: object expected");
                            message.nested_type = $root.syft_proto.execution.v1.InputTypeDescriptor.fromObject(object.nested_type);
                        }
                        if (object.nested_type_list != null) {
                            if (typeof object.nested_type_list !== "object")
                                throw TypeError(".syft_proto.execution.v1.NestedTypeWrapper.TypeContainer.nested_type_list: object expected");
                            message.nested_type_list = $root.syft_proto.execution.v1.NestedTypeWrapper.TypeList.fromObject(object.nested_type_list);
                        }
                        if (object.nested_type_tuple != null) {
                            if (typeof object.nested_type_tuple !== "object")
                                throw TypeError(".syft_proto.execution.v1.NestedTypeWrapper.TypeContainer.nested_type_tuple: object expected");
                            message.nested_type_tuple = $root.syft_proto.execution.v1.NestedTypeWrapper.TypeTuple.fromObject(object.nested_type_tuple);
                        }
                        if (object.nested_type_dict != null) {
                            if (typeof object.nested_type_dict !== "object")
                                throw TypeError(".syft_proto.execution.v1.NestedTypeWrapper.TypeContainer.nested_type_dict: object expected");
                            message.nested_type_dict = $root.syft_proto.execution.v1.NestedTypeWrapper.TypeMap.fromObject(object.nested_type_dict);
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a TypeContainer message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof syft_proto.execution.v1.NestedTypeWrapper.TypeContainer
                     * @static
                     * @param {syft_proto.execution.v1.NestedTypeWrapper.TypeContainer} message TypeContainer
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    TypeContainer.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (message.nested_type != null && message.hasOwnProperty("nested_type")) {
                            object.nested_type = $root.syft_proto.execution.v1.InputTypeDescriptor.toObject(message.nested_type, options);
                            if (options.oneofs)
                                object.nested_container = "nested_type";
                        }
                        if (message.nested_type_list != null && message.hasOwnProperty("nested_type_list")) {
                            object.nested_type_list = $root.syft_proto.execution.v1.NestedTypeWrapper.TypeList.toObject(message.nested_type_list, options);
                            if (options.oneofs)
                                object.nested_container = "nested_type_list";
                        }
                        if (message.nested_type_tuple != null && message.hasOwnProperty("nested_type_tuple")) {
                            object.nested_type_tuple = $root.syft_proto.execution.v1.NestedTypeWrapper.TypeTuple.toObject(message.nested_type_tuple, options);
                            if (options.oneofs)
                                object.nested_container = "nested_type_tuple";
                        }
                        if (message.nested_type_dict != null && message.hasOwnProperty("nested_type_dict")) {
                            object.nested_type_dict = $root.syft_proto.execution.v1.NestedTypeWrapper.TypeMap.toObject(message.nested_type_dict, options);
                            if (options.oneofs)
                                object.nested_container = "nested_type_dict";
                        }
                        return object;
                    };

                    /**
                     * Converts this TypeContainer to JSON.
                     * @function toJSON
                     * @memberof syft_proto.execution.v1.NestedTypeWrapper.TypeContainer
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    TypeContainer.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return TypeContainer;
                })();

                return NestedTypeWrapper;
            })();

            v1.Protocol = (function() {

                /**
                 * Properties of a Protocol.
                 * @memberof syft_proto.execution.v1
                 * @interface IProtocol
                 * @property {syft_proto.types.syft.v1.IId|null} [id] Protocol id
                 * @property {string|null} [name] Protocol name
                 * @property {Object.<string,syft_proto.execution.v1.IRole>|null} [roles] Protocol roles
                 * @property {Array.<string>|null} [tags] Protocol tags
                 * @property {string|null} [description] Protocol description
                 */

                /**
                 * Constructs a new Protocol.
                 * @memberof syft_proto.execution.v1
                 * @classdesc Represents a Protocol.
                 * @implements IProtocol
                 * @constructor
                 * @param {syft_proto.execution.v1.IProtocol=} [properties] Properties to set
                 */
                function Protocol(properties) {
                    this.roles = {};
                    this.tags = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Protocol id.
                 * @member {syft_proto.types.syft.v1.IId|null|undefined} id
                 * @memberof syft_proto.execution.v1.Protocol
                 * @instance
                 */
                Protocol.prototype.id = null;

                /**
                 * Protocol name.
                 * @member {string} name
                 * @memberof syft_proto.execution.v1.Protocol
                 * @instance
                 */
                Protocol.prototype.name = "";

                /**
                 * Protocol roles.
                 * @member {Object.<string,syft_proto.execution.v1.IRole>} roles
                 * @memberof syft_proto.execution.v1.Protocol
                 * @instance
                 */
                Protocol.prototype.roles = $util.emptyObject;

                /**
                 * Protocol tags.
                 * @member {Array.<string>} tags
                 * @memberof syft_proto.execution.v1.Protocol
                 * @instance
                 */
                Protocol.prototype.tags = $util.emptyArray;

                /**
                 * Protocol description.
                 * @member {string} description
                 * @memberof syft_proto.execution.v1.Protocol
                 * @instance
                 */
                Protocol.prototype.description = "";

                /**
                 * Creates a new Protocol instance using the specified properties.
                 * @function create
                 * @memberof syft_proto.execution.v1.Protocol
                 * @static
                 * @param {syft_proto.execution.v1.IProtocol=} [properties] Properties to set
                 * @returns {syft_proto.execution.v1.Protocol} Protocol instance
                 */
                Protocol.create = function create(properties) {
                    return new Protocol(properties);
                };

                /**
                 * Encodes the specified Protocol message. Does not implicitly {@link syft_proto.execution.v1.Protocol.verify|verify} messages.
                 * @function encode
                 * @memberof syft_proto.execution.v1.Protocol
                 * @static
                 * @param {syft_proto.execution.v1.IProtocol} message Protocol message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Protocol.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && message.hasOwnProperty("id"))
                        $root.syft_proto.types.syft.v1.Id.encode(message.id, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.name != null && message.hasOwnProperty("name"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
                    if (message.roles != null && message.hasOwnProperty("roles"))
                        for (var keys = Object.keys(message.roles), i = 0; i < keys.length; ++i) {
                            writer.uint32(/* id 3, wireType 2 =*/26).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                            $root.syft_proto.execution.v1.Role.encode(message.roles[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                        }
                    if (message.tags != null && message.tags.length)
                        for (var i = 0; i < message.tags.length; ++i)
                            writer.uint32(/* id 4, wireType 2 =*/34).string(message.tags[i]);
                    if (message.description != null && message.hasOwnProperty("description"))
                        writer.uint32(/* id 5, wireType 2 =*/42).string(message.description);
                    return writer;
                };

                /**
                 * Encodes the specified Protocol message, length delimited. Does not implicitly {@link syft_proto.execution.v1.Protocol.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof syft_proto.execution.v1.Protocol
                 * @static
                 * @param {syft_proto.execution.v1.IProtocol} message Protocol message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Protocol.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Protocol message from the specified reader or buffer.
                 * @function decode
                 * @memberof syft_proto.execution.v1.Protocol
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {syft_proto.execution.v1.Protocol} Protocol
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Protocol.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.syft_proto.execution.v1.Protocol(), key;
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.id = $root.syft_proto.types.syft.v1.Id.decode(reader, reader.uint32());
                            break;
                        case 2:
                            message.name = reader.string();
                            break;
                        case 3:
                            reader.skip().pos++;
                            if (message.roles === $util.emptyObject)
                                message.roles = {};
                            key = reader.string();
                            reader.pos++;
                            message.roles[key] = $root.syft_proto.execution.v1.Role.decode(reader, reader.uint32());
                            break;
                        case 4:
                            if (!(message.tags && message.tags.length))
                                message.tags = [];
                            message.tags.push(reader.string());
                            break;
                        case 5:
                            message.description = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Protocol message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof syft_proto.execution.v1.Protocol
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {syft_proto.execution.v1.Protocol} Protocol
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Protocol.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Protocol message.
                 * @function verify
                 * @memberof syft_proto.execution.v1.Protocol
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Protocol.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.id != null && message.hasOwnProperty("id")) {
                        var error = $root.syft_proto.types.syft.v1.Id.verify(message.id);
                        if (error)
                            return "id." + error;
                    }
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.roles != null && message.hasOwnProperty("roles")) {
                        if (!$util.isObject(message.roles))
                            return "roles: object expected";
                        var key = Object.keys(message.roles);
                        for (var i = 0; i < key.length; ++i) {
                            var error = $root.syft_proto.execution.v1.Role.verify(message.roles[key[i]]);
                            if (error)
                                return "roles." + error;
                        }
                    }
                    if (message.tags != null && message.hasOwnProperty("tags")) {
                        if (!Array.isArray(message.tags))
                            return "tags: array expected";
                        for (var i = 0; i < message.tags.length; ++i)
                            if (!$util.isString(message.tags[i]))
                                return "tags: string[] expected";
                    }
                    if (message.description != null && message.hasOwnProperty("description"))
                        if (!$util.isString(message.description))
                            return "description: string expected";
                    return null;
                };

                /**
                 * Creates a Protocol message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof syft_proto.execution.v1.Protocol
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {syft_proto.execution.v1.Protocol} Protocol
                 */
                Protocol.fromObject = function fromObject(object) {
                    if (object instanceof $root.syft_proto.execution.v1.Protocol)
                        return object;
                    var message = new $root.syft_proto.execution.v1.Protocol();
                    if (object.id != null) {
                        if (typeof object.id !== "object")
                            throw TypeError(".syft_proto.execution.v1.Protocol.id: object expected");
                        message.id = $root.syft_proto.types.syft.v1.Id.fromObject(object.id);
                    }
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.roles) {
                        if (typeof object.roles !== "object")
                            throw TypeError(".syft_proto.execution.v1.Protocol.roles: object expected");
                        message.roles = {};
                        for (var keys = Object.keys(object.roles), i = 0; i < keys.length; ++i) {
                            if (typeof object.roles[keys[i]] !== "object")
                                throw TypeError(".syft_proto.execution.v1.Protocol.roles: object expected");
                            message.roles[keys[i]] = $root.syft_proto.execution.v1.Role.fromObject(object.roles[keys[i]]);
                        }
                    }
                    if (object.tags) {
                        if (!Array.isArray(object.tags))
                            throw TypeError(".syft_proto.execution.v1.Protocol.tags: array expected");
                        message.tags = [];
                        for (var i = 0; i < object.tags.length; ++i)
                            message.tags[i] = String(object.tags[i]);
                    }
                    if (object.description != null)
                        message.description = String(object.description);
                    return message;
                };

                /**
                 * Creates a plain object from a Protocol message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof syft_proto.execution.v1.Protocol
                 * @static
                 * @param {syft_proto.execution.v1.Protocol} message Protocol
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Protocol.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.tags = [];
                    if (options.objects || options.defaults)
                        object.roles = {};
                    if (options.defaults) {
                        object.id = null;
                        object.name = "";
                        object.description = "";
                    }
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = $root.syft_proto.types.syft.v1.Id.toObject(message.id, options);
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    var keys2;
                    if (message.roles && (keys2 = Object.keys(message.roles)).length) {
                        object.roles = {};
                        for (var j = 0; j < keys2.length; ++j)
                            object.roles[keys2[j]] = $root.syft_proto.execution.v1.Role.toObject(message.roles[keys2[j]], options);
                    }
                    if (message.tags && message.tags.length) {
                        object.tags = [];
                        for (var j = 0; j < message.tags.length; ++j)
                            object.tags[j] = message.tags[j];
                    }
                    if (message.description != null && message.hasOwnProperty("description"))
                        object.description = message.description;
                    return object;
                };

                /**
                 * Converts this Protocol to JSON.
                 * @function toJSON
                 * @memberof syft_proto.execution.v1.Protocol
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Protocol.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Protocol;
            })();

            v1.StorageAction = (function() {

                /**
                 * Properties of a StorageAction.
                 * @memberof syft_proto.execution.v1
                 * @interface IStorageAction
                 * @property {string|null} [command] StorageAction command
                 * @property {syft_proto.types.syft.v1.IId|null} [target_id] StorageAction target_id
                 * @property {syft_proto.generic.pointers.v1.IPointerTensor|null} [target_pointer] StorageAction target_pointer
                 * @property {syft_proto.execution.v1.IPlaceholderId|null} [target_placeholder_id] StorageAction target_placeholder_id
                 * @property {syft_proto.types.torch.v1.ITorchTensor|null} [target_tensor] StorageAction target_tensor
                 * @property {Array.<syft_proto.types.syft.v1.IArg>|null} [args] StorageAction args
                 * @property {Object.<string,syft_proto.types.syft.v1.IArg>|null} [kwargs] StorageAction kwargs
                 * @property {Array.<syft_proto.types.syft.v1.IId>|null} [return_ids] StorageAction return_ids
                 * @property {Array.<syft_proto.execution.v1.IPlaceholderId>|null} [return_placeholder_ids] StorageAction return_placeholder_ids
                 */

                /**
                 * Constructs a new StorageAction.
                 * @memberof syft_proto.execution.v1
                 * @classdesc Represents a StorageAction.
                 * @implements IStorageAction
                 * @constructor
                 * @param {syft_proto.execution.v1.IStorageAction=} [properties] Properties to set
                 */
                function StorageAction(properties) {
                    this.args = [];
                    this.kwargs = {};
                    this.return_ids = [];
                    this.return_placeholder_ids = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * StorageAction command.
                 * @member {string} command
                 * @memberof syft_proto.execution.v1.StorageAction
                 * @instance
                 */
                StorageAction.prototype.command = "";

                /**
                 * StorageAction target_id.
                 * @member {syft_proto.types.syft.v1.IId|null|undefined} target_id
                 * @memberof syft_proto.execution.v1.StorageAction
                 * @instance
                 */
                StorageAction.prototype.target_id = null;

                /**
                 * StorageAction target_pointer.
                 * @member {syft_proto.generic.pointers.v1.IPointerTensor|null|undefined} target_pointer
                 * @memberof syft_proto.execution.v1.StorageAction
                 * @instance
                 */
                StorageAction.prototype.target_pointer = null;

                /**
                 * StorageAction target_placeholder_id.
                 * @member {syft_proto.execution.v1.IPlaceholderId|null|undefined} target_placeholder_id
                 * @memberof syft_proto.execution.v1.StorageAction
                 * @instance
                 */
                StorageAction.prototype.target_placeholder_id = null;

                /**
                 * StorageAction target_tensor.
                 * @member {syft_proto.types.torch.v1.ITorchTensor|null|undefined} target_tensor
                 * @memberof syft_proto.execution.v1.StorageAction
                 * @instance
                 */
                StorageAction.prototype.target_tensor = null;

                /**
                 * StorageAction args.
                 * @member {Array.<syft_proto.types.syft.v1.IArg>} args
                 * @memberof syft_proto.execution.v1.StorageAction
                 * @instance
                 */
                StorageAction.prototype.args = $util.emptyArray;

                /**
                 * StorageAction kwargs.
                 * @member {Object.<string,syft_proto.types.syft.v1.IArg>} kwargs
                 * @memberof syft_proto.execution.v1.StorageAction
                 * @instance
                 */
                StorageAction.prototype.kwargs = $util.emptyObject;

                /**
                 * StorageAction return_ids.
                 * @member {Array.<syft_proto.types.syft.v1.IId>} return_ids
                 * @memberof syft_proto.execution.v1.StorageAction
                 * @instance
                 */
                StorageAction.prototype.return_ids = $util.emptyArray;

                /**
                 * StorageAction return_placeholder_ids.
                 * @member {Array.<syft_proto.execution.v1.IPlaceholderId>} return_placeholder_ids
                 * @memberof syft_proto.execution.v1.StorageAction
                 * @instance
                 */
                StorageAction.prototype.return_placeholder_ids = $util.emptyArray;

                // OneOf field names bound to virtual getters and setters
                var $oneOfFields;

                /**
                 * StorageAction target.
                 * @member {"target_id"|"target_pointer"|"target_placeholder_id"|"target_tensor"|undefined} target
                 * @memberof syft_proto.execution.v1.StorageAction
                 * @instance
                 */
                Object.defineProperty(StorageAction.prototype, "target", {
                    get: $util.oneOfGetter($oneOfFields = ["target_id", "target_pointer", "target_placeholder_id", "target_tensor"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                /**
                 * Creates a new StorageAction instance using the specified properties.
                 * @function create
                 * @memberof syft_proto.execution.v1.StorageAction
                 * @static
                 * @param {syft_proto.execution.v1.IStorageAction=} [properties] Properties to set
                 * @returns {syft_proto.execution.v1.StorageAction} StorageAction instance
                 */
                StorageAction.create = function create(properties) {
                    return new StorageAction(properties);
                };

                /**
                 * Encodes the specified StorageAction message. Does not implicitly {@link syft_proto.execution.v1.StorageAction.verify|verify} messages.
                 * @function encode
                 * @memberof syft_proto.execution.v1.StorageAction
                 * @static
                 * @param {syft_proto.execution.v1.IStorageAction} message StorageAction message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                StorageAction.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.command != null && message.hasOwnProperty("command"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.command);
                    if (message.target_pointer != null && message.hasOwnProperty("target_pointer"))
                        $root.syft_proto.generic.pointers.v1.PointerTensor.encode(message.target_pointer, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.target_placeholder_id != null && message.hasOwnProperty("target_placeholder_id"))
                        $root.syft_proto.execution.v1.PlaceholderId.encode(message.target_placeholder_id, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    if (message.target_tensor != null && message.hasOwnProperty("target_tensor"))
                        $root.syft_proto.types.torch.v1.TorchTensor.encode(message.target_tensor, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    if (message.args != null && message.args.length)
                        for (var i = 0; i < message.args.length; ++i)
                            $root.syft_proto.types.syft.v1.Arg.encode(message.args[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                    if (message.kwargs != null && message.hasOwnProperty("kwargs"))
                        for (var keys = Object.keys(message.kwargs), i = 0; i < keys.length; ++i) {
                            writer.uint32(/* id 6, wireType 2 =*/50).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                            $root.syft_proto.types.syft.v1.Arg.encode(message.kwargs[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                        }
                    if (message.return_ids != null && message.return_ids.length)
                        for (var i = 0; i < message.return_ids.length; ++i)
                            $root.syft_proto.types.syft.v1.Id.encode(message.return_ids[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                    if (message.return_placeholder_ids != null && message.return_placeholder_ids.length)
                        for (var i = 0; i < message.return_placeholder_ids.length; ++i)
                            $root.syft_proto.execution.v1.PlaceholderId.encode(message.return_placeholder_ids[i], writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                    if (message.target_id != null && message.hasOwnProperty("target_id"))
                        $root.syft_proto.types.syft.v1.Id.encode(message.target_id, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified StorageAction message, length delimited. Does not implicitly {@link syft_proto.execution.v1.StorageAction.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof syft_proto.execution.v1.StorageAction
                 * @static
                 * @param {syft_proto.execution.v1.IStorageAction} message StorageAction message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                StorageAction.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a StorageAction message from the specified reader or buffer.
                 * @function decode
                 * @memberof syft_proto.execution.v1.StorageAction
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {syft_proto.execution.v1.StorageAction} StorageAction
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                StorageAction.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.syft_proto.execution.v1.StorageAction(), key;
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.command = reader.string();
                            break;
                        case 9:
                            message.target_id = $root.syft_proto.types.syft.v1.Id.decode(reader, reader.uint32());
                            break;
                        case 2:
                            message.target_pointer = $root.syft_proto.generic.pointers.v1.PointerTensor.decode(reader, reader.uint32());
                            break;
                        case 3:
                            message.target_placeholder_id = $root.syft_proto.execution.v1.PlaceholderId.decode(reader, reader.uint32());
                            break;
                        case 4:
                            message.target_tensor = $root.syft_proto.types.torch.v1.TorchTensor.decode(reader, reader.uint32());
                            break;
                        case 5:
                            if (!(message.args && message.args.length))
                                message.args = [];
                            message.args.push($root.syft_proto.types.syft.v1.Arg.decode(reader, reader.uint32()));
                            break;
                        case 6:
                            reader.skip().pos++;
                            if (message.kwargs === $util.emptyObject)
                                message.kwargs = {};
                            key = reader.string();
                            reader.pos++;
                            message.kwargs[key] = $root.syft_proto.types.syft.v1.Arg.decode(reader, reader.uint32());
                            break;
                        case 7:
                            if (!(message.return_ids && message.return_ids.length))
                                message.return_ids = [];
                            message.return_ids.push($root.syft_proto.types.syft.v1.Id.decode(reader, reader.uint32()));
                            break;
                        case 8:
                            if (!(message.return_placeholder_ids && message.return_placeholder_ids.length))
                                message.return_placeholder_ids = [];
                            message.return_placeholder_ids.push($root.syft_proto.execution.v1.PlaceholderId.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a StorageAction message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof syft_proto.execution.v1.StorageAction
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {syft_proto.execution.v1.StorageAction} StorageAction
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                StorageAction.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a StorageAction message.
                 * @function verify
                 * @memberof syft_proto.execution.v1.StorageAction
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                StorageAction.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    var properties = {};
                    if (message.command != null && message.hasOwnProperty("command"))
                        if (!$util.isString(message.command))
                            return "command: string expected";
                    if (message.target_id != null && message.hasOwnProperty("target_id")) {
                        properties.target = 1;
                        {
                            var error = $root.syft_proto.types.syft.v1.Id.verify(message.target_id);
                            if (error)
                                return "target_id." + error;
                        }
                    }
                    if (message.target_pointer != null && message.hasOwnProperty("target_pointer")) {
                        if (properties.target === 1)
                            return "target: multiple values";
                        properties.target = 1;
                        {
                            var error = $root.syft_proto.generic.pointers.v1.PointerTensor.verify(message.target_pointer);
                            if (error)
                                return "target_pointer." + error;
                        }
                    }
                    if (message.target_placeholder_id != null && message.hasOwnProperty("target_placeholder_id")) {
                        if (properties.target === 1)
                            return "target: multiple values";
                        properties.target = 1;
                        {
                            var error = $root.syft_proto.execution.v1.PlaceholderId.verify(message.target_placeholder_id);
                            if (error)
                                return "target_placeholder_id." + error;
                        }
                    }
                    if (message.target_tensor != null && message.hasOwnProperty("target_tensor")) {
                        if (properties.target === 1)
                            return "target: multiple values";
                        properties.target = 1;
                        {
                            var error = $root.syft_proto.types.torch.v1.TorchTensor.verify(message.target_tensor);
                            if (error)
                                return "target_tensor." + error;
                        }
                    }
                    if (message.args != null && message.hasOwnProperty("args")) {
                        if (!Array.isArray(message.args))
                            return "args: array expected";
                        for (var i = 0; i < message.args.length; ++i) {
                            var error = $root.syft_proto.types.syft.v1.Arg.verify(message.args[i]);
                            if (error)
                                return "args." + error;
                        }
                    }
                    if (message.kwargs != null && message.hasOwnProperty("kwargs")) {
                        if (!$util.isObject(message.kwargs))
                            return "kwargs: object expected";
                        var key = Object.keys(message.kwargs);
                        for (var i = 0; i < key.length; ++i) {
                            var error = $root.syft_proto.types.syft.v1.Arg.verify(message.kwargs[key[i]]);
                            if (error)
                                return "kwargs." + error;
                        }
                    }
                    if (message.return_ids != null && message.hasOwnProperty("return_ids")) {
                        if (!Array.isArray(message.return_ids))
                            return "return_ids: array expected";
                        for (var i = 0; i < message.return_ids.length; ++i) {
                            var error = $root.syft_proto.types.syft.v1.Id.verify(message.return_ids[i]);
                            if (error)
                                return "return_ids." + error;
                        }
                    }
                    if (message.return_placeholder_ids != null && message.hasOwnProperty("return_placeholder_ids")) {
                        if (!Array.isArray(message.return_placeholder_ids))
                            return "return_placeholder_ids: array expected";
                        for (var i = 0; i < message.return_placeholder_ids.length; ++i) {
                            var error = $root.syft_proto.execution.v1.PlaceholderId.verify(message.return_placeholder_ids[i]);
                            if (error)
                                return "return_placeholder_ids." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates a StorageAction message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof syft_proto.execution.v1.StorageAction
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {syft_proto.execution.v1.StorageAction} StorageAction
                 */
                StorageAction.fromObject = function fromObject(object) {
                    if (object instanceof $root.syft_proto.execution.v1.StorageAction)
                        return object;
                    var message = new $root.syft_proto.execution.v1.StorageAction();
                    if (object.command != null)
                        message.command = String(object.command);
                    if (object.target_id != null) {
                        if (typeof object.target_id !== "object")
                            throw TypeError(".syft_proto.execution.v1.StorageAction.target_id: object expected");
                        message.target_id = $root.syft_proto.types.syft.v1.Id.fromObject(object.target_id);
                    }
                    if (object.target_pointer != null) {
                        if (typeof object.target_pointer !== "object")
                            throw TypeError(".syft_proto.execution.v1.StorageAction.target_pointer: object expected");
                        message.target_pointer = $root.syft_proto.generic.pointers.v1.PointerTensor.fromObject(object.target_pointer);
                    }
                    if (object.target_placeholder_id != null) {
                        if (typeof object.target_placeholder_id !== "object")
                            throw TypeError(".syft_proto.execution.v1.StorageAction.target_placeholder_id: object expected");
                        message.target_placeholder_id = $root.syft_proto.execution.v1.PlaceholderId.fromObject(object.target_placeholder_id);
                    }
                    if (object.target_tensor != null) {
                        if (typeof object.target_tensor !== "object")
                            throw TypeError(".syft_proto.execution.v1.StorageAction.target_tensor: object expected");
                        message.target_tensor = $root.syft_proto.types.torch.v1.TorchTensor.fromObject(object.target_tensor);
                    }
                    if (object.args) {
                        if (!Array.isArray(object.args))
                            throw TypeError(".syft_proto.execution.v1.StorageAction.args: array expected");
                        message.args = [];
                        for (var i = 0; i < object.args.length; ++i) {
                            if (typeof object.args[i] !== "object")
                                throw TypeError(".syft_proto.execution.v1.StorageAction.args: object expected");
                            message.args[i] = $root.syft_proto.types.syft.v1.Arg.fromObject(object.args[i]);
                        }
                    }
                    if (object.kwargs) {
                        if (typeof object.kwargs !== "object")
                            throw TypeError(".syft_proto.execution.v1.StorageAction.kwargs: object expected");
                        message.kwargs = {};
                        for (var keys = Object.keys(object.kwargs), i = 0; i < keys.length; ++i) {
                            if (typeof object.kwargs[keys[i]] !== "object")
                                throw TypeError(".syft_proto.execution.v1.StorageAction.kwargs: object expected");
                            message.kwargs[keys[i]] = $root.syft_proto.types.syft.v1.Arg.fromObject(object.kwargs[keys[i]]);
                        }
                    }
                    if (object.return_ids) {
                        if (!Array.isArray(object.return_ids))
                            throw TypeError(".syft_proto.execution.v1.StorageAction.return_ids: array expected");
                        message.return_ids = [];
                        for (var i = 0; i < object.return_ids.length; ++i) {
                            if (typeof object.return_ids[i] !== "object")
                                throw TypeError(".syft_proto.execution.v1.StorageAction.return_ids: object expected");
                            message.return_ids[i] = $root.syft_proto.types.syft.v1.Id.fromObject(object.return_ids[i]);
                        }
                    }
                    if (object.return_placeholder_ids) {
                        if (!Array.isArray(object.return_placeholder_ids))
                            throw TypeError(".syft_proto.execution.v1.StorageAction.return_placeholder_ids: array expected");
                        message.return_placeholder_ids = [];
                        for (var i = 0; i < object.return_placeholder_ids.length; ++i) {
                            if (typeof object.return_placeholder_ids[i] !== "object")
                                throw TypeError(".syft_proto.execution.v1.StorageAction.return_placeholder_ids: object expected");
                            message.return_placeholder_ids[i] = $root.syft_proto.execution.v1.PlaceholderId.fromObject(object.return_placeholder_ids[i]);
                        }
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a StorageAction message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof syft_proto.execution.v1.StorageAction
                 * @static
                 * @param {syft_proto.execution.v1.StorageAction} message StorageAction
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                StorageAction.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults) {
                        object.args = [];
                        object.return_ids = [];
                        object.return_placeholder_ids = [];
                    }
                    if (options.objects || options.defaults)
                        object.kwargs = {};
                    if (options.defaults)
                        object.command = "";
                    if (message.command != null && message.hasOwnProperty("command"))
                        object.command = message.command;
                    if (message.target_pointer != null && message.hasOwnProperty("target_pointer")) {
                        object.target_pointer = $root.syft_proto.generic.pointers.v1.PointerTensor.toObject(message.target_pointer, options);
                        if (options.oneofs)
                            object.target = "target_pointer";
                    }
                    if (message.target_placeholder_id != null && message.hasOwnProperty("target_placeholder_id")) {
                        object.target_placeholder_id = $root.syft_proto.execution.v1.PlaceholderId.toObject(message.target_placeholder_id, options);
                        if (options.oneofs)
                            object.target = "target_placeholder_id";
                    }
                    if (message.target_tensor != null && message.hasOwnProperty("target_tensor")) {
                        object.target_tensor = $root.syft_proto.types.torch.v1.TorchTensor.toObject(message.target_tensor, options);
                        if (options.oneofs)
                            object.target = "target_tensor";
                    }
                    if (message.args && message.args.length) {
                        object.args = [];
                        for (var j = 0; j < message.args.length; ++j)
                            object.args[j] = $root.syft_proto.types.syft.v1.Arg.toObject(message.args[j], options);
                    }
                    var keys2;
                    if (message.kwargs && (keys2 = Object.keys(message.kwargs)).length) {
                        object.kwargs = {};
                        for (var j = 0; j < keys2.length; ++j)
                            object.kwargs[keys2[j]] = $root.syft_proto.types.syft.v1.Arg.toObject(message.kwargs[keys2[j]], options);
                    }
                    if (message.return_ids && message.return_ids.length) {
                        object.return_ids = [];
                        for (var j = 0; j < message.return_ids.length; ++j)
                            object.return_ids[j] = $root.syft_proto.types.syft.v1.Id.toObject(message.return_ids[j], options);
                    }
                    if (message.return_placeholder_ids && message.return_placeholder_ids.length) {
                        object.return_placeholder_ids = [];
                        for (var j = 0; j < message.return_placeholder_ids.length; ++j)
                            object.return_placeholder_ids[j] = $root.syft_proto.execution.v1.PlaceholderId.toObject(message.return_placeholder_ids[j], options);
                    }
                    if (message.target_id != null && message.hasOwnProperty("target_id")) {
                        object.target_id = $root.syft_proto.types.syft.v1.Id.toObject(message.target_id, options);
                        if (options.oneofs)
                            object.target = "target_id";
                    }
                    return object;
                };

                /**
                 * Converts this StorageAction to JSON.
                 * @function toJSON
                 * @memberof syft_proto.execution.v1.StorageAction
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                StorageAction.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return StorageAction;
            })();

            return v1;
        })();

        return execution;
    })();

    syft_proto.types = (function() {

        /**
         * Namespace types.
         * @memberof syft_proto
         * @namespace
         */
        var types = {};

        types.syft = (function() {

            /**
             * Namespace syft.
             * @memberof syft_proto.types
             * @namespace
             */
            var syft = {};

            syft.v1 = (function() {

                /**
                 * Namespace v1.
                 * @memberof syft_proto.types.syft
                 * @namespace
                 */
                var v1 = {};

                v1.Id = (function() {

                    /**
                     * Properties of an Id.
                     * @memberof syft_proto.types.syft.v1
                     * @interface IId
                     * @property {number|Long|null} [id_int] Id id_int
                     * @property {string|null} [id_str] Id id_str
                     */

                    /**
                     * Constructs a new Id.
                     * @memberof syft_proto.types.syft.v1
                     * @classdesc Represents an Id.
                     * @implements IId
                     * @constructor
                     * @param {syft_proto.types.syft.v1.IId=} [properties] Properties to set
                     */
                    function Id(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Id id_int.
                     * @member {number|Long} id_int
                     * @memberof syft_proto.types.syft.v1.Id
                     * @instance
                     */
                    Id.prototype.id_int = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                    /**
                     * Id id_str.
                     * @member {string} id_str
                     * @memberof syft_proto.types.syft.v1.Id
                     * @instance
                     */
                    Id.prototype.id_str = "";

                    // OneOf field names bound to virtual getters and setters
                    var $oneOfFields;

                    /**
                     * Id id.
                     * @member {"id_int"|"id_str"|undefined} id
                     * @memberof syft_proto.types.syft.v1.Id
                     * @instance
                     */
                    Object.defineProperty(Id.prototype, "id", {
                        get: $util.oneOfGetter($oneOfFields = ["id_int", "id_str"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * Creates a new Id instance using the specified properties.
                     * @function create
                     * @memberof syft_proto.types.syft.v1.Id
                     * @static
                     * @param {syft_proto.types.syft.v1.IId=} [properties] Properties to set
                     * @returns {syft_proto.types.syft.v1.Id} Id instance
                     */
                    Id.create = function create(properties) {
                        return new Id(properties);
                    };

                    /**
                     * Encodes the specified Id message. Does not implicitly {@link syft_proto.types.syft.v1.Id.verify|verify} messages.
                     * @function encode
                     * @memberof syft_proto.types.syft.v1.Id
                     * @static
                     * @param {syft_proto.types.syft.v1.IId} message Id message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Id.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.id_int != null && message.hasOwnProperty("id_int"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id_int);
                        if (message.id_str != null && message.hasOwnProperty("id_str"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.id_str);
                        return writer;
                    };

                    /**
                     * Encodes the specified Id message, length delimited. Does not implicitly {@link syft_proto.types.syft.v1.Id.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof syft_proto.types.syft.v1.Id
                     * @static
                     * @param {syft_proto.types.syft.v1.IId} message Id message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Id.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes an Id message from the specified reader or buffer.
                     * @function decode
                     * @memberof syft_proto.types.syft.v1.Id
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {syft_proto.types.syft.v1.Id} Id
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Id.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.syft_proto.types.syft.v1.Id();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.id_int = reader.int64();
                                break;
                            case 2:
                                message.id_str = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes an Id message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof syft_proto.types.syft.v1.Id
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {syft_proto.types.syft.v1.Id} Id
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Id.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies an Id message.
                     * @function verify
                     * @memberof syft_proto.types.syft.v1.Id
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Id.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        var properties = {};
                        if (message.id_int != null && message.hasOwnProperty("id_int")) {
                            properties.id = 1;
                            if (!$util.isInteger(message.id_int) && !(message.id_int && $util.isInteger(message.id_int.low) && $util.isInteger(message.id_int.high)))
                                return "id_int: integer|Long expected";
                        }
                        if (message.id_str != null && message.hasOwnProperty("id_str")) {
                            if (properties.id === 1)
                                return "id: multiple values";
                            properties.id = 1;
                            if (!$util.isString(message.id_str))
                                return "id_str: string expected";
                        }
                        return null;
                    };

                    /**
                     * Creates an Id message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof syft_proto.types.syft.v1.Id
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {syft_proto.types.syft.v1.Id} Id
                     */
                    Id.fromObject = function fromObject(object) {
                        if (object instanceof $root.syft_proto.types.syft.v1.Id)
                            return object;
                        var message = new $root.syft_proto.types.syft.v1.Id();
                        if (object.id_int != null)
                            if ($util.Long)
                                (message.id_int = $util.Long.fromValue(object.id_int)).unsigned = false;
                            else if (typeof object.id_int === "string")
                                message.id_int = parseInt(object.id_int, 10);
                            else if (typeof object.id_int === "number")
                                message.id_int = object.id_int;
                            else if (typeof object.id_int === "object")
                                message.id_int = new $util.LongBits(object.id_int.low >>> 0, object.id_int.high >>> 0).toNumber();
                        if (object.id_str != null)
                            message.id_str = String(object.id_str);
                        return message;
                    };

                    /**
                     * Creates a plain object from an Id message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof syft_proto.types.syft.v1.Id
                     * @static
                     * @param {syft_proto.types.syft.v1.Id} message Id
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Id.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (message.id_int != null && message.hasOwnProperty("id_int")) {
                            if (typeof message.id_int === "number")
                                object.id_int = options.longs === String ? String(message.id_int) : message.id_int;
                            else
                                object.id_int = options.longs === String ? $util.Long.prototype.toString.call(message.id_int) : options.longs === Number ? new $util.LongBits(message.id_int.low >>> 0, message.id_int.high >>> 0).toNumber() : message.id_int;
                            if (options.oneofs)
                                object.id = "id_int";
                        }
                        if (message.id_str != null && message.hasOwnProperty("id_str")) {
                            object.id_str = message.id_str;
                            if (options.oneofs)
                                object.id = "id_str";
                        }
                        return object;
                    };

                    /**
                     * Converts this Id to JSON.
                     * @function toJSON
                     * @memberof syft_proto.types.syft.v1.Id
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Id.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return Id;
                })();

                v1.Shape = (function() {

                    /**
                     * Properties of a Shape.
                     * @memberof syft_proto.types.syft.v1
                     * @interface IShape
                     * @property {Array.<number>|null} [dims] Shape dims
                     */

                    /**
                     * Constructs a new Shape.
                     * @memberof syft_proto.types.syft.v1
                     * @classdesc Represents a Shape.
                     * @implements IShape
                     * @constructor
                     * @param {syft_proto.types.syft.v1.IShape=} [properties] Properties to set
                     */
                    function Shape(properties) {
                        this.dims = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Shape dims.
                     * @member {Array.<number>} dims
                     * @memberof syft_proto.types.syft.v1.Shape
                     * @instance
                     */
                    Shape.prototype.dims = $util.emptyArray;

                    /**
                     * Creates a new Shape instance using the specified properties.
                     * @function create
                     * @memberof syft_proto.types.syft.v1.Shape
                     * @static
                     * @param {syft_proto.types.syft.v1.IShape=} [properties] Properties to set
                     * @returns {syft_proto.types.syft.v1.Shape} Shape instance
                     */
                    Shape.create = function create(properties) {
                        return new Shape(properties);
                    };

                    /**
                     * Encodes the specified Shape message. Does not implicitly {@link syft_proto.types.syft.v1.Shape.verify|verify} messages.
                     * @function encode
                     * @memberof syft_proto.types.syft.v1.Shape
                     * @static
                     * @param {syft_proto.types.syft.v1.IShape} message Shape message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Shape.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.dims != null && message.dims.length) {
                            writer.uint32(/* id 1, wireType 2 =*/10).fork();
                            for (var i = 0; i < message.dims.length; ++i)
                                writer.int32(message.dims[i]);
                            writer.ldelim();
                        }
                        return writer;
                    };

                    /**
                     * Encodes the specified Shape message, length delimited. Does not implicitly {@link syft_proto.types.syft.v1.Shape.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof syft_proto.types.syft.v1.Shape
                     * @static
                     * @param {syft_proto.types.syft.v1.IShape} message Shape message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Shape.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a Shape message from the specified reader or buffer.
                     * @function decode
                     * @memberof syft_proto.types.syft.v1.Shape
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {syft_proto.types.syft.v1.Shape} Shape
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Shape.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.syft_proto.types.syft.v1.Shape();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                if (!(message.dims && message.dims.length))
                                    message.dims = [];
                                if ((tag & 7) === 2) {
                                    var end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.dims.push(reader.int32());
                                } else
                                    message.dims.push(reader.int32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a Shape message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof syft_proto.types.syft.v1.Shape
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {syft_proto.types.syft.v1.Shape} Shape
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Shape.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a Shape message.
                     * @function verify
                     * @memberof syft_proto.types.syft.v1.Shape
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Shape.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.dims != null && message.hasOwnProperty("dims")) {
                            if (!Array.isArray(message.dims))
                                return "dims: array expected";
                            for (var i = 0; i < message.dims.length; ++i)
                                if (!$util.isInteger(message.dims[i]))
                                    return "dims: integer[] expected";
                        }
                        return null;
                    };

                    /**
                     * Creates a Shape message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof syft_proto.types.syft.v1.Shape
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {syft_proto.types.syft.v1.Shape} Shape
                     */
                    Shape.fromObject = function fromObject(object) {
                        if (object instanceof $root.syft_proto.types.syft.v1.Shape)
                            return object;
                        var message = new $root.syft_proto.types.syft.v1.Shape();
                        if (object.dims) {
                            if (!Array.isArray(object.dims))
                                throw TypeError(".syft_proto.types.syft.v1.Shape.dims: array expected");
                            message.dims = [];
                            for (var i = 0; i < object.dims.length; ++i)
                                message.dims[i] = object.dims[i] | 0;
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a Shape message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof syft_proto.types.syft.v1.Shape
                     * @static
                     * @param {syft_proto.types.syft.v1.Shape} message Shape
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Shape.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.dims = [];
                        if (message.dims && message.dims.length) {
                            object.dims = [];
                            for (var j = 0; j < message.dims.length; ++j)
                                object.dims[j] = message.dims[j];
                        }
                        return object;
                    };

                    /**
                     * Converts this Shape to JSON.
                     * @function toJSON
                     * @memberof syft_proto.types.syft.v1.Shape
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Shape.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return Shape;
                })();

                v1.Arg = (function() {

                    /**
                     * Properties of an Arg.
                     * @memberof syft_proto.types.syft.v1
                     * @interface IArg
                     * @property {boolean|null} [arg_bool] Arg arg_bool
                     * @property {number|Long|null} [arg_int] Arg arg_int
                     * @property {number|null} [arg_float] Arg arg_float
                     * @property {string|null} [arg_str] Arg arg_str
                     * @property {syft_proto.types.syft.v1.IShape|null} [arg_shape] Arg arg_shape
                     * @property {syft_proto.types.torch.v1.ITorchTensor|null} [arg_tensor] Arg arg_tensor
                     * @property {syft_proto.types.torch.v1.IParameter|null} [arg_torch_param] Arg arg_torch_param
                     * @property {syft_proto.generic.pointers.v1.IPointerTensor|null} [arg_pointer_tensor] Arg arg_pointer_tensor
                     * @property {syft_proto.execution.v1.IPlaceholder|null} [arg_placeholder] Arg arg_placeholder
                     * @property {syft_proto.execution.v1.IPlaceholderId|null} [arg_placeholder_id] Arg arg_placeholder_id
                     * @property {syft_proto.types.syft.v1.IArgList|null} [arg_list] Arg arg_list
                     */

                    /**
                     * Constructs a new Arg.
                     * @memberof syft_proto.types.syft.v1
                     * @classdesc Represents an Arg.
                     * @implements IArg
                     * @constructor
                     * @param {syft_proto.types.syft.v1.IArg=} [properties] Properties to set
                     */
                    function Arg(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Arg arg_bool.
                     * @member {boolean} arg_bool
                     * @memberof syft_proto.types.syft.v1.Arg
                     * @instance
                     */
                    Arg.prototype.arg_bool = false;

                    /**
                     * Arg arg_int.
                     * @member {number|Long} arg_int
                     * @memberof syft_proto.types.syft.v1.Arg
                     * @instance
                     */
                    Arg.prototype.arg_int = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                    /**
                     * Arg arg_float.
                     * @member {number} arg_float
                     * @memberof syft_proto.types.syft.v1.Arg
                     * @instance
                     */
                    Arg.prototype.arg_float = 0;

                    /**
                     * Arg arg_str.
                     * @member {string} arg_str
                     * @memberof syft_proto.types.syft.v1.Arg
                     * @instance
                     */
                    Arg.prototype.arg_str = "";

                    /**
                     * Arg arg_shape.
                     * @member {syft_proto.types.syft.v1.IShape|null|undefined} arg_shape
                     * @memberof syft_proto.types.syft.v1.Arg
                     * @instance
                     */
                    Arg.prototype.arg_shape = null;

                    /**
                     * Arg arg_tensor.
                     * @member {syft_proto.types.torch.v1.ITorchTensor|null|undefined} arg_tensor
                     * @memberof syft_proto.types.syft.v1.Arg
                     * @instance
                     */
                    Arg.prototype.arg_tensor = null;

                    /**
                     * Arg arg_torch_param.
                     * @member {syft_proto.types.torch.v1.IParameter|null|undefined} arg_torch_param
                     * @memberof syft_proto.types.syft.v1.Arg
                     * @instance
                     */
                    Arg.prototype.arg_torch_param = null;

                    /**
                     * Arg arg_pointer_tensor.
                     * @member {syft_proto.generic.pointers.v1.IPointerTensor|null|undefined} arg_pointer_tensor
                     * @memberof syft_proto.types.syft.v1.Arg
                     * @instance
                     */
                    Arg.prototype.arg_pointer_tensor = null;

                    /**
                     * Arg arg_placeholder.
                     * @member {syft_proto.execution.v1.IPlaceholder|null|undefined} arg_placeholder
                     * @memberof syft_proto.types.syft.v1.Arg
                     * @instance
                     */
                    Arg.prototype.arg_placeholder = null;

                    /**
                     * Arg arg_placeholder_id.
                     * @member {syft_proto.execution.v1.IPlaceholderId|null|undefined} arg_placeholder_id
                     * @memberof syft_proto.types.syft.v1.Arg
                     * @instance
                     */
                    Arg.prototype.arg_placeholder_id = null;

                    /**
                     * Arg arg_list.
                     * @member {syft_proto.types.syft.v1.IArgList|null|undefined} arg_list
                     * @memberof syft_proto.types.syft.v1.Arg
                     * @instance
                     */
                    Arg.prototype.arg_list = null;

                    // OneOf field names bound to virtual getters and setters
                    var $oneOfFields;

                    /**
                     * Arg arg.
                     * @member {"arg_bool"|"arg_int"|"arg_float"|"arg_str"|"arg_shape"|"arg_tensor"|"arg_torch_param"|"arg_pointer_tensor"|"arg_placeholder"|"arg_placeholder_id"|"arg_list"|undefined} arg
                     * @memberof syft_proto.types.syft.v1.Arg
                     * @instance
                     */
                    Object.defineProperty(Arg.prototype, "arg", {
                        get: $util.oneOfGetter($oneOfFields = ["arg_bool", "arg_int", "arg_float", "arg_str", "arg_shape", "arg_tensor", "arg_torch_param", "arg_pointer_tensor", "arg_placeholder", "arg_placeholder_id", "arg_list"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * Creates a new Arg instance using the specified properties.
                     * @function create
                     * @memberof syft_proto.types.syft.v1.Arg
                     * @static
                     * @param {syft_proto.types.syft.v1.IArg=} [properties] Properties to set
                     * @returns {syft_proto.types.syft.v1.Arg} Arg instance
                     */
                    Arg.create = function create(properties) {
                        return new Arg(properties);
                    };

                    /**
                     * Encodes the specified Arg message. Does not implicitly {@link syft_proto.types.syft.v1.Arg.verify|verify} messages.
                     * @function encode
                     * @memberof syft_proto.types.syft.v1.Arg
                     * @static
                     * @param {syft_proto.types.syft.v1.IArg} message Arg message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Arg.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.arg_bool != null && message.hasOwnProperty("arg_bool"))
                            writer.uint32(/* id 1, wireType 0 =*/8).bool(message.arg_bool);
                        if (message.arg_int != null && message.hasOwnProperty("arg_int"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.arg_int);
                        if (message.arg_float != null && message.hasOwnProperty("arg_float"))
                            writer.uint32(/* id 3, wireType 5 =*/29).float(message.arg_float);
                        if (message.arg_str != null && message.hasOwnProperty("arg_str"))
                            writer.uint32(/* id 4, wireType 2 =*/34).string(message.arg_str);
                        if (message.arg_shape != null && message.hasOwnProperty("arg_shape"))
                            $root.syft_proto.types.syft.v1.Shape.encode(message.arg_shape, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                        if (message.arg_tensor != null && message.hasOwnProperty("arg_tensor"))
                            $root.syft_proto.types.torch.v1.TorchTensor.encode(message.arg_tensor, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                        if (message.arg_torch_param != null && message.hasOwnProperty("arg_torch_param"))
                            $root.syft_proto.types.torch.v1.Parameter.encode(message.arg_torch_param, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                        if (message.arg_pointer_tensor != null && message.hasOwnProperty("arg_pointer_tensor"))
                            $root.syft_proto.generic.pointers.v1.PointerTensor.encode(message.arg_pointer_tensor, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                        if (message.arg_placeholder != null && message.hasOwnProperty("arg_placeholder"))
                            $root.syft_proto.execution.v1.Placeholder.encode(message.arg_placeholder, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
                        if (message.arg_placeholder_id != null && message.hasOwnProperty("arg_placeholder_id"))
                            $root.syft_proto.execution.v1.PlaceholderId.encode(message.arg_placeholder_id, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
                        if (message.arg_list != null && message.hasOwnProperty("arg_list"))
                            $root.syft_proto.types.syft.v1.ArgList.encode(message.arg_list, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified Arg message, length delimited. Does not implicitly {@link syft_proto.types.syft.v1.Arg.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof syft_proto.types.syft.v1.Arg
                     * @static
                     * @param {syft_proto.types.syft.v1.IArg} message Arg message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Arg.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes an Arg message from the specified reader or buffer.
                     * @function decode
                     * @memberof syft_proto.types.syft.v1.Arg
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {syft_proto.types.syft.v1.Arg} Arg
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Arg.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.syft_proto.types.syft.v1.Arg();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.arg_bool = reader.bool();
                                break;
                            case 2:
                                message.arg_int = reader.int64();
                                break;
                            case 3:
                                message.arg_float = reader.float();
                                break;
                            case 4:
                                message.arg_str = reader.string();
                                break;
                            case 5:
                                message.arg_shape = $root.syft_proto.types.syft.v1.Shape.decode(reader, reader.uint32());
                                break;
                            case 6:
                                message.arg_tensor = $root.syft_proto.types.torch.v1.TorchTensor.decode(reader, reader.uint32());
                                break;
                            case 7:
                                message.arg_torch_param = $root.syft_proto.types.torch.v1.Parameter.decode(reader, reader.uint32());
                                break;
                            case 8:
                                message.arg_pointer_tensor = $root.syft_proto.generic.pointers.v1.PointerTensor.decode(reader, reader.uint32());
                                break;
                            case 9:
                                message.arg_placeholder = $root.syft_proto.execution.v1.Placeholder.decode(reader, reader.uint32());
                                break;
                            case 10:
                                message.arg_placeholder_id = $root.syft_proto.execution.v1.PlaceholderId.decode(reader, reader.uint32());
                                break;
                            case 11:
                                message.arg_list = $root.syft_proto.types.syft.v1.ArgList.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes an Arg message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof syft_proto.types.syft.v1.Arg
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {syft_proto.types.syft.v1.Arg} Arg
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Arg.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies an Arg message.
                     * @function verify
                     * @memberof syft_proto.types.syft.v1.Arg
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Arg.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        var properties = {};
                        if (message.arg_bool != null && message.hasOwnProperty("arg_bool")) {
                            properties.arg = 1;
                            if (typeof message.arg_bool !== "boolean")
                                return "arg_bool: boolean expected";
                        }
                        if (message.arg_int != null && message.hasOwnProperty("arg_int")) {
                            if (properties.arg === 1)
                                return "arg: multiple values";
                            properties.arg = 1;
                            if (!$util.isInteger(message.arg_int) && !(message.arg_int && $util.isInteger(message.arg_int.low) && $util.isInteger(message.arg_int.high)))
                                return "arg_int: integer|Long expected";
                        }
                        if (message.arg_float != null && message.hasOwnProperty("arg_float")) {
                            if (properties.arg === 1)
                                return "arg: multiple values";
                            properties.arg = 1;
                            if (typeof message.arg_float !== "number")
                                return "arg_float: number expected";
                        }
                        if (message.arg_str != null && message.hasOwnProperty("arg_str")) {
                            if (properties.arg === 1)
                                return "arg: multiple values";
                            properties.arg = 1;
                            if (!$util.isString(message.arg_str))
                                return "arg_str: string expected";
                        }
                        if (message.arg_shape != null && message.hasOwnProperty("arg_shape")) {
                            if (properties.arg === 1)
                                return "arg: multiple values";
                            properties.arg = 1;
                            {
                                var error = $root.syft_proto.types.syft.v1.Shape.verify(message.arg_shape);
                                if (error)
                                    return "arg_shape." + error;
                            }
                        }
                        if (message.arg_tensor != null && message.hasOwnProperty("arg_tensor")) {
                            if (properties.arg === 1)
                                return "arg: multiple values";
                            properties.arg = 1;
                            {
                                var error = $root.syft_proto.types.torch.v1.TorchTensor.verify(message.arg_tensor);
                                if (error)
                                    return "arg_tensor." + error;
                            }
                        }
                        if (message.arg_torch_param != null && message.hasOwnProperty("arg_torch_param")) {
                            if (properties.arg === 1)
                                return "arg: multiple values";
                            properties.arg = 1;
                            {
                                var error = $root.syft_proto.types.torch.v1.Parameter.verify(message.arg_torch_param);
                                if (error)
                                    return "arg_torch_param." + error;
                            }
                        }
                        if (message.arg_pointer_tensor != null && message.hasOwnProperty("arg_pointer_tensor")) {
                            if (properties.arg === 1)
                                return "arg: multiple values";
                            properties.arg = 1;
                            {
                                var error = $root.syft_proto.generic.pointers.v1.PointerTensor.verify(message.arg_pointer_tensor);
                                if (error)
                                    return "arg_pointer_tensor." + error;
                            }
                        }
                        if (message.arg_placeholder != null && message.hasOwnProperty("arg_placeholder")) {
                            if (properties.arg === 1)
                                return "arg: multiple values";
                            properties.arg = 1;
                            {
                                var error = $root.syft_proto.execution.v1.Placeholder.verify(message.arg_placeholder);
                                if (error)
                                    return "arg_placeholder." + error;
                            }
                        }
                        if (message.arg_placeholder_id != null && message.hasOwnProperty("arg_placeholder_id")) {
                            if (properties.arg === 1)
                                return "arg: multiple values";
                            properties.arg = 1;
                            {
                                var error = $root.syft_proto.execution.v1.PlaceholderId.verify(message.arg_placeholder_id);
                                if (error)
                                    return "arg_placeholder_id." + error;
                            }
                        }
                        if (message.arg_list != null && message.hasOwnProperty("arg_list")) {
                            if (properties.arg === 1)
                                return "arg: multiple values";
                            properties.arg = 1;
                            {
                                var error = $root.syft_proto.types.syft.v1.ArgList.verify(message.arg_list);
                                if (error)
                                    return "arg_list." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates an Arg message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof syft_proto.types.syft.v1.Arg
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {syft_proto.types.syft.v1.Arg} Arg
                     */
                    Arg.fromObject = function fromObject(object) {
                        if (object instanceof $root.syft_proto.types.syft.v1.Arg)
                            return object;
                        var message = new $root.syft_proto.types.syft.v1.Arg();
                        if (object.arg_bool != null)
                            message.arg_bool = Boolean(object.arg_bool);
                        if (object.arg_int != null)
                            if ($util.Long)
                                (message.arg_int = $util.Long.fromValue(object.arg_int)).unsigned = false;
                            else if (typeof object.arg_int === "string")
                                message.arg_int = parseInt(object.arg_int, 10);
                            else if (typeof object.arg_int === "number")
                                message.arg_int = object.arg_int;
                            else if (typeof object.arg_int === "object")
                                message.arg_int = new $util.LongBits(object.arg_int.low >>> 0, object.arg_int.high >>> 0).toNumber();
                        if (object.arg_float != null)
                            message.arg_float = Number(object.arg_float);
                        if (object.arg_str != null)
                            message.arg_str = String(object.arg_str);
                        if (object.arg_shape != null) {
                            if (typeof object.arg_shape !== "object")
                                throw TypeError(".syft_proto.types.syft.v1.Arg.arg_shape: object expected");
                            message.arg_shape = $root.syft_proto.types.syft.v1.Shape.fromObject(object.arg_shape);
                        }
                        if (object.arg_tensor != null) {
                            if (typeof object.arg_tensor !== "object")
                                throw TypeError(".syft_proto.types.syft.v1.Arg.arg_tensor: object expected");
                            message.arg_tensor = $root.syft_proto.types.torch.v1.TorchTensor.fromObject(object.arg_tensor);
                        }
                        if (object.arg_torch_param != null) {
                            if (typeof object.arg_torch_param !== "object")
                                throw TypeError(".syft_proto.types.syft.v1.Arg.arg_torch_param: object expected");
                            message.arg_torch_param = $root.syft_proto.types.torch.v1.Parameter.fromObject(object.arg_torch_param);
                        }
                        if (object.arg_pointer_tensor != null) {
                            if (typeof object.arg_pointer_tensor !== "object")
                                throw TypeError(".syft_proto.types.syft.v1.Arg.arg_pointer_tensor: object expected");
                            message.arg_pointer_tensor = $root.syft_proto.generic.pointers.v1.PointerTensor.fromObject(object.arg_pointer_tensor);
                        }
                        if (object.arg_placeholder != null) {
                            if (typeof object.arg_placeholder !== "object")
                                throw TypeError(".syft_proto.types.syft.v1.Arg.arg_placeholder: object expected");
                            message.arg_placeholder = $root.syft_proto.execution.v1.Placeholder.fromObject(object.arg_placeholder);
                        }
                        if (object.arg_placeholder_id != null) {
                            if (typeof object.arg_placeholder_id !== "object")
                                throw TypeError(".syft_proto.types.syft.v1.Arg.arg_placeholder_id: object expected");
                            message.arg_placeholder_id = $root.syft_proto.execution.v1.PlaceholderId.fromObject(object.arg_placeholder_id);
                        }
                        if (object.arg_list != null) {
                            if (typeof object.arg_list !== "object")
                                throw TypeError(".syft_proto.types.syft.v1.Arg.arg_list: object expected");
                            message.arg_list = $root.syft_proto.types.syft.v1.ArgList.fromObject(object.arg_list);
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from an Arg message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof syft_proto.types.syft.v1.Arg
                     * @static
                     * @param {syft_proto.types.syft.v1.Arg} message Arg
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Arg.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (message.arg_bool != null && message.hasOwnProperty("arg_bool")) {
                            object.arg_bool = message.arg_bool;
                            if (options.oneofs)
                                object.arg = "arg_bool";
                        }
                        if (message.arg_int != null && message.hasOwnProperty("arg_int")) {
                            if (typeof message.arg_int === "number")
                                object.arg_int = options.longs === String ? String(message.arg_int) : message.arg_int;
                            else
                                object.arg_int = options.longs === String ? $util.Long.prototype.toString.call(message.arg_int) : options.longs === Number ? new $util.LongBits(message.arg_int.low >>> 0, message.arg_int.high >>> 0).toNumber() : message.arg_int;
                            if (options.oneofs)
                                object.arg = "arg_int";
                        }
                        if (message.arg_float != null && message.hasOwnProperty("arg_float")) {
                            object.arg_float = options.json && !isFinite(message.arg_float) ? String(message.arg_float) : message.arg_float;
                            if (options.oneofs)
                                object.arg = "arg_float";
                        }
                        if (message.arg_str != null && message.hasOwnProperty("arg_str")) {
                            object.arg_str = message.arg_str;
                            if (options.oneofs)
                                object.arg = "arg_str";
                        }
                        if (message.arg_shape != null && message.hasOwnProperty("arg_shape")) {
                            object.arg_shape = $root.syft_proto.types.syft.v1.Shape.toObject(message.arg_shape, options);
                            if (options.oneofs)
                                object.arg = "arg_shape";
                        }
                        if (message.arg_tensor != null && message.hasOwnProperty("arg_tensor")) {
                            object.arg_tensor = $root.syft_proto.types.torch.v1.TorchTensor.toObject(message.arg_tensor, options);
                            if (options.oneofs)
                                object.arg = "arg_tensor";
                        }
                        if (message.arg_torch_param != null && message.hasOwnProperty("arg_torch_param")) {
                            object.arg_torch_param = $root.syft_proto.types.torch.v1.Parameter.toObject(message.arg_torch_param, options);
                            if (options.oneofs)
                                object.arg = "arg_torch_param";
                        }
                        if (message.arg_pointer_tensor != null && message.hasOwnProperty("arg_pointer_tensor")) {
                            object.arg_pointer_tensor = $root.syft_proto.generic.pointers.v1.PointerTensor.toObject(message.arg_pointer_tensor, options);
                            if (options.oneofs)
                                object.arg = "arg_pointer_tensor";
                        }
                        if (message.arg_placeholder != null && message.hasOwnProperty("arg_placeholder")) {
                            object.arg_placeholder = $root.syft_proto.execution.v1.Placeholder.toObject(message.arg_placeholder, options);
                            if (options.oneofs)
                                object.arg = "arg_placeholder";
                        }
                        if (message.arg_placeholder_id != null && message.hasOwnProperty("arg_placeholder_id")) {
                            object.arg_placeholder_id = $root.syft_proto.execution.v1.PlaceholderId.toObject(message.arg_placeholder_id, options);
                            if (options.oneofs)
                                object.arg = "arg_placeholder_id";
                        }
                        if (message.arg_list != null && message.hasOwnProperty("arg_list")) {
                            object.arg_list = $root.syft_proto.types.syft.v1.ArgList.toObject(message.arg_list, options);
                            if (options.oneofs)
                                object.arg = "arg_list";
                        }
                        return object;
                    };

                    /**
                     * Converts this Arg to JSON.
                     * @function toJSON
                     * @memberof syft_proto.types.syft.v1.Arg
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Arg.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return Arg;
                })();

                v1.ArgList = (function() {

                    /**
                     * Properties of an ArgList.
                     * @memberof syft_proto.types.syft.v1
                     * @interface IArgList
                     * @property {Array.<syft_proto.types.syft.v1.IArg>|null} [args] ArgList args
                     */

                    /**
                     * Constructs a new ArgList.
                     * @memberof syft_proto.types.syft.v1
                     * @classdesc Represents an ArgList.
                     * @implements IArgList
                     * @constructor
                     * @param {syft_proto.types.syft.v1.IArgList=} [properties] Properties to set
                     */
                    function ArgList(properties) {
                        this.args = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * ArgList args.
                     * @member {Array.<syft_proto.types.syft.v1.IArg>} args
                     * @memberof syft_proto.types.syft.v1.ArgList
                     * @instance
                     */
                    ArgList.prototype.args = $util.emptyArray;

                    /**
                     * Creates a new ArgList instance using the specified properties.
                     * @function create
                     * @memberof syft_proto.types.syft.v1.ArgList
                     * @static
                     * @param {syft_proto.types.syft.v1.IArgList=} [properties] Properties to set
                     * @returns {syft_proto.types.syft.v1.ArgList} ArgList instance
                     */
                    ArgList.create = function create(properties) {
                        return new ArgList(properties);
                    };

                    /**
                     * Encodes the specified ArgList message. Does not implicitly {@link syft_proto.types.syft.v1.ArgList.verify|verify} messages.
                     * @function encode
                     * @memberof syft_proto.types.syft.v1.ArgList
                     * @static
                     * @param {syft_proto.types.syft.v1.IArgList} message ArgList message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ArgList.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.args != null && message.args.length)
                            for (var i = 0; i < message.args.length; ++i)
                                $root.syft_proto.types.syft.v1.Arg.encode(message.args[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified ArgList message, length delimited. Does not implicitly {@link syft_proto.types.syft.v1.ArgList.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof syft_proto.types.syft.v1.ArgList
                     * @static
                     * @param {syft_proto.types.syft.v1.IArgList} message ArgList message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ArgList.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes an ArgList message from the specified reader or buffer.
                     * @function decode
                     * @memberof syft_proto.types.syft.v1.ArgList
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {syft_proto.types.syft.v1.ArgList} ArgList
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ArgList.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.syft_proto.types.syft.v1.ArgList();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                if (!(message.args && message.args.length))
                                    message.args = [];
                                message.args.push($root.syft_proto.types.syft.v1.Arg.decode(reader, reader.uint32()));
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes an ArgList message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof syft_proto.types.syft.v1.ArgList
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {syft_proto.types.syft.v1.ArgList} ArgList
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ArgList.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies an ArgList message.
                     * @function verify
                     * @memberof syft_proto.types.syft.v1.ArgList
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ArgList.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.args != null && message.hasOwnProperty("args")) {
                            if (!Array.isArray(message.args))
                                return "args: array expected";
                            for (var i = 0; i < message.args.length; ++i) {
                                var error = $root.syft_proto.types.syft.v1.Arg.verify(message.args[i]);
                                if (error)
                                    return "args." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates an ArgList message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof syft_proto.types.syft.v1.ArgList
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {syft_proto.types.syft.v1.ArgList} ArgList
                     */
                    ArgList.fromObject = function fromObject(object) {
                        if (object instanceof $root.syft_proto.types.syft.v1.ArgList)
                            return object;
                        var message = new $root.syft_proto.types.syft.v1.ArgList();
                        if (object.args) {
                            if (!Array.isArray(object.args))
                                throw TypeError(".syft_proto.types.syft.v1.ArgList.args: array expected");
                            message.args = [];
                            for (var i = 0; i < object.args.length; ++i) {
                                if (typeof object.args[i] !== "object")
                                    throw TypeError(".syft_proto.types.syft.v1.ArgList.args: object expected");
                                message.args[i] = $root.syft_proto.types.syft.v1.Arg.fromObject(object.args[i]);
                            }
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from an ArgList message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof syft_proto.types.syft.v1.ArgList
                     * @static
                     * @param {syft_proto.types.syft.v1.ArgList} message ArgList
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ArgList.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.args = [];
                        if (message.args && message.args.length) {
                            object.args = [];
                            for (var j = 0; j < message.args.length; ++j)
                                object.args[j] = $root.syft_proto.types.syft.v1.Arg.toObject(message.args[j], options);
                        }
                        return object;
                    };

                    /**
                     * Converts this ArgList to JSON.
                     * @function toJSON
                     * @memberof syft_proto.types.syft.v1.ArgList
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ArgList.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return ArgList;
                })();

                return v1;
            })();

            return syft;
        })();

        types.torch = (function() {

            /**
             * Namespace torch.
             * @memberof syft_proto.types
             * @namespace
             */
            var torch = {};

            torch.v1 = (function() {

                /**
                 * Namespace v1.
                 * @memberof syft_proto.types.torch
                 * @namespace
                 */
                var v1 = {};

                v1.TorchTensor = (function() {

                    /**
                     * Properties of a TorchTensor.
                     * @memberof syft_proto.types.torch.v1
                     * @interface ITorchTensor
                     * @property {syft_proto.types.syft.v1.IId|null} [id] TorchTensor id
                     * @property {syft_proto.types.torch.v1.ITensorData|null} [contents_data] TorchTensor contents_data
                     * @property {Uint8Array|null} [contents_bin] TorchTensor contents_bin
                     * @property {syft_proto.types.torch.v1.ITorchTensor|null} [chain] TorchTensor chain
                     * @property {syft_proto.types.torch.v1.ITorchTensor|null} [grad_chain] TorchTensor grad_chain
                     * @property {Array.<string>|null} [tags] TorchTensor tags
                     * @property {string|null} [description] TorchTensor description
                     * @property {syft_proto.types.torch.v1.TorchTensor.Serializer|null} [serializer] TorchTensor serializer
                     */

                    /**
                     * Constructs a new TorchTensor.
                     * @memberof syft_proto.types.torch.v1
                     * @classdesc Represents a TorchTensor.
                     * @implements ITorchTensor
                     * @constructor
                     * @param {syft_proto.types.torch.v1.ITorchTensor=} [properties] Properties to set
                     */
                    function TorchTensor(properties) {
                        this.tags = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * TorchTensor id.
                     * @member {syft_proto.types.syft.v1.IId|null|undefined} id
                     * @memberof syft_proto.types.torch.v1.TorchTensor
                     * @instance
                     */
                    TorchTensor.prototype.id = null;

                    /**
                     * TorchTensor contents_data.
                     * @member {syft_proto.types.torch.v1.ITensorData|null|undefined} contents_data
                     * @memberof syft_proto.types.torch.v1.TorchTensor
                     * @instance
                     */
                    TorchTensor.prototype.contents_data = null;

                    /**
                     * TorchTensor contents_bin.
                     * @member {Uint8Array} contents_bin
                     * @memberof syft_proto.types.torch.v1.TorchTensor
                     * @instance
                     */
                    TorchTensor.prototype.contents_bin = $util.newBuffer([]);

                    /**
                     * TorchTensor chain.
                     * @member {syft_proto.types.torch.v1.ITorchTensor|null|undefined} chain
                     * @memberof syft_proto.types.torch.v1.TorchTensor
                     * @instance
                     */
                    TorchTensor.prototype.chain = null;

                    /**
                     * TorchTensor grad_chain.
                     * @member {syft_proto.types.torch.v1.ITorchTensor|null|undefined} grad_chain
                     * @memberof syft_proto.types.torch.v1.TorchTensor
                     * @instance
                     */
                    TorchTensor.prototype.grad_chain = null;

                    /**
                     * TorchTensor tags.
                     * @member {Array.<string>} tags
                     * @memberof syft_proto.types.torch.v1.TorchTensor
                     * @instance
                     */
                    TorchTensor.prototype.tags = $util.emptyArray;

                    /**
                     * TorchTensor description.
                     * @member {string} description
                     * @memberof syft_proto.types.torch.v1.TorchTensor
                     * @instance
                     */
                    TorchTensor.prototype.description = "";

                    /**
                     * TorchTensor serializer.
                     * @member {syft_proto.types.torch.v1.TorchTensor.Serializer} serializer
                     * @memberof syft_proto.types.torch.v1.TorchTensor
                     * @instance
                     */
                    TorchTensor.prototype.serializer = 0;

                    // OneOf field names bound to virtual getters and setters
                    var $oneOfFields;

                    /**
                     * TorchTensor contents.
                     * @member {"contents_data"|"contents_bin"|undefined} contents
                     * @memberof syft_proto.types.torch.v1.TorchTensor
                     * @instance
                     */
                    Object.defineProperty(TorchTensor.prototype, "contents", {
                        get: $util.oneOfGetter($oneOfFields = ["contents_data", "contents_bin"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * Creates a new TorchTensor instance using the specified properties.
                     * @function create
                     * @memberof syft_proto.types.torch.v1.TorchTensor
                     * @static
                     * @param {syft_proto.types.torch.v1.ITorchTensor=} [properties] Properties to set
                     * @returns {syft_proto.types.torch.v1.TorchTensor} TorchTensor instance
                     */
                    TorchTensor.create = function create(properties) {
                        return new TorchTensor(properties);
                    };

                    /**
                     * Encodes the specified TorchTensor message. Does not implicitly {@link syft_proto.types.torch.v1.TorchTensor.verify|verify} messages.
                     * @function encode
                     * @memberof syft_proto.types.torch.v1.TorchTensor
                     * @static
                     * @param {syft_proto.types.torch.v1.ITorchTensor} message TorchTensor message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    TorchTensor.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.id != null && message.hasOwnProperty("id"))
                            $root.syft_proto.types.syft.v1.Id.encode(message.id, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        if (message.contents_data != null && message.hasOwnProperty("contents_data"))
                            $root.syft_proto.types.torch.v1.TensorData.encode(message.contents_data, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                        if (message.contents_bin != null && message.hasOwnProperty("contents_bin"))
                            writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.contents_bin);
                        if (message.chain != null && message.hasOwnProperty("chain"))
                            $root.syft_proto.types.torch.v1.TorchTensor.encode(message.chain, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                        if (message.grad_chain != null && message.hasOwnProperty("grad_chain"))
                            $root.syft_proto.types.torch.v1.TorchTensor.encode(message.grad_chain, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                        if (message.tags != null && message.tags.length)
                            for (var i = 0; i < message.tags.length; ++i)
                                writer.uint32(/* id 6, wireType 2 =*/50).string(message.tags[i]);
                        if (message.description != null && message.hasOwnProperty("description"))
                            writer.uint32(/* id 7, wireType 2 =*/58).string(message.description);
                        if (message.serializer != null && message.hasOwnProperty("serializer"))
                            writer.uint32(/* id 8, wireType 0 =*/64).int32(message.serializer);
                        return writer;
                    };

                    /**
                     * Encodes the specified TorchTensor message, length delimited. Does not implicitly {@link syft_proto.types.torch.v1.TorchTensor.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof syft_proto.types.torch.v1.TorchTensor
                     * @static
                     * @param {syft_proto.types.torch.v1.ITorchTensor} message TorchTensor message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    TorchTensor.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a TorchTensor message from the specified reader or buffer.
                     * @function decode
                     * @memberof syft_proto.types.torch.v1.TorchTensor
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {syft_proto.types.torch.v1.TorchTensor} TorchTensor
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    TorchTensor.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.syft_proto.types.torch.v1.TorchTensor();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.id = $root.syft_proto.types.syft.v1.Id.decode(reader, reader.uint32());
                                break;
                            case 2:
                                message.contents_data = $root.syft_proto.types.torch.v1.TensorData.decode(reader, reader.uint32());
                                break;
                            case 3:
                                message.contents_bin = reader.bytes();
                                break;
                            case 4:
                                message.chain = $root.syft_proto.types.torch.v1.TorchTensor.decode(reader, reader.uint32());
                                break;
                            case 5:
                                message.grad_chain = $root.syft_proto.types.torch.v1.TorchTensor.decode(reader, reader.uint32());
                                break;
                            case 6:
                                if (!(message.tags && message.tags.length))
                                    message.tags = [];
                                message.tags.push(reader.string());
                                break;
                            case 7:
                                message.description = reader.string();
                                break;
                            case 8:
                                message.serializer = reader.int32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a TorchTensor message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof syft_proto.types.torch.v1.TorchTensor
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {syft_proto.types.torch.v1.TorchTensor} TorchTensor
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    TorchTensor.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a TorchTensor message.
                     * @function verify
                     * @memberof syft_proto.types.torch.v1.TorchTensor
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    TorchTensor.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        var properties = {};
                        if (message.id != null && message.hasOwnProperty("id")) {
                            var error = $root.syft_proto.types.syft.v1.Id.verify(message.id);
                            if (error)
                                return "id." + error;
                        }
                        if (message.contents_data != null && message.hasOwnProperty("contents_data")) {
                            properties.contents = 1;
                            {
                                var error = $root.syft_proto.types.torch.v1.TensorData.verify(message.contents_data);
                                if (error)
                                    return "contents_data." + error;
                            }
                        }
                        if (message.contents_bin != null && message.hasOwnProperty("contents_bin")) {
                            if (properties.contents === 1)
                                return "contents: multiple values";
                            properties.contents = 1;
                            if (!(message.contents_bin && typeof message.contents_bin.length === "number" || $util.isString(message.contents_bin)))
                                return "contents_bin: buffer expected";
                        }
                        if (message.chain != null && message.hasOwnProperty("chain")) {
                            var error = $root.syft_proto.types.torch.v1.TorchTensor.verify(message.chain);
                            if (error)
                                return "chain." + error;
                        }
                        if (message.grad_chain != null && message.hasOwnProperty("grad_chain")) {
                            var error = $root.syft_proto.types.torch.v1.TorchTensor.verify(message.grad_chain);
                            if (error)
                                return "grad_chain." + error;
                        }
                        if (message.tags != null && message.hasOwnProperty("tags")) {
                            if (!Array.isArray(message.tags))
                                return "tags: array expected";
                            for (var i = 0; i < message.tags.length; ++i)
                                if (!$util.isString(message.tags[i]))
                                    return "tags: string[] expected";
                        }
                        if (message.description != null && message.hasOwnProperty("description"))
                            if (!$util.isString(message.description))
                                return "description: string expected";
                        if (message.serializer != null && message.hasOwnProperty("serializer"))
                            switch (message.serializer) {
                            default:
                                return "serializer: enum value expected";
                            case 0:
                            case 1:
                            case 2:
                            case 3:
                            case 4:
                                break;
                            }
                        return null;
                    };

                    /**
                     * Creates a TorchTensor message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof syft_proto.types.torch.v1.TorchTensor
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {syft_proto.types.torch.v1.TorchTensor} TorchTensor
                     */
                    TorchTensor.fromObject = function fromObject(object) {
                        if (object instanceof $root.syft_proto.types.torch.v1.TorchTensor)
                            return object;
                        var message = new $root.syft_proto.types.torch.v1.TorchTensor();
                        if (object.id != null) {
                            if (typeof object.id !== "object")
                                throw TypeError(".syft_proto.types.torch.v1.TorchTensor.id: object expected");
                            message.id = $root.syft_proto.types.syft.v1.Id.fromObject(object.id);
                        }
                        if (object.contents_data != null) {
                            if (typeof object.contents_data !== "object")
                                throw TypeError(".syft_proto.types.torch.v1.TorchTensor.contents_data: object expected");
                            message.contents_data = $root.syft_proto.types.torch.v1.TensorData.fromObject(object.contents_data);
                        }
                        if (object.contents_bin != null)
                            if (typeof object.contents_bin === "string")
                                $util.base64.decode(object.contents_bin, message.contents_bin = $util.newBuffer($util.base64.length(object.contents_bin)), 0);
                            else if (object.contents_bin.length)
                                message.contents_bin = object.contents_bin;
                        if (object.chain != null) {
                            if (typeof object.chain !== "object")
                                throw TypeError(".syft_proto.types.torch.v1.TorchTensor.chain: object expected");
                            message.chain = $root.syft_proto.types.torch.v1.TorchTensor.fromObject(object.chain);
                        }
                        if (object.grad_chain != null) {
                            if (typeof object.grad_chain !== "object")
                                throw TypeError(".syft_proto.types.torch.v1.TorchTensor.grad_chain: object expected");
                            message.grad_chain = $root.syft_proto.types.torch.v1.TorchTensor.fromObject(object.grad_chain);
                        }
                        if (object.tags) {
                            if (!Array.isArray(object.tags))
                                throw TypeError(".syft_proto.types.torch.v1.TorchTensor.tags: array expected");
                            message.tags = [];
                            for (var i = 0; i < object.tags.length; ++i)
                                message.tags[i] = String(object.tags[i]);
                        }
                        if (object.description != null)
                            message.description = String(object.description);
                        switch (object.serializer) {
                        case "SERIALIZER_UNSPECIFIED":
                        case 0:
                            message.serializer = 0;
                            break;
                        case "SERIALIZER_TORCH":
                        case 1:
                            message.serializer = 1;
                            break;
                        case "SERIALIZER_NUMPY":
                        case 2:
                            message.serializer = 2;
                            break;
                        case "SERIALIZER_TF":
                        case 3:
                            message.serializer = 3;
                            break;
                        case "SERIALIZER_ALL":
                        case 4:
                            message.serializer = 4;
                            break;
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a TorchTensor message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof syft_proto.types.torch.v1.TorchTensor
                     * @static
                     * @param {syft_proto.types.torch.v1.TorchTensor} message TorchTensor
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    TorchTensor.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.tags = [];
                        if (options.defaults) {
                            object.id = null;
                            object.chain = null;
                            object.grad_chain = null;
                            object.description = "";
                            object.serializer = options.enums === String ? "SERIALIZER_UNSPECIFIED" : 0;
                        }
                        if (message.id != null && message.hasOwnProperty("id"))
                            object.id = $root.syft_proto.types.syft.v1.Id.toObject(message.id, options);
                        if (message.contents_data != null && message.hasOwnProperty("contents_data")) {
                            object.contents_data = $root.syft_proto.types.torch.v1.TensorData.toObject(message.contents_data, options);
                            if (options.oneofs)
                                object.contents = "contents_data";
                        }
                        if (message.contents_bin != null && message.hasOwnProperty("contents_bin")) {
                            object.contents_bin = options.bytes === String ? $util.base64.encode(message.contents_bin, 0, message.contents_bin.length) : options.bytes === Array ? Array.prototype.slice.call(message.contents_bin) : message.contents_bin;
                            if (options.oneofs)
                                object.contents = "contents_bin";
                        }
                        if (message.chain != null && message.hasOwnProperty("chain"))
                            object.chain = $root.syft_proto.types.torch.v1.TorchTensor.toObject(message.chain, options);
                        if (message.grad_chain != null && message.hasOwnProperty("grad_chain"))
                            object.grad_chain = $root.syft_proto.types.torch.v1.TorchTensor.toObject(message.grad_chain, options);
                        if (message.tags && message.tags.length) {
                            object.tags = [];
                            for (var j = 0; j < message.tags.length; ++j)
                                object.tags[j] = message.tags[j];
                        }
                        if (message.description != null && message.hasOwnProperty("description"))
                            object.description = message.description;
                        if (message.serializer != null && message.hasOwnProperty("serializer"))
                            object.serializer = options.enums === String ? $root.syft_proto.types.torch.v1.TorchTensor.Serializer[message.serializer] : message.serializer;
                        return object;
                    };

                    /**
                     * Converts this TorchTensor to JSON.
                     * @function toJSON
                     * @memberof syft_proto.types.torch.v1.TorchTensor
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    TorchTensor.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Serializer enum.
                     * @name syft_proto.types.torch.v1.TorchTensor.Serializer
                     * @enum {string}
                     * @property {number} SERIALIZER_UNSPECIFIED=0 SERIALIZER_UNSPECIFIED value
                     * @property {number} SERIALIZER_TORCH=1 SERIALIZER_TORCH value
                     * @property {number} SERIALIZER_NUMPY=2 SERIALIZER_NUMPY value
                     * @property {number} SERIALIZER_TF=3 SERIALIZER_TF value
                     * @property {number} SERIALIZER_ALL=4 SERIALIZER_ALL value
                     */
                    TorchTensor.Serializer = (function() {
                        var valuesById = {}, values = Object.create(valuesById);
                        values[valuesById[0] = "SERIALIZER_UNSPECIFIED"] = 0;
                        values[valuesById[1] = "SERIALIZER_TORCH"] = 1;
                        values[valuesById[2] = "SERIALIZER_NUMPY"] = 2;
                        values[valuesById[3] = "SERIALIZER_TF"] = 3;
                        values[valuesById[4] = "SERIALIZER_ALL"] = 4;
                        return values;
                    })();

                    return TorchTensor;
                })();

                v1.TensorData = (function() {

                    /**
                     * Properties of a TensorData.
                     * @memberof syft_proto.types.torch.v1
                     * @interface ITensorData
                     * @property {syft_proto.types.torch.v1.ISize|null} [shape] TensorData shape
                     * @property {string|null} [dtype] TensorData dtype
                     * @property {boolean|null} [is_quantized] TensorData is_quantized
                     * @property {number|null} [scale] TensorData scale
                     * @property {number|null} [zero_point] TensorData zero_point
                     * @property {Array.<number>|null} [contents_uint8] TensorData contents_uint8
                     * @property {Array.<number>|null} [contents_int8] TensorData contents_int8
                     * @property {Array.<number>|null} [contents_int16] TensorData contents_int16
                     * @property {Array.<number>|null} [contents_int32] TensorData contents_int32
                     * @property {Array.<number|Long>|null} [contents_int64] TensorData contents_int64
                     * @property {Array.<number>|null} [contents_float16] TensorData contents_float16
                     * @property {Array.<number>|null} [contents_float32] TensorData contents_float32
                     * @property {Array.<number>|null} [contents_float64] TensorData contents_float64
                     * @property {Array.<boolean>|null} [contents_bool] TensorData contents_bool
                     * @property {Array.<number>|null} [contents_qint8] TensorData contents_qint8
                     * @property {Array.<number>|null} [contents_quint8] TensorData contents_quint8
                     * @property {Array.<number>|null} [contents_qint32] TensorData contents_qint32
                     * @property {Array.<number>|null} [contents_bfloat16] TensorData contents_bfloat16
                     */

                    /**
                     * Constructs a new TensorData.
                     * @memberof syft_proto.types.torch.v1
                     * @classdesc Represents a TensorData.
                     * @implements ITensorData
                     * @constructor
                     * @param {syft_proto.types.torch.v1.ITensorData=} [properties] Properties to set
                     */
                    function TensorData(properties) {
                        this.contents_uint8 = [];
                        this.contents_int8 = [];
                        this.contents_int16 = [];
                        this.contents_int32 = [];
                        this.contents_int64 = [];
                        this.contents_float16 = [];
                        this.contents_float32 = [];
                        this.contents_float64 = [];
                        this.contents_bool = [];
                        this.contents_qint8 = [];
                        this.contents_quint8 = [];
                        this.contents_qint32 = [];
                        this.contents_bfloat16 = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * TensorData shape.
                     * @member {syft_proto.types.torch.v1.ISize|null|undefined} shape
                     * @memberof syft_proto.types.torch.v1.TensorData
                     * @instance
                     */
                    TensorData.prototype.shape = null;

                    /**
                     * TensorData dtype.
                     * @member {string} dtype
                     * @memberof syft_proto.types.torch.v1.TensorData
                     * @instance
                     */
                    TensorData.prototype.dtype = "";

                    /**
                     * TensorData is_quantized.
                     * @member {boolean} is_quantized
                     * @memberof syft_proto.types.torch.v1.TensorData
                     * @instance
                     */
                    TensorData.prototype.is_quantized = false;

                    /**
                     * TensorData scale.
                     * @member {number} scale
                     * @memberof syft_proto.types.torch.v1.TensorData
                     * @instance
                     */
                    TensorData.prototype.scale = 0;

                    /**
                     * TensorData zero_point.
                     * @member {number} zero_point
                     * @memberof syft_proto.types.torch.v1.TensorData
                     * @instance
                     */
                    TensorData.prototype.zero_point = 0;

                    /**
                     * TensorData contents_uint8.
                     * @member {Array.<number>} contents_uint8
                     * @memberof syft_proto.types.torch.v1.TensorData
                     * @instance
                     */
                    TensorData.prototype.contents_uint8 = $util.emptyArray;

                    /**
                     * TensorData contents_int8.
                     * @member {Array.<number>} contents_int8
                     * @memberof syft_proto.types.torch.v1.TensorData
                     * @instance
                     */
                    TensorData.prototype.contents_int8 = $util.emptyArray;

                    /**
                     * TensorData contents_int16.
                     * @member {Array.<number>} contents_int16
                     * @memberof syft_proto.types.torch.v1.TensorData
                     * @instance
                     */
                    TensorData.prototype.contents_int16 = $util.emptyArray;

                    /**
                     * TensorData contents_int32.
                     * @member {Array.<number>} contents_int32
                     * @memberof syft_proto.types.torch.v1.TensorData
                     * @instance
                     */
                    TensorData.prototype.contents_int32 = $util.emptyArray;

                    /**
                     * TensorData contents_int64.
                     * @member {Array.<number|Long>} contents_int64
                     * @memberof syft_proto.types.torch.v1.TensorData
                     * @instance
                     */
                    TensorData.prototype.contents_int64 = $util.emptyArray;

                    /**
                     * TensorData contents_float16.
                     * @member {Array.<number>} contents_float16
                     * @memberof syft_proto.types.torch.v1.TensorData
                     * @instance
                     */
                    TensorData.prototype.contents_float16 = $util.emptyArray;

                    /**
                     * TensorData contents_float32.
                     * @member {Array.<number>} contents_float32
                     * @memberof syft_proto.types.torch.v1.TensorData
                     * @instance
                     */
                    TensorData.prototype.contents_float32 = $util.emptyArray;

                    /**
                     * TensorData contents_float64.
                     * @member {Array.<number>} contents_float64
                     * @memberof syft_proto.types.torch.v1.TensorData
                     * @instance
                     */
                    TensorData.prototype.contents_float64 = $util.emptyArray;

                    /**
                     * TensorData contents_bool.
                     * @member {Array.<boolean>} contents_bool
                     * @memberof syft_proto.types.torch.v1.TensorData
                     * @instance
                     */
                    TensorData.prototype.contents_bool = $util.emptyArray;

                    /**
                     * TensorData contents_qint8.
                     * @member {Array.<number>} contents_qint8
                     * @memberof syft_proto.types.torch.v1.TensorData
                     * @instance
                     */
                    TensorData.prototype.contents_qint8 = $util.emptyArray;

                    /**
                     * TensorData contents_quint8.
                     * @member {Array.<number>} contents_quint8
                     * @memberof syft_proto.types.torch.v1.TensorData
                     * @instance
                     */
                    TensorData.prototype.contents_quint8 = $util.emptyArray;

                    /**
                     * TensorData contents_qint32.
                     * @member {Array.<number>} contents_qint32
                     * @memberof syft_proto.types.torch.v1.TensorData
                     * @instance
                     */
                    TensorData.prototype.contents_qint32 = $util.emptyArray;

                    /**
                     * TensorData contents_bfloat16.
                     * @member {Array.<number>} contents_bfloat16
                     * @memberof syft_proto.types.torch.v1.TensorData
                     * @instance
                     */
                    TensorData.prototype.contents_bfloat16 = $util.emptyArray;

                    /**
                     * Creates a new TensorData instance using the specified properties.
                     * @function create
                     * @memberof syft_proto.types.torch.v1.TensorData
                     * @static
                     * @param {syft_proto.types.torch.v1.ITensorData=} [properties] Properties to set
                     * @returns {syft_proto.types.torch.v1.TensorData} TensorData instance
                     */
                    TensorData.create = function create(properties) {
                        return new TensorData(properties);
                    };

                    /**
                     * Encodes the specified TensorData message. Does not implicitly {@link syft_proto.types.torch.v1.TensorData.verify|verify} messages.
                     * @function encode
                     * @memberof syft_proto.types.torch.v1.TensorData
                     * @static
                     * @param {syft_proto.types.torch.v1.ITensorData} message TensorData message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    TensorData.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.shape != null && message.hasOwnProperty("shape"))
                            $root.syft_proto.types.torch.v1.Size.encode(message.shape, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        if (message.dtype != null && message.hasOwnProperty("dtype"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.dtype);
                        if (message.is_quantized != null && message.hasOwnProperty("is_quantized"))
                            writer.uint32(/* id 3, wireType 0 =*/24).bool(message.is_quantized);
                        if (message.scale != null && message.hasOwnProperty("scale"))
                            writer.uint32(/* id 4, wireType 5 =*/37).float(message.scale);
                        if (message.zero_point != null && message.hasOwnProperty("zero_point"))
                            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.zero_point);
                        if (message.contents_uint8 != null && message.contents_uint8.length) {
                            writer.uint32(/* id 16, wireType 2 =*/130).fork();
                            for (var i = 0; i < message.contents_uint8.length; ++i)
                                writer.uint32(message.contents_uint8[i]);
                            writer.ldelim();
                        }
                        if (message.contents_int8 != null && message.contents_int8.length) {
                            writer.uint32(/* id 17, wireType 2 =*/138).fork();
                            for (var i = 0; i < message.contents_int8.length; ++i)
                                writer.int32(message.contents_int8[i]);
                            writer.ldelim();
                        }
                        if (message.contents_int16 != null && message.contents_int16.length) {
                            writer.uint32(/* id 18, wireType 2 =*/146).fork();
                            for (var i = 0; i < message.contents_int16.length; ++i)
                                writer.int32(message.contents_int16[i]);
                            writer.ldelim();
                        }
                        if (message.contents_int32 != null && message.contents_int32.length) {
                            writer.uint32(/* id 19, wireType 2 =*/154).fork();
                            for (var i = 0; i < message.contents_int32.length; ++i)
                                writer.int32(message.contents_int32[i]);
                            writer.ldelim();
                        }
                        if (message.contents_int64 != null && message.contents_int64.length) {
                            writer.uint32(/* id 20, wireType 2 =*/162).fork();
                            for (var i = 0; i < message.contents_int64.length; ++i)
                                writer.int64(message.contents_int64[i]);
                            writer.ldelim();
                        }
                        if (message.contents_float16 != null && message.contents_float16.length) {
                            writer.uint32(/* id 21, wireType 2 =*/170).fork();
                            for (var i = 0; i < message.contents_float16.length; ++i)
                                writer.float(message.contents_float16[i]);
                            writer.ldelim();
                        }
                        if (message.contents_float32 != null && message.contents_float32.length) {
                            writer.uint32(/* id 22, wireType 2 =*/178).fork();
                            for (var i = 0; i < message.contents_float32.length; ++i)
                                writer.float(message.contents_float32[i]);
                            writer.ldelim();
                        }
                        if (message.contents_float64 != null && message.contents_float64.length) {
                            writer.uint32(/* id 23, wireType 2 =*/186).fork();
                            for (var i = 0; i < message.contents_float64.length; ++i)
                                writer.double(message.contents_float64[i]);
                            writer.ldelim();
                        }
                        if (message.contents_bool != null && message.contents_bool.length) {
                            writer.uint32(/* id 24, wireType 2 =*/194).fork();
                            for (var i = 0; i < message.contents_bool.length; ++i)
                                writer.bool(message.contents_bool[i]);
                            writer.ldelim();
                        }
                        if (message.contents_qint8 != null && message.contents_qint8.length) {
                            writer.uint32(/* id 25, wireType 2 =*/202).fork();
                            for (var i = 0; i < message.contents_qint8.length; ++i)
                                writer.sint32(message.contents_qint8[i]);
                            writer.ldelim();
                        }
                        if (message.contents_quint8 != null && message.contents_quint8.length) {
                            writer.uint32(/* id 26, wireType 2 =*/210).fork();
                            for (var i = 0; i < message.contents_quint8.length; ++i)
                                writer.uint32(message.contents_quint8[i]);
                            writer.ldelim();
                        }
                        if (message.contents_qint32 != null && message.contents_qint32.length) {
                            writer.uint32(/* id 27, wireType 2 =*/218).fork();
                            for (var i = 0; i < message.contents_qint32.length; ++i)
                                writer.sint32(message.contents_qint32[i]);
                            writer.ldelim();
                        }
                        if (message.contents_bfloat16 != null && message.contents_bfloat16.length) {
                            writer.uint32(/* id 28, wireType 2 =*/226).fork();
                            for (var i = 0; i < message.contents_bfloat16.length; ++i)
                                writer.float(message.contents_bfloat16[i]);
                            writer.ldelim();
                        }
                        return writer;
                    };

                    /**
                     * Encodes the specified TensorData message, length delimited. Does not implicitly {@link syft_proto.types.torch.v1.TensorData.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof syft_proto.types.torch.v1.TensorData
                     * @static
                     * @param {syft_proto.types.torch.v1.ITensorData} message TensorData message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    TensorData.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a TensorData message from the specified reader or buffer.
                     * @function decode
                     * @memberof syft_proto.types.torch.v1.TensorData
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {syft_proto.types.torch.v1.TensorData} TensorData
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    TensorData.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.syft_proto.types.torch.v1.TensorData();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.shape = $root.syft_proto.types.torch.v1.Size.decode(reader, reader.uint32());
                                break;
                            case 2:
                                message.dtype = reader.string();
                                break;
                            case 3:
                                message.is_quantized = reader.bool();
                                break;
                            case 4:
                                message.scale = reader.float();
                                break;
                            case 5:
                                message.zero_point = reader.int32();
                                break;
                            case 16:
                                if (!(message.contents_uint8 && message.contents_uint8.length))
                                    message.contents_uint8 = [];
                                if ((tag & 7) === 2) {
                                    var end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.contents_uint8.push(reader.uint32());
                                } else
                                    message.contents_uint8.push(reader.uint32());
                                break;
                            case 17:
                                if (!(message.contents_int8 && message.contents_int8.length))
                                    message.contents_int8 = [];
                                if ((tag & 7) === 2) {
                                    var end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.contents_int8.push(reader.int32());
                                } else
                                    message.contents_int8.push(reader.int32());
                                break;
                            case 18:
                                if (!(message.contents_int16 && message.contents_int16.length))
                                    message.contents_int16 = [];
                                if ((tag & 7) === 2) {
                                    var end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.contents_int16.push(reader.int32());
                                } else
                                    message.contents_int16.push(reader.int32());
                                break;
                            case 19:
                                if (!(message.contents_int32 && message.contents_int32.length))
                                    message.contents_int32 = [];
                                if ((tag & 7) === 2) {
                                    var end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.contents_int32.push(reader.int32());
                                } else
                                    message.contents_int32.push(reader.int32());
                                break;
                            case 20:
                                if (!(message.contents_int64 && message.contents_int64.length))
                                    message.contents_int64 = [];
                                if ((tag & 7) === 2) {
                                    var end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.contents_int64.push(reader.int64());
                                } else
                                    message.contents_int64.push(reader.int64());
                                break;
                            case 21:
                                if (!(message.contents_float16 && message.contents_float16.length))
                                    message.contents_float16 = [];
                                if ((tag & 7) === 2) {
                                    var end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.contents_float16.push(reader.float());
                                } else
                                    message.contents_float16.push(reader.float());
                                break;
                            case 22:
                                if (!(message.contents_float32 && message.contents_float32.length))
                                    message.contents_float32 = [];
                                if ((tag & 7) === 2) {
                                    var end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.contents_float32.push(reader.float());
                                } else
                                    message.contents_float32.push(reader.float());
                                break;
                            case 23:
                                if (!(message.contents_float64 && message.contents_float64.length))
                                    message.contents_float64 = [];
                                if ((tag & 7) === 2) {
                                    var end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.contents_float64.push(reader.double());
                                } else
                                    message.contents_float64.push(reader.double());
                                break;
                            case 24:
                                if (!(message.contents_bool && message.contents_bool.length))
                                    message.contents_bool = [];
                                if ((tag & 7) === 2) {
                                    var end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.contents_bool.push(reader.bool());
                                } else
                                    message.contents_bool.push(reader.bool());
                                break;
                            case 25:
                                if (!(message.contents_qint8 && message.contents_qint8.length))
                                    message.contents_qint8 = [];
                                if ((tag & 7) === 2) {
                                    var end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.contents_qint8.push(reader.sint32());
                                } else
                                    message.contents_qint8.push(reader.sint32());
                                break;
                            case 26:
                                if (!(message.contents_quint8 && message.contents_quint8.length))
                                    message.contents_quint8 = [];
                                if ((tag & 7) === 2) {
                                    var end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.contents_quint8.push(reader.uint32());
                                } else
                                    message.contents_quint8.push(reader.uint32());
                                break;
                            case 27:
                                if (!(message.contents_qint32 && message.contents_qint32.length))
                                    message.contents_qint32 = [];
                                if ((tag & 7) === 2) {
                                    var end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.contents_qint32.push(reader.sint32());
                                } else
                                    message.contents_qint32.push(reader.sint32());
                                break;
                            case 28:
                                if (!(message.contents_bfloat16 && message.contents_bfloat16.length))
                                    message.contents_bfloat16 = [];
                                if ((tag & 7) === 2) {
                                    var end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.contents_bfloat16.push(reader.float());
                                } else
                                    message.contents_bfloat16.push(reader.float());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a TensorData message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof syft_proto.types.torch.v1.TensorData
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {syft_proto.types.torch.v1.TensorData} TensorData
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    TensorData.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a TensorData message.
                     * @function verify
                     * @memberof syft_proto.types.torch.v1.TensorData
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    TensorData.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.shape != null && message.hasOwnProperty("shape")) {
                            var error = $root.syft_proto.types.torch.v1.Size.verify(message.shape);
                            if (error)
                                return "shape." + error;
                        }
                        if (message.dtype != null && message.hasOwnProperty("dtype"))
                            if (!$util.isString(message.dtype))
                                return "dtype: string expected";
                        if (message.is_quantized != null && message.hasOwnProperty("is_quantized"))
                            if (typeof message.is_quantized !== "boolean")
                                return "is_quantized: boolean expected";
                        if (message.scale != null && message.hasOwnProperty("scale"))
                            if (typeof message.scale !== "number")
                                return "scale: number expected";
                        if (message.zero_point != null && message.hasOwnProperty("zero_point"))
                            if (!$util.isInteger(message.zero_point))
                                return "zero_point: integer expected";
                        if (message.contents_uint8 != null && message.hasOwnProperty("contents_uint8")) {
                            if (!Array.isArray(message.contents_uint8))
                                return "contents_uint8: array expected";
                            for (var i = 0; i < message.contents_uint8.length; ++i)
                                if (!$util.isInteger(message.contents_uint8[i]))
                                    return "contents_uint8: integer[] expected";
                        }
                        if (message.contents_int8 != null && message.hasOwnProperty("contents_int8")) {
                            if (!Array.isArray(message.contents_int8))
                                return "contents_int8: array expected";
                            for (var i = 0; i < message.contents_int8.length; ++i)
                                if (!$util.isInteger(message.contents_int8[i]))
                                    return "contents_int8: integer[] expected";
                        }
                        if (message.contents_int16 != null && message.hasOwnProperty("contents_int16")) {
                            if (!Array.isArray(message.contents_int16))
                                return "contents_int16: array expected";
                            for (var i = 0; i < message.contents_int16.length; ++i)
                                if (!$util.isInteger(message.contents_int16[i]))
                                    return "contents_int16: integer[] expected";
                        }
                        if (message.contents_int32 != null && message.hasOwnProperty("contents_int32")) {
                            if (!Array.isArray(message.contents_int32))
                                return "contents_int32: array expected";
                            for (var i = 0; i < message.contents_int32.length; ++i)
                                if (!$util.isInteger(message.contents_int32[i]))
                                    return "contents_int32: integer[] expected";
                        }
                        if (message.contents_int64 != null && message.hasOwnProperty("contents_int64")) {
                            if (!Array.isArray(message.contents_int64))
                                return "contents_int64: array expected";
                            for (var i = 0; i < message.contents_int64.length; ++i)
                                if (!$util.isInteger(message.contents_int64[i]) && !(message.contents_int64[i] && $util.isInteger(message.contents_int64[i].low) && $util.isInteger(message.contents_int64[i].high)))
                                    return "contents_int64: integer|Long[] expected";
                        }
                        if (message.contents_float16 != null && message.hasOwnProperty("contents_float16")) {
                            if (!Array.isArray(message.contents_float16))
                                return "contents_float16: array expected";
                            for (var i = 0; i < message.contents_float16.length; ++i)
                                if (typeof message.contents_float16[i] !== "number")
                                    return "contents_float16: number[] expected";
                        }
                        if (message.contents_float32 != null && message.hasOwnProperty("contents_float32")) {
                            if (!Array.isArray(message.contents_float32))
                                return "contents_float32: array expected";
                            for (var i = 0; i < message.contents_float32.length; ++i)
                                if (typeof message.contents_float32[i] !== "number")
                                    return "contents_float32: number[] expected";
                        }
                        if (message.contents_float64 != null && message.hasOwnProperty("contents_float64")) {
                            if (!Array.isArray(message.contents_float64))
                                return "contents_float64: array expected";
                            for (var i = 0; i < message.contents_float64.length; ++i)
                                if (typeof message.contents_float64[i] !== "number")
                                    return "contents_float64: number[] expected";
                        }
                        if (message.contents_bool != null && message.hasOwnProperty("contents_bool")) {
                            if (!Array.isArray(message.contents_bool))
                                return "contents_bool: array expected";
                            for (var i = 0; i < message.contents_bool.length; ++i)
                                if (typeof message.contents_bool[i] !== "boolean")
                                    return "contents_bool: boolean[] expected";
                        }
                        if (message.contents_qint8 != null && message.hasOwnProperty("contents_qint8")) {
                            if (!Array.isArray(message.contents_qint8))
                                return "contents_qint8: array expected";
                            for (var i = 0; i < message.contents_qint8.length; ++i)
                                if (!$util.isInteger(message.contents_qint8[i]))
                                    return "contents_qint8: integer[] expected";
                        }
                        if (message.contents_quint8 != null && message.hasOwnProperty("contents_quint8")) {
                            if (!Array.isArray(message.contents_quint8))
                                return "contents_quint8: array expected";
                            for (var i = 0; i < message.contents_quint8.length; ++i)
                                if (!$util.isInteger(message.contents_quint8[i]))
                                    return "contents_quint8: integer[] expected";
                        }
                        if (message.contents_qint32 != null && message.hasOwnProperty("contents_qint32")) {
                            if (!Array.isArray(message.contents_qint32))
                                return "contents_qint32: array expected";
                            for (var i = 0; i < message.contents_qint32.length; ++i)
                                if (!$util.isInteger(message.contents_qint32[i]))
                                    return "contents_qint32: integer[] expected";
                        }
                        if (message.contents_bfloat16 != null && message.hasOwnProperty("contents_bfloat16")) {
                            if (!Array.isArray(message.contents_bfloat16))
                                return "contents_bfloat16: array expected";
                            for (var i = 0; i < message.contents_bfloat16.length; ++i)
                                if (typeof message.contents_bfloat16[i] !== "number")
                                    return "contents_bfloat16: number[] expected";
                        }
                        return null;
                    };

                    /**
                     * Creates a TensorData message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof syft_proto.types.torch.v1.TensorData
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {syft_proto.types.torch.v1.TensorData} TensorData
                     */
                    TensorData.fromObject = function fromObject(object) {
                        if (object instanceof $root.syft_proto.types.torch.v1.TensorData)
                            return object;
                        var message = new $root.syft_proto.types.torch.v1.TensorData();
                        if (object.shape != null) {
                            if (typeof object.shape !== "object")
                                throw TypeError(".syft_proto.types.torch.v1.TensorData.shape: object expected");
                            message.shape = $root.syft_proto.types.torch.v1.Size.fromObject(object.shape);
                        }
                        if (object.dtype != null)
                            message.dtype = String(object.dtype);
                        if (object.is_quantized != null)
                            message.is_quantized = Boolean(object.is_quantized);
                        if (object.scale != null)
                            message.scale = Number(object.scale);
                        if (object.zero_point != null)
                            message.zero_point = object.zero_point | 0;
                        if (object.contents_uint8) {
                            if (!Array.isArray(object.contents_uint8))
                                throw TypeError(".syft_proto.types.torch.v1.TensorData.contents_uint8: array expected");
                            message.contents_uint8 = [];
                            for (var i = 0; i < object.contents_uint8.length; ++i)
                                message.contents_uint8[i] = object.contents_uint8[i] >>> 0;
                        }
                        if (object.contents_int8) {
                            if (!Array.isArray(object.contents_int8))
                                throw TypeError(".syft_proto.types.torch.v1.TensorData.contents_int8: array expected");
                            message.contents_int8 = [];
                            for (var i = 0; i < object.contents_int8.length; ++i)
                                message.contents_int8[i] = object.contents_int8[i] | 0;
                        }
                        if (object.contents_int16) {
                            if (!Array.isArray(object.contents_int16))
                                throw TypeError(".syft_proto.types.torch.v1.TensorData.contents_int16: array expected");
                            message.contents_int16 = [];
                            for (var i = 0; i < object.contents_int16.length; ++i)
                                message.contents_int16[i] = object.contents_int16[i] | 0;
                        }
                        if (object.contents_int32) {
                            if (!Array.isArray(object.contents_int32))
                                throw TypeError(".syft_proto.types.torch.v1.TensorData.contents_int32: array expected");
                            message.contents_int32 = [];
                            for (var i = 0; i < object.contents_int32.length; ++i)
                                message.contents_int32[i] = object.contents_int32[i] | 0;
                        }
                        if (object.contents_int64) {
                            if (!Array.isArray(object.contents_int64))
                                throw TypeError(".syft_proto.types.torch.v1.TensorData.contents_int64: array expected");
                            message.contents_int64 = [];
                            for (var i = 0; i < object.contents_int64.length; ++i)
                                if ($util.Long)
                                    (message.contents_int64[i] = $util.Long.fromValue(object.contents_int64[i])).unsigned = false;
                                else if (typeof object.contents_int64[i] === "string")
                                    message.contents_int64[i] = parseInt(object.contents_int64[i], 10);
                                else if (typeof object.contents_int64[i] === "number")
                                    message.contents_int64[i] = object.contents_int64[i];
                                else if (typeof object.contents_int64[i] === "object")
                                    message.contents_int64[i] = new $util.LongBits(object.contents_int64[i].low >>> 0, object.contents_int64[i].high >>> 0).toNumber();
                        }
                        if (object.contents_float16) {
                            if (!Array.isArray(object.contents_float16))
                                throw TypeError(".syft_proto.types.torch.v1.TensorData.contents_float16: array expected");
                            message.contents_float16 = [];
                            for (var i = 0; i < object.contents_float16.length; ++i)
                                message.contents_float16[i] = Number(object.contents_float16[i]);
                        }
                        if (object.contents_float32) {
                            if (!Array.isArray(object.contents_float32))
                                throw TypeError(".syft_proto.types.torch.v1.TensorData.contents_float32: array expected");
                            message.contents_float32 = [];
                            for (var i = 0; i < object.contents_float32.length; ++i)
                                message.contents_float32[i] = Number(object.contents_float32[i]);
                        }
                        if (object.contents_float64) {
                            if (!Array.isArray(object.contents_float64))
                                throw TypeError(".syft_proto.types.torch.v1.TensorData.contents_float64: array expected");
                            message.contents_float64 = [];
                            for (var i = 0; i < object.contents_float64.length; ++i)
                                message.contents_float64[i] = Number(object.contents_float64[i]);
                        }
                        if (object.contents_bool) {
                            if (!Array.isArray(object.contents_bool))
                                throw TypeError(".syft_proto.types.torch.v1.TensorData.contents_bool: array expected");
                            message.contents_bool = [];
                            for (var i = 0; i < object.contents_bool.length; ++i)
                                message.contents_bool[i] = Boolean(object.contents_bool[i]);
                        }
                        if (object.contents_qint8) {
                            if (!Array.isArray(object.contents_qint8))
                                throw TypeError(".syft_proto.types.torch.v1.TensorData.contents_qint8: array expected");
                            message.contents_qint8 = [];
                            for (var i = 0; i < object.contents_qint8.length; ++i)
                                message.contents_qint8[i] = object.contents_qint8[i] | 0;
                        }
                        if (object.contents_quint8) {
                            if (!Array.isArray(object.contents_quint8))
                                throw TypeError(".syft_proto.types.torch.v1.TensorData.contents_quint8: array expected");
                            message.contents_quint8 = [];
                            for (var i = 0; i < object.contents_quint8.length; ++i)
                                message.contents_quint8[i] = object.contents_quint8[i] >>> 0;
                        }
                        if (object.contents_qint32) {
                            if (!Array.isArray(object.contents_qint32))
                                throw TypeError(".syft_proto.types.torch.v1.TensorData.contents_qint32: array expected");
                            message.contents_qint32 = [];
                            for (var i = 0; i < object.contents_qint32.length; ++i)
                                message.contents_qint32[i] = object.contents_qint32[i] | 0;
                        }
                        if (object.contents_bfloat16) {
                            if (!Array.isArray(object.contents_bfloat16))
                                throw TypeError(".syft_proto.types.torch.v1.TensorData.contents_bfloat16: array expected");
                            message.contents_bfloat16 = [];
                            for (var i = 0; i < object.contents_bfloat16.length; ++i)
                                message.contents_bfloat16[i] = Number(object.contents_bfloat16[i]);
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a TensorData message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof syft_proto.types.torch.v1.TensorData
                     * @static
                     * @param {syft_proto.types.torch.v1.TensorData} message TensorData
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    TensorData.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults) {
                            object.contents_uint8 = [];
                            object.contents_int8 = [];
                            object.contents_int16 = [];
                            object.contents_int32 = [];
                            object.contents_int64 = [];
                            object.contents_float16 = [];
                            object.contents_float32 = [];
                            object.contents_float64 = [];
                            object.contents_bool = [];
                            object.contents_qint8 = [];
                            object.contents_quint8 = [];
                            object.contents_qint32 = [];
                            object.contents_bfloat16 = [];
                        }
                        if (options.defaults) {
                            object.shape = null;
                            object.dtype = "";
                            object.is_quantized = false;
                            object.scale = 0;
                            object.zero_point = 0;
                        }
                        if (message.shape != null && message.hasOwnProperty("shape"))
                            object.shape = $root.syft_proto.types.torch.v1.Size.toObject(message.shape, options);
                        if (message.dtype != null && message.hasOwnProperty("dtype"))
                            object.dtype = message.dtype;
                        if (message.is_quantized != null && message.hasOwnProperty("is_quantized"))
                            object.is_quantized = message.is_quantized;
                        if (message.scale != null && message.hasOwnProperty("scale"))
                            object.scale = options.json && !isFinite(message.scale) ? String(message.scale) : message.scale;
                        if (message.zero_point != null && message.hasOwnProperty("zero_point"))
                            object.zero_point = message.zero_point;
                        if (message.contents_uint8 && message.contents_uint8.length) {
                            object.contents_uint8 = [];
                            for (var j = 0; j < message.contents_uint8.length; ++j)
                                object.contents_uint8[j] = message.contents_uint8[j];
                        }
                        if (message.contents_int8 && message.contents_int8.length) {
                            object.contents_int8 = [];
                            for (var j = 0; j < message.contents_int8.length; ++j)
                                object.contents_int8[j] = message.contents_int8[j];
                        }
                        if (message.contents_int16 && message.contents_int16.length) {
                            object.contents_int16 = [];
                            for (var j = 0; j < message.contents_int16.length; ++j)
                                object.contents_int16[j] = message.contents_int16[j];
                        }
                        if (message.contents_int32 && message.contents_int32.length) {
                            object.contents_int32 = [];
                            for (var j = 0; j < message.contents_int32.length; ++j)
                                object.contents_int32[j] = message.contents_int32[j];
                        }
                        if (message.contents_int64 && message.contents_int64.length) {
                            object.contents_int64 = [];
                            for (var j = 0; j < message.contents_int64.length; ++j)
                                if (typeof message.contents_int64[j] === "number")
                                    object.contents_int64[j] = options.longs === String ? String(message.contents_int64[j]) : message.contents_int64[j];
                                else
                                    object.contents_int64[j] = options.longs === String ? $util.Long.prototype.toString.call(message.contents_int64[j]) : options.longs === Number ? new $util.LongBits(message.contents_int64[j].low >>> 0, message.contents_int64[j].high >>> 0).toNumber() : message.contents_int64[j];
                        }
                        if (message.contents_float16 && message.contents_float16.length) {
                            object.contents_float16 = [];
                            for (var j = 0; j < message.contents_float16.length; ++j)
                                object.contents_float16[j] = options.json && !isFinite(message.contents_float16[j]) ? String(message.contents_float16[j]) : message.contents_float16[j];
                        }
                        if (message.contents_float32 && message.contents_float32.length) {
                            object.contents_float32 = [];
                            for (var j = 0; j < message.contents_float32.length; ++j)
                                object.contents_float32[j] = options.json && !isFinite(message.contents_float32[j]) ? String(message.contents_float32[j]) : message.contents_float32[j];
                        }
                        if (message.contents_float64 && message.contents_float64.length) {
                            object.contents_float64 = [];
                            for (var j = 0; j < message.contents_float64.length; ++j)
                                object.contents_float64[j] = options.json && !isFinite(message.contents_float64[j]) ? String(message.contents_float64[j]) : message.contents_float64[j];
                        }
                        if (message.contents_bool && message.contents_bool.length) {
                            object.contents_bool = [];
                            for (var j = 0; j < message.contents_bool.length; ++j)
                                object.contents_bool[j] = message.contents_bool[j];
                        }
                        if (message.contents_qint8 && message.contents_qint8.length) {
                            object.contents_qint8 = [];
                            for (var j = 0; j < message.contents_qint8.length; ++j)
                                object.contents_qint8[j] = message.contents_qint8[j];
                        }
                        if (message.contents_quint8 && message.contents_quint8.length) {
                            object.contents_quint8 = [];
                            for (var j = 0; j < message.contents_quint8.length; ++j)
                                object.contents_quint8[j] = message.contents_quint8[j];
                        }
                        if (message.contents_qint32 && message.contents_qint32.length) {
                            object.contents_qint32 = [];
                            for (var j = 0; j < message.contents_qint32.length; ++j)
                                object.contents_qint32[j] = message.contents_qint32[j];
                        }
                        if (message.contents_bfloat16 && message.contents_bfloat16.length) {
                            object.contents_bfloat16 = [];
                            for (var j = 0; j < message.contents_bfloat16.length; ++j)
                                object.contents_bfloat16[j] = options.json && !isFinite(message.contents_bfloat16[j]) ? String(message.contents_bfloat16[j]) : message.contents_bfloat16[j];
                        }
                        return object;
                    };

                    /**
                     * Converts this TensorData to JSON.
                     * @function toJSON
                     * @memberof syft_proto.types.torch.v1.TensorData
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    TensorData.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return TensorData;
                })();

                v1.Size = (function() {

                    /**
                     * Properties of a Size.
                     * @memberof syft_proto.types.torch.v1
                     * @interface ISize
                     * @property {Array.<number>|null} [dims] Size dims
                     */

                    /**
                     * Constructs a new Size.
                     * @memberof syft_proto.types.torch.v1
                     * @classdesc Represents a Size.
                     * @implements ISize
                     * @constructor
                     * @param {syft_proto.types.torch.v1.ISize=} [properties] Properties to set
                     */
                    function Size(properties) {
                        this.dims = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Size dims.
                     * @member {Array.<number>} dims
                     * @memberof syft_proto.types.torch.v1.Size
                     * @instance
                     */
                    Size.prototype.dims = $util.emptyArray;

                    /**
                     * Creates a new Size instance using the specified properties.
                     * @function create
                     * @memberof syft_proto.types.torch.v1.Size
                     * @static
                     * @param {syft_proto.types.torch.v1.ISize=} [properties] Properties to set
                     * @returns {syft_proto.types.torch.v1.Size} Size instance
                     */
                    Size.create = function create(properties) {
                        return new Size(properties);
                    };

                    /**
                     * Encodes the specified Size message. Does not implicitly {@link syft_proto.types.torch.v1.Size.verify|verify} messages.
                     * @function encode
                     * @memberof syft_proto.types.torch.v1.Size
                     * @static
                     * @param {syft_proto.types.torch.v1.ISize} message Size message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Size.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.dims != null && message.dims.length) {
                            writer.uint32(/* id 1, wireType 2 =*/10).fork();
                            for (var i = 0; i < message.dims.length; ++i)
                                writer.int32(message.dims[i]);
                            writer.ldelim();
                        }
                        return writer;
                    };

                    /**
                     * Encodes the specified Size message, length delimited. Does not implicitly {@link syft_proto.types.torch.v1.Size.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof syft_proto.types.torch.v1.Size
                     * @static
                     * @param {syft_proto.types.torch.v1.ISize} message Size message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Size.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a Size message from the specified reader or buffer.
                     * @function decode
                     * @memberof syft_proto.types.torch.v1.Size
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {syft_proto.types.torch.v1.Size} Size
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Size.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.syft_proto.types.torch.v1.Size();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                if (!(message.dims && message.dims.length))
                                    message.dims = [];
                                if ((tag & 7) === 2) {
                                    var end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.dims.push(reader.int32());
                                } else
                                    message.dims.push(reader.int32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a Size message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof syft_proto.types.torch.v1.Size
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {syft_proto.types.torch.v1.Size} Size
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Size.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a Size message.
                     * @function verify
                     * @memberof syft_proto.types.torch.v1.Size
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Size.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.dims != null && message.hasOwnProperty("dims")) {
                            if (!Array.isArray(message.dims))
                                return "dims: array expected";
                            for (var i = 0; i < message.dims.length; ++i)
                                if (!$util.isInteger(message.dims[i]))
                                    return "dims: integer[] expected";
                        }
                        return null;
                    };

                    /**
                     * Creates a Size message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof syft_proto.types.torch.v1.Size
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {syft_proto.types.torch.v1.Size} Size
                     */
                    Size.fromObject = function fromObject(object) {
                        if (object instanceof $root.syft_proto.types.torch.v1.Size)
                            return object;
                        var message = new $root.syft_proto.types.torch.v1.Size();
                        if (object.dims) {
                            if (!Array.isArray(object.dims))
                                throw TypeError(".syft_proto.types.torch.v1.Size.dims: array expected");
                            message.dims = [];
                            for (var i = 0; i < object.dims.length; ++i)
                                message.dims[i] = object.dims[i] | 0;
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a Size message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof syft_proto.types.torch.v1.Size
                     * @static
                     * @param {syft_proto.types.torch.v1.Size} message Size
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Size.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.dims = [];
                        if (message.dims && message.dims.length) {
                            object.dims = [];
                            for (var j = 0; j < message.dims.length; ++j)
                                object.dims[j] = message.dims[j];
                        }
                        return object;
                    };

                    /**
                     * Converts this Size to JSON.
                     * @function toJSON
                     * @memberof syft_proto.types.torch.v1.Size
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Size.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return Size;
                })();

                v1.Parameter = (function() {

                    /**
                     * Properties of a Parameter.
                     * @memberof syft_proto.types.torch.v1
                     * @interface IParameter
                     * @property {syft_proto.types.syft.v1.IId|null} [id] Parameter id
                     * @property {syft_proto.types.torch.v1.ITorchTensor|null} [tensor] Parameter tensor
                     * @property {boolean|null} [requires_grad] Parameter requires_grad
                     * @property {syft_proto.types.torch.v1.ITorchTensor|null} [grad] Parameter grad
                     */

                    /**
                     * Constructs a new Parameter.
                     * @memberof syft_proto.types.torch.v1
                     * @classdesc Represents a Parameter.
                     * @implements IParameter
                     * @constructor
                     * @param {syft_proto.types.torch.v1.IParameter=} [properties] Properties to set
                     */
                    function Parameter(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Parameter id.
                     * @member {syft_proto.types.syft.v1.IId|null|undefined} id
                     * @memberof syft_proto.types.torch.v1.Parameter
                     * @instance
                     */
                    Parameter.prototype.id = null;

                    /**
                     * Parameter tensor.
                     * @member {syft_proto.types.torch.v1.ITorchTensor|null|undefined} tensor
                     * @memberof syft_proto.types.torch.v1.Parameter
                     * @instance
                     */
                    Parameter.prototype.tensor = null;

                    /**
                     * Parameter requires_grad.
                     * @member {boolean} requires_grad
                     * @memberof syft_proto.types.torch.v1.Parameter
                     * @instance
                     */
                    Parameter.prototype.requires_grad = false;

                    /**
                     * Parameter grad.
                     * @member {syft_proto.types.torch.v1.ITorchTensor|null|undefined} grad
                     * @memberof syft_proto.types.torch.v1.Parameter
                     * @instance
                     */
                    Parameter.prototype.grad = null;

                    /**
                     * Creates a new Parameter instance using the specified properties.
                     * @function create
                     * @memberof syft_proto.types.torch.v1.Parameter
                     * @static
                     * @param {syft_proto.types.torch.v1.IParameter=} [properties] Properties to set
                     * @returns {syft_proto.types.torch.v1.Parameter} Parameter instance
                     */
                    Parameter.create = function create(properties) {
                        return new Parameter(properties);
                    };

                    /**
                     * Encodes the specified Parameter message. Does not implicitly {@link syft_proto.types.torch.v1.Parameter.verify|verify} messages.
                     * @function encode
                     * @memberof syft_proto.types.torch.v1.Parameter
                     * @static
                     * @param {syft_proto.types.torch.v1.IParameter} message Parameter message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Parameter.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.id != null && message.hasOwnProperty("id"))
                            $root.syft_proto.types.syft.v1.Id.encode(message.id, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        if (message.tensor != null && message.hasOwnProperty("tensor"))
                            $root.syft_proto.types.torch.v1.TorchTensor.encode(message.tensor, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                        if (message.requires_grad != null && message.hasOwnProperty("requires_grad"))
                            writer.uint32(/* id 3, wireType 0 =*/24).bool(message.requires_grad);
                        if (message.grad != null && message.hasOwnProperty("grad"))
                            $root.syft_proto.types.torch.v1.TorchTensor.encode(message.grad, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified Parameter message, length delimited. Does not implicitly {@link syft_proto.types.torch.v1.Parameter.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof syft_proto.types.torch.v1.Parameter
                     * @static
                     * @param {syft_proto.types.torch.v1.IParameter} message Parameter message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Parameter.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a Parameter message from the specified reader or buffer.
                     * @function decode
                     * @memberof syft_proto.types.torch.v1.Parameter
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {syft_proto.types.torch.v1.Parameter} Parameter
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Parameter.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.syft_proto.types.torch.v1.Parameter();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.id = $root.syft_proto.types.syft.v1.Id.decode(reader, reader.uint32());
                                break;
                            case 2:
                                message.tensor = $root.syft_proto.types.torch.v1.TorchTensor.decode(reader, reader.uint32());
                                break;
                            case 3:
                                message.requires_grad = reader.bool();
                                break;
                            case 4:
                                message.grad = $root.syft_proto.types.torch.v1.TorchTensor.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a Parameter message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof syft_proto.types.torch.v1.Parameter
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {syft_proto.types.torch.v1.Parameter} Parameter
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Parameter.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a Parameter message.
                     * @function verify
                     * @memberof syft_proto.types.torch.v1.Parameter
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Parameter.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.id != null && message.hasOwnProperty("id")) {
                            var error = $root.syft_proto.types.syft.v1.Id.verify(message.id);
                            if (error)
                                return "id." + error;
                        }
                        if (message.tensor != null && message.hasOwnProperty("tensor")) {
                            var error = $root.syft_proto.types.torch.v1.TorchTensor.verify(message.tensor);
                            if (error)
                                return "tensor." + error;
                        }
                        if (message.requires_grad != null && message.hasOwnProperty("requires_grad"))
                            if (typeof message.requires_grad !== "boolean")
                                return "requires_grad: boolean expected";
                        if (message.grad != null && message.hasOwnProperty("grad")) {
                            var error = $root.syft_proto.types.torch.v1.TorchTensor.verify(message.grad);
                            if (error)
                                return "grad." + error;
                        }
                        return null;
                    };

                    /**
                     * Creates a Parameter message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof syft_proto.types.torch.v1.Parameter
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {syft_proto.types.torch.v1.Parameter} Parameter
                     */
                    Parameter.fromObject = function fromObject(object) {
                        if (object instanceof $root.syft_proto.types.torch.v1.Parameter)
                            return object;
                        var message = new $root.syft_proto.types.torch.v1.Parameter();
                        if (object.id != null) {
                            if (typeof object.id !== "object")
                                throw TypeError(".syft_proto.types.torch.v1.Parameter.id: object expected");
                            message.id = $root.syft_proto.types.syft.v1.Id.fromObject(object.id);
                        }
                        if (object.tensor != null) {
                            if (typeof object.tensor !== "object")
                                throw TypeError(".syft_proto.types.torch.v1.Parameter.tensor: object expected");
                            message.tensor = $root.syft_proto.types.torch.v1.TorchTensor.fromObject(object.tensor);
                        }
                        if (object.requires_grad != null)
                            message.requires_grad = Boolean(object.requires_grad);
                        if (object.grad != null) {
                            if (typeof object.grad !== "object")
                                throw TypeError(".syft_proto.types.torch.v1.Parameter.grad: object expected");
                            message.grad = $root.syft_proto.types.torch.v1.TorchTensor.fromObject(object.grad);
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a Parameter message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof syft_proto.types.torch.v1.Parameter
                     * @static
                     * @param {syft_proto.types.torch.v1.Parameter} message Parameter
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Parameter.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.id = null;
                            object.tensor = null;
                            object.requires_grad = false;
                            object.grad = null;
                        }
                        if (message.id != null && message.hasOwnProperty("id"))
                            object.id = $root.syft_proto.types.syft.v1.Id.toObject(message.id, options);
                        if (message.tensor != null && message.hasOwnProperty("tensor"))
                            object.tensor = $root.syft_proto.types.torch.v1.TorchTensor.toObject(message.tensor, options);
                        if (message.requires_grad != null && message.hasOwnProperty("requires_grad"))
                            object.requires_grad = message.requires_grad;
                        if (message.grad != null && message.hasOwnProperty("grad"))
                            object.grad = $root.syft_proto.types.torch.v1.TorchTensor.toObject(message.grad, options);
                        return object;
                    };

                    /**
                     * Converts this Parameter to JSON.
                     * @function toJSON
                     * @memberof syft_proto.types.torch.v1.Parameter
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Parameter.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return Parameter;
                })();

                v1.CFunction = (function() {

                    /**
                     * Properties of a CFunction.
                     * @memberof syft_proto.types.torch.v1
                     * @interface ICFunction
                     * @property {Uint8Array|null} [obj] CFunction obj
                     */

                    /**
                     * Constructs a new CFunction.
                     * @memberof syft_proto.types.torch.v1
                     * @classdesc Represents a CFunction.
                     * @implements ICFunction
                     * @constructor
                     * @param {syft_proto.types.torch.v1.ICFunction=} [properties] Properties to set
                     */
                    function CFunction(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * CFunction obj.
                     * @member {Uint8Array} obj
                     * @memberof syft_proto.types.torch.v1.CFunction
                     * @instance
                     */
                    CFunction.prototype.obj = $util.newBuffer([]);

                    /**
                     * Creates a new CFunction instance using the specified properties.
                     * @function create
                     * @memberof syft_proto.types.torch.v1.CFunction
                     * @static
                     * @param {syft_proto.types.torch.v1.ICFunction=} [properties] Properties to set
                     * @returns {syft_proto.types.torch.v1.CFunction} CFunction instance
                     */
                    CFunction.create = function create(properties) {
                        return new CFunction(properties);
                    };

                    /**
                     * Encodes the specified CFunction message. Does not implicitly {@link syft_proto.types.torch.v1.CFunction.verify|verify} messages.
                     * @function encode
                     * @memberof syft_proto.types.torch.v1.CFunction
                     * @static
                     * @param {syft_proto.types.torch.v1.ICFunction} message CFunction message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    CFunction.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.obj != null && message.hasOwnProperty("obj"))
                            writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.obj);
                        return writer;
                    };

                    /**
                     * Encodes the specified CFunction message, length delimited. Does not implicitly {@link syft_proto.types.torch.v1.CFunction.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof syft_proto.types.torch.v1.CFunction
                     * @static
                     * @param {syft_proto.types.torch.v1.ICFunction} message CFunction message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    CFunction.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a CFunction message from the specified reader or buffer.
                     * @function decode
                     * @memberof syft_proto.types.torch.v1.CFunction
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {syft_proto.types.torch.v1.CFunction} CFunction
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    CFunction.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.syft_proto.types.torch.v1.CFunction();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.obj = reader.bytes();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a CFunction message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof syft_proto.types.torch.v1.CFunction
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {syft_proto.types.torch.v1.CFunction} CFunction
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    CFunction.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a CFunction message.
                     * @function verify
                     * @memberof syft_proto.types.torch.v1.CFunction
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    CFunction.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.obj != null && message.hasOwnProperty("obj"))
                            if (!(message.obj && typeof message.obj.length === "number" || $util.isString(message.obj)))
                                return "obj: buffer expected";
                        return null;
                    };

                    /**
                     * Creates a CFunction message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof syft_proto.types.torch.v1.CFunction
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {syft_proto.types.torch.v1.CFunction} CFunction
                     */
                    CFunction.fromObject = function fromObject(object) {
                        if (object instanceof $root.syft_proto.types.torch.v1.CFunction)
                            return object;
                        var message = new $root.syft_proto.types.torch.v1.CFunction();
                        if (object.obj != null)
                            if (typeof object.obj === "string")
                                $util.base64.decode(object.obj, message.obj = $util.newBuffer($util.base64.length(object.obj)), 0);
                            else if (object.obj.length)
                                message.obj = object.obj;
                        return message;
                    };

                    /**
                     * Creates a plain object from a CFunction message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof syft_proto.types.torch.v1.CFunction
                     * @static
                     * @param {syft_proto.types.torch.v1.CFunction} message CFunction
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    CFunction.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            if (options.bytes === String)
                                object.obj = "";
                            else {
                                object.obj = [];
                                if (options.bytes !== Array)
                                    object.obj = $util.newBuffer(object.obj);
                            }
                        if (message.obj != null && message.hasOwnProperty("obj"))
                            object.obj = options.bytes === String ? $util.base64.encode(message.obj, 0, message.obj.length) : options.bytes === Array ? Array.prototype.slice.call(message.obj) : message.obj;
                        return object;
                    };

                    /**
                     * Converts this CFunction to JSON.
                     * @function toJSON
                     * @memberof syft_proto.types.torch.v1.CFunction
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    CFunction.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return CFunction;
                })();

                v1.Device = (function() {

                    /**
                     * Properties of a Device.
                     * @memberof syft_proto.types.torch.v1
                     * @interface IDevice
                     * @property {string|null} [type] Device type
                     */

                    /**
                     * Constructs a new Device.
                     * @memberof syft_proto.types.torch.v1
                     * @classdesc Represents a Device.
                     * @implements IDevice
                     * @constructor
                     * @param {syft_proto.types.torch.v1.IDevice=} [properties] Properties to set
                     */
                    function Device(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Device type.
                     * @member {string} type
                     * @memberof syft_proto.types.torch.v1.Device
                     * @instance
                     */
                    Device.prototype.type = "";

                    /**
                     * Creates a new Device instance using the specified properties.
                     * @function create
                     * @memberof syft_proto.types.torch.v1.Device
                     * @static
                     * @param {syft_proto.types.torch.v1.IDevice=} [properties] Properties to set
                     * @returns {syft_proto.types.torch.v1.Device} Device instance
                     */
                    Device.create = function create(properties) {
                        return new Device(properties);
                    };

                    /**
                     * Encodes the specified Device message. Does not implicitly {@link syft_proto.types.torch.v1.Device.verify|verify} messages.
                     * @function encode
                     * @memberof syft_proto.types.torch.v1.Device
                     * @static
                     * @param {syft_proto.types.torch.v1.IDevice} message Device message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Device.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.type != null && message.hasOwnProperty("type"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.type);
                        return writer;
                    };

                    /**
                     * Encodes the specified Device message, length delimited. Does not implicitly {@link syft_proto.types.torch.v1.Device.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof syft_proto.types.torch.v1.Device
                     * @static
                     * @param {syft_proto.types.torch.v1.IDevice} message Device message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Device.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a Device message from the specified reader or buffer.
                     * @function decode
                     * @memberof syft_proto.types.torch.v1.Device
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {syft_proto.types.torch.v1.Device} Device
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Device.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.syft_proto.types.torch.v1.Device();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.type = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a Device message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof syft_proto.types.torch.v1.Device
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {syft_proto.types.torch.v1.Device} Device
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Device.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a Device message.
                     * @function verify
                     * @memberof syft_proto.types.torch.v1.Device
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Device.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.type != null && message.hasOwnProperty("type"))
                            if (!$util.isString(message.type))
                                return "type: string expected";
                        return null;
                    };

                    /**
                     * Creates a Device message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof syft_proto.types.torch.v1.Device
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {syft_proto.types.torch.v1.Device} Device
                     */
                    Device.fromObject = function fromObject(object) {
                        if (object instanceof $root.syft_proto.types.torch.v1.Device)
                            return object;
                        var message = new $root.syft_proto.types.torch.v1.Device();
                        if (object.type != null)
                            message.type = String(object.type);
                        return message;
                    };

                    /**
                     * Creates a plain object from a Device message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof syft_proto.types.torch.v1.Device
                     * @static
                     * @param {syft_proto.types.torch.v1.Device} message Device
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Device.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.type = "";
                        if (message.type != null && message.hasOwnProperty("type"))
                            object.type = message.type;
                        return object;
                    };

                    /**
                     * Converts this Device to JSON.
                     * @function toJSON
                     * @memberof syft_proto.types.torch.v1.Device
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Device.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return Device;
                })();

                v1.TorchDType = (function() {

                    /**
                     * Properties of a TorchDType.
                     * @memberof syft_proto.types.torch.v1
                     * @interface ITorchDType
                     * @property {string|null} [torch_type] TorchDType torch_type
                     */

                    /**
                     * Constructs a new TorchDType.
                     * @memberof syft_proto.types.torch.v1
                     * @classdesc Represents a TorchDType.
                     * @implements ITorchDType
                     * @constructor
                     * @param {syft_proto.types.torch.v1.ITorchDType=} [properties] Properties to set
                     */
                    function TorchDType(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * TorchDType torch_type.
                     * @member {string} torch_type
                     * @memberof syft_proto.types.torch.v1.TorchDType
                     * @instance
                     */
                    TorchDType.prototype.torch_type = "";

                    /**
                     * Creates a new TorchDType instance using the specified properties.
                     * @function create
                     * @memberof syft_proto.types.torch.v1.TorchDType
                     * @static
                     * @param {syft_proto.types.torch.v1.ITorchDType=} [properties] Properties to set
                     * @returns {syft_proto.types.torch.v1.TorchDType} TorchDType instance
                     */
                    TorchDType.create = function create(properties) {
                        return new TorchDType(properties);
                    };

                    /**
                     * Encodes the specified TorchDType message. Does not implicitly {@link syft_proto.types.torch.v1.TorchDType.verify|verify} messages.
                     * @function encode
                     * @memberof syft_proto.types.torch.v1.TorchDType
                     * @static
                     * @param {syft_proto.types.torch.v1.ITorchDType} message TorchDType message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    TorchDType.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.torch_type != null && message.hasOwnProperty("torch_type"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.torch_type);
                        return writer;
                    };

                    /**
                     * Encodes the specified TorchDType message, length delimited. Does not implicitly {@link syft_proto.types.torch.v1.TorchDType.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof syft_proto.types.torch.v1.TorchDType
                     * @static
                     * @param {syft_proto.types.torch.v1.ITorchDType} message TorchDType message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    TorchDType.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a TorchDType message from the specified reader or buffer.
                     * @function decode
                     * @memberof syft_proto.types.torch.v1.TorchDType
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {syft_proto.types.torch.v1.TorchDType} TorchDType
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    TorchDType.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.syft_proto.types.torch.v1.TorchDType();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.torch_type = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a TorchDType message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof syft_proto.types.torch.v1.TorchDType
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {syft_proto.types.torch.v1.TorchDType} TorchDType
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    TorchDType.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a TorchDType message.
                     * @function verify
                     * @memberof syft_proto.types.torch.v1.TorchDType
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    TorchDType.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.torch_type != null && message.hasOwnProperty("torch_type"))
                            if (!$util.isString(message.torch_type))
                                return "torch_type: string expected";
                        return null;
                    };

                    /**
                     * Creates a TorchDType message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof syft_proto.types.torch.v1.TorchDType
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {syft_proto.types.torch.v1.TorchDType} TorchDType
                     */
                    TorchDType.fromObject = function fromObject(object) {
                        if (object instanceof $root.syft_proto.types.torch.v1.TorchDType)
                            return object;
                        var message = new $root.syft_proto.types.torch.v1.TorchDType();
                        if (object.torch_type != null)
                            message.torch_type = String(object.torch_type);
                        return message;
                    };

                    /**
                     * Creates a plain object from a TorchDType message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof syft_proto.types.torch.v1.TorchDType
                     * @static
                     * @param {syft_proto.types.torch.v1.TorchDType} message TorchDType
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    TorchDType.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.torch_type = "";
                        if (message.torch_type != null && message.hasOwnProperty("torch_type"))
                            object.torch_type = message.torch_type;
                        return object;
                    };

                    /**
                     * Converts this TorchDType to JSON.
                     * @function toJSON
                     * @memberof syft_proto.types.torch.v1.TorchDType
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    TorchDType.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return TorchDType;
                })();

                v1.MemoryFormat = (function() {

                    /**
                     * Properties of a MemoryFormat.
                     * @memberof syft_proto.types.torch.v1
                     * @interface IMemoryFormat
                     * @property {string|null} [memory_format_type] MemoryFormat memory_format_type
                     */

                    /**
                     * Constructs a new MemoryFormat.
                     * @memberof syft_proto.types.torch.v1
                     * @classdesc Represents a MemoryFormat.
                     * @implements IMemoryFormat
                     * @constructor
                     * @param {syft_proto.types.torch.v1.IMemoryFormat=} [properties] Properties to set
                     */
                    function MemoryFormat(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * MemoryFormat memory_format_type.
                     * @member {string} memory_format_type
                     * @memberof syft_proto.types.torch.v1.MemoryFormat
                     * @instance
                     */
                    MemoryFormat.prototype.memory_format_type = "";

                    /**
                     * Creates a new MemoryFormat instance using the specified properties.
                     * @function create
                     * @memberof syft_proto.types.torch.v1.MemoryFormat
                     * @static
                     * @param {syft_proto.types.torch.v1.IMemoryFormat=} [properties] Properties to set
                     * @returns {syft_proto.types.torch.v1.MemoryFormat} MemoryFormat instance
                     */
                    MemoryFormat.create = function create(properties) {
                        return new MemoryFormat(properties);
                    };

                    /**
                     * Encodes the specified MemoryFormat message. Does not implicitly {@link syft_proto.types.torch.v1.MemoryFormat.verify|verify} messages.
                     * @function encode
                     * @memberof syft_proto.types.torch.v1.MemoryFormat
                     * @static
                     * @param {syft_proto.types.torch.v1.IMemoryFormat} message MemoryFormat message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    MemoryFormat.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.memory_format_type != null && message.hasOwnProperty("memory_format_type"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.memory_format_type);
                        return writer;
                    };

                    /**
                     * Encodes the specified MemoryFormat message, length delimited. Does not implicitly {@link syft_proto.types.torch.v1.MemoryFormat.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof syft_proto.types.torch.v1.MemoryFormat
                     * @static
                     * @param {syft_proto.types.torch.v1.IMemoryFormat} message MemoryFormat message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    MemoryFormat.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a MemoryFormat message from the specified reader or buffer.
                     * @function decode
                     * @memberof syft_proto.types.torch.v1.MemoryFormat
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {syft_proto.types.torch.v1.MemoryFormat} MemoryFormat
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    MemoryFormat.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.syft_proto.types.torch.v1.MemoryFormat();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.memory_format_type = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a MemoryFormat message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof syft_proto.types.torch.v1.MemoryFormat
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {syft_proto.types.torch.v1.MemoryFormat} MemoryFormat
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    MemoryFormat.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a MemoryFormat message.
                     * @function verify
                     * @memberof syft_proto.types.torch.v1.MemoryFormat
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    MemoryFormat.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.memory_format_type != null && message.hasOwnProperty("memory_format_type"))
                            if (!$util.isString(message.memory_format_type))
                                return "memory_format_type: string expected";
                        return null;
                    };

                    /**
                     * Creates a MemoryFormat message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof syft_proto.types.torch.v1.MemoryFormat
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {syft_proto.types.torch.v1.MemoryFormat} MemoryFormat
                     */
                    MemoryFormat.fromObject = function fromObject(object) {
                        if (object instanceof $root.syft_proto.types.torch.v1.MemoryFormat)
                            return object;
                        var message = new $root.syft_proto.types.torch.v1.MemoryFormat();
                        if (object.memory_format_type != null)
                            message.memory_format_type = String(object.memory_format_type);
                        return message;
                    };

                    /**
                     * Creates a plain object from a MemoryFormat message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof syft_proto.types.torch.v1.MemoryFormat
                     * @static
                     * @param {syft_proto.types.torch.v1.MemoryFormat} message MemoryFormat
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    MemoryFormat.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.memory_format_type = "";
                        if (message.memory_format_type != null && message.hasOwnProperty("memory_format_type"))
                            object.memory_format_type = message.memory_format_type;
                        return object;
                    };

                    /**
                     * Converts this MemoryFormat to JSON.
                     * @function toJSON
                     * @memberof syft_proto.types.torch.v1.MemoryFormat
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    MemoryFormat.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return MemoryFormat;
                })();

                v1.ScriptFunction = (function() {

                    /**
                     * Properties of a ScriptFunction.
                     * @memberof syft_proto.types.torch.v1
                     * @interface IScriptFunction
                     * @property {Uint8Array|null} [obj] ScriptFunction obj
                     */

                    /**
                     * Constructs a new ScriptFunction.
                     * @memberof syft_proto.types.torch.v1
                     * @classdesc Represents a ScriptFunction.
                     * @implements IScriptFunction
                     * @constructor
                     * @param {syft_proto.types.torch.v1.IScriptFunction=} [properties] Properties to set
                     */
                    function ScriptFunction(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * ScriptFunction obj.
                     * @member {Uint8Array} obj
                     * @memberof syft_proto.types.torch.v1.ScriptFunction
                     * @instance
                     */
                    ScriptFunction.prototype.obj = $util.newBuffer([]);

                    /**
                     * Creates a new ScriptFunction instance using the specified properties.
                     * @function create
                     * @memberof syft_proto.types.torch.v1.ScriptFunction
                     * @static
                     * @param {syft_proto.types.torch.v1.IScriptFunction=} [properties] Properties to set
                     * @returns {syft_proto.types.torch.v1.ScriptFunction} ScriptFunction instance
                     */
                    ScriptFunction.create = function create(properties) {
                        return new ScriptFunction(properties);
                    };

                    /**
                     * Encodes the specified ScriptFunction message. Does not implicitly {@link syft_proto.types.torch.v1.ScriptFunction.verify|verify} messages.
                     * @function encode
                     * @memberof syft_proto.types.torch.v1.ScriptFunction
                     * @static
                     * @param {syft_proto.types.torch.v1.IScriptFunction} message ScriptFunction message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ScriptFunction.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.obj != null && message.hasOwnProperty("obj"))
                            writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.obj);
                        return writer;
                    };

                    /**
                     * Encodes the specified ScriptFunction message, length delimited. Does not implicitly {@link syft_proto.types.torch.v1.ScriptFunction.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof syft_proto.types.torch.v1.ScriptFunction
                     * @static
                     * @param {syft_proto.types.torch.v1.IScriptFunction} message ScriptFunction message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ScriptFunction.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a ScriptFunction message from the specified reader or buffer.
                     * @function decode
                     * @memberof syft_proto.types.torch.v1.ScriptFunction
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {syft_proto.types.torch.v1.ScriptFunction} ScriptFunction
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ScriptFunction.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.syft_proto.types.torch.v1.ScriptFunction();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.obj = reader.bytes();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a ScriptFunction message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof syft_proto.types.torch.v1.ScriptFunction
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {syft_proto.types.torch.v1.ScriptFunction} ScriptFunction
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ScriptFunction.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a ScriptFunction message.
                     * @function verify
                     * @memberof syft_proto.types.torch.v1.ScriptFunction
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ScriptFunction.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.obj != null && message.hasOwnProperty("obj"))
                            if (!(message.obj && typeof message.obj.length === "number" || $util.isString(message.obj)))
                                return "obj: buffer expected";
                        return null;
                    };

                    /**
                     * Creates a ScriptFunction message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof syft_proto.types.torch.v1.ScriptFunction
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {syft_proto.types.torch.v1.ScriptFunction} ScriptFunction
                     */
                    ScriptFunction.fromObject = function fromObject(object) {
                        if (object instanceof $root.syft_proto.types.torch.v1.ScriptFunction)
                            return object;
                        var message = new $root.syft_proto.types.torch.v1.ScriptFunction();
                        if (object.obj != null)
                            if (typeof object.obj === "string")
                                $util.base64.decode(object.obj, message.obj = $util.newBuffer($util.base64.length(object.obj)), 0);
                            else if (object.obj.length)
                                message.obj = object.obj;
                        return message;
                    };

                    /**
                     * Creates a plain object from a ScriptFunction message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof syft_proto.types.torch.v1.ScriptFunction
                     * @static
                     * @param {syft_proto.types.torch.v1.ScriptFunction} message ScriptFunction
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ScriptFunction.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            if (options.bytes === String)
                                object.obj = "";
                            else {
                                object.obj = [];
                                if (options.bytes !== Array)
                                    object.obj = $util.newBuffer(object.obj);
                            }
                        if (message.obj != null && message.hasOwnProperty("obj"))
                            object.obj = options.bytes === String ? $util.base64.encode(message.obj, 0, message.obj.length) : options.bytes === Array ? Array.prototype.slice.call(message.obj) : message.obj;
                        return object;
                    };

                    /**
                     * Converts this ScriptFunction to JSON.
                     * @function toJSON
                     * @memberof syft_proto.types.torch.v1.ScriptFunction
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ScriptFunction.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return ScriptFunction;
                })();

                v1.ScriptModule = (function() {

                    /**
                     * Properties of a ScriptModule.
                     * @memberof syft_proto.types.torch.v1
                     * @interface IScriptModule
                     * @property {Uint8Array|null} [obj] ScriptModule obj
                     */

                    /**
                     * Constructs a new ScriptModule.
                     * @memberof syft_proto.types.torch.v1
                     * @classdesc Represents a ScriptModule.
                     * @implements IScriptModule
                     * @constructor
                     * @param {syft_proto.types.torch.v1.IScriptModule=} [properties] Properties to set
                     */
                    function ScriptModule(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * ScriptModule obj.
                     * @member {Uint8Array} obj
                     * @memberof syft_proto.types.torch.v1.ScriptModule
                     * @instance
                     */
                    ScriptModule.prototype.obj = $util.newBuffer([]);

                    /**
                     * Creates a new ScriptModule instance using the specified properties.
                     * @function create
                     * @memberof syft_proto.types.torch.v1.ScriptModule
                     * @static
                     * @param {syft_proto.types.torch.v1.IScriptModule=} [properties] Properties to set
                     * @returns {syft_proto.types.torch.v1.ScriptModule} ScriptModule instance
                     */
                    ScriptModule.create = function create(properties) {
                        return new ScriptModule(properties);
                    };

                    /**
                     * Encodes the specified ScriptModule message. Does not implicitly {@link syft_proto.types.torch.v1.ScriptModule.verify|verify} messages.
                     * @function encode
                     * @memberof syft_proto.types.torch.v1.ScriptModule
                     * @static
                     * @param {syft_proto.types.torch.v1.IScriptModule} message ScriptModule message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ScriptModule.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.obj != null && message.hasOwnProperty("obj"))
                            writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.obj);
                        return writer;
                    };

                    /**
                     * Encodes the specified ScriptModule message, length delimited. Does not implicitly {@link syft_proto.types.torch.v1.ScriptModule.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof syft_proto.types.torch.v1.ScriptModule
                     * @static
                     * @param {syft_proto.types.torch.v1.IScriptModule} message ScriptModule message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ScriptModule.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a ScriptModule message from the specified reader or buffer.
                     * @function decode
                     * @memberof syft_proto.types.torch.v1.ScriptModule
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {syft_proto.types.torch.v1.ScriptModule} ScriptModule
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ScriptModule.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.syft_proto.types.torch.v1.ScriptModule();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.obj = reader.bytes();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a ScriptModule message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof syft_proto.types.torch.v1.ScriptModule
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {syft_proto.types.torch.v1.ScriptModule} ScriptModule
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ScriptModule.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a ScriptModule message.
                     * @function verify
                     * @memberof syft_proto.types.torch.v1.ScriptModule
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ScriptModule.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.obj != null && message.hasOwnProperty("obj"))
                            if (!(message.obj && typeof message.obj.length === "number" || $util.isString(message.obj)))
                                return "obj: buffer expected";
                        return null;
                    };

                    /**
                     * Creates a ScriptModule message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof syft_proto.types.torch.v1.ScriptModule
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {syft_proto.types.torch.v1.ScriptModule} ScriptModule
                     */
                    ScriptModule.fromObject = function fromObject(object) {
                        if (object instanceof $root.syft_proto.types.torch.v1.ScriptModule)
                            return object;
                        var message = new $root.syft_proto.types.torch.v1.ScriptModule();
                        if (object.obj != null)
                            if (typeof object.obj === "string")
                                $util.base64.decode(object.obj, message.obj = $util.newBuffer($util.base64.length(object.obj)), 0);
                            else if (object.obj.length)
                                message.obj = object.obj;
                        return message;
                    };

                    /**
                     * Creates a plain object from a ScriptModule message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof syft_proto.types.torch.v1.ScriptModule
                     * @static
                     * @param {syft_proto.types.torch.v1.ScriptModule} message ScriptModule
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ScriptModule.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            if (options.bytes === String)
                                object.obj = "";
                            else {
                                object.obj = [];
                                if (options.bytes !== Array)
                                    object.obj = $util.newBuffer(object.obj);
                            }
                        if (message.obj != null && message.hasOwnProperty("obj"))
                            object.obj = options.bytes === String ? $util.base64.encode(message.obj, 0, message.obj.length) : options.bytes === Array ? Array.prototype.slice.call(message.obj) : message.obj;
                        return object;
                    };

                    /**
                     * Converts this ScriptModule to JSON.
                     * @function toJSON
                     * @memberof syft_proto.types.torch.v1.ScriptModule
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ScriptModule.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return ScriptModule;
                })();

                v1.TracedModule = (function() {

                    /**
                     * Properties of a TracedModule.
                     * @memberof syft_proto.types.torch.v1
                     * @interface ITracedModule
                     * @property {Uint8Array|null} [obj] TracedModule obj
                     */

                    /**
                     * Constructs a new TracedModule.
                     * @memberof syft_proto.types.torch.v1
                     * @classdesc Represents a TracedModule.
                     * @implements ITracedModule
                     * @constructor
                     * @param {syft_proto.types.torch.v1.ITracedModule=} [properties] Properties to set
                     */
                    function TracedModule(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * TracedModule obj.
                     * @member {Uint8Array} obj
                     * @memberof syft_proto.types.torch.v1.TracedModule
                     * @instance
                     */
                    TracedModule.prototype.obj = $util.newBuffer([]);

                    /**
                     * Creates a new TracedModule instance using the specified properties.
                     * @function create
                     * @memberof syft_proto.types.torch.v1.TracedModule
                     * @static
                     * @param {syft_proto.types.torch.v1.ITracedModule=} [properties] Properties to set
                     * @returns {syft_proto.types.torch.v1.TracedModule} TracedModule instance
                     */
                    TracedModule.create = function create(properties) {
                        return new TracedModule(properties);
                    };

                    /**
                     * Encodes the specified TracedModule message. Does not implicitly {@link syft_proto.types.torch.v1.TracedModule.verify|verify} messages.
                     * @function encode
                     * @memberof syft_proto.types.torch.v1.TracedModule
                     * @static
                     * @param {syft_proto.types.torch.v1.ITracedModule} message TracedModule message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    TracedModule.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.obj != null && message.hasOwnProperty("obj"))
                            writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.obj);
                        return writer;
                    };

                    /**
                     * Encodes the specified TracedModule message, length delimited. Does not implicitly {@link syft_proto.types.torch.v1.TracedModule.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof syft_proto.types.torch.v1.TracedModule
                     * @static
                     * @param {syft_proto.types.torch.v1.ITracedModule} message TracedModule message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    TracedModule.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a TracedModule message from the specified reader or buffer.
                     * @function decode
                     * @memberof syft_proto.types.torch.v1.TracedModule
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {syft_proto.types.torch.v1.TracedModule} TracedModule
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    TracedModule.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.syft_proto.types.torch.v1.TracedModule();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.obj = reader.bytes();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a TracedModule message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof syft_proto.types.torch.v1.TracedModule
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {syft_proto.types.torch.v1.TracedModule} TracedModule
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    TracedModule.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a TracedModule message.
                     * @function verify
                     * @memberof syft_proto.types.torch.v1.TracedModule
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    TracedModule.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.obj != null && message.hasOwnProperty("obj"))
                            if (!(message.obj && typeof message.obj.length === "number" || $util.isString(message.obj)))
                                return "obj: buffer expected";
                        return null;
                    };

                    /**
                     * Creates a TracedModule message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof syft_proto.types.torch.v1.TracedModule
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {syft_proto.types.torch.v1.TracedModule} TracedModule
                     */
                    TracedModule.fromObject = function fromObject(object) {
                        if (object instanceof $root.syft_proto.types.torch.v1.TracedModule)
                            return object;
                        var message = new $root.syft_proto.types.torch.v1.TracedModule();
                        if (object.obj != null)
                            if (typeof object.obj === "string")
                                $util.base64.decode(object.obj, message.obj = $util.newBuffer($util.base64.length(object.obj)), 0);
                            else if (object.obj.length)
                                message.obj = object.obj;
                        return message;
                    };

                    /**
                     * Creates a plain object from a TracedModule message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof syft_proto.types.torch.v1.TracedModule
                     * @static
                     * @param {syft_proto.types.torch.v1.TracedModule} message TracedModule
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    TracedModule.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            if (options.bytes === String)
                                object.obj = "";
                            else {
                                object.obj = [];
                                if (options.bytes !== Array)
                                    object.obj = $util.newBuffer(object.obj);
                            }
                        if (message.obj != null && message.hasOwnProperty("obj"))
                            object.obj = options.bytes === String ? $util.base64.encode(message.obj, 0, message.obj.length) : options.bytes === Array ? Array.prototype.slice.call(message.obj) : message.obj;
                        return object;
                    };

                    /**
                     * Converts this TracedModule to JSON.
                     * @function toJSON
                     * @memberof syft_proto.types.torch.v1.TracedModule
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    TracedModule.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return TracedModule;
                })();

                return v1;
            })();

            return torch;
        })();

        return types;
    })();

    syft_proto.generic = (function() {

        /**
         * Namespace generic.
         * @memberof syft_proto
         * @namespace
         */
        var generic = {};

        generic.pointers = (function() {

            /**
             * Namespace pointers.
             * @memberof syft_proto.generic
             * @namespace
             */
            var pointers = {};

            pointers.v1 = (function() {

                /**
                 * Namespace v1.
                 * @memberof syft_proto.generic.pointers
                 * @namespace
                 */
                var v1 = {};

                v1.PointerTensor = (function() {

                    /**
                     * Properties of a PointerTensor.
                     * @memberof syft_proto.generic.pointers.v1
                     * @interface IPointerTensor
                     * @property {syft_proto.types.syft.v1.IId|null} [object_id] PointerTensor object_id
                     * @property {syft_proto.types.syft.v1.IId|null} [location_id] PointerTensor location_id
                     * @property {syft_proto.types.syft.v1.IId|null} [object_id_at_location] PointerTensor object_id_at_location
                     * @property {syft_proto.types.syft.v1.IShape|null} [shape] PointerTensor shape
                     * @property {string|null} [point_to_attr] PointerTensor point_to_attr
                     * @property {boolean|null} [garbage_collect_data] PointerTensor garbage_collect_data
                     */

                    /**
                     * Constructs a new PointerTensor.
                     * @memberof syft_proto.generic.pointers.v1
                     * @classdesc Represents a PointerTensor.
                     * @implements IPointerTensor
                     * @constructor
                     * @param {syft_proto.generic.pointers.v1.IPointerTensor=} [properties] Properties to set
                     */
                    function PointerTensor(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * PointerTensor object_id.
                     * @member {syft_proto.types.syft.v1.IId|null|undefined} object_id
                     * @memberof syft_proto.generic.pointers.v1.PointerTensor
                     * @instance
                     */
                    PointerTensor.prototype.object_id = null;

                    /**
                     * PointerTensor location_id.
                     * @member {syft_proto.types.syft.v1.IId|null|undefined} location_id
                     * @memberof syft_proto.generic.pointers.v1.PointerTensor
                     * @instance
                     */
                    PointerTensor.prototype.location_id = null;

                    /**
                     * PointerTensor object_id_at_location.
                     * @member {syft_proto.types.syft.v1.IId|null|undefined} object_id_at_location
                     * @memberof syft_proto.generic.pointers.v1.PointerTensor
                     * @instance
                     */
                    PointerTensor.prototype.object_id_at_location = null;

                    /**
                     * PointerTensor shape.
                     * @member {syft_proto.types.syft.v1.IShape|null|undefined} shape
                     * @memberof syft_proto.generic.pointers.v1.PointerTensor
                     * @instance
                     */
                    PointerTensor.prototype.shape = null;

                    /**
                     * PointerTensor point_to_attr.
                     * @member {string} point_to_attr
                     * @memberof syft_proto.generic.pointers.v1.PointerTensor
                     * @instance
                     */
                    PointerTensor.prototype.point_to_attr = "";

                    /**
                     * PointerTensor garbage_collect_data.
                     * @member {boolean} garbage_collect_data
                     * @memberof syft_proto.generic.pointers.v1.PointerTensor
                     * @instance
                     */
                    PointerTensor.prototype.garbage_collect_data = false;

                    /**
                     * Creates a new PointerTensor instance using the specified properties.
                     * @function create
                     * @memberof syft_proto.generic.pointers.v1.PointerTensor
                     * @static
                     * @param {syft_proto.generic.pointers.v1.IPointerTensor=} [properties] Properties to set
                     * @returns {syft_proto.generic.pointers.v1.PointerTensor} PointerTensor instance
                     */
                    PointerTensor.create = function create(properties) {
                        return new PointerTensor(properties);
                    };

                    /**
                     * Encodes the specified PointerTensor message. Does not implicitly {@link syft_proto.generic.pointers.v1.PointerTensor.verify|verify} messages.
                     * @function encode
                     * @memberof syft_proto.generic.pointers.v1.PointerTensor
                     * @static
                     * @param {syft_proto.generic.pointers.v1.IPointerTensor} message PointerTensor message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    PointerTensor.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.object_id != null && message.hasOwnProperty("object_id"))
                            $root.syft_proto.types.syft.v1.Id.encode(message.object_id, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        if (message.location_id != null && message.hasOwnProperty("location_id"))
                            $root.syft_proto.types.syft.v1.Id.encode(message.location_id, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                        if (message.object_id_at_location != null && message.hasOwnProperty("object_id_at_location"))
                            $root.syft_proto.types.syft.v1.Id.encode(message.object_id_at_location, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                        if (message.shape != null && message.hasOwnProperty("shape"))
                            $root.syft_proto.types.syft.v1.Shape.encode(message.shape, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                        if (message.point_to_attr != null && message.hasOwnProperty("point_to_attr"))
                            writer.uint32(/* id 5, wireType 2 =*/42).string(message.point_to_attr);
                        if (message.garbage_collect_data != null && message.hasOwnProperty("garbage_collect_data"))
                            writer.uint32(/* id 6, wireType 0 =*/48).bool(message.garbage_collect_data);
                        return writer;
                    };

                    /**
                     * Encodes the specified PointerTensor message, length delimited. Does not implicitly {@link syft_proto.generic.pointers.v1.PointerTensor.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof syft_proto.generic.pointers.v1.PointerTensor
                     * @static
                     * @param {syft_proto.generic.pointers.v1.IPointerTensor} message PointerTensor message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    PointerTensor.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a PointerTensor message from the specified reader or buffer.
                     * @function decode
                     * @memberof syft_proto.generic.pointers.v1.PointerTensor
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {syft_proto.generic.pointers.v1.PointerTensor} PointerTensor
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    PointerTensor.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.syft_proto.generic.pointers.v1.PointerTensor();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.object_id = $root.syft_proto.types.syft.v1.Id.decode(reader, reader.uint32());
                                break;
                            case 2:
                                message.location_id = $root.syft_proto.types.syft.v1.Id.decode(reader, reader.uint32());
                                break;
                            case 3:
                                message.object_id_at_location = $root.syft_proto.types.syft.v1.Id.decode(reader, reader.uint32());
                                break;
                            case 4:
                                message.shape = $root.syft_proto.types.syft.v1.Shape.decode(reader, reader.uint32());
                                break;
                            case 5:
                                message.point_to_attr = reader.string();
                                break;
                            case 6:
                                message.garbage_collect_data = reader.bool();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a PointerTensor message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof syft_proto.generic.pointers.v1.PointerTensor
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {syft_proto.generic.pointers.v1.PointerTensor} PointerTensor
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    PointerTensor.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a PointerTensor message.
                     * @function verify
                     * @memberof syft_proto.generic.pointers.v1.PointerTensor
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    PointerTensor.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.object_id != null && message.hasOwnProperty("object_id")) {
                            var error = $root.syft_proto.types.syft.v1.Id.verify(message.object_id);
                            if (error)
                                return "object_id." + error;
                        }
                        if (message.location_id != null && message.hasOwnProperty("location_id")) {
                            var error = $root.syft_proto.types.syft.v1.Id.verify(message.location_id);
                            if (error)
                                return "location_id." + error;
                        }
                        if (message.object_id_at_location != null && message.hasOwnProperty("object_id_at_location")) {
                            var error = $root.syft_proto.types.syft.v1.Id.verify(message.object_id_at_location);
                            if (error)
                                return "object_id_at_location." + error;
                        }
                        if (message.shape != null && message.hasOwnProperty("shape")) {
                            var error = $root.syft_proto.types.syft.v1.Shape.verify(message.shape);
                            if (error)
                                return "shape." + error;
                        }
                        if (message.point_to_attr != null && message.hasOwnProperty("point_to_attr"))
                            if (!$util.isString(message.point_to_attr))
                                return "point_to_attr: string expected";
                        if (message.garbage_collect_data != null && message.hasOwnProperty("garbage_collect_data"))
                            if (typeof message.garbage_collect_data !== "boolean")
                                return "garbage_collect_data: boolean expected";
                        return null;
                    };

                    /**
                     * Creates a PointerTensor message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof syft_proto.generic.pointers.v1.PointerTensor
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {syft_proto.generic.pointers.v1.PointerTensor} PointerTensor
                     */
                    PointerTensor.fromObject = function fromObject(object) {
                        if (object instanceof $root.syft_proto.generic.pointers.v1.PointerTensor)
                            return object;
                        var message = new $root.syft_proto.generic.pointers.v1.PointerTensor();
                        if (object.object_id != null) {
                            if (typeof object.object_id !== "object")
                                throw TypeError(".syft_proto.generic.pointers.v1.PointerTensor.object_id: object expected");
                            message.object_id = $root.syft_proto.types.syft.v1.Id.fromObject(object.object_id);
                        }
                        if (object.location_id != null) {
                            if (typeof object.location_id !== "object")
                                throw TypeError(".syft_proto.generic.pointers.v1.PointerTensor.location_id: object expected");
                            message.location_id = $root.syft_proto.types.syft.v1.Id.fromObject(object.location_id);
                        }
                        if (object.object_id_at_location != null) {
                            if (typeof object.object_id_at_location !== "object")
                                throw TypeError(".syft_proto.generic.pointers.v1.PointerTensor.object_id_at_location: object expected");
                            message.object_id_at_location = $root.syft_proto.types.syft.v1.Id.fromObject(object.object_id_at_location);
                        }
                        if (object.shape != null) {
                            if (typeof object.shape !== "object")
                                throw TypeError(".syft_proto.generic.pointers.v1.PointerTensor.shape: object expected");
                            message.shape = $root.syft_proto.types.syft.v1.Shape.fromObject(object.shape);
                        }
                        if (object.point_to_attr != null)
                            message.point_to_attr = String(object.point_to_attr);
                        if (object.garbage_collect_data != null)
                            message.garbage_collect_data = Boolean(object.garbage_collect_data);
                        return message;
                    };

                    /**
                     * Creates a plain object from a PointerTensor message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof syft_proto.generic.pointers.v1.PointerTensor
                     * @static
                     * @param {syft_proto.generic.pointers.v1.PointerTensor} message PointerTensor
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    PointerTensor.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.object_id = null;
                            object.location_id = null;
                            object.object_id_at_location = null;
                            object.shape = null;
                            object.point_to_attr = "";
                            object.garbage_collect_data = false;
                        }
                        if (message.object_id != null && message.hasOwnProperty("object_id"))
                            object.object_id = $root.syft_proto.types.syft.v1.Id.toObject(message.object_id, options);
                        if (message.location_id != null && message.hasOwnProperty("location_id"))
                            object.location_id = $root.syft_proto.types.syft.v1.Id.toObject(message.location_id, options);
                        if (message.object_id_at_location != null && message.hasOwnProperty("object_id_at_location"))
                            object.object_id_at_location = $root.syft_proto.types.syft.v1.Id.toObject(message.object_id_at_location, options);
                        if (message.shape != null && message.hasOwnProperty("shape"))
                            object.shape = $root.syft_proto.types.syft.v1.Shape.toObject(message.shape, options);
                        if (message.point_to_attr != null && message.hasOwnProperty("point_to_attr"))
                            object.point_to_attr = message.point_to_attr;
                        if (message.garbage_collect_data != null && message.hasOwnProperty("garbage_collect_data"))
                            object.garbage_collect_data = message.garbage_collect_data;
                        return object;
                    };

                    /**
                     * Converts this PointerTensor to JSON.
                     * @function toJSON
                     * @memberof syft_proto.generic.pointers.v1.PointerTensor
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    PointerTensor.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return PointerTensor;
                })();

                v1.ObjectPointer = (function() {

                    /**
                     * Properties of an ObjectPointer.
                     * @memberof syft_proto.generic.pointers.v1
                     * @interface IObjectPointer
                     * @property {syft_proto.types.syft.v1.IId|null} [object_id] ObjectPointer object_id
                     * @property {syft_proto.types.syft.v1.IId|null} [location_id] ObjectPointer location_id
                     * @property {syft_proto.types.syft.v1.IId|null} [object_id_at_location] ObjectPointer object_id_at_location
                     * @property {string|null} [point_to_attr] ObjectPointer point_to_attr
                     */

                    /**
                     * Constructs a new ObjectPointer.
                     * @memberof syft_proto.generic.pointers.v1
                     * @classdesc Represents an ObjectPointer.
                     * @implements IObjectPointer
                     * @constructor
                     * @param {syft_proto.generic.pointers.v1.IObjectPointer=} [properties] Properties to set
                     */
                    function ObjectPointer(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * ObjectPointer object_id.
                     * @member {syft_proto.types.syft.v1.IId|null|undefined} object_id
                     * @memberof syft_proto.generic.pointers.v1.ObjectPointer
                     * @instance
                     */
                    ObjectPointer.prototype.object_id = null;

                    /**
                     * ObjectPointer location_id.
                     * @member {syft_proto.types.syft.v1.IId|null|undefined} location_id
                     * @memberof syft_proto.generic.pointers.v1.ObjectPointer
                     * @instance
                     */
                    ObjectPointer.prototype.location_id = null;

                    /**
                     * ObjectPointer object_id_at_location.
                     * @member {syft_proto.types.syft.v1.IId|null|undefined} object_id_at_location
                     * @memberof syft_proto.generic.pointers.v1.ObjectPointer
                     * @instance
                     */
                    ObjectPointer.prototype.object_id_at_location = null;

                    /**
                     * ObjectPointer point_to_attr.
                     * @member {string} point_to_attr
                     * @memberof syft_proto.generic.pointers.v1.ObjectPointer
                     * @instance
                     */
                    ObjectPointer.prototype.point_to_attr = "";

                    /**
                     * Creates a new ObjectPointer instance using the specified properties.
                     * @function create
                     * @memberof syft_proto.generic.pointers.v1.ObjectPointer
                     * @static
                     * @param {syft_proto.generic.pointers.v1.IObjectPointer=} [properties] Properties to set
                     * @returns {syft_proto.generic.pointers.v1.ObjectPointer} ObjectPointer instance
                     */
                    ObjectPointer.create = function create(properties) {
                        return new ObjectPointer(properties);
                    };

                    /**
                     * Encodes the specified ObjectPointer message. Does not implicitly {@link syft_proto.generic.pointers.v1.ObjectPointer.verify|verify} messages.
                     * @function encode
                     * @memberof syft_proto.generic.pointers.v1.ObjectPointer
                     * @static
                     * @param {syft_proto.generic.pointers.v1.IObjectPointer} message ObjectPointer message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ObjectPointer.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.object_id != null && message.hasOwnProperty("object_id"))
                            $root.syft_proto.types.syft.v1.Id.encode(message.object_id, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        if (message.location_id != null && message.hasOwnProperty("location_id"))
                            $root.syft_proto.types.syft.v1.Id.encode(message.location_id, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                        if (message.object_id_at_location != null && message.hasOwnProperty("object_id_at_location"))
                            $root.syft_proto.types.syft.v1.Id.encode(message.object_id_at_location, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                        if (message.point_to_attr != null && message.hasOwnProperty("point_to_attr"))
                            writer.uint32(/* id 4, wireType 2 =*/34).string(message.point_to_attr);
                        return writer;
                    };

                    /**
                     * Encodes the specified ObjectPointer message, length delimited. Does not implicitly {@link syft_proto.generic.pointers.v1.ObjectPointer.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof syft_proto.generic.pointers.v1.ObjectPointer
                     * @static
                     * @param {syft_proto.generic.pointers.v1.IObjectPointer} message ObjectPointer message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ObjectPointer.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes an ObjectPointer message from the specified reader or buffer.
                     * @function decode
                     * @memberof syft_proto.generic.pointers.v1.ObjectPointer
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {syft_proto.generic.pointers.v1.ObjectPointer} ObjectPointer
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ObjectPointer.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.syft_proto.generic.pointers.v1.ObjectPointer();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.object_id = $root.syft_proto.types.syft.v1.Id.decode(reader, reader.uint32());
                                break;
                            case 2:
                                message.location_id = $root.syft_proto.types.syft.v1.Id.decode(reader, reader.uint32());
                                break;
                            case 3:
                                message.object_id_at_location = $root.syft_proto.types.syft.v1.Id.decode(reader, reader.uint32());
                                break;
                            case 4:
                                message.point_to_attr = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes an ObjectPointer message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof syft_proto.generic.pointers.v1.ObjectPointer
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {syft_proto.generic.pointers.v1.ObjectPointer} ObjectPointer
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ObjectPointer.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies an ObjectPointer message.
                     * @function verify
                     * @memberof syft_proto.generic.pointers.v1.ObjectPointer
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ObjectPointer.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.object_id != null && message.hasOwnProperty("object_id")) {
                            var error = $root.syft_proto.types.syft.v1.Id.verify(message.object_id);
                            if (error)
                                return "object_id." + error;
                        }
                        if (message.location_id != null && message.hasOwnProperty("location_id")) {
                            var error = $root.syft_proto.types.syft.v1.Id.verify(message.location_id);
                            if (error)
                                return "location_id." + error;
                        }
                        if (message.object_id_at_location != null && message.hasOwnProperty("object_id_at_location")) {
                            var error = $root.syft_proto.types.syft.v1.Id.verify(message.object_id_at_location);
                            if (error)
                                return "object_id_at_location." + error;
                        }
                        if (message.point_to_attr != null && message.hasOwnProperty("point_to_attr"))
                            if (!$util.isString(message.point_to_attr))
                                return "point_to_attr: string expected";
                        return null;
                    };

                    /**
                     * Creates an ObjectPointer message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof syft_proto.generic.pointers.v1.ObjectPointer
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {syft_proto.generic.pointers.v1.ObjectPointer} ObjectPointer
                     */
                    ObjectPointer.fromObject = function fromObject(object) {
                        if (object instanceof $root.syft_proto.generic.pointers.v1.ObjectPointer)
                            return object;
                        var message = new $root.syft_proto.generic.pointers.v1.ObjectPointer();
                        if (object.object_id != null) {
                            if (typeof object.object_id !== "object")
                                throw TypeError(".syft_proto.generic.pointers.v1.ObjectPointer.object_id: object expected");
                            message.object_id = $root.syft_proto.types.syft.v1.Id.fromObject(object.object_id);
                        }
                        if (object.location_id != null) {
                            if (typeof object.location_id !== "object")
                                throw TypeError(".syft_proto.generic.pointers.v1.ObjectPointer.location_id: object expected");
                            message.location_id = $root.syft_proto.types.syft.v1.Id.fromObject(object.location_id);
                        }
                        if (object.object_id_at_location != null) {
                            if (typeof object.object_id_at_location !== "object")
                                throw TypeError(".syft_proto.generic.pointers.v1.ObjectPointer.object_id_at_location: object expected");
                            message.object_id_at_location = $root.syft_proto.types.syft.v1.Id.fromObject(object.object_id_at_location);
                        }
                        if (object.point_to_attr != null)
                            message.point_to_attr = String(object.point_to_attr);
                        return message;
                    };

                    /**
                     * Creates a plain object from an ObjectPointer message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof syft_proto.generic.pointers.v1.ObjectPointer
                     * @static
                     * @param {syft_proto.generic.pointers.v1.ObjectPointer} message ObjectPointer
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ObjectPointer.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.object_id = null;
                            object.location_id = null;
                            object.object_id_at_location = null;
                            object.point_to_attr = "";
                        }
                        if (message.object_id != null && message.hasOwnProperty("object_id"))
                            object.object_id = $root.syft_proto.types.syft.v1.Id.toObject(message.object_id, options);
                        if (message.location_id != null && message.hasOwnProperty("location_id"))
                            object.location_id = $root.syft_proto.types.syft.v1.Id.toObject(message.location_id, options);
                        if (message.object_id_at_location != null && message.hasOwnProperty("object_id_at_location"))
                            object.object_id_at_location = $root.syft_proto.types.syft.v1.Id.toObject(message.object_id_at_location, options);
                        if (message.point_to_attr != null && message.hasOwnProperty("point_to_attr"))
                            object.point_to_attr = message.point_to_attr;
                        return object;
                    };

                    /**
                     * Converts this ObjectPointer to JSON.
                     * @function toJSON
                     * @memberof syft_proto.generic.pointers.v1.ObjectPointer
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ObjectPointer.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return ObjectPointer;
                })();

                v1.PointerDataset = (function() {

                    /**
                     * Properties of a PointerDataset.
                     * @memberof syft_proto.generic.pointers.v1
                     * @interface IPointerDataset
                     * @property {syft_proto.types.syft.v1.IId|null} [object_id] PointerDataset object_id
                     * @property {syft_proto.types.syft.v1.IId|null} [location_id] PointerDataset location_id
                     * @property {syft_proto.types.syft.v1.IId|null} [object_id_at_location] PointerDataset object_id_at_location
                     * @property {Array.<string>|null} [tags] PointerDataset tags
                     * @property {string|null} [description] PointerDataset description
                     * @property {boolean|null} [garbage_collect_data] PointerDataset garbage_collect_data
                     */

                    /**
                     * Constructs a new PointerDataset.
                     * @memberof syft_proto.generic.pointers.v1
                     * @classdesc Represents a PointerDataset.
                     * @implements IPointerDataset
                     * @constructor
                     * @param {syft_proto.generic.pointers.v1.IPointerDataset=} [properties] Properties to set
                     */
                    function PointerDataset(properties) {
                        this.tags = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * PointerDataset object_id.
                     * @member {syft_proto.types.syft.v1.IId|null|undefined} object_id
                     * @memberof syft_proto.generic.pointers.v1.PointerDataset
                     * @instance
                     */
                    PointerDataset.prototype.object_id = null;

                    /**
                     * PointerDataset location_id.
                     * @member {syft_proto.types.syft.v1.IId|null|undefined} location_id
                     * @memberof syft_proto.generic.pointers.v1.PointerDataset
                     * @instance
                     */
                    PointerDataset.prototype.location_id = null;

                    /**
                     * PointerDataset object_id_at_location.
                     * @member {syft_proto.types.syft.v1.IId|null|undefined} object_id_at_location
                     * @memberof syft_proto.generic.pointers.v1.PointerDataset
                     * @instance
                     */
                    PointerDataset.prototype.object_id_at_location = null;

                    /**
                     * PointerDataset tags.
                     * @member {Array.<string>} tags
                     * @memberof syft_proto.generic.pointers.v1.PointerDataset
                     * @instance
                     */
                    PointerDataset.prototype.tags = $util.emptyArray;

                    /**
                     * PointerDataset description.
                     * @member {string} description
                     * @memberof syft_proto.generic.pointers.v1.PointerDataset
                     * @instance
                     */
                    PointerDataset.prototype.description = "";

                    /**
                     * PointerDataset garbage_collect_data.
                     * @member {boolean} garbage_collect_data
                     * @memberof syft_proto.generic.pointers.v1.PointerDataset
                     * @instance
                     */
                    PointerDataset.prototype.garbage_collect_data = false;

                    /**
                     * Creates a new PointerDataset instance using the specified properties.
                     * @function create
                     * @memberof syft_proto.generic.pointers.v1.PointerDataset
                     * @static
                     * @param {syft_proto.generic.pointers.v1.IPointerDataset=} [properties] Properties to set
                     * @returns {syft_proto.generic.pointers.v1.PointerDataset} PointerDataset instance
                     */
                    PointerDataset.create = function create(properties) {
                        return new PointerDataset(properties);
                    };

                    /**
                     * Encodes the specified PointerDataset message. Does not implicitly {@link syft_proto.generic.pointers.v1.PointerDataset.verify|verify} messages.
                     * @function encode
                     * @memberof syft_proto.generic.pointers.v1.PointerDataset
                     * @static
                     * @param {syft_proto.generic.pointers.v1.IPointerDataset} message PointerDataset message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    PointerDataset.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.object_id != null && message.hasOwnProperty("object_id"))
                            $root.syft_proto.types.syft.v1.Id.encode(message.object_id, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        if (message.location_id != null && message.hasOwnProperty("location_id"))
                            $root.syft_proto.types.syft.v1.Id.encode(message.location_id, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                        if (message.object_id_at_location != null && message.hasOwnProperty("object_id_at_location"))
                            $root.syft_proto.types.syft.v1.Id.encode(message.object_id_at_location, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                        if (message.tags != null && message.tags.length)
                            for (var i = 0; i < message.tags.length; ++i)
                                writer.uint32(/* id 4, wireType 2 =*/34).string(message.tags[i]);
                        if (message.description != null && message.hasOwnProperty("description"))
                            writer.uint32(/* id 5, wireType 2 =*/42).string(message.description);
                        if (message.garbage_collect_data != null && message.hasOwnProperty("garbage_collect_data"))
                            writer.uint32(/* id 6, wireType 0 =*/48).bool(message.garbage_collect_data);
                        return writer;
                    };

                    /**
                     * Encodes the specified PointerDataset message, length delimited. Does not implicitly {@link syft_proto.generic.pointers.v1.PointerDataset.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof syft_proto.generic.pointers.v1.PointerDataset
                     * @static
                     * @param {syft_proto.generic.pointers.v1.IPointerDataset} message PointerDataset message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    PointerDataset.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a PointerDataset message from the specified reader or buffer.
                     * @function decode
                     * @memberof syft_proto.generic.pointers.v1.PointerDataset
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {syft_proto.generic.pointers.v1.PointerDataset} PointerDataset
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    PointerDataset.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.syft_proto.generic.pointers.v1.PointerDataset();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.object_id = $root.syft_proto.types.syft.v1.Id.decode(reader, reader.uint32());
                                break;
                            case 2:
                                message.location_id = $root.syft_proto.types.syft.v1.Id.decode(reader, reader.uint32());
                                break;
                            case 3:
                                message.object_id_at_location = $root.syft_proto.types.syft.v1.Id.decode(reader, reader.uint32());
                                break;
                            case 4:
                                if (!(message.tags && message.tags.length))
                                    message.tags = [];
                                message.tags.push(reader.string());
                                break;
                            case 5:
                                message.description = reader.string();
                                break;
                            case 6:
                                message.garbage_collect_data = reader.bool();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a PointerDataset message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof syft_proto.generic.pointers.v1.PointerDataset
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {syft_proto.generic.pointers.v1.PointerDataset} PointerDataset
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    PointerDataset.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a PointerDataset message.
                     * @function verify
                     * @memberof syft_proto.generic.pointers.v1.PointerDataset
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    PointerDataset.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.object_id != null && message.hasOwnProperty("object_id")) {
                            var error = $root.syft_proto.types.syft.v1.Id.verify(message.object_id);
                            if (error)
                                return "object_id." + error;
                        }
                        if (message.location_id != null && message.hasOwnProperty("location_id")) {
                            var error = $root.syft_proto.types.syft.v1.Id.verify(message.location_id);
                            if (error)
                                return "location_id." + error;
                        }
                        if (message.object_id_at_location != null && message.hasOwnProperty("object_id_at_location")) {
                            var error = $root.syft_proto.types.syft.v1.Id.verify(message.object_id_at_location);
                            if (error)
                                return "object_id_at_location." + error;
                        }
                        if (message.tags != null && message.hasOwnProperty("tags")) {
                            if (!Array.isArray(message.tags))
                                return "tags: array expected";
                            for (var i = 0; i < message.tags.length; ++i)
                                if (!$util.isString(message.tags[i]))
                                    return "tags: string[] expected";
                        }
                        if (message.description != null && message.hasOwnProperty("description"))
                            if (!$util.isString(message.description))
                                return "description: string expected";
                        if (message.garbage_collect_data != null && message.hasOwnProperty("garbage_collect_data"))
                            if (typeof message.garbage_collect_data !== "boolean")
                                return "garbage_collect_data: boolean expected";
                        return null;
                    };

                    /**
                     * Creates a PointerDataset message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof syft_proto.generic.pointers.v1.PointerDataset
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {syft_proto.generic.pointers.v1.PointerDataset} PointerDataset
                     */
                    PointerDataset.fromObject = function fromObject(object) {
                        if (object instanceof $root.syft_proto.generic.pointers.v1.PointerDataset)
                            return object;
                        var message = new $root.syft_proto.generic.pointers.v1.PointerDataset();
                        if (object.object_id != null) {
                            if (typeof object.object_id !== "object")
                                throw TypeError(".syft_proto.generic.pointers.v1.PointerDataset.object_id: object expected");
                            message.object_id = $root.syft_proto.types.syft.v1.Id.fromObject(object.object_id);
                        }
                        if (object.location_id != null) {
                            if (typeof object.location_id !== "object")
                                throw TypeError(".syft_proto.generic.pointers.v1.PointerDataset.location_id: object expected");
                            message.location_id = $root.syft_proto.types.syft.v1.Id.fromObject(object.location_id);
                        }
                        if (object.object_id_at_location != null) {
                            if (typeof object.object_id_at_location !== "object")
                                throw TypeError(".syft_proto.generic.pointers.v1.PointerDataset.object_id_at_location: object expected");
                            message.object_id_at_location = $root.syft_proto.types.syft.v1.Id.fromObject(object.object_id_at_location);
                        }
                        if (object.tags) {
                            if (!Array.isArray(object.tags))
                                throw TypeError(".syft_proto.generic.pointers.v1.PointerDataset.tags: array expected");
                            message.tags = [];
                            for (var i = 0; i < object.tags.length; ++i)
                                message.tags[i] = String(object.tags[i]);
                        }
                        if (object.description != null)
                            message.description = String(object.description);
                        if (object.garbage_collect_data != null)
                            message.garbage_collect_data = Boolean(object.garbage_collect_data);
                        return message;
                    };

                    /**
                     * Creates a plain object from a PointerDataset message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof syft_proto.generic.pointers.v1.PointerDataset
                     * @static
                     * @param {syft_proto.generic.pointers.v1.PointerDataset} message PointerDataset
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    PointerDataset.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.tags = [];
                        if (options.defaults) {
                            object.object_id = null;
                            object.location_id = null;
                            object.object_id_at_location = null;
                            object.description = "";
                            object.garbage_collect_data = false;
                        }
                        if (message.object_id != null && message.hasOwnProperty("object_id"))
                            object.object_id = $root.syft_proto.types.syft.v1.Id.toObject(message.object_id, options);
                        if (message.location_id != null && message.hasOwnProperty("location_id"))
                            object.location_id = $root.syft_proto.types.syft.v1.Id.toObject(message.location_id, options);
                        if (message.object_id_at_location != null && message.hasOwnProperty("object_id_at_location"))
                            object.object_id_at_location = $root.syft_proto.types.syft.v1.Id.toObject(message.object_id_at_location, options);
                        if (message.tags && message.tags.length) {
                            object.tags = [];
                            for (var j = 0; j < message.tags.length; ++j)
                                object.tags[j] = message.tags[j];
                        }
                        if (message.description != null && message.hasOwnProperty("description"))
                            object.description = message.description;
                        if (message.garbage_collect_data != null && message.hasOwnProperty("garbage_collect_data"))
                            object.garbage_collect_data = message.garbage_collect_data;
                        return object;
                    };

                    /**
                     * Converts this PointerDataset to JSON.
                     * @function toJSON
                     * @memberof syft_proto.generic.pointers.v1.PointerDataset
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    PointerDataset.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return PointerDataset;
                })();

                v1.PointerPlan = (function() {

                    /**
                     * Properties of a PointerPlan.
                     * @memberof syft_proto.generic.pointers.v1
                     * @interface IPointerPlan
                     * @property {syft_proto.types.syft.v1.IId|null} [object_id] PointerPlan object_id
                     * @property {syft_proto.types.syft.v1.IId|null} [location_id] PointerPlan location_id
                     * @property {syft_proto.types.syft.v1.IId|null} [object_id_at_location] PointerPlan object_id_at_location
                     * @property {Array.<string>|null} [tags] PointerPlan tags
                     * @property {boolean|null} [garbage_collect_data] PointerPlan garbage_collect_data
                     */

                    /**
                     * Constructs a new PointerPlan.
                     * @memberof syft_proto.generic.pointers.v1
                     * @classdesc Represents a PointerPlan.
                     * @implements IPointerPlan
                     * @constructor
                     * @param {syft_proto.generic.pointers.v1.IPointerPlan=} [properties] Properties to set
                     */
                    function PointerPlan(properties) {
                        this.tags = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * PointerPlan object_id.
                     * @member {syft_proto.types.syft.v1.IId|null|undefined} object_id
                     * @memberof syft_proto.generic.pointers.v1.PointerPlan
                     * @instance
                     */
                    PointerPlan.prototype.object_id = null;

                    /**
                     * PointerPlan location_id.
                     * @member {syft_proto.types.syft.v1.IId|null|undefined} location_id
                     * @memberof syft_proto.generic.pointers.v1.PointerPlan
                     * @instance
                     */
                    PointerPlan.prototype.location_id = null;

                    /**
                     * PointerPlan object_id_at_location.
                     * @member {syft_proto.types.syft.v1.IId|null|undefined} object_id_at_location
                     * @memberof syft_proto.generic.pointers.v1.PointerPlan
                     * @instance
                     */
                    PointerPlan.prototype.object_id_at_location = null;

                    /**
                     * PointerPlan tags.
                     * @member {Array.<string>} tags
                     * @memberof syft_proto.generic.pointers.v1.PointerPlan
                     * @instance
                     */
                    PointerPlan.prototype.tags = $util.emptyArray;

                    /**
                     * PointerPlan garbage_collect_data.
                     * @member {boolean} garbage_collect_data
                     * @memberof syft_proto.generic.pointers.v1.PointerPlan
                     * @instance
                     */
                    PointerPlan.prototype.garbage_collect_data = false;

                    /**
                     * Creates a new PointerPlan instance using the specified properties.
                     * @function create
                     * @memberof syft_proto.generic.pointers.v1.PointerPlan
                     * @static
                     * @param {syft_proto.generic.pointers.v1.IPointerPlan=} [properties] Properties to set
                     * @returns {syft_proto.generic.pointers.v1.PointerPlan} PointerPlan instance
                     */
                    PointerPlan.create = function create(properties) {
                        return new PointerPlan(properties);
                    };

                    /**
                     * Encodes the specified PointerPlan message. Does not implicitly {@link syft_proto.generic.pointers.v1.PointerPlan.verify|verify} messages.
                     * @function encode
                     * @memberof syft_proto.generic.pointers.v1.PointerPlan
                     * @static
                     * @param {syft_proto.generic.pointers.v1.IPointerPlan} message PointerPlan message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    PointerPlan.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.object_id != null && message.hasOwnProperty("object_id"))
                            $root.syft_proto.types.syft.v1.Id.encode(message.object_id, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        if (message.location_id != null && message.hasOwnProperty("location_id"))
                            $root.syft_proto.types.syft.v1.Id.encode(message.location_id, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                        if (message.object_id_at_location != null && message.hasOwnProperty("object_id_at_location"))
                            $root.syft_proto.types.syft.v1.Id.encode(message.object_id_at_location, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                        if (message.tags != null && message.tags.length)
                            for (var i = 0; i < message.tags.length; ++i)
                                writer.uint32(/* id 4, wireType 2 =*/34).string(message.tags[i]);
                        if (message.garbage_collect_data != null && message.hasOwnProperty("garbage_collect_data"))
                            writer.uint32(/* id 5, wireType 0 =*/40).bool(message.garbage_collect_data);
                        return writer;
                    };

                    /**
                     * Encodes the specified PointerPlan message, length delimited. Does not implicitly {@link syft_proto.generic.pointers.v1.PointerPlan.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof syft_proto.generic.pointers.v1.PointerPlan
                     * @static
                     * @param {syft_proto.generic.pointers.v1.IPointerPlan} message PointerPlan message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    PointerPlan.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a PointerPlan message from the specified reader or buffer.
                     * @function decode
                     * @memberof syft_proto.generic.pointers.v1.PointerPlan
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {syft_proto.generic.pointers.v1.PointerPlan} PointerPlan
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    PointerPlan.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.syft_proto.generic.pointers.v1.PointerPlan();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.object_id = $root.syft_proto.types.syft.v1.Id.decode(reader, reader.uint32());
                                break;
                            case 2:
                                message.location_id = $root.syft_proto.types.syft.v1.Id.decode(reader, reader.uint32());
                                break;
                            case 3:
                                message.object_id_at_location = $root.syft_proto.types.syft.v1.Id.decode(reader, reader.uint32());
                                break;
                            case 4:
                                if (!(message.tags && message.tags.length))
                                    message.tags = [];
                                message.tags.push(reader.string());
                                break;
                            case 5:
                                message.garbage_collect_data = reader.bool();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a PointerPlan message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof syft_proto.generic.pointers.v1.PointerPlan
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {syft_proto.generic.pointers.v1.PointerPlan} PointerPlan
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    PointerPlan.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a PointerPlan message.
                     * @function verify
                     * @memberof syft_proto.generic.pointers.v1.PointerPlan
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    PointerPlan.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.object_id != null && message.hasOwnProperty("object_id")) {
                            var error = $root.syft_proto.types.syft.v1.Id.verify(message.object_id);
                            if (error)
                                return "object_id." + error;
                        }
                        if (message.location_id != null && message.hasOwnProperty("location_id")) {
                            var error = $root.syft_proto.types.syft.v1.Id.verify(message.location_id);
                            if (error)
                                return "location_id." + error;
                        }
                        if (message.object_id_at_location != null && message.hasOwnProperty("object_id_at_location")) {
                            var error = $root.syft_proto.types.syft.v1.Id.verify(message.object_id_at_location);
                            if (error)
                                return "object_id_at_location." + error;
                        }
                        if (message.tags != null && message.hasOwnProperty("tags")) {
                            if (!Array.isArray(message.tags))
                                return "tags: array expected";
                            for (var i = 0; i < message.tags.length; ++i)
                                if (!$util.isString(message.tags[i]))
                                    return "tags: string[] expected";
                        }
                        if (message.garbage_collect_data != null && message.hasOwnProperty("garbage_collect_data"))
                            if (typeof message.garbage_collect_data !== "boolean")
                                return "garbage_collect_data: boolean expected";
                        return null;
                    };

                    /**
                     * Creates a PointerPlan message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof syft_proto.generic.pointers.v1.PointerPlan
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {syft_proto.generic.pointers.v1.PointerPlan} PointerPlan
                     */
                    PointerPlan.fromObject = function fromObject(object) {
                        if (object instanceof $root.syft_proto.generic.pointers.v1.PointerPlan)
                            return object;
                        var message = new $root.syft_proto.generic.pointers.v1.PointerPlan();
                        if (object.object_id != null) {
                            if (typeof object.object_id !== "object")
                                throw TypeError(".syft_proto.generic.pointers.v1.PointerPlan.object_id: object expected");
                            message.object_id = $root.syft_proto.types.syft.v1.Id.fromObject(object.object_id);
                        }
                        if (object.location_id != null) {
                            if (typeof object.location_id !== "object")
                                throw TypeError(".syft_proto.generic.pointers.v1.PointerPlan.location_id: object expected");
                            message.location_id = $root.syft_proto.types.syft.v1.Id.fromObject(object.location_id);
                        }
                        if (object.object_id_at_location != null) {
                            if (typeof object.object_id_at_location !== "object")
                                throw TypeError(".syft_proto.generic.pointers.v1.PointerPlan.object_id_at_location: object expected");
                            message.object_id_at_location = $root.syft_proto.types.syft.v1.Id.fromObject(object.object_id_at_location);
                        }
                        if (object.tags) {
                            if (!Array.isArray(object.tags))
                                throw TypeError(".syft_proto.generic.pointers.v1.PointerPlan.tags: array expected");
                            message.tags = [];
                            for (var i = 0; i < object.tags.length; ++i)
                                message.tags[i] = String(object.tags[i]);
                        }
                        if (object.garbage_collect_data != null)
                            message.garbage_collect_data = Boolean(object.garbage_collect_data);
                        return message;
                    };

                    /**
                     * Creates a plain object from a PointerPlan message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof syft_proto.generic.pointers.v1.PointerPlan
                     * @static
                     * @param {syft_proto.generic.pointers.v1.PointerPlan} message PointerPlan
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    PointerPlan.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.tags = [];
                        if (options.defaults) {
                            object.object_id = null;
                            object.location_id = null;
                            object.object_id_at_location = null;
                            object.garbage_collect_data = false;
                        }
                        if (message.object_id != null && message.hasOwnProperty("object_id"))
                            object.object_id = $root.syft_proto.types.syft.v1.Id.toObject(message.object_id, options);
                        if (message.location_id != null && message.hasOwnProperty("location_id"))
                            object.location_id = $root.syft_proto.types.syft.v1.Id.toObject(message.location_id, options);
                        if (message.object_id_at_location != null && message.hasOwnProperty("object_id_at_location"))
                            object.object_id_at_location = $root.syft_proto.types.syft.v1.Id.toObject(message.object_id_at_location, options);
                        if (message.tags && message.tags.length) {
                            object.tags = [];
                            for (var j = 0; j < message.tags.length; ++j)
                                object.tags[j] = message.tags[j];
                        }
                        if (message.garbage_collect_data != null && message.hasOwnProperty("garbage_collect_data"))
                            object.garbage_collect_data = message.garbage_collect_data;
                        return object;
                    };

                    /**
                     * Converts this PointerPlan to JSON.
                     * @function toJSON
                     * @memberof syft_proto.generic.pointers.v1.PointerPlan
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    PointerPlan.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return PointerPlan;
                })();

                return v1;
            })();

            return pointers;
        })();

        return generic;
    })();

    syft_proto.frameworks = (function() {

        /**
         * Namespace frameworks.
         * @memberof syft_proto
         * @namespace
         */
        var frameworks = {};

        frameworks.torch = (function() {

            /**
             * Namespace torch.
             * @memberof syft_proto.frameworks
             * @namespace
             */
            var torch = {};

            torch.tensors = (function() {

                /**
                 * Namespace tensors.
                 * @memberof syft_proto.frameworks.torch
                 * @namespace
                 */
                var tensors = {};

                tensors.interpreters = (function() {

                    /**
                     * Namespace interpreters.
                     * @memberof syft_proto.frameworks.torch.tensors
                     * @namespace
                     */
                    var interpreters = {};

                    interpreters.v1 = (function() {

                        /**
                         * Namespace v1.
                         * @memberof syft_proto.frameworks.torch.tensors.interpreters
                         * @namespace
                         */
                        var v1 = {};

                        v1.OnnxModel = (function() {

                            /**
                             * Properties of an OnnxModel.
                             * @memberof syft_proto.frameworks.torch.tensors.interpreters.v1
                             * @interface IOnnxModel
                             * @property {syft_proto.types.syft.v1.IId|null} [id] OnnxModel id
                             * @property {Uint8Array|null} [serialized_model] OnnxModel serialized_model
                             * @property {Array.<string>|null} [tags] OnnxModel tags
                             * @property {string|null} [description] OnnxModel description
                             */

                            /**
                             * Constructs a new OnnxModel.
                             * @memberof syft_proto.frameworks.torch.tensors.interpreters.v1
                             * @classdesc Represents an OnnxModel.
                             * @implements IOnnxModel
                             * @constructor
                             * @param {syft_proto.frameworks.torch.tensors.interpreters.v1.IOnnxModel=} [properties] Properties to set
                             */
                            function OnnxModel(properties) {
                                this.tags = [];
                                if (properties)
                                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                        if (properties[keys[i]] != null)
                                            this[keys[i]] = properties[keys[i]];
                            }

                            /**
                             * OnnxModel id.
                             * @member {syft_proto.types.syft.v1.IId|null|undefined} id
                             * @memberof syft_proto.frameworks.torch.tensors.interpreters.v1.OnnxModel
                             * @instance
                             */
                            OnnxModel.prototype.id = null;

                            /**
                             * OnnxModel serialized_model.
                             * @member {Uint8Array} serialized_model
                             * @memberof syft_proto.frameworks.torch.tensors.interpreters.v1.OnnxModel
                             * @instance
                             */
                            OnnxModel.prototype.serialized_model = $util.newBuffer([]);

                            /**
                             * OnnxModel tags.
                             * @member {Array.<string>} tags
                             * @memberof syft_proto.frameworks.torch.tensors.interpreters.v1.OnnxModel
                             * @instance
                             */
                            OnnxModel.prototype.tags = $util.emptyArray;

                            /**
                             * OnnxModel description.
                             * @member {string} description
                             * @memberof syft_proto.frameworks.torch.tensors.interpreters.v1.OnnxModel
                             * @instance
                             */
                            OnnxModel.prototype.description = "";

                            /**
                             * Creates a new OnnxModel instance using the specified properties.
                             * @function create
                             * @memberof syft_proto.frameworks.torch.tensors.interpreters.v1.OnnxModel
                             * @static
                             * @param {syft_proto.frameworks.torch.tensors.interpreters.v1.IOnnxModel=} [properties] Properties to set
                             * @returns {syft_proto.frameworks.torch.tensors.interpreters.v1.OnnxModel} OnnxModel instance
                             */
                            OnnxModel.create = function create(properties) {
                                return new OnnxModel(properties);
                            };

                            /**
                             * Encodes the specified OnnxModel message. Does not implicitly {@link syft_proto.frameworks.torch.tensors.interpreters.v1.OnnxModel.verify|verify} messages.
                             * @function encode
                             * @memberof syft_proto.frameworks.torch.tensors.interpreters.v1.OnnxModel
                             * @static
                             * @param {syft_proto.frameworks.torch.tensors.interpreters.v1.IOnnxModel} message OnnxModel message or plain object to encode
                             * @param {$protobuf.Writer} [writer] Writer to encode to
                             * @returns {$protobuf.Writer} Writer
                             */
                            OnnxModel.encode = function encode(message, writer) {
                                if (!writer)
                                    writer = $Writer.create();
                                if (message.id != null && message.hasOwnProperty("id"))
                                    $root.syft_proto.types.syft.v1.Id.encode(message.id, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                                if (message.serialized_model != null && message.hasOwnProperty("serialized_model"))
                                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.serialized_model);
                                if (message.tags != null && message.tags.length)
                                    for (var i = 0; i < message.tags.length; ++i)
                                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.tags[i]);
                                if (message.description != null && message.hasOwnProperty("description"))
                                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.description);
                                return writer;
                            };

                            /**
                             * Encodes the specified OnnxModel message, length delimited. Does not implicitly {@link syft_proto.frameworks.torch.tensors.interpreters.v1.OnnxModel.verify|verify} messages.
                             * @function encodeDelimited
                             * @memberof syft_proto.frameworks.torch.tensors.interpreters.v1.OnnxModel
                             * @static
                             * @param {syft_proto.frameworks.torch.tensors.interpreters.v1.IOnnxModel} message OnnxModel message or plain object to encode
                             * @param {$protobuf.Writer} [writer] Writer to encode to
                             * @returns {$protobuf.Writer} Writer
                             */
                            OnnxModel.encodeDelimited = function encodeDelimited(message, writer) {
                                return this.encode(message, writer).ldelim();
                            };

                            /**
                             * Decodes an OnnxModel message from the specified reader or buffer.
                             * @function decode
                             * @memberof syft_proto.frameworks.torch.tensors.interpreters.v1.OnnxModel
                             * @static
                             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                             * @param {number} [length] Message length if known beforehand
                             * @returns {syft_proto.frameworks.torch.tensors.interpreters.v1.OnnxModel} OnnxModel
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            OnnxModel.decode = function decode(reader, length) {
                                if (!(reader instanceof $Reader))
                                    reader = $Reader.create(reader);
                                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.syft_proto.frameworks.torch.tensors.interpreters.v1.OnnxModel();
                                while (reader.pos < end) {
                                    var tag = reader.uint32();
                                    switch (tag >>> 3) {
                                    case 1:
                                        message.id = $root.syft_proto.types.syft.v1.Id.decode(reader, reader.uint32());
                                        break;
                                    case 2:
                                        message.serialized_model = reader.bytes();
                                        break;
                                    case 3:
                                        if (!(message.tags && message.tags.length))
                                            message.tags = [];
                                        message.tags.push(reader.string());
                                        break;
                                    case 4:
                                        message.description = reader.string();
                                        break;
                                    default:
                                        reader.skipType(tag & 7);
                                        break;
                                    }
                                }
                                return message;
                            };

                            /**
                             * Decodes an OnnxModel message from the specified reader or buffer, length delimited.
                             * @function decodeDelimited
                             * @memberof syft_proto.frameworks.torch.tensors.interpreters.v1.OnnxModel
                             * @static
                             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                             * @returns {syft_proto.frameworks.torch.tensors.interpreters.v1.OnnxModel} OnnxModel
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            OnnxModel.decodeDelimited = function decodeDelimited(reader) {
                                if (!(reader instanceof $Reader))
                                    reader = new $Reader(reader);
                                return this.decode(reader, reader.uint32());
                            };

                            /**
                             * Verifies an OnnxModel message.
                             * @function verify
                             * @memberof syft_proto.frameworks.torch.tensors.interpreters.v1.OnnxModel
                             * @static
                             * @param {Object.<string,*>} message Plain object to verify
                             * @returns {string|null} `null` if valid, otherwise the reason why it is not
                             */
                            OnnxModel.verify = function verify(message) {
                                if (typeof message !== "object" || message === null)
                                    return "object expected";
                                if (message.id != null && message.hasOwnProperty("id")) {
                                    var error = $root.syft_proto.types.syft.v1.Id.verify(message.id);
                                    if (error)
                                        return "id." + error;
                                }
                                if (message.serialized_model != null && message.hasOwnProperty("serialized_model"))
                                    if (!(message.serialized_model && typeof message.serialized_model.length === "number" || $util.isString(message.serialized_model)))
                                        return "serialized_model: buffer expected";
                                if (message.tags != null && message.hasOwnProperty("tags")) {
                                    if (!Array.isArray(message.tags))
                                        return "tags: array expected";
                                    for (var i = 0; i < message.tags.length; ++i)
                                        if (!$util.isString(message.tags[i]))
                                            return "tags: string[] expected";
                                }
                                if (message.description != null && message.hasOwnProperty("description"))
                                    if (!$util.isString(message.description))
                                        return "description: string expected";
                                return null;
                            };

                            /**
                             * Creates an OnnxModel message from a plain object. Also converts values to their respective internal types.
                             * @function fromObject
                             * @memberof syft_proto.frameworks.torch.tensors.interpreters.v1.OnnxModel
                             * @static
                             * @param {Object.<string,*>} object Plain object
                             * @returns {syft_proto.frameworks.torch.tensors.interpreters.v1.OnnxModel} OnnxModel
                             */
                            OnnxModel.fromObject = function fromObject(object) {
                                if (object instanceof $root.syft_proto.frameworks.torch.tensors.interpreters.v1.OnnxModel)
                                    return object;
                                var message = new $root.syft_proto.frameworks.torch.tensors.interpreters.v1.OnnxModel();
                                if (object.id != null) {
                                    if (typeof object.id !== "object")
                                        throw TypeError(".syft_proto.frameworks.torch.tensors.interpreters.v1.OnnxModel.id: object expected");
                                    message.id = $root.syft_proto.types.syft.v1.Id.fromObject(object.id);
                                }
                                if (object.serialized_model != null)
                                    if (typeof object.serialized_model === "string")
                                        $util.base64.decode(object.serialized_model, message.serialized_model = $util.newBuffer($util.base64.length(object.serialized_model)), 0);
                                    else if (object.serialized_model.length)
                                        message.serialized_model = object.serialized_model;
                                if (object.tags) {
                                    if (!Array.isArray(object.tags))
                                        throw TypeError(".syft_proto.frameworks.torch.tensors.interpreters.v1.OnnxModel.tags: array expected");
                                    message.tags = [];
                                    for (var i = 0; i < object.tags.length; ++i)
                                        message.tags[i] = String(object.tags[i]);
                                }
                                if (object.description != null)
                                    message.description = String(object.description);
                                return message;
                            };

                            /**
                             * Creates a plain object from an OnnxModel message. Also converts values to other types if specified.
                             * @function toObject
                             * @memberof syft_proto.frameworks.torch.tensors.interpreters.v1.OnnxModel
                             * @static
                             * @param {syft_proto.frameworks.torch.tensors.interpreters.v1.OnnxModel} message OnnxModel
                             * @param {$protobuf.IConversionOptions} [options] Conversion options
                             * @returns {Object.<string,*>} Plain object
                             */
                            OnnxModel.toObject = function toObject(message, options) {
                                if (!options)
                                    options = {};
                                var object = {};
                                if (options.arrays || options.defaults)
                                    object.tags = [];
                                if (options.defaults) {
                                    object.id = null;
                                    if (options.bytes === String)
                                        object.serialized_model = "";
                                    else {
                                        object.serialized_model = [];
                                        if (options.bytes !== Array)
                                            object.serialized_model = $util.newBuffer(object.serialized_model);
                                    }
                                    object.description = "";
                                }
                                if (message.id != null && message.hasOwnProperty("id"))
                                    object.id = $root.syft_proto.types.syft.v1.Id.toObject(message.id, options);
                                if (message.serialized_model != null && message.hasOwnProperty("serialized_model"))
                                    object.serialized_model = options.bytes === String ? $util.base64.encode(message.serialized_model, 0, message.serialized_model.length) : options.bytes === Array ? Array.prototype.slice.call(message.serialized_model) : message.serialized_model;
                                if (message.tags && message.tags.length) {
                                    object.tags = [];
                                    for (var j = 0; j < message.tags.length; ++j)
                                        object.tags[j] = message.tags[j];
                                }
                                if (message.description != null && message.hasOwnProperty("description"))
                                    object.description = message.description;
                                return object;
                            };

                            /**
                             * Converts this OnnxModel to JSON.
                             * @function toJSON
                             * @memberof syft_proto.frameworks.torch.tensors.interpreters.v1.OnnxModel
                             * @instance
                             * @returns {Object.<string,*>} JSON object
                             */
                            OnnxModel.prototype.toJSON = function toJSON() {
                                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                            };

                            return OnnxModel;
                        })();

                        v1.AdditiveSharingTensor = (function() {

                            /**
                             * Properties of an AdditiveSharingTensor.
                             * @memberof syft_proto.frameworks.torch.tensors.interpreters.v1
                             * @interface IAdditiveSharingTensor
                             * @property {syft_proto.types.syft.v1.IId|null} [id] AdditiveSharingTensor id
                             * @property {number|Long|null} [field_int] AdditiveSharingTensor field_int
                             * @property {string|null} [field_str] AdditiveSharingTensor field_str
                             * @property {string|null} [dtype] AdditiveSharingTensor dtype
                             * @property {syft_proto.types.syft.v1.IId|null} [crypto_provider_id] AdditiveSharingTensor crypto_provider_id
                             * @property {Array.<syft_proto.types.syft.v1.IId>|null} [location_ids] AdditiveSharingTensor location_ids
                             * @property {Array.<syft_proto.generic.pointers.v1.IPointerTensor>|null} [shares] AdditiveSharingTensor shares
                             */

                            /**
                             * Constructs a new AdditiveSharingTensor.
                             * @memberof syft_proto.frameworks.torch.tensors.interpreters.v1
                             * @classdesc Represents an AdditiveSharingTensor.
                             * @implements IAdditiveSharingTensor
                             * @constructor
                             * @param {syft_proto.frameworks.torch.tensors.interpreters.v1.IAdditiveSharingTensor=} [properties] Properties to set
                             */
                            function AdditiveSharingTensor(properties) {
                                this.location_ids = [];
                                this.shares = [];
                                if (properties)
                                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                        if (properties[keys[i]] != null)
                                            this[keys[i]] = properties[keys[i]];
                            }

                            /**
                             * AdditiveSharingTensor id.
                             * @member {syft_proto.types.syft.v1.IId|null|undefined} id
                             * @memberof syft_proto.frameworks.torch.tensors.interpreters.v1.AdditiveSharingTensor
                             * @instance
                             */
                            AdditiveSharingTensor.prototype.id = null;

                            /**
                             * AdditiveSharingTensor field_int.
                             * @member {number|Long} field_int
                             * @memberof syft_proto.frameworks.torch.tensors.interpreters.v1.AdditiveSharingTensor
                             * @instance
                             */
                            AdditiveSharingTensor.prototype.field_int = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                            /**
                             * AdditiveSharingTensor field_str.
                             * @member {string} field_str
                             * @memberof syft_proto.frameworks.torch.tensors.interpreters.v1.AdditiveSharingTensor
                             * @instance
                             */
                            AdditiveSharingTensor.prototype.field_str = "";

                            /**
                             * AdditiveSharingTensor dtype.
                             * @member {string} dtype
                             * @memberof syft_proto.frameworks.torch.tensors.interpreters.v1.AdditiveSharingTensor
                             * @instance
                             */
                            AdditiveSharingTensor.prototype.dtype = "";

                            /**
                             * AdditiveSharingTensor crypto_provider_id.
                             * @member {syft_proto.types.syft.v1.IId|null|undefined} crypto_provider_id
                             * @memberof syft_proto.frameworks.torch.tensors.interpreters.v1.AdditiveSharingTensor
                             * @instance
                             */
                            AdditiveSharingTensor.prototype.crypto_provider_id = null;

                            /**
                             * AdditiveSharingTensor location_ids.
                             * @member {Array.<syft_proto.types.syft.v1.IId>} location_ids
                             * @memberof syft_proto.frameworks.torch.tensors.interpreters.v1.AdditiveSharingTensor
                             * @instance
                             */
                            AdditiveSharingTensor.prototype.location_ids = $util.emptyArray;

                            /**
                             * AdditiveSharingTensor shares.
                             * @member {Array.<syft_proto.generic.pointers.v1.IPointerTensor>} shares
                             * @memberof syft_proto.frameworks.torch.tensors.interpreters.v1.AdditiveSharingTensor
                             * @instance
                             */
                            AdditiveSharingTensor.prototype.shares = $util.emptyArray;

                            // OneOf field names bound to virtual getters and setters
                            var $oneOfFields;

                            /**
                             * AdditiveSharingTensor field_size.
                             * @member {"field_int"|"field_str"|undefined} field_size
                             * @memberof syft_proto.frameworks.torch.tensors.interpreters.v1.AdditiveSharingTensor
                             * @instance
                             */
                            Object.defineProperty(AdditiveSharingTensor.prototype, "field_size", {
                                get: $util.oneOfGetter($oneOfFields = ["field_int", "field_str"]),
                                set: $util.oneOfSetter($oneOfFields)
                            });

                            /**
                             * Creates a new AdditiveSharingTensor instance using the specified properties.
                             * @function create
                             * @memberof syft_proto.frameworks.torch.tensors.interpreters.v1.AdditiveSharingTensor
                             * @static
                             * @param {syft_proto.frameworks.torch.tensors.interpreters.v1.IAdditiveSharingTensor=} [properties] Properties to set
                             * @returns {syft_proto.frameworks.torch.tensors.interpreters.v1.AdditiveSharingTensor} AdditiveSharingTensor instance
                             */
                            AdditiveSharingTensor.create = function create(properties) {
                                return new AdditiveSharingTensor(properties);
                            };

                            /**
                             * Encodes the specified AdditiveSharingTensor message. Does not implicitly {@link syft_proto.frameworks.torch.tensors.interpreters.v1.AdditiveSharingTensor.verify|verify} messages.
                             * @function encode
                             * @memberof syft_proto.frameworks.torch.tensors.interpreters.v1.AdditiveSharingTensor
                             * @static
                             * @param {syft_proto.frameworks.torch.tensors.interpreters.v1.IAdditiveSharingTensor} message AdditiveSharingTensor message or plain object to encode
                             * @param {$protobuf.Writer} [writer] Writer to encode to
                             * @returns {$protobuf.Writer} Writer
                             */
                            AdditiveSharingTensor.encode = function encode(message, writer) {
                                if (!writer)
                                    writer = $Writer.create();
                                if (message.id != null && message.hasOwnProperty("id"))
                                    $root.syft_proto.types.syft.v1.Id.encode(message.id, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                                if (message.field_int != null && message.hasOwnProperty("field_int"))
                                    writer.uint32(/* id 2, wireType 0 =*/16).int64(message.field_int);
                                if (message.field_str != null && message.hasOwnProperty("field_str"))
                                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.field_str);
                                if (message.dtype != null && message.hasOwnProperty("dtype"))
                                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.dtype);
                                if (message.crypto_provider_id != null && message.hasOwnProperty("crypto_provider_id"))
                                    $root.syft_proto.types.syft.v1.Id.encode(message.crypto_provider_id, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                                if (message.location_ids != null && message.location_ids.length)
                                    for (var i = 0; i < message.location_ids.length; ++i)
                                        $root.syft_proto.types.syft.v1.Id.encode(message.location_ids[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                                if (message.shares != null && message.shares.length)
                                    for (var i = 0; i < message.shares.length; ++i)
                                        $root.syft_proto.generic.pointers.v1.PointerTensor.encode(message.shares[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                                return writer;
                            };

                            /**
                             * Encodes the specified AdditiveSharingTensor message, length delimited. Does not implicitly {@link syft_proto.frameworks.torch.tensors.interpreters.v1.AdditiveSharingTensor.verify|verify} messages.
                             * @function encodeDelimited
                             * @memberof syft_proto.frameworks.torch.tensors.interpreters.v1.AdditiveSharingTensor
                             * @static
                             * @param {syft_proto.frameworks.torch.tensors.interpreters.v1.IAdditiveSharingTensor} message AdditiveSharingTensor message or plain object to encode
                             * @param {$protobuf.Writer} [writer] Writer to encode to
                             * @returns {$protobuf.Writer} Writer
                             */
                            AdditiveSharingTensor.encodeDelimited = function encodeDelimited(message, writer) {
                                return this.encode(message, writer).ldelim();
                            };

                            /**
                             * Decodes an AdditiveSharingTensor message from the specified reader or buffer.
                             * @function decode
                             * @memberof syft_proto.frameworks.torch.tensors.interpreters.v1.AdditiveSharingTensor
                             * @static
                             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                             * @param {number} [length] Message length if known beforehand
                             * @returns {syft_proto.frameworks.torch.tensors.interpreters.v1.AdditiveSharingTensor} AdditiveSharingTensor
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            AdditiveSharingTensor.decode = function decode(reader, length) {
                                if (!(reader instanceof $Reader))
                                    reader = $Reader.create(reader);
                                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.syft_proto.frameworks.torch.tensors.interpreters.v1.AdditiveSharingTensor();
                                while (reader.pos < end) {
                                    var tag = reader.uint32();
                                    switch (tag >>> 3) {
                                    case 1:
                                        message.id = $root.syft_proto.types.syft.v1.Id.decode(reader, reader.uint32());
                                        break;
                                    case 2:
                                        message.field_int = reader.int64();
                                        break;
                                    case 3:
                                        message.field_str = reader.string();
                                        break;
                                    case 4:
                                        message.dtype = reader.string();
                                        break;
                                    case 5:
                                        message.crypto_provider_id = $root.syft_proto.types.syft.v1.Id.decode(reader, reader.uint32());
                                        break;
                                    case 6:
                                        if (!(message.location_ids && message.location_ids.length))
                                            message.location_ids = [];
                                        message.location_ids.push($root.syft_proto.types.syft.v1.Id.decode(reader, reader.uint32()));
                                        break;
                                    case 7:
                                        if (!(message.shares && message.shares.length))
                                            message.shares = [];
                                        message.shares.push($root.syft_proto.generic.pointers.v1.PointerTensor.decode(reader, reader.uint32()));
                                        break;
                                    default:
                                        reader.skipType(tag & 7);
                                        break;
                                    }
                                }
                                return message;
                            };

                            /**
                             * Decodes an AdditiveSharingTensor message from the specified reader or buffer, length delimited.
                             * @function decodeDelimited
                             * @memberof syft_proto.frameworks.torch.tensors.interpreters.v1.AdditiveSharingTensor
                             * @static
                             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                             * @returns {syft_proto.frameworks.torch.tensors.interpreters.v1.AdditiveSharingTensor} AdditiveSharingTensor
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            AdditiveSharingTensor.decodeDelimited = function decodeDelimited(reader) {
                                if (!(reader instanceof $Reader))
                                    reader = new $Reader(reader);
                                return this.decode(reader, reader.uint32());
                            };

                            /**
                             * Verifies an AdditiveSharingTensor message.
                             * @function verify
                             * @memberof syft_proto.frameworks.torch.tensors.interpreters.v1.AdditiveSharingTensor
                             * @static
                             * @param {Object.<string,*>} message Plain object to verify
                             * @returns {string|null} `null` if valid, otherwise the reason why it is not
                             */
                            AdditiveSharingTensor.verify = function verify(message) {
                                if (typeof message !== "object" || message === null)
                                    return "object expected";
                                var properties = {};
                                if (message.id != null && message.hasOwnProperty("id")) {
                                    var error = $root.syft_proto.types.syft.v1.Id.verify(message.id);
                                    if (error)
                                        return "id." + error;
                                }
                                if (message.field_int != null && message.hasOwnProperty("field_int")) {
                                    properties.field_size = 1;
                                    if (!$util.isInteger(message.field_int) && !(message.field_int && $util.isInteger(message.field_int.low) && $util.isInteger(message.field_int.high)))
                                        return "field_int: integer|Long expected";
                                }
                                if (message.field_str != null && message.hasOwnProperty("field_str")) {
                                    if (properties.field_size === 1)
                                        return "field_size: multiple values";
                                    properties.field_size = 1;
                                    if (!$util.isString(message.field_str))
                                        return "field_str: string expected";
                                }
                                if (message.dtype != null && message.hasOwnProperty("dtype"))
                                    if (!$util.isString(message.dtype))
                                        return "dtype: string expected";
                                if (message.crypto_provider_id != null && message.hasOwnProperty("crypto_provider_id")) {
                                    var error = $root.syft_proto.types.syft.v1.Id.verify(message.crypto_provider_id);
                                    if (error)
                                        return "crypto_provider_id." + error;
                                }
                                if (message.location_ids != null && message.hasOwnProperty("location_ids")) {
                                    if (!Array.isArray(message.location_ids))
                                        return "location_ids: array expected";
                                    for (var i = 0; i < message.location_ids.length; ++i) {
                                        var error = $root.syft_proto.types.syft.v1.Id.verify(message.location_ids[i]);
                                        if (error)
                                            return "location_ids." + error;
                                    }
                                }
                                if (message.shares != null && message.hasOwnProperty("shares")) {
                                    if (!Array.isArray(message.shares))
                                        return "shares: array expected";
                                    for (var i = 0; i < message.shares.length; ++i) {
                                        var error = $root.syft_proto.generic.pointers.v1.PointerTensor.verify(message.shares[i]);
                                        if (error)
                                            return "shares." + error;
                                    }
                                }
                                return null;
                            };

                            /**
                             * Creates an AdditiveSharingTensor message from a plain object. Also converts values to their respective internal types.
                             * @function fromObject
                             * @memberof syft_proto.frameworks.torch.tensors.interpreters.v1.AdditiveSharingTensor
                             * @static
                             * @param {Object.<string,*>} object Plain object
                             * @returns {syft_proto.frameworks.torch.tensors.interpreters.v1.AdditiveSharingTensor} AdditiveSharingTensor
                             */
                            AdditiveSharingTensor.fromObject = function fromObject(object) {
                                if (object instanceof $root.syft_proto.frameworks.torch.tensors.interpreters.v1.AdditiveSharingTensor)
                                    return object;
                                var message = new $root.syft_proto.frameworks.torch.tensors.interpreters.v1.AdditiveSharingTensor();
                                if (object.id != null) {
                                    if (typeof object.id !== "object")
                                        throw TypeError(".syft_proto.frameworks.torch.tensors.interpreters.v1.AdditiveSharingTensor.id: object expected");
                                    message.id = $root.syft_proto.types.syft.v1.Id.fromObject(object.id);
                                }
                                if (object.field_int != null)
                                    if ($util.Long)
                                        (message.field_int = $util.Long.fromValue(object.field_int)).unsigned = false;
                                    else if (typeof object.field_int === "string")
                                        message.field_int = parseInt(object.field_int, 10);
                                    else if (typeof object.field_int === "number")
                                        message.field_int = object.field_int;
                                    else if (typeof object.field_int === "object")
                                        message.field_int = new $util.LongBits(object.field_int.low >>> 0, object.field_int.high >>> 0).toNumber();
                                if (object.field_str != null)
                                    message.field_str = String(object.field_str);
                                if (object.dtype != null)
                                    message.dtype = String(object.dtype);
                                if (object.crypto_provider_id != null) {
                                    if (typeof object.crypto_provider_id !== "object")
                                        throw TypeError(".syft_proto.frameworks.torch.tensors.interpreters.v1.AdditiveSharingTensor.crypto_provider_id: object expected");
                                    message.crypto_provider_id = $root.syft_proto.types.syft.v1.Id.fromObject(object.crypto_provider_id);
                                }
                                if (object.location_ids) {
                                    if (!Array.isArray(object.location_ids))
                                        throw TypeError(".syft_proto.frameworks.torch.tensors.interpreters.v1.AdditiveSharingTensor.location_ids: array expected");
                                    message.location_ids = [];
                                    for (var i = 0; i < object.location_ids.length; ++i) {
                                        if (typeof object.location_ids[i] !== "object")
                                            throw TypeError(".syft_proto.frameworks.torch.tensors.interpreters.v1.AdditiveSharingTensor.location_ids: object expected");
                                        message.location_ids[i] = $root.syft_proto.types.syft.v1.Id.fromObject(object.location_ids[i]);
                                    }
                                }
                                if (object.shares) {
                                    if (!Array.isArray(object.shares))
                                        throw TypeError(".syft_proto.frameworks.torch.tensors.interpreters.v1.AdditiveSharingTensor.shares: array expected");
                                    message.shares = [];
                                    for (var i = 0; i < object.shares.length; ++i) {
                                        if (typeof object.shares[i] !== "object")
                                            throw TypeError(".syft_proto.frameworks.torch.tensors.interpreters.v1.AdditiveSharingTensor.shares: object expected");
                                        message.shares[i] = $root.syft_proto.generic.pointers.v1.PointerTensor.fromObject(object.shares[i]);
                                    }
                                }
                                return message;
                            };

                            /**
                             * Creates a plain object from an AdditiveSharingTensor message. Also converts values to other types if specified.
                             * @function toObject
                             * @memberof syft_proto.frameworks.torch.tensors.interpreters.v1.AdditiveSharingTensor
                             * @static
                             * @param {syft_proto.frameworks.torch.tensors.interpreters.v1.AdditiveSharingTensor} message AdditiveSharingTensor
                             * @param {$protobuf.IConversionOptions} [options] Conversion options
                             * @returns {Object.<string,*>} Plain object
                             */
                            AdditiveSharingTensor.toObject = function toObject(message, options) {
                                if (!options)
                                    options = {};
                                var object = {};
                                if (options.arrays || options.defaults) {
                                    object.location_ids = [];
                                    object.shares = [];
                                }
                                if (options.defaults) {
                                    object.id = null;
                                    object.dtype = "";
                                    object.crypto_provider_id = null;
                                }
                                if (message.id != null && message.hasOwnProperty("id"))
                                    object.id = $root.syft_proto.types.syft.v1.Id.toObject(message.id, options);
                                if (message.field_int != null && message.hasOwnProperty("field_int")) {
                                    if (typeof message.field_int === "number")
                                        object.field_int = options.longs === String ? String(message.field_int) : message.field_int;
                                    else
                                        object.field_int = options.longs === String ? $util.Long.prototype.toString.call(message.field_int) : options.longs === Number ? new $util.LongBits(message.field_int.low >>> 0, message.field_int.high >>> 0).toNumber() : message.field_int;
                                    if (options.oneofs)
                                        object.field_size = "field_int";
                                }
                                if (message.field_str != null && message.hasOwnProperty("field_str")) {
                                    object.field_str = message.field_str;
                                    if (options.oneofs)
                                        object.field_size = "field_str";
                                }
                                if (message.dtype != null && message.hasOwnProperty("dtype"))
                                    object.dtype = message.dtype;
                                if (message.crypto_provider_id != null && message.hasOwnProperty("crypto_provider_id"))
                                    object.crypto_provider_id = $root.syft_proto.types.syft.v1.Id.toObject(message.crypto_provider_id, options);
                                if (message.location_ids && message.location_ids.length) {
                                    object.location_ids = [];
                                    for (var j = 0; j < message.location_ids.length; ++j)
                                        object.location_ids[j] = $root.syft_proto.types.syft.v1.Id.toObject(message.location_ids[j], options);
                                }
                                if (message.shares && message.shares.length) {
                                    object.shares = [];
                                    for (var j = 0; j < message.shares.length; ++j)
                                        object.shares[j] = $root.syft_proto.generic.pointers.v1.PointerTensor.toObject(message.shares[j], options);
                                }
                                return object;
                            };

                            /**
                             * Converts this AdditiveSharingTensor to JSON.
                             * @function toJSON
                             * @memberof syft_proto.frameworks.torch.tensors.interpreters.v1.AdditiveSharingTensor
                             * @instance
                             * @returns {Object.<string,*>} JSON object
                             */
                            AdditiveSharingTensor.prototype.toJSON = function toJSON() {
                                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                            };

                            return AdditiveSharingTensor;
                        })();

                        v1.FixedPrecisionTensor = (function() {

                            /**
                             * Properties of a FixedPrecisionTensor.
                             * @memberof syft_proto.frameworks.torch.tensors.interpreters.v1
                             * @interface IFixedPrecisionTensor
                             * @property {syft_proto.types.syft.v1.IId|null} [id] FixedPrecisionTensor id
                             * @property {string|null} [field] FixedPrecisionTensor field
                             * @property {string|null} [dtype] FixedPrecisionTensor dtype
                             * @property {number|null} [base] FixedPrecisionTensor base
                             * @property {number|null} [kappa] FixedPrecisionTensor kappa
                             * @property {number|null} [precision_fractional] FixedPrecisionTensor precision_fractional
                             * @property {Array.<string>|null} [tags] FixedPrecisionTensor tags
                             * @property {string|null} [description] FixedPrecisionTensor description
                             * @property {syft_proto.frameworks.torch.tensors.interpreters.v1.IAdditiveSharingTensor|null} [child] FixedPrecisionTensor child
                             */

                            /**
                             * Constructs a new FixedPrecisionTensor.
                             * @memberof syft_proto.frameworks.torch.tensors.interpreters.v1
                             * @classdesc Represents a FixedPrecisionTensor.
                             * @implements IFixedPrecisionTensor
                             * @constructor
                             * @param {syft_proto.frameworks.torch.tensors.interpreters.v1.IFixedPrecisionTensor=} [properties] Properties to set
                             */
                            function FixedPrecisionTensor(properties) {
                                this.tags = [];
                                if (properties)
                                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                        if (properties[keys[i]] != null)
                                            this[keys[i]] = properties[keys[i]];
                            }

                            /**
                             * FixedPrecisionTensor id.
                             * @member {syft_proto.types.syft.v1.IId|null|undefined} id
                             * @memberof syft_proto.frameworks.torch.tensors.interpreters.v1.FixedPrecisionTensor
                             * @instance
                             */
                            FixedPrecisionTensor.prototype.id = null;

                            /**
                             * FixedPrecisionTensor field.
                             * @member {string} field
                             * @memberof syft_proto.frameworks.torch.tensors.interpreters.v1.FixedPrecisionTensor
                             * @instance
                             */
                            FixedPrecisionTensor.prototype.field = "";

                            /**
                             * FixedPrecisionTensor dtype.
                             * @member {string} dtype
                             * @memberof syft_proto.frameworks.torch.tensors.interpreters.v1.FixedPrecisionTensor
                             * @instance
                             */
                            FixedPrecisionTensor.prototype.dtype = "";

                            /**
                             * FixedPrecisionTensor base.
                             * @member {number} base
                             * @memberof syft_proto.frameworks.torch.tensors.interpreters.v1.FixedPrecisionTensor
                             * @instance
                             */
                            FixedPrecisionTensor.prototype.base = 0;

                            /**
                             * FixedPrecisionTensor kappa.
                             * @member {number} kappa
                             * @memberof syft_proto.frameworks.torch.tensors.interpreters.v1.FixedPrecisionTensor
                             * @instance
                             */
                            FixedPrecisionTensor.prototype.kappa = 0;

                            /**
                             * FixedPrecisionTensor precision_fractional.
                             * @member {number} precision_fractional
                             * @memberof syft_proto.frameworks.torch.tensors.interpreters.v1.FixedPrecisionTensor
                             * @instance
                             */
                            FixedPrecisionTensor.prototype.precision_fractional = 0;

                            /**
                             * FixedPrecisionTensor tags.
                             * @member {Array.<string>} tags
                             * @memberof syft_proto.frameworks.torch.tensors.interpreters.v1.FixedPrecisionTensor
                             * @instance
                             */
                            FixedPrecisionTensor.prototype.tags = $util.emptyArray;

                            /**
                             * FixedPrecisionTensor description.
                             * @member {string} description
                             * @memberof syft_proto.frameworks.torch.tensors.interpreters.v1.FixedPrecisionTensor
                             * @instance
                             */
                            FixedPrecisionTensor.prototype.description = "";

                            /**
                             * FixedPrecisionTensor child.
                             * @member {syft_proto.frameworks.torch.tensors.interpreters.v1.IAdditiveSharingTensor|null|undefined} child
                             * @memberof syft_proto.frameworks.torch.tensors.interpreters.v1.FixedPrecisionTensor
                             * @instance
                             */
                            FixedPrecisionTensor.prototype.child = null;

                            /**
                             * Creates a new FixedPrecisionTensor instance using the specified properties.
                             * @function create
                             * @memberof syft_proto.frameworks.torch.tensors.interpreters.v1.FixedPrecisionTensor
                             * @static
                             * @param {syft_proto.frameworks.torch.tensors.interpreters.v1.IFixedPrecisionTensor=} [properties] Properties to set
                             * @returns {syft_proto.frameworks.torch.tensors.interpreters.v1.FixedPrecisionTensor} FixedPrecisionTensor instance
                             */
                            FixedPrecisionTensor.create = function create(properties) {
                                return new FixedPrecisionTensor(properties);
                            };

                            /**
                             * Encodes the specified FixedPrecisionTensor message. Does not implicitly {@link syft_proto.frameworks.torch.tensors.interpreters.v1.FixedPrecisionTensor.verify|verify} messages.
                             * @function encode
                             * @memberof syft_proto.frameworks.torch.tensors.interpreters.v1.FixedPrecisionTensor
                             * @static
                             * @param {syft_proto.frameworks.torch.tensors.interpreters.v1.IFixedPrecisionTensor} message FixedPrecisionTensor message or plain object to encode
                             * @param {$protobuf.Writer} [writer] Writer to encode to
                             * @returns {$protobuf.Writer} Writer
                             */
                            FixedPrecisionTensor.encode = function encode(message, writer) {
                                if (!writer)
                                    writer = $Writer.create();
                                if (message.id != null && message.hasOwnProperty("id"))
                                    $root.syft_proto.types.syft.v1.Id.encode(message.id, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                                if (message.field != null && message.hasOwnProperty("field"))
                                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.field);
                                if (message.dtype != null && message.hasOwnProperty("dtype"))
                                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.dtype);
                                if (message.base != null && message.hasOwnProperty("base"))
                                    writer.uint32(/* id 5, wireType 0 =*/40).int32(message.base);
                                if (message.kappa != null && message.hasOwnProperty("kappa"))
                                    writer.uint32(/* id 6, wireType 0 =*/48).int32(message.kappa);
                                if (message.precision_fractional != null && message.hasOwnProperty("precision_fractional"))
                                    writer.uint32(/* id 7, wireType 0 =*/56).int32(message.precision_fractional);
                                if (message.tags != null && message.tags.length)
                                    for (var i = 0; i < message.tags.length; ++i)
                                        writer.uint32(/* id 8, wireType 2 =*/66).string(message.tags[i]);
                                if (message.description != null && message.hasOwnProperty("description"))
                                    writer.uint32(/* id 9, wireType 2 =*/74).string(message.description);
                                if (message.child != null && message.hasOwnProperty("child"))
                                    $root.syft_proto.frameworks.torch.tensors.interpreters.v1.AdditiveSharingTensor.encode(message.child, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
                                return writer;
                            };

                            /**
                             * Encodes the specified FixedPrecisionTensor message, length delimited. Does not implicitly {@link syft_proto.frameworks.torch.tensors.interpreters.v1.FixedPrecisionTensor.verify|verify} messages.
                             * @function encodeDelimited
                             * @memberof syft_proto.frameworks.torch.tensors.interpreters.v1.FixedPrecisionTensor
                             * @static
                             * @param {syft_proto.frameworks.torch.tensors.interpreters.v1.IFixedPrecisionTensor} message FixedPrecisionTensor message or plain object to encode
                             * @param {$protobuf.Writer} [writer] Writer to encode to
                             * @returns {$protobuf.Writer} Writer
                             */
                            FixedPrecisionTensor.encodeDelimited = function encodeDelimited(message, writer) {
                                return this.encode(message, writer).ldelim();
                            };

                            /**
                             * Decodes a FixedPrecisionTensor message from the specified reader or buffer.
                             * @function decode
                             * @memberof syft_proto.frameworks.torch.tensors.interpreters.v1.FixedPrecisionTensor
                             * @static
                             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                             * @param {number} [length] Message length if known beforehand
                             * @returns {syft_proto.frameworks.torch.tensors.interpreters.v1.FixedPrecisionTensor} FixedPrecisionTensor
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            FixedPrecisionTensor.decode = function decode(reader, length) {
                                if (!(reader instanceof $Reader))
                                    reader = $Reader.create(reader);
                                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.syft_proto.frameworks.torch.tensors.interpreters.v1.FixedPrecisionTensor();
                                while (reader.pos < end) {
                                    var tag = reader.uint32();
                                    switch (tag >>> 3) {
                                    case 1:
                                        message.id = $root.syft_proto.types.syft.v1.Id.decode(reader, reader.uint32());
                                        break;
                                    case 3:
                                        message.field = reader.string();
                                        break;
                                    case 4:
                                        message.dtype = reader.string();
                                        break;
                                    case 5:
                                        message.base = reader.int32();
                                        break;
                                    case 6:
                                        message.kappa = reader.int32();
                                        break;
                                    case 7:
                                        message.precision_fractional = reader.int32();
                                        break;
                                    case 8:
                                        if (!(message.tags && message.tags.length))
                                            message.tags = [];
                                        message.tags.push(reader.string());
                                        break;
                                    case 9:
                                        message.description = reader.string();
                                        break;
                                    case 10:
                                        message.child = $root.syft_proto.frameworks.torch.tensors.interpreters.v1.AdditiveSharingTensor.decode(reader, reader.uint32());
                                        break;
                                    default:
                                        reader.skipType(tag & 7);
                                        break;
                                    }
                                }
                                return message;
                            };

                            /**
                             * Decodes a FixedPrecisionTensor message from the specified reader or buffer, length delimited.
                             * @function decodeDelimited
                             * @memberof syft_proto.frameworks.torch.tensors.interpreters.v1.FixedPrecisionTensor
                             * @static
                             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                             * @returns {syft_proto.frameworks.torch.tensors.interpreters.v1.FixedPrecisionTensor} FixedPrecisionTensor
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            FixedPrecisionTensor.decodeDelimited = function decodeDelimited(reader) {
                                if (!(reader instanceof $Reader))
                                    reader = new $Reader(reader);
                                return this.decode(reader, reader.uint32());
                            };

                            /**
                             * Verifies a FixedPrecisionTensor message.
                             * @function verify
                             * @memberof syft_proto.frameworks.torch.tensors.interpreters.v1.FixedPrecisionTensor
                             * @static
                             * @param {Object.<string,*>} message Plain object to verify
                             * @returns {string|null} `null` if valid, otherwise the reason why it is not
                             */
                            FixedPrecisionTensor.verify = function verify(message) {
                                if (typeof message !== "object" || message === null)
                                    return "object expected";
                                if (message.id != null && message.hasOwnProperty("id")) {
                                    var error = $root.syft_proto.types.syft.v1.Id.verify(message.id);
                                    if (error)
                                        return "id." + error;
                                }
                                if (message.field != null && message.hasOwnProperty("field"))
                                    if (!$util.isString(message.field))
                                        return "field: string expected";
                                if (message.dtype != null && message.hasOwnProperty("dtype"))
                                    if (!$util.isString(message.dtype))
                                        return "dtype: string expected";
                                if (message.base != null && message.hasOwnProperty("base"))
                                    if (!$util.isInteger(message.base))
                                        return "base: integer expected";
                                if (message.kappa != null && message.hasOwnProperty("kappa"))
                                    if (!$util.isInteger(message.kappa))
                                        return "kappa: integer expected";
                                if (message.precision_fractional != null && message.hasOwnProperty("precision_fractional"))
                                    if (!$util.isInteger(message.precision_fractional))
                                        return "precision_fractional: integer expected";
                                if (message.tags != null && message.hasOwnProperty("tags")) {
                                    if (!Array.isArray(message.tags))
                                        return "tags: array expected";
                                    for (var i = 0; i < message.tags.length; ++i)
                                        if (!$util.isString(message.tags[i]))
                                            return "tags: string[] expected";
                                }
                                if (message.description != null && message.hasOwnProperty("description"))
                                    if (!$util.isString(message.description))
                                        return "description: string expected";
                                if (message.child != null && message.hasOwnProperty("child")) {
                                    var error = $root.syft_proto.frameworks.torch.tensors.interpreters.v1.AdditiveSharingTensor.verify(message.child);
                                    if (error)
                                        return "child." + error;
                                }
                                return null;
                            };

                            /**
                             * Creates a FixedPrecisionTensor message from a plain object. Also converts values to their respective internal types.
                             * @function fromObject
                             * @memberof syft_proto.frameworks.torch.tensors.interpreters.v1.FixedPrecisionTensor
                             * @static
                             * @param {Object.<string,*>} object Plain object
                             * @returns {syft_proto.frameworks.torch.tensors.interpreters.v1.FixedPrecisionTensor} FixedPrecisionTensor
                             */
                            FixedPrecisionTensor.fromObject = function fromObject(object) {
                                if (object instanceof $root.syft_proto.frameworks.torch.tensors.interpreters.v1.FixedPrecisionTensor)
                                    return object;
                                var message = new $root.syft_proto.frameworks.torch.tensors.interpreters.v1.FixedPrecisionTensor();
                                if (object.id != null) {
                                    if (typeof object.id !== "object")
                                        throw TypeError(".syft_proto.frameworks.torch.tensors.interpreters.v1.FixedPrecisionTensor.id: object expected");
                                    message.id = $root.syft_proto.types.syft.v1.Id.fromObject(object.id);
                                }
                                if (object.field != null)
                                    message.field = String(object.field);
                                if (object.dtype != null)
                                    message.dtype = String(object.dtype);
                                if (object.base != null)
                                    message.base = object.base | 0;
                                if (object.kappa != null)
                                    message.kappa = object.kappa | 0;
                                if (object.precision_fractional != null)
                                    message.precision_fractional = object.precision_fractional | 0;
                                if (object.tags) {
                                    if (!Array.isArray(object.tags))
                                        throw TypeError(".syft_proto.frameworks.torch.tensors.interpreters.v1.FixedPrecisionTensor.tags: array expected");
                                    message.tags = [];
                                    for (var i = 0; i < object.tags.length; ++i)
                                        message.tags[i] = String(object.tags[i]);
                                }
                                if (object.description != null)
                                    message.description = String(object.description);
                                if (object.child != null) {
                                    if (typeof object.child !== "object")
                                        throw TypeError(".syft_proto.frameworks.torch.tensors.interpreters.v1.FixedPrecisionTensor.child: object expected");
                                    message.child = $root.syft_proto.frameworks.torch.tensors.interpreters.v1.AdditiveSharingTensor.fromObject(object.child);
                                }
                                return message;
                            };

                            /**
                             * Creates a plain object from a FixedPrecisionTensor message. Also converts values to other types if specified.
                             * @function toObject
                             * @memberof syft_proto.frameworks.torch.tensors.interpreters.v1.FixedPrecisionTensor
                             * @static
                             * @param {syft_proto.frameworks.torch.tensors.interpreters.v1.FixedPrecisionTensor} message FixedPrecisionTensor
                             * @param {$protobuf.IConversionOptions} [options] Conversion options
                             * @returns {Object.<string,*>} Plain object
                             */
                            FixedPrecisionTensor.toObject = function toObject(message, options) {
                                if (!options)
                                    options = {};
                                var object = {};
                                if (options.arrays || options.defaults)
                                    object.tags = [];
                                if (options.defaults) {
                                    object.id = null;
                                    object.field = "";
                                    object.dtype = "";
                                    object.base = 0;
                                    object.kappa = 0;
                                    object.precision_fractional = 0;
                                    object.description = "";
                                    object.child = null;
                                }
                                if (message.id != null && message.hasOwnProperty("id"))
                                    object.id = $root.syft_proto.types.syft.v1.Id.toObject(message.id, options);
                                if (message.field != null && message.hasOwnProperty("field"))
                                    object.field = message.field;
                                if (message.dtype != null && message.hasOwnProperty("dtype"))
                                    object.dtype = message.dtype;
                                if (message.base != null && message.hasOwnProperty("base"))
                                    object.base = message.base;
                                if (message.kappa != null && message.hasOwnProperty("kappa"))
                                    object.kappa = message.kappa;
                                if (message.precision_fractional != null && message.hasOwnProperty("precision_fractional"))
                                    object.precision_fractional = message.precision_fractional;
                                if (message.tags && message.tags.length) {
                                    object.tags = [];
                                    for (var j = 0; j < message.tags.length; ++j)
                                        object.tags[j] = message.tags[j];
                                }
                                if (message.description != null && message.hasOwnProperty("description"))
                                    object.description = message.description;
                                if (message.child != null && message.hasOwnProperty("child"))
                                    object.child = $root.syft_proto.frameworks.torch.tensors.interpreters.v1.AdditiveSharingTensor.toObject(message.child, options);
                                return object;
                            };

                            /**
                             * Converts this FixedPrecisionTensor to JSON.
                             * @function toJSON
                             * @memberof syft_proto.frameworks.torch.tensors.interpreters.v1.FixedPrecisionTensor
                             * @instance
                             * @returns {Object.<string,*>} JSON object
                             */
                            FixedPrecisionTensor.prototype.toJSON = function toJSON() {
                                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                            };

                            return FixedPrecisionTensor;
                        })();

                        return v1;
                    })();

                    return interpreters;
                })();

                return tensors;
            })();

            torch.fl = (function() {

                /**
                 * Namespace fl.
                 * @memberof syft_proto.frameworks.torch
                 * @namespace
                 */
                var fl = {};

                fl.v1 = (function() {

                    /**
                     * Namespace v1.
                     * @memberof syft_proto.frameworks.torch.fl
                     * @namespace
                     */
                    var v1 = {};

                    v1.BaseDataset = (function() {

                        /**
                         * Properties of a BaseDataset.
                         * @memberof syft_proto.frameworks.torch.fl.v1
                         * @interface IBaseDataset
                         * @property {syft_proto.types.torch.v1.ITorchTensor|null} [data] BaseDataset data
                         * @property {syft_proto.types.torch.v1.ITorchTensor|null} [targets] BaseDataset targets
                         * @property {syft_proto.types.syft.v1.IId|null} [id] BaseDataset id
                         * @property {Array.<string>|null} [tags] BaseDataset tags
                         * @property {string|null} [description] BaseDataset description
                         * @property {syft_proto.types.torch.v1.ITorchTensor|null} [child] BaseDataset child
                         */

                        /**
                         * Constructs a new BaseDataset.
                         * @memberof syft_proto.frameworks.torch.fl.v1
                         * @classdesc Represents a BaseDataset.
                         * @implements IBaseDataset
                         * @constructor
                         * @param {syft_proto.frameworks.torch.fl.v1.IBaseDataset=} [properties] Properties to set
                         */
                        function BaseDataset(properties) {
                            this.tags = [];
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * BaseDataset data.
                         * @member {syft_proto.types.torch.v1.ITorchTensor|null|undefined} data
                         * @memberof syft_proto.frameworks.torch.fl.v1.BaseDataset
                         * @instance
                         */
                        BaseDataset.prototype.data = null;

                        /**
                         * BaseDataset targets.
                         * @member {syft_proto.types.torch.v1.ITorchTensor|null|undefined} targets
                         * @memberof syft_proto.frameworks.torch.fl.v1.BaseDataset
                         * @instance
                         */
                        BaseDataset.prototype.targets = null;

                        /**
                         * BaseDataset id.
                         * @member {syft_proto.types.syft.v1.IId|null|undefined} id
                         * @memberof syft_proto.frameworks.torch.fl.v1.BaseDataset
                         * @instance
                         */
                        BaseDataset.prototype.id = null;

                        /**
                         * BaseDataset tags.
                         * @member {Array.<string>} tags
                         * @memberof syft_proto.frameworks.torch.fl.v1.BaseDataset
                         * @instance
                         */
                        BaseDataset.prototype.tags = $util.emptyArray;

                        /**
                         * BaseDataset description.
                         * @member {string} description
                         * @memberof syft_proto.frameworks.torch.fl.v1.BaseDataset
                         * @instance
                         */
                        BaseDataset.prototype.description = "";

                        /**
                         * BaseDataset child.
                         * @member {syft_proto.types.torch.v1.ITorchTensor|null|undefined} child
                         * @memberof syft_proto.frameworks.torch.fl.v1.BaseDataset
                         * @instance
                         */
                        BaseDataset.prototype.child = null;

                        /**
                         * Creates a new BaseDataset instance using the specified properties.
                         * @function create
                         * @memberof syft_proto.frameworks.torch.fl.v1.BaseDataset
                         * @static
                         * @param {syft_proto.frameworks.torch.fl.v1.IBaseDataset=} [properties] Properties to set
                         * @returns {syft_proto.frameworks.torch.fl.v1.BaseDataset} BaseDataset instance
                         */
                        BaseDataset.create = function create(properties) {
                            return new BaseDataset(properties);
                        };

                        /**
                         * Encodes the specified BaseDataset message. Does not implicitly {@link syft_proto.frameworks.torch.fl.v1.BaseDataset.verify|verify} messages.
                         * @function encode
                         * @memberof syft_proto.frameworks.torch.fl.v1.BaseDataset
                         * @static
                         * @param {syft_proto.frameworks.torch.fl.v1.IBaseDataset} message BaseDataset message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        BaseDataset.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.data != null && message.hasOwnProperty("data"))
                                $root.syft_proto.types.torch.v1.TorchTensor.encode(message.data, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                            if (message.targets != null && message.hasOwnProperty("targets"))
                                $root.syft_proto.types.torch.v1.TorchTensor.encode(message.targets, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                            if (message.id != null && message.hasOwnProperty("id"))
                                $root.syft_proto.types.syft.v1.Id.encode(message.id, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                            if (message.tags != null && message.tags.length)
                                for (var i = 0; i < message.tags.length; ++i)
                                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.tags[i]);
                            if (message.description != null && message.hasOwnProperty("description"))
                                writer.uint32(/* id 5, wireType 2 =*/42).string(message.description);
                            if (message.child != null && message.hasOwnProperty("child"))
                                $root.syft_proto.types.torch.v1.TorchTensor.encode(message.child, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                            return writer;
                        };

                        /**
                         * Encodes the specified BaseDataset message, length delimited. Does not implicitly {@link syft_proto.frameworks.torch.fl.v1.BaseDataset.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof syft_proto.frameworks.torch.fl.v1.BaseDataset
                         * @static
                         * @param {syft_proto.frameworks.torch.fl.v1.IBaseDataset} message BaseDataset message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        BaseDataset.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes a BaseDataset message from the specified reader or buffer.
                         * @function decode
                         * @memberof syft_proto.frameworks.torch.fl.v1.BaseDataset
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {syft_proto.frameworks.torch.fl.v1.BaseDataset} BaseDataset
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        BaseDataset.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.syft_proto.frameworks.torch.fl.v1.BaseDataset();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.data = $root.syft_proto.types.torch.v1.TorchTensor.decode(reader, reader.uint32());
                                    break;
                                case 2:
                                    message.targets = $root.syft_proto.types.torch.v1.TorchTensor.decode(reader, reader.uint32());
                                    break;
                                case 3:
                                    message.id = $root.syft_proto.types.syft.v1.Id.decode(reader, reader.uint32());
                                    break;
                                case 4:
                                    if (!(message.tags && message.tags.length))
                                        message.tags = [];
                                    message.tags.push(reader.string());
                                    break;
                                case 5:
                                    message.description = reader.string();
                                    break;
                                case 6:
                                    message.child = $root.syft_proto.types.torch.v1.TorchTensor.decode(reader, reader.uint32());
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes a BaseDataset message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof syft_proto.frameworks.torch.fl.v1.BaseDataset
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {syft_proto.frameworks.torch.fl.v1.BaseDataset} BaseDataset
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        BaseDataset.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies a BaseDataset message.
                         * @function verify
                         * @memberof syft_proto.frameworks.torch.fl.v1.BaseDataset
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        BaseDataset.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.data != null && message.hasOwnProperty("data")) {
                                var error = $root.syft_proto.types.torch.v1.TorchTensor.verify(message.data);
                                if (error)
                                    return "data." + error;
                            }
                            if (message.targets != null && message.hasOwnProperty("targets")) {
                                var error = $root.syft_proto.types.torch.v1.TorchTensor.verify(message.targets);
                                if (error)
                                    return "targets." + error;
                            }
                            if (message.id != null && message.hasOwnProperty("id")) {
                                var error = $root.syft_proto.types.syft.v1.Id.verify(message.id);
                                if (error)
                                    return "id." + error;
                            }
                            if (message.tags != null && message.hasOwnProperty("tags")) {
                                if (!Array.isArray(message.tags))
                                    return "tags: array expected";
                                for (var i = 0; i < message.tags.length; ++i)
                                    if (!$util.isString(message.tags[i]))
                                        return "tags: string[] expected";
                            }
                            if (message.description != null && message.hasOwnProperty("description"))
                                if (!$util.isString(message.description))
                                    return "description: string expected";
                            if (message.child != null && message.hasOwnProperty("child")) {
                                var error = $root.syft_proto.types.torch.v1.TorchTensor.verify(message.child);
                                if (error)
                                    return "child." + error;
                            }
                            return null;
                        };

                        /**
                         * Creates a BaseDataset message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof syft_proto.frameworks.torch.fl.v1.BaseDataset
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {syft_proto.frameworks.torch.fl.v1.BaseDataset} BaseDataset
                         */
                        BaseDataset.fromObject = function fromObject(object) {
                            if (object instanceof $root.syft_proto.frameworks.torch.fl.v1.BaseDataset)
                                return object;
                            var message = new $root.syft_proto.frameworks.torch.fl.v1.BaseDataset();
                            if (object.data != null) {
                                if (typeof object.data !== "object")
                                    throw TypeError(".syft_proto.frameworks.torch.fl.v1.BaseDataset.data: object expected");
                                message.data = $root.syft_proto.types.torch.v1.TorchTensor.fromObject(object.data);
                            }
                            if (object.targets != null) {
                                if (typeof object.targets !== "object")
                                    throw TypeError(".syft_proto.frameworks.torch.fl.v1.BaseDataset.targets: object expected");
                                message.targets = $root.syft_proto.types.torch.v1.TorchTensor.fromObject(object.targets);
                            }
                            if (object.id != null) {
                                if (typeof object.id !== "object")
                                    throw TypeError(".syft_proto.frameworks.torch.fl.v1.BaseDataset.id: object expected");
                                message.id = $root.syft_proto.types.syft.v1.Id.fromObject(object.id);
                            }
                            if (object.tags) {
                                if (!Array.isArray(object.tags))
                                    throw TypeError(".syft_proto.frameworks.torch.fl.v1.BaseDataset.tags: array expected");
                                message.tags = [];
                                for (var i = 0; i < object.tags.length; ++i)
                                    message.tags[i] = String(object.tags[i]);
                            }
                            if (object.description != null)
                                message.description = String(object.description);
                            if (object.child != null) {
                                if (typeof object.child !== "object")
                                    throw TypeError(".syft_proto.frameworks.torch.fl.v1.BaseDataset.child: object expected");
                                message.child = $root.syft_proto.types.torch.v1.TorchTensor.fromObject(object.child);
                            }
                            return message;
                        };

                        /**
                         * Creates a plain object from a BaseDataset message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof syft_proto.frameworks.torch.fl.v1.BaseDataset
                         * @static
                         * @param {syft_proto.frameworks.torch.fl.v1.BaseDataset} message BaseDataset
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        BaseDataset.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.arrays || options.defaults)
                                object.tags = [];
                            if (options.defaults) {
                                object.data = null;
                                object.targets = null;
                                object.id = null;
                                object.description = "";
                                object.child = null;
                            }
                            if (message.data != null && message.hasOwnProperty("data"))
                                object.data = $root.syft_proto.types.torch.v1.TorchTensor.toObject(message.data, options);
                            if (message.targets != null && message.hasOwnProperty("targets"))
                                object.targets = $root.syft_proto.types.torch.v1.TorchTensor.toObject(message.targets, options);
                            if (message.id != null && message.hasOwnProperty("id"))
                                object.id = $root.syft_proto.types.syft.v1.Id.toObject(message.id, options);
                            if (message.tags && message.tags.length) {
                                object.tags = [];
                                for (var j = 0; j < message.tags.length; ++j)
                                    object.tags[j] = message.tags[j];
                            }
                            if (message.description != null && message.hasOwnProperty("description"))
                                object.description = message.description;
                            if (message.child != null && message.hasOwnProperty("child"))
                                object.child = $root.syft_proto.types.torch.v1.TorchTensor.toObject(message.child, options);
                            return object;
                        };

                        /**
                         * Converts this BaseDataset to JSON.
                         * @function toJSON
                         * @memberof syft_proto.frameworks.torch.fl.v1.BaseDataset
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        BaseDataset.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        return BaseDataset;
                    })();

                    return v1;
                })();

                return fl;
            })();

            return torch;
        })();

        return frameworks;
    })();

    syft_proto.messaging = (function() {

        /**
         * Namespace messaging.
         * @memberof syft_proto
         * @namespace
         */
        var messaging = {};

        messaging.v1 = (function() {

            /**
             * Namespace v1.
             * @memberof syft_proto.messaging
             * @namespace
             */
            var v1 = {};

            v1.String = (function() {

                /**
                 * Properties of a String.
                 * @memberof syft_proto.messaging.v1
                 * @interface IString
                 * @property {string|null} [child] String child
                 * @property {Array.<string>|null} [tags] String tags
                 * @property {string|null} [description] String description
                 */

                /**
                 * Constructs a new String.
                 * @memberof syft_proto.messaging.v1
                 * @classdesc Represents a String.
                 * @implements IString
                 * @constructor
                 * @param {syft_proto.messaging.v1.IString=} [properties] Properties to set
                 */
                function String(properties) {
                    this.tags = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * String child.
                 * @member {string} child
                 * @memberof syft_proto.messaging.v1.String
                 * @instance
                 */
                String.prototype.child = "";

                /**
                 * String tags.
                 * @member {Array.<string>} tags
                 * @memberof syft_proto.messaging.v1.String
                 * @instance
                 */
                String.prototype.tags = $util.emptyArray;

                /**
                 * String description.
                 * @member {string} description
                 * @memberof syft_proto.messaging.v1.String
                 * @instance
                 */
                String.prototype.description = "";

                /**
                 * Creates a new String instance using the specified properties.
                 * @function create
                 * @memberof syft_proto.messaging.v1.String
                 * @static
                 * @param {syft_proto.messaging.v1.IString=} [properties] Properties to set
                 * @returns {syft_proto.messaging.v1.String} String instance
                 */
                String.create = function create(properties) {
                    return new String(properties);
                };

                /**
                 * Encodes the specified String message. Does not implicitly {@link syft_proto.messaging.v1.String.verify|verify} messages.
                 * @function encode
                 * @memberof syft_proto.messaging.v1.String
                 * @static
                 * @param {syft_proto.messaging.v1.IString} message String message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                String.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.child != null && message.hasOwnProperty("child"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.child);
                    if (message.tags != null && message.tags.length)
                        for (var i = 0; i < message.tags.length; ++i)
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.tags[i]);
                    if (message.description != null && message.hasOwnProperty("description"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.description);
                    return writer;
                };

                /**
                 * Encodes the specified String message, length delimited. Does not implicitly {@link syft_proto.messaging.v1.String.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof syft_proto.messaging.v1.String
                 * @static
                 * @param {syft_proto.messaging.v1.IString} message String message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                String.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a String message from the specified reader or buffer.
                 * @function decode
                 * @memberof syft_proto.messaging.v1.String
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {syft_proto.messaging.v1.String} String
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                String.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.syft_proto.messaging.v1.String();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.child = reader.string();
                            break;
                        case 2:
                            if (!(message.tags && message.tags.length))
                                message.tags = [];
                            message.tags.push(reader.string());
                            break;
                        case 3:
                            message.description = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a String message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof syft_proto.messaging.v1.String
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {syft_proto.messaging.v1.String} String
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                String.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a String message.
                 * @function verify
                 * @memberof syft_proto.messaging.v1.String
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                String.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.child != null && message.hasOwnProperty("child"))
                        if (!$util.isString(message.child))
                            return "child: string expected";
                    if (message.tags != null && message.hasOwnProperty("tags")) {
                        if (!Array.isArray(message.tags))
                            return "tags: array expected";
                        for (var i = 0; i < message.tags.length; ++i)
                            if (!$util.isString(message.tags[i]))
                                return "tags: string[] expected";
                    }
                    if (message.description != null && message.hasOwnProperty("description"))
                        if (!$util.isString(message.description))
                            return "description: string expected";
                    return null;
                };

                /**
                 * Creates a String message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof syft_proto.messaging.v1.String
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {syft_proto.messaging.v1.String} String
                 */
                String.fromObject = function fromObject(object) {
                    if (object instanceof $root.syft_proto.messaging.v1.String)
                        return object;
                    var message = new $root.syft_proto.messaging.v1.String();
                    if (object.child != null)
                        message.child = String(object.child);
                    if (object.tags) {
                        if (!Array.isArray(object.tags))
                            throw TypeError(".syft_proto.messaging.v1.String.tags: array expected");
                        message.tags = [];
                        for (var i = 0; i < object.tags.length; ++i)
                            message.tags[i] = String(object.tags[i]);
                    }
                    if (object.description != null)
                        message.description = String(object.description);
                    return message;
                };

                /**
                 * Creates a plain object from a String message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof syft_proto.messaging.v1.String
                 * @static
                 * @param {syft_proto.messaging.v1.String} message String
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                String.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.tags = [];
                    if (options.defaults) {
                        object.child = "";
                        object.description = "";
                    }
                    if (message.child != null && message.hasOwnProperty("child"))
                        object.child = message.child;
                    if (message.tags && message.tags.length) {
                        object.tags = [];
                        for (var j = 0; j < message.tags.length; ++j)
                            object.tags[j] = message.tags[j];
                    }
                    if (message.description != null && message.hasOwnProperty("description"))
                        object.description = message.description;
                    return object;
                };

                /**
                 * Converts this String to JSON.
                 * @function toJSON
                 * @memberof syft_proto.messaging.v1.String
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                String.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return String;
            })();

            v1.SyftMessage = (function() {

                /**
                 * Properties of a SyftMessage.
                 * @memberof syft_proto.messaging.v1
                 * @interface ISyftMessage
                 * @property {google.protobuf.IEmpty|null} [contents_empty_msg] SyftMessage contents_empty_msg
                 * @property {syft_proto.messaging.v1.IForceObjectDeleteMessage|null} [contents_delete_msg] SyftMessage contents_delete_msg
                 * @property {syft_proto.messaging.v1.IGetShapeMessage|null} [contents_get_shape_msg] SyftMessage contents_get_shape_msg
                 * @property {syft_proto.messaging.v1.IIsNoneMessage|null} [contents_is_none_msg] SyftMessage contents_is_none_msg
                 * @property {syft_proto.messaging.v1.IObjectMessage|null} [contents_object_msg] SyftMessage contents_object_msg
                 * @property {syft_proto.messaging.v1.IObjectRequestMessage|null} [contents_object_request_msg] SyftMessage contents_object_request_msg
                 * @property {syft_proto.messaging.v1.ITensorCommandMessage|null} [contents_tensor_cmd_msg] SyftMessage contents_tensor_cmd_msg
                 * @property {syft_proto.messaging.v1.IPlanCommandMessage|null} [contents_plan_cmd_msg] SyftMessage contents_plan_cmd_msg
                 * @property {syft_proto.messaging.v1.IWorkerCommandMessage|null} [contents_worker_cmd_msg] SyftMessage contents_worker_cmd_msg
                 * @property {syft_proto.messaging.v1.ISearchMessage|null} [contents_search_msg] SyftMessage contents_search_msg
                 */

                /**
                 * Constructs a new SyftMessage.
                 * @memberof syft_proto.messaging.v1
                 * @classdesc Represents a SyftMessage.
                 * @implements ISyftMessage
                 * @constructor
                 * @param {syft_proto.messaging.v1.ISyftMessage=} [properties] Properties to set
                 */
                function SyftMessage(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * SyftMessage contents_empty_msg.
                 * @member {google.protobuf.IEmpty|null|undefined} contents_empty_msg
                 * @memberof syft_proto.messaging.v1.SyftMessage
                 * @instance
                 */
                SyftMessage.prototype.contents_empty_msg = null;

                /**
                 * SyftMessage contents_delete_msg.
                 * @member {syft_proto.messaging.v1.IForceObjectDeleteMessage|null|undefined} contents_delete_msg
                 * @memberof syft_proto.messaging.v1.SyftMessage
                 * @instance
                 */
                SyftMessage.prototype.contents_delete_msg = null;

                /**
                 * SyftMessage contents_get_shape_msg.
                 * @member {syft_proto.messaging.v1.IGetShapeMessage|null|undefined} contents_get_shape_msg
                 * @memberof syft_proto.messaging.v1.SyftMessage
                 * @instance
                 */
                SyftMessage.prototype.contents_get_shape_msg = null;

                /**
                 * SyftMessage contents_is_none_msg.
                 * @member {syft_proto.messaging.v1.IIsNoneMessage|null|undefined} contents_is_none_msg
                 * @memberof syft_proto.messaging.v1.SyftMessage
                 * @instance
                 */
                SyftMessage.prototype.contents_is_none_msg = null;

                /**
                 * SyftMessage contents_object_msg.
                 * @member {syft_proto.messaging.v1.IObjectMessage|null|undefined} contents_object_msg
                 * @memberof syft_proto.messaging.v1.SyftMessage
                 * @instance
                 */
                SyftMessage.prototype.contents_object_msg = null;

                /**
                 * SyftMessage contents_object_request_msg.
                 * @member {syft_proto.messaging.v1.IObjectRequestMessage|null|undefined} contents_object_request_msg
                 * @memberof syft_proto.messaging.v1.SyftMessage
                 * @instance
                 */
                SyftMessage.prototype.contents_object_request_msg = null;

                /**
                 * SyftMessage contents_tensor_cmd_msg.
                 * @member {syft_proto.messaging.v1.ITensorCommandMessage|null|undefined} contents_tensor_cmd_msg
                 * @memberof syft_proto.messaging.v1.SyftMessage
                 * @instance
                 */
                SyftMessage.prototype.contents_tensor_cmd_msg = null;

                /**
                 * SyftMessage contents_plan_cmd_msg.
                 * @member {syft_proto.messaging.v1.IPlanCommandMessage|null|undefined} contents_plan_cmd_msg
                 * @memberof syft_proto.messaging.v1.SyftMessage
                 * @instance
                 */
                SyftMessage.prototype.contents_plan_cmd_msg = null;

                /**
                 * SyftMessage contents_worker_cmd_msg.
                 * @member {syft_proto.messaging.v1.IWorkerCommandMessage|null|undefined} contents_worker_cmd_msg
                 * @memberof syft_proto.messaging.v1.SyftMessage
                 * @instance
                 */
                SyftMessage.prototype.contents_worker_cmd_msg = null;

                /**
                 * SyftMessage contents_search_msg.
                 * @member {syft_proto.messaging.v1.ISearchMessage|null|undefined} contents_search_msg
                 * @memberof syft_proto.messaging.v1.SyftMessage
                 * @instance
                 */
                SyftMessage.prototype.contents_search_msg = null;

                // OneOf field names bound to virtual getters and setters
                var $oneOfFields;

                /**
                 * SyftMessage contents.
                 * @member {"contents_empty_msg"|"contents_delete_msg"|"contents_get_shape_msg"|"contents_is_none_msg"|"contents_object_msg"|"contents_object_request_msg"|"contents_tensor_cmd_msg"|"contents_plan_cmd_msg"|"contents_worker_cmd_msg"|"contents_search_msg"|undefined} contents
                 * @memberof syft_proto.messaging.v1.SyftMessage
                 * @instance
                 */
                Object.defineProperty(SyftMessage.prototype, "contents", {
                    get: $util.oneOfGetter($oneOfFields = ["contents_empty_msg", "contents_delete_msg", "contents_get_shape_msg", "contents_is_none_msg", "contents_object_msg", "contents_object_request_msg", "contents_tensor_cmd_msg", "contents_plan_cmd_msg", "contents_worker_cmd_msg", "contents_search_msg"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                /**
                 * Creates a new SyftMessage instance using the specified properties.
                 * @function create
                 * @memberof syft_proto.messaging.v1.SyftMessage
                 * @static
                 * @param {syft_proto.messaging.v1.ISyftMessage=} [properties] Properties to set
                 * @returns {syft_proto.messaging.v1.SyftMessage} SyftMessage instance
                 */
                SyftMessage.create = function create(properties) {
                    return new SyftMessage(properties);
                };

                /**
                 * Encodes the specified SyftMessage message. Does not implicitly {@link syft_proto.messaging.v1.SyftMessage.verify|verify} messages.
                 * @function encode
                 * @memberof syft_proto.messaging.v1.SyftMessage
                 * @static
                 * @param {syft_proto.messaging.v1.ISyftMessage} message SyftMessage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SyftMessage.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.contents_empty_msg != null && message.hasOwnProperty("contents_empty_msg"))
                        $root.google.protobuf.Empty.encode(message.contents_empty_msg, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.contents_delete_msg != null && message.hasOwnProperty("contents_delete_msg"))
                        $root.syft_proto.messaging.v1.ForceObjectDeleteMessage.encode(message.contents_delete_msg, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.contents_get_shape_msg != null && message.hasOwnProperty("contents_get_shape_msg"))
                        $root.syft_proto.messaging.v1.GetShapeMessage.encode(message.contents_get_shape_msg, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    if (message.contents_is_none_msg != null && message.hasOwnProperty("contents_is_none_msg"))
                        $root.syft_proto.messaging.v1.IsNoneMessage.encode(message.contents_is_none_msg, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    if (message.contents_object_msg != null && message.hasOwnProperty("contents_object_msg"))
                        $root.syft_proto.messaging.v1.ObjectMessage.encode(message.contents_object_msg, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                    if (message.contents_object_request_msg != null && message.hasOwnProperty("contents_object_request_msg"))
                        $root.syft_proto.messaging.v1.ObjectRequestMessage.encode(message.contents_object_request_msg, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                    if (message.contents_tensor_cmd_msg != null && message.hasOwnProperty("contents_tensor_cmd_msg"))
                        $root.syft_proto.messaging.v1.TensorCommandMessage.encode(message.contents_tensor_cmd_msg, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                    if (message.contents_plan_cmd_msg != null && message.hasOwnProperty("contents_plan_cmd_msg"))
                        $root.syft_proto.messaging.v1.PlanCommandMessage.encode(message.contents_plan_cmd_msg, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                    if (message.contents_worker_cmd_msg != null && message.hasOwnProperty("contents_worker_cmd_msg"))
                        $root.syft_proto.messaging.v1.WorkerCommandMessage.encode(message.contents_worker_cmd_msg, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
                    if (message.contents_search_msg != null && message.hasOwnProperty("contents_search_msg"))
                        $root.syft_proto.messaging.v1.SearchMessage.encode(message.contents_search_msg, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified SyftMessage message, length delimited. Does not implicitly {@link syft_proto.messaging.v1.SyftMessage.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof syft_proto.messaging.v1.SyftMessage
                 * @static
                 * @param {syft_proto.messaging.v1.ISyftMessage} message SyftMessage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SyftMessage.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a SyftMessage message from the specified reader or buffer.
                 * @function decode
                 * @memberof syft_proto.messaging.v1.SyftMessage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {syft_proto.messaging.v1.SyftMessage} SyftMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SyftMessage.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.syft_proto.messaging.v1.SyftMessage();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.contents_empty_msg = $root.google.protobuf.Empty.decode(reader, reader.uint32());
                            break;
                        case 2:
                            message.contents_delete_msg = $root.syft_proto.messaging.v1.ForceObjectDeleteMessage.decode(reader, reader.uint32());
                            break;
                        case 3:
                            message.contents_get_shape_msg = $root.syft_proto.messaging.v1.GetShapeMessage.decode(reader, reader.uint32());
                            break;
                        case 4:
                            message.contents_is_none_msg = $root.syft_proto.messaging.v1.IsNoneMessage.decode(reader, reader.uint32());
                            break;
                        case 5:
                            message.contents_object_msg = $root.syft_proto.messaging.v1.ObjectMessage.decode(reader, reader.uint32());
                            break;
                        case 6:
                            message.contents_object_request_msg = $root.syft_proto.messaging.v1.ObjectRequestMessage.decode(reader, reader.uint32());
                            break;
                        case 7:
                            message.contents_tensor_cmd_msg = $root.syft_proto.messaging.v1.TensorCommandMessage.decode(reader, reader.uint32());
                            break;
                        case 8:
                            message.contents_plan_cmd_msg = $root.syft_proto.messaging.v1.PlanCommandMessage.decode(reader, reader.uint32());
                            break;
                        case 9:
                            message.contents_worker_cmd_msg = $root.syft_proto.messaging.v1.WorkerCommandMessage.decode(reader, reader.uint32());
                            break;
                        case 10:
                            message.contents_search_msg = $root.syft_proto.messaging.v1.SearchMessage.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a SyftMessage message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof syft_proto.messaging.v1.SyftMessage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {syft_proto.messaging.v1.SyftMessage} SyftMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SyftMessage.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a SyftMessage message.
                 * @function verify
                 * @memberof syft_proto.messaging.v1.SyftMessage
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                SyftMessage.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    var properties = {};
                    if (message.contents_empty_msg != null && message.hasOwnProperty("contents_empty_msg")) {
                        properties.contents = 1;
                        {
                            var error = $root.google.protobuf.Empty.verify(message.contents_empty_msg);
                            if (error)
                                return "contents_empty_msg." + error;
                        }
                    }
                    if (message.contents_delete_msg != null && message.hasOwnProperty("contents_delete_msg")) {
                        if (properties.contents === 1)
                            return "contents: multiple values";
                        properties.contents = 1;
                        {
                            var error = $root.syft_proto.messaging.v1.ForceObjectDeleteMessage.verify(message.contents_delete_msg);
                            if (error)
                                return "contents_delete_msg." + error;
                        }
                    }
                    if (message.contents_get_shape_msg != null && message.hasOwnProperty("contents_get_shape_msg")) {
                        if (properties.contents === 1)
                            return "contents: multiple values";
                        properties.contents = 1;
                        {
                            var error = $root.syft_proto.messaging.v1.GetShapeMessage.verify(message.contents_get_shape_msg);
                            if (error)
                                return "contents_get_shape_msg." + error;
                        }
                    }
                    if (message.contents_is_none_msg != null && message.hasOwnProperty("contents_is_none_msg")) {
                        if (properties.contents === 1)
                            return "contents: multiple values";
                        properties.contents = 1;
                        {
                            var error = $root.syft_proto.messaging.v1.IsNoneMessage.verify(message.contents_is_none_msg);
                            if (error)
                                return "contents_is_none_msg." + error;
                        }
                    }
                    if (message.contents_object_msg != null && message.hasOwnProperty("contents_object_msg")) {
                        if (properties.contents === 1)
                            return "contents: multiple values";
                        properties.contents = 1;
                        {
                            var error = $root.syft_proto.messaging.v1.ObjectMessage.verify(message.contents_object_msg);
                            if (error)
                                return "contents_object_msg." + error;
                        }
                    }
                    if (message.contents_object_request_msg != null && message.hasOwnProperty("contents_object_request_msg")) {
                        if (properties.contents === 1)
                            return "contents: multiple values";
                        properties.contents = 1;
                        {
                            var error = $root.syft_proto.messaging.v1.ObjectRequestMessage.verify(message.contents_object_request_msg);
                            if (error)
                                return "contents_object_request_msg." + error;
                        }
                    }
                    if (message.contents_tensor_cmd_msg != null && message.hasOwnProperty("contents_tensor_cmd_msg")) {
                        if (properties.contents === 1)
                            return "contents: multiple values";
                        properties.contents = 1;
                        {
                            var error = $root.syft_proto.messaging.v1.TensorCommandMessage.verify(message.contents_tensor_cmd_msg);
                            if (error)
                                return "contents_tensor_cmd_msg." + error;
                        }
                    }
                    if (message.contents_plan_cmd_msg != null && message.hasOwnProperty("contents_plan_cmd_msg")) {
                        if (properties.contents === 1)
                            return "contents: multiple values";
                        properties.contents = 1;
                        {
                            var error = $root.syft_proto.messaging.v1.PlanCommandMessage.verify(message.contents_plan_cmd_msg);
                            if (error)
                                return "contents_plan_cmd_msg." + error;
                        }
                    }
                    if (message.contents_worker_cmd_msg != null && message.hasOwnProperty("contents_worker_cmd_msg")) {
                        if (properties.contents === 1)
                            return "contents: multiple values";
                        properties.contents = 1;
                        {
                            var error = $root.syft_proto.messaging.v1.WorkerCommandMessage.verify(message.contents_worker_cmd_msg);
                            if (error)
                                return "contents_worker_cmd_msg." + error;
                        }
                    }
                    if (message.contents_search_msg != null && message.hasOwnProperty("contents_search_msg")) {
                        if (properties.contents === 1)
                            return "contents: multiple values";
                        properties.contents = 1;
                        {
                            var error = $root.syft_proto.messaging.v1.SearchMessage.verify(message.contents_search_msg);
                            if (error)
                                return "contents_search_msg." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates a SyftMessage message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof syft_proto.messaging.v1.SyftMessage
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {syft_proto.messaging.v1.SyftMessage} SyftMessage
                 */
                SyftMessage.fromObject = function fromObject(object) {
                    if (object instanceof $root.syft_proto.messaging.v1.SyftMessage)
                        return object;
                    var message = new $root.syft_proto.messaging.v1.SyftMessage();
                    if (object.contents_empty_msg != null) {
                        if (typeof object.contents_empty_msg !== "object")
                            throw TypeError(".syft_proto.messaging.v1.SyftMessage.contents_empty_msg: object expected");
                        message.contents_empty_msg = $root.google.protobuf.Empty.fromObject(object.contents_empty_msg);
                    }
                    if (object.contents_delete_msg != null) {
                        if (typeof object.contents_delete_msg !== "object")
                            throw TypeError(".syft_proto.messaging.v1.SyftMessage.contents_delete_msg: object expected");
                        message.contents_delete_msg = $root.syft_proto.messaging.v1.ForceObjectDeleteMessage.fromObject(object.contents_delete_msg);
                    }
                    if (object.contents_get_shape_msg != null) {
                        if (typeof object.contents_get_shape_msg !== "object")
                            throw TypeError(".syft_proto.messaging.v1.SyftMessage.contents_get_shape_msg: object expected");
                        message.contents_get_shape_msg = $root.syft_proto.messaging.v1.GetShapeMessage.fromObject(object.contents_get_shape_msg);
                    }
                    if (object.contents_is_none_msg != null) {
                        if (typeof object.contents_is_none_msg !== "object")
                            throw TypeError(".syft_proto.messaging.v1.SyftMessage.contents_is_none_msg: object expected");
                        message.contents_is_none_msg = $root.syft_proto.messaging.v1.IsNoneMessage.fromObject(object.contents_is_none_msg);
                    }
                    if (object.contents_object_msg != null) {
                        if (typeof object.contents_object_msg !== "object")
                            throw TypeError(".syft_proto.messaging.v1.SyftMessage.contents_object_msg: object expected");
                        message.contents_object_msg = $root.syft_proto.messaging.v1.ObjectMessage.fromObject(object.contents_object_msg);
                    }
                    if (object.contents_object_request_msg != null) {
                        if (typeof object.contents_object_request_msg !== "object")
                            throw TypeError(".syft_proto.messaging.v1.SyftMessage.contents_object_request_msg: object expected");
                        message.contents_object_request_msg = $root.syft_proto.messaging.v1.ObjectRequestMessage.fromObject(object.contents_object_request_msg);
                    }
                    if (object.contents_tensor_cmd_msg != null) {
                        if (typeof object.contents_tensor_cmd_msg !== "object")
                            throw TypeError(".syft_proto.messaging.v1.SyftMessage.contents_tensor_cmd_msg: object expected");
                        message.contents_tensor_cmd_msg = $root.syft_proto.messaging.v1.TensorCommandMessage.fromObject(object.contents_tensor_cmd_msg);
                    }
                    if (object.contents_plan_cmd_msg != null) {
                        if (typeof object.contents_plan_cmd_msg !== "object")
                            throw TypeError(".syft_proto.messaging.v1.SyftMessage.contents_plan_cmd_msg: object expected");
                        message.contents_plan_cmd_msg = $root.syft_proto.messaging.v1.PlanCommandMessage.fromObject(object.contents_plan_cmd_msg);
                    }
                    if (object.contents_worker_cmd_msg != null) {
                        if (typeof object.contents_worker_cmd_msg !== "object")
                            throw TypeError(".syft_proto.messaging.v1.SyftMessage.contents_worker_cmd_msg: object expected");
                        message.contents_worker_cmd_msg = $root.syft_proto.messaging.v1.WorkerCommandMessage.fromObject(object.contents_worker_cmd_msg);
                    }
                    if (object.contents_search_msg != null) {
                        if (typeof object.contents_search_msg !== "object")
                            throw TypeError(".syft_proto.messaging.v1.SyftMessage.contents_search_msg: object expected");
                        message.contents_search_msg = $root.syft_proto.messaging.v1.SearchMessage.fromObject(object.contents_search_msg);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a SyftMessage message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof syft_proto.messaging.v1.SyftMessage
                 * @static
                 * @param {syft_proto.messaging.v1.SyftMessage} message SyftMessage
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                SyftMessage.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (message.contents_empty_msg != null && message.hasOwnProperty("contents_empty_msg")) {
                        object.contents_empty_msg = $root.google.protobuf.Empty.toObject(message.contents_empty_msg, options);
                        if (options.oneofs)
                            object.contents = "contents_empty_msg";
                    }
                    if (message.contents_delete_msg != null && message.hasOwnProperty("contents_delete_msg")) {
                        object.contents_delete_msg = $root.syft_proto.messaging.v1.ForceObjectDeleteMessage.toObject(message.contents_delete_msg, options);
                        if (options.oneofs)
                            object.contents = "contents_delete_msg";
                    }
                    if (message.contents_get_shape_msg != null && message.hasOwnProperty("contents_get_shape_msg")) {
                        object.contents_get_shape_msg = $root.syft_proto.messaging.v1.GetShapeMessage.toObject(message.contents_get_shape_msg, options);
                        if (options.oneofs)
                            object.contents = "contents_get_shape_msg";
                    }
                    if (message.contents_is_none_msg != null && message.hasOwnProperty("contents_is_none_msg")) {
                        object.contents_is_none_msg = $root.syft_proto.messaging.v1.IsNoneMessage.toObject(message.contents_is_none_msg, options);
                        if (options.oneofs)
                            object.contents = "contents_is_none_msg";
                    }
                    if (message.contents_object_msg != null && message.hasOwnProperty("contents_object_msg")) {
                        object.contents_object_msg = $root.syft_proto.messaging.v1.ObjectMessage.toObject(message.contents_object_msg, options);
                        if (options.oneofs)
                            object.contents = "contents_object_msg";
                    }
                    if (message.contents_object_request_msg != null && message.hasOwnProperty("contents_object_request_msg")) {
                        object.contents_object_request_msg = $root.syft_proto.messaging.v1.ObjectRequestMessage.toObject(message.contents_object_request_msg, options);
                        if (options.oneofs)
                            object.contents = "contents_object_request_msg";
                    }
                    if (message.contents_tensor_cmd_msg != null && message.hasOwnProperty("contents_tensor_cmd_msg")) {
                        object.contents_tensor_cmd_msg = $root.syft_proto.messaging.v1.TensorCommandMessage.toObject(message.contents_tensor_cmd_msg, options);
                        if (options.oneofs)
                            object.contents = "contents_tensor_cmd_msg";
                    }
                    if (message.contents_plan_cmd_msg != null && message.hasOwnProperty("contents_plan_cmd_msg")) {
                        object.contents_plan_cmd_msg = $root.syft_proto.messaging.v1.PlanCommandMessage.toObject(message.contents_plan_cmd_msg, options);
                        if (options.oneofs)
                            object.contents = "contents_plan_cmd_msg";
                    }
                    if (message.contents_worker_cmd_msg != null && message.hasOwnProperty("contents_worker_cmd_msg")) {
                        object.contents_worker_cmd_msg = $root.syft_proto.messaging.v1.WorkerCommandMessage.toObject(message.contents_worker_cmd_msg, options);
                        if (options.oneofs)
                            object.contents = "contents_worker_cmd_msg";
                    }
                    if (message.contents_search_msg != null && message.hasOwnProperty("contents_search_msg")) {
                        object.contents_search_msg = $root.syft_proto.messaging.v1.SearchMessage.toObject(message.contents_search_msg, options);
                        if (options.oneofs)
                            object.contents = "contents_search_msg";
                    }
                    return object;
                };

                /**
                 * Converts this SyftMessage to JSON.
                 * @function toJSON
                 * @memberof syft_proto.messaging.v1.SyftMessage
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                SyftMessage.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return SyftMessage;
            })();

            v1.IsNoneMessage = (function() {

                /**
                 * Properties of an IsNoneMessage.
                 * @memberof syft_proto.messaging.v1
                 * @interface IIsNoneMessage
                 * @property {syft_proto.types.syft.v1.IId|null} [object_id] IsNoneMessage object_id
                 */

                /**
                 * Constructs a new IsNoneMessage.
                 * @memberof syft_proto.messaging.v1
                 * @classdesc Represents an IsNoneMessage.
                 * @implements IIsNoneMessage
                 * @constructor
                 * @param {syft_proto.messaging.v1.IIsNoneMessage=} [properties] Properties to set
                 */
                function IsNoneMessage(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * IsNoneMessage object_id.
                 * @member {syft_proto.types.syft.v1.IId|null|undefined} object_id
                 * @memberof syft_proto.messaging.v1.IsNoneMessage
                 * @instance
                 */
                IsNoneMessage.prototype.object_id = null;

                /**
                 * Creates a new IsNoneMessage instance using the specified properties.
                 * @function create
                 * @memberof syft_proto.messaging.v1.IsNoneMessage
                 * @static
                 * @param {syft_proto.messaging.v1.IIsNoneMessage=} [properties] Properties to set
                 * @returns {syft_proto.messaging.v1.IsNoneMessage} IsNoneMessage instance
                 */
                IsNoneMessage.create = function create(properties) {
                    return new IsNoneMessage(properties);
                };

                /**
                 * Encodes the specified IsNoneMessage message. Does not implicitly {@link syft_proto.messaging.v1.IsNoneMessage.verify|verify} messages.
                 * @function encode
                 * @memberof syft_proto.messaging.v1.IsNoneMessage
                 * @static
                 * @param {syft_proto.messaging.v1.IIsNoneMessage} message IsNoneMessage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                IsNoneMessage.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.object_id != null && message.hasOwnProperty("object_id"))
                        $root.syft_proto.types.syft.v1.Id.encode(message.object_id, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified IsNoneMessage message, length delimited. Does not implicitly {@link syft_proto.messaging.v1.IsNoneMessage.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof syft_proto.messaging.v1.IsNoneMessage
                 * @static
                 * @param {syft_proto.messaging.v1.IIsNoneMessage} message IsNoneMessage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                IsNoneMessage.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an IsNoneMessage message from the specified reader or buffer.
                 * @function decode
                 * @memberof syft_proto.messaging.v1.IsNoneMessage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {syft_proto.messaging.v1.IsNoneMessage} IsNoneMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                IsNoneMessage.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.syft_proto.messaging.v1.IsNoneMessage();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.object_id = $root.syft_proto.types.syft.v1.Id.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes an IsNoneMessage message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof syft_proto.messaging.v1.IsNoneMessage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {syft_proto.messaging.v1.IsNoneMessage} IsNoneMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                IsNoneMessage.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an IsNoneMessage message.
                 * @function verify
                 * @memberof syft_proto.messaging.v1.IsNoneMessage
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                IsNoneMessage.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.object_id != null && message.hasOwnProperty("object_id")) {
                        var error = $root.syft_proto.types.syft.v1.Id.verify(message.object_id);
                        if (error)
                            return "object_id." + error;
                    }
                    return null;
                };

                /**
                 * Creates an IsNoneMessage message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof syft_proto.messaging.v1.IsNoneMessage
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {syft_proto.messaging.v1.IsNoneMessage} IsNoneMessage
                 */
                IsNoneMessage.fromObject = function fromObject(object) {
                    if (object instanceof $root.syft_proto.messaging.v1.IsNoneMessage)
                        return object;
                    var message = new $root.syft_proto.messaging.v1.IsNoneMessage();
                    if (object.object_id != null) {
                        if (typeof object.object_id !== "object")
                            throw TypeError(".syft_proto.messaging.v1.IsNoneMessage.object_id: object expected");
                        message.object_id = $root.syft_proto.types.syft.v1.Id.fromObject(object.object_id);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from an IsNoneMessage message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof syft_proto.messaging.v1.IsNoneMessage
                 * @static
                 * @param {syft_proto.messaging.v1.IsNoneMessage} message IsNoneMessage
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                IsNoneMessage.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.object_id = null;
                    if (message.object_id != null && message.hasOwnProperty("object_id"))
                        object.object_id = $root.syft_proto.types.syft.v1.Id.toObject(message.object_id, options);
                    return object;
                };

                /**
                 * Converts this IsNoneMessage to JSON.
                 * @function toJSON
                 * @memberof syft_proto.messaging.v1.IsNoneMessage
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                IsNoneMessage.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return IsNoneMessage;
            })();

            v1.ObjectMessage = (function() {

                /**
                 * Properties of an ObjectMessage.
                 * @memberof syft_proto.messaging.v1
                 * @interface IObjectMessage
                 * @property {syft_proto.types.torch.v1.ITorchTensor|null} [tensor] ObjectMessage tensor
                 * @property {syft_proto.execution.v1.IPlan|null} [plan] ObjectMessage plan
                 */

                /**
                 * Constructs a new ObjectMessage.
                 * @memberof syft_proto.messaging.v1
                 * @classdesc Represents an ObjectMessage.
                 * @implements IObjectMessage
                 * @constructor
                 * @param {syft_proto.messaging.v1.IObjectMessage=} [properties] Properties to set
                 */
                function ObjectMessage(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ObjectMessage tensor.
                 * @member {syft_proto.types.torch.v1.ITorchTensor|null|undefined} tensor
                 * @memberof syft_proto.messaging.v1.ObjectMessage
                 * @instance
                 */
                ObjectMessage.prototype.tensor = null;

                /**
                 * ObjectMessage plan.
                 * @member {syft_proto.execution.v1.IPlan|null|undefined} plan
                 * @memberof syft_proto.messaging.v1.ObjectMessage
                 * @instance
                 */
                ObjectMessage.prototype.plan = null;

                // OneOf field names bound to virtual getters and setters
                var $oneOfFields;

                /**
                 * ObjectMessage object.
                 * @member {"tensor"|"plan"|undefined} object
                 * @memberof syft_proto.messaging.v1.ObjectMessage
                 * @instance
                 */
                Object.defineProperty(ObjectMessage.prototype, "object", {
                    get: $util.oneOfGetter($oneOfFields = ["tensor", "plan"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                /**
                 * Creates a new ObjectMessage instance using the specified properties.
                 * @function create
                 * @memberof syft_proto.messaging.v1.ObjectMessage
                 * @static
                 * @param {syft_proto.messaging.v1.IObjectMessage=} [properties] Properties to set
                 * @returns {syft_proto.messaging.v1.ObjectMessage} ObjectMessage instance
                 */
                ObjectMessage.create = function create(properties) {
                    return new ObjectMessage(properties);
                };

                /**
                 * Encodes the specified ObjectMessage message. Does not implicitly {@link syft_proto.messaging.v1.ObjectMessage.verify|verify} messages.
                 * @function encode
                 * @memberof syft_proto.messaging.v1.ObjectMessage
                 * @static
                 * @param {syft_proto.messaging.v1.IObjectMessage} message ObjectMessage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ObjectMessage.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.tensor != null && message.hasOwnProperty("tensor"))
                        $root.syft_proto.types.torch.v1.TorchTensor.encode(message.tensor, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.plan != null && message.hasOwnProperty("plan"))
                        $root.syft_proto.execution.v1.Plan.encode(message.plan, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified ObjectMessage message, length delimited. Does not implicitly {@link syft_proto.messaging.v1.ObjectMessage.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof syft_proto.messaging.v1.ObjectMessage
                 * @static
                 * @param {syft_proto.messaging.v1.IObjectMessage} message ObjectMessage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ObjectMessage.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an ObjectMessage message from the specified reader or buffer.
                 * @function decode
                 * @memberof syft_proto.messaging.v1.ObjectMessage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {syft_proto.messaging.v1.ObjectMessage} ObjectMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ObjectMessage.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.syft_proto.messaging.v1.ObjectMessage();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.tensor = $root.syft_proto.types.torch.v1.TorchTensor.decode(reader, reader.uint32());
                            break;
                        case 2:
                            message.plan = $root.syft_proto.execution.v1.Plan.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes an ObjectMessage message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof syft_proto.messaging.v1.ObjectMessage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {syft_proto.messaging.v1.ObjectMessage} ObjectMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ObjectMessage.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an ObjectMessage message.
                 * @function verify
                 * @memberof syft_proto.messaging.v1.ObjectMessage
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ObjectMessage.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    var properties = {};
                    if (message.tensor != null && message.hasOwnProperty("tensor")) {
                        properties.object = 1;
                        {
                            var error = $root.syft_proto.types.torch.v1.TorchTensor.verify(message.tensor);
                            if (error)
                                return "tensor." + error;
                        }
                    }
                    if (message.plan != null && message.hasOwnProperty("plan")) {
                        if (properties.object === 1)
                            return "object: multiple values";
                        properties.object = 1;
                        {
                            var error = $root.syft_proto.execution.v1.Plan.verify(message.plan);
                            if (error)
                                return "plan." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates an ObjectMessage message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof syft_proto.messaging.v1.ObjectMessage
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {syft_proto.messaging.v1.ObjectMessage} ObjectMessage
                 */
                ObjectMessage.fromObject = function fromObject(object) {
                    if (object instanceof $root.syft_proto.messaging.v1.ObjectMessage)
                        return object;
                    var message = new $root.syft_proto.messaging.v1.ObjectMessage();
                    if (object.tensor != null) {
                        if (typeof object.tensor !== "object")
                            throw TypeError(".syft_proto.messaging.v1.ObjectMessage.tensor: object expected");
                        message.tensor = $root.syft_proto.types.torch.v1.TorchTensor.fromObject(object.tensor);
                    }
                    if (object.plan != null) {
                        if (typeof object.plan !== "object")
                            throw TypeError(".syft_proto.messaging.v1.ObjectMessage.plan: object expected");
                        message.plan = $root.syft_proto.execution.v1.Plan.fromObject(object.plan);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from an ObjectMessage message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof syft_proto.messaging.v1.ObjectMessage
                 * @static
                 * @param {syft_proto.messaging.v1.ObjectMessage} message ObjectMessage
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ObjectMessage.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (message.tensor != null && message.hasOwnProperty("tensor")) {
                        object.tensor = $root.syft_proto.types.torch.v1.TorchTensor.toObject(message.tensor, options);
                        if (options.oneofs)
                            object.object = "tensor";
                    }
                    if (message.plan != null && message.hasOwnProperty("plan")) {
                        object.plan = $root.syft_proto.execution.v1.Plan.toObject(message.plan, options);
                        if (options.oneofs)
                            object.object = "plan";
                    }
                    return object;
                };

                /**
                 * Converts this ObjectMessage to JSON.
                 * @function toJSON
                 * @memberof syft_proto.messaging.v1.ObjectMessage
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ObjectMessage.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return ObjectMessage;
            })();

            v1.TensorCommandMessage = (function() {

                /**
                 * Properties of a TensorCommandMessage.
                 * @memberof syft_proto.messaging.v1
                 * @interface ITensorCommandMessage
                 * @property {syft_proto.execution.v1.IComputationAction|null} [computation] TensorCommandMessage computation
                 * @property {syft_proto.execution.v1.ICommunicationAction|null} [communication] TensorCommandMessage communication
                 */

                /**
                 * Constructs a new TensorCommandMessage.
                 * @memberof syft_proto.messaging.v1
                 * @classdesc Represents a TensorCommandMessage.
                 * @implements ITensorCommandMessage
                 * @constructor
                 * @param {syft_proto.messaging.v1.ITensorCommandMessage=} [properties] Properties to set
                 */
                function TensorCommandMessage(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * TensorCommandMessage computation.
                 * @member {syft_proto.execution.v1.IComputationAction|null|undefined} computation
                 * @memberof syft_proto.messaging.v1.TensorCommandMessage
                 * @instance
                 */
                TensorCommandMessage.prototype.computation = null;

                /**
                 * TensorCommandMessage communication.
                 * @member {syft_proto.execution.v1.ICommunicationAction|null|undefined} communication
                 * @memberof syft_proto.messaging.v1.TensorCommandMessage
                 * @instance
                 */
                TensorCommandMessage.prototype.communication = null;

                // OneOf field names bound to virtual getters and setters
                var $oneOfFields;

                /**
                 * TensorCommandMessage action.
                 * @member {"computation"|"communication"|undefined} action
                 * @memberof syft_proto.messaging.v1.TensorCommandMessage
                 * @instance
                 */
                Object.defineProperty(TensorCommandMessage.prototype, "action", {
                    get: $util.oneOfGetter($oneOfFields = ["computation", "communication"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                /**
                 * Creates a new TensorCommandMessage instance using the specified properties.
                 * @function create
                 * @memberof syft_proto.messaging.v1.TensorCommandMessage
                 * @static
                 * @param {syft_proto.messaging.v1.ITensorCommandMessage=} [properties] Properties to set
                 * @returns {syft_proto.messaging.v1.TensorCommandMessage} TensorCommandMessage instance
                 */
                TensorCommandMessage.create = function create(properties) {
                    return new TensorCommandMessage(properties);
                };

                /**
                 * Encodes the specified TensorCommandMessage message. Does not implicitly {@link syft_proto.messaging.v1.TensorCommandMessage.verify|verify} messages.
                 * @function encode
                 * @memberof syft_proto.messaging.v1.TensorCommandMessage
                 * @static
                 * @param {syft_proto.messaging.v1.ITensorCommandMessage} message TensorCommandMessage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                TensorCommandMessage.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.computation != null && message.hasOwnProperty("computation"))
                        $root.syft_proto.execution.v1.ComputationAction.encode(message.computation, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.communication != null && message.hasOwnProperty("communication"))
                        $root.syft_proto.execution.v1.CommunicationAction.encode(message.communication, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified TensorCommandMessage message, length delimited. Does not implicitly {@link syft_proto.messaging.v1.TensorCommandMessage.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof syft_proto.messaging.v1.TensorCommandMessage
                 * @static
                 * @param {syft_proto.messaging.v1.ITensorCommandMessage} message TensorCommandMessage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                TensorCommandMessage.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a TensorCommandMessage message from the specified reader or buffer.
                 * @function decode
                 * @memberof syft_proto.messaging.v1.TensorCommandMessage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {syft_proto.messaging.v1.TensorCommandMessage} TensorCommandMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                TensorCommandMessage.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.syft_proto.messaging.v1.TensorCommandMessage();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.computation = $root.syft_proto.execution.v1.ComputationAction.decode(reader, reader.uint32());
                            break;
                        case 2:
                            message.communication = $root.syft_proto.execution.v1.CommunicationAction.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a TensorCommandMessage message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof syft_proto.messaging.v1.TensorCommandMessage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {syft_proto.messaging.v1.TensorCommandMessage} TensorCommandMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                TensorCommandMessage.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a TensorCommandMessage message.
                 * @function verify
                 * @memberof syft_proto.messaging.v1.TensorCommandMessage
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                TensorCommandMessage.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    var properties = {};
                    if (message.computation != null && message.hasOwnProperty("computation")) {
                        properties.action = 1;
                        {
                            var error = $root.syft_proto.execution.v1.ComputationAction.verify(message.computation);
                            if (error)
                                return "computation." + error;
                        }
                    }
                    if (message.communication != null && message.hasOwnProperty("communication")) {
                        if (properties.action === 1)
                            return "action: multiple values";
                        properties.action = 1;
                        {
                            var error = $root.syft_proto.execution.v1.CommunicationAction.verify(message.communication);
                            if (error)
                                return "communication." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates a TensorCommandMessage message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof syft_proto.messaging.v1.TensorCommandMessage
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {syft_proto.messaging.v1.TensorCommandMessage} TensorCommandMessage
                 */
                TensorCommandMessage.fromObject = function fromObject(object) {
                    if (object instanceof $root.syft_proto.messaging.v1.TensorCommandMessage)
                        return object;
                    var message = new $root.syft_proto.messaging.v1.TensorCommandMessage();
                    if (object.computation != null) {
                        if (typeof object.computation !== "object")
                            throw TypeError(".syft_proto.messaging.v1.TensorCommandMessage.computation: object expected");
                        message.computation = $root.syft_proto.execution.v1.ComputationAction.fromObject(object.computation);
                    }
                    if (object.communication != null) {
                        if (typeof object.communication !== "object")
                            throw TypeError(".syft_proto.messaging.v1.TensorCommandMessage.communication: object expected");
                        message.communication = $root.syft_proto.execution.v1.CommunicationAction.fromObject(object.communication);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a TensorCommandMessage message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof syft_proto.messaging.v1.TensorCommandMessage
                 * @static
                 * @param {syft_proto.messaging.v1.TensorCommandMessage} message TensorCommandMessage
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                TensorCommandMessage.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (message.computation != null && message.hasOwnProperty("computation")) {
                        object.computation = $root.syft_proto.execution.v1.ComputationAction.toObject(message.computation, options);
                        if (options.oneofs)
                            object.action = "computation";
                    }
                    if (message.communication != null && message.hasOwnProperty("communication")) {
                        object.communication = $root.syft_proto.execution.v1.CommunicationAction.toObject(message.communication, options);
                        if (options.oneofs)
                            object.action = "communication";
                    }
                    return object;
                };

                /**
                 * Converts this TensorCommandMessage to JSON.
                 * @function toJSON
                 * @memberof syft_proto.messaging.v1.TensorCommandMessage
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                TensorCommandMessage.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return TensorCommandMessage;
            })();

            v1.ForceObjectDeleteMessage = (function() {

                /**
                 * Properties of a ForceObjectDeleteMessage.
                 * @memberof syft_proto.messaging.v1
                 * @interface IForceObjectDeleteMessage
                 * @property {Array.<syft_proto.types.syft.v1.IId>|null} [object_ids] ForceObjectDeleteMessage object_ids
                 */

                /**
                 * Constructs a new ForceObjectDeleteMessage.
                 * @memberof syft_proto.messaging.v1
                 * @classdesc Represents a ForceObjectDeleteMessage.
                 * @implements IForceObjectDeleteMessage
                 * @constructor
                 * @param {syft_proto.messaging.v1.IForceObjectDeleteMessage=} [properties] Properties to set
                 */
                function ForceObjectDeleteMessage(properties) {
                    this.object_ids = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ForceObjectDeleteMessage object_ids.
                 * @member {Array.<syft_proto.types.syft.v1.IId>} object_ids
                 * @memberof syft_proto.messaging.v1.ForceObjectDeleteMessage
                 * @instance
                 */
                ForceObjectDeleteMessage.prototype.object_ids = $util.emptyArray;

                /**
                 * Creates a new ForceObjectDeleteMessage instance using the specified properties.
                 * @function create
                 * @memberof syft_proto.messaging.v1.ForceObjectDeleteMessage
                 * @static
                 * @param {syft_proto.messaging.v1.IForceObjectDeleteMessage=} [properties] Properties to set
                 * @returns {syft_proto.messaging.v1.ForceObjectDeleteMessage} ForceObjectDeleteMessage instance
                 */
                ForceObjectDeleteMessage.create = function create(properties) {
                    return new ForceObjectDeleteMessage(properties);
                };

                /**
                 * Encodes the specified ForceObjectDeleteMessage message. Does not implicitly {@link syft_proto.messaging.v1.ForceObjectDeleteMessage.verify|verify} messages.
                 * @function encode
                 * @memberof syft_proto.messaging.v1.ForceObjectDeleteMessage
                 * @static
                 * @param {syft_proto.messaging.v1.IForceObjectDeleteMessage} message ForceObjectDeleteMessage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ForceObjectDeleteMessage.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.object_ids != null && message.object_ids.length)
                        for (var i = 0; i < message.object_ids.length; ++i)
                            $root.syft_proto.types.syft.v1.Id.encode(message.object_ids[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified ForceObjectDeleteMessage message, length delimited. Does not implicitly {@link syft_proto.messaging.v1.ForceObjectDeleteMessage.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof syft_proto.messaging.v1.ForceObjectDeleteMessage
                 * @static
                 * @param {syft_proto.messaging.v1.IForceObjectDeleteMessage} message ForceObjectDeleteMessage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ForceObjectDeleteMessage.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a ForceObjectDeleteMessage message from the specified reader or buffer.
                 * @function decode
                 * @memberof syft_proto.messaging.v1.ForceObjectDeleteMessage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {syft_proto.messaging.v1.ForceObjectDeleteMessage} ForceObjectDeleteMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ForceObjectDeleteMessage.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.syft_proto.messaging.v1.ForceObjectDeleteMessage();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.object_ids && message.object_ids.length))
                                message.object_ids = [];
                            message.object_ids.push($root.syft_proto.types.syft.v1.Id.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a ForceObjectDeleteMessage message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof syft_proto.messaging.v1.ForceObjectDeleteMessage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {syft_proto.messaging.v1.ForceObjectDeleteMessage} ForceObjectDeleteMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ForceObjectDeleteMessage.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a ForceObjectDeleteMessage message.
                 * @function verify
                 * @memberof syft_proto.messaging.v1.ForceObjectDeleteMessage
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ForceObjectDeleteMessage.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.object_ids != null && message.hasOwnProperty("object_ids")) {
                        if (!Array.isArray(message.object_ids))
                            return "object_ids: array expected";
                        for (var i = 0; i < message.object_ids.length; ++i) {
                            var error = $root.syft_proto.types.syft.v1.Id.verify(message.object_ids[i]);
                            if (error)
                                return "object_ids." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates a ForceObjectDeleteMessage message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof syft_proto.messaging.v1.ForceObjectDeleteMessage
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {syft_proto.messaging.v1.ForceObjectDeleteMessage} ForceObjectDeleteMessage
                 */
                ForceObjectDeleteMessage.fromObject = function fromObject(object) {
                    if (object instanceof $root.syft_proto.messaging.v1.ForceObjectDeleteMessage)
                        return object;
                    var message = new $root.syft_proto.messaging.v1.ForceObjectDeleteMessage();
                    if (object.object_ids) {
                        if (!Array.isArray(object.object_ids))
                            throw TypeError(".syft_proto.messaging.v1.ForceObjectDeleteMessage.object_ids: array expected");
                        message.object_ids = [];
                        for (var i = 0; i < object.object_ids.length; ++i) {
                            if (typeof object.object_ids[i] !== "object")
                                throw TypeError(".syft_proto.messaging.v1.ForceObjectDeleteMessage.object_ids: object expected");
                            message.object_ids[i] = $root.syft_proto.types.syft.v1.Id.fromObject(object.object_ids[i]);
                        }
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a ForceObjectDeleteMessage message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof syft_proto.messaging.v1.ForceObjectDeleteMessage
                 * @static
                 * @param {syft_proto.messaging.v1.ForceObjectDeleteMessage} message ForceObjectDeleteMessage
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ForceObjectDeleteMessage.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.object_ids = [];
                    if (message.object_ids && message.object_ids.length) {
                        object.object_ids = [];
                        for (var j = 0; j < message.object_ids.length; ++j)
                            object.object_ids[j] = $root.syft_proto.types.syft.v1.Id.toObject(message.object_ids[j], options);
                    }
                    return object;
                };

                /**
                 * Converts this ForceObjectDeleteMessage to JSON.
                 * @function toJSON
                 * @memberof syft_proto.messaging.v1.ForceObjectDeleteMessage
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ForceObjectDeleteMessage.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return ForceObjectDeleteMessage;
            })();

            v1.GetShapeMessage = (function() {

                /**
                 * Properties of a GetShapeMessage.
                 * @memberof syft_proto.messaging.v1
                 * @interface IGetShapeMessage
                 * @property {syft_proto.types.syft.v1.IId|null} [object_id] GetShapeMessage object_id
                 */

                /**
                 * Constructs a new GetShapeMessage.
                 * @memberof syft_proto.messaging.v1
                 * @classdesc Represents a GetShapeMessage.
                 * @implements IGetShapeMessage
                 * @constructor
                 * @param {syft_proto.messaging.v1.IGetShapeMessage=} [properties] Properties to set
                 */
                function GetShapeMessage(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * GetShapeMessage object_id.
                 * @member {syft_proto.types.syft.v1.IId|null|undefined} object_id
                 * @memberof syft_proto.messaging.v1.GetShapeMessage
                 * @instance
                 */
                GetShapeMessage.prototype.object_id = null;

                /**
                 * Creates a new GetShapeMessage instance using the specified properties.
                 * @function create
                 * @memberof syft_proto.messaging.v1.GetShapeMessage
                 * @static
                 * @param {syft_proto.messaging.v1.IGetShapeMessage=} [properties] Properties to set
                 * @returns {syft_proto.messaging.v1.GetShapeMessage} GetShapeMessage instance
                 */
                GetShapeMessage.create = function create(properties) {
                    return new GetShapeMessage(properties);
                };

                /**
                 * Encodes the specified GetShapeMessage message. Does not implicitly {@link syft_proto.messaging.v1.GetShapeMessage.verify|verify} messages.
                 * @function encode
                 * @memberof syft_proto.messaging.v1.GetShapeMessage
                 * @static
                 * @param {syft_proto.messaging.v1.IGetShapeMessage} message GetShapeMessage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GetShapeMessage.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.object_id != null && message.hasOwnProperty("object_id"))
                        $root.syft_proto.types.syft.v1.Id.encode(message.object_id, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified GetShapeMessage message, length delimited. Does not implicitly {@link syft_proto.messaging.v1.GetShapeMessage.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof syft_proto.messaging.v1.GetShapeMessage
                 * @static
                 * @param {syft_proto.messaging.v1.IGetShapeMessage} message GetShapeMessage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GetShapeMessage.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a GetShapeMessage message from the specified reader or buffer.
                 * @function decode
                 * @memberof syft_proto.messaging.v1.GetShapeMessage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {syft_proto.messaging.v1.GetShapeMessage} GetShapeMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GetShapeMessage.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.syft_proto.messaging.v1.GetShapeMessage();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.object_id = $root.syft_proto.types.syft.v1.Id.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a GetShapeMessage message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof syft_proto.messaging.v1.GetShapeMessage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {syft_proto.messaging.v1.GetShapeMessage} GetShapeMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GetShapeMessage.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a GetShapeMessage message.
                 * @function verify
                 * @memberof syft_proto.messaging.v1.GetShapeMessage
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                GetShapeMessage.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.object_id != null && message.hasOwnProperty("object_id")) {
                        var error = $root.syft_proto.types.syft.v1.Id.verify(message.object_id);
                        if (error)
                            return "object_id." + error;
                    }
                    return null;
                };

                /**
                 * Creates a GetShapeMessage message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof syft_proto.messaging.v1.GetShapeMessage
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {syft_proto.messaging.v1.GetShapeMessage} GetShapeMessage
                 */
                GetShapeMessage.fromObject = function fromObject(object) {
                    if (object instanceof $root.syft_proto.messaging.v1.GetShapeMessage)
                        return object;
                    var message = new $root.syft_proto.messaging.v1.GetShapeMessage();
                    if (object.object_id != null) {
                        if (typeof object.object_id !== "object")
                            throw TypeError(".syft_proto.messaging.v1.GetShapeMessage.object_id: object expected");
                        message.object_id = $root.syft_proto.types.syft.v1.Id.fromObject(object.object_id);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a GetShapeMessage message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof syft_proto.messaging.v1.GetShapeMessage
                 * @static
                 * @param {syft_proto.messaging.v1.GetShapeMessage} message GetShapeMessage
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                GetShapeMessage.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.object_id = null;
                    if (message.object_id != null && message.hasOwnProperty("object_id"))
                        object.object_id = $root.syft_proto.types.syft.v1.Id.toObject(message.object_id, options);
                    return object;
                };

                /**
                 * Converts this GetShapeMessage to JSON.
                 * @function toJSON
                 * @memberof syft_proto.messaging.v1.GetShapeMessage
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                GetShapeMessage.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return GetShapeMessage;
            })();

            v1.ObjectRequestMessage = (function() {

                /**
                 * Properties of an ObjectRequestMessage.
                 * @memberof syft_proto.messaging.v1
                 * @interface IObjectRequestMessage
                 * @property {syft_proto.types.syft.v1.IId|null} [object_id] ObjectRequestMessage object_id
                 * @property {string|null} [reason] ObjectRequestMessage reason
                 */

                /**
                 * Constructs a new ObjectRequestMessage.
                 * @memberof syft_proto.messaging.v1
                 * @classdesc Represents an ObjectRequestMessage.
                 * @implements IObjectRequestMessage
                 * @constructor
                 * @param {syft_proto.messaging.v1.IObjectRequestMessage=} [properties] Properties to set
                 */
                function ObjectRequestMessage(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ObjectRequestMessage object_id.
                 * @member {syft_proto.types.syft.v1.IId|null|undefined} object_id
                 * @memberof syft_proto.messaging.v1.ObjectRequestMessage
                 * @instance
                 */
                ObjectRequestMessage.prototype.object_id = null;

                /**
                 * ObjectRequestMessage reason.
                 * @member {string} reason
                 * @memberof syft_proto.messaging.v1.ObjectRequestMessage
                 * @instance
                 */
                ObjectRequestMessage.prototype.reason = "";

                /**
                 * Creates a new ObjectRequestMessage instance using the specified properties.
                 * @function create
                 * @memberof syft_proto.messaging.v1.ObjectRequestMessage
                 * @static
                 * @param {syft_proto.messaging.v1.IObjectRequestMessage=} [properties] Properties to set
                 * @returns {syft_proto.messaging.v1.ObjectRequestMessage} ObjectRequestMessage instance
                 */
                ObjectRequestMessage.create = function create(properties) {
                    return new ObjectRequestMessage(properties);
                };

                /**
                 * Encodes the specified ObjectRequestMessage message. Does not implicitly {@link syft_proto.messaging.v1.ObjectRequestMessage.verify|verify} messages.
                 * @function encode
                 * @memberof syft_proto.messaging.v1.ObjectRequestMessage
                 * @static
                 * @param {syft_proto.messaging.v1.IObjectRequestMessage} message ObjectRequestMessage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ObjectRequestMessage.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.object_id != null && message.hasOwnProperty("object_id"))
                        $root.syft_proto.types.syft.v1.Id.encode(message.object_id, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.reason != null && message.hasOwnProperty("reason"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.reason);
                    return writer;
                };

                /**
                 * Encodes the specified ObjectRequestMessage message, length delimited. Does not implicitly {@link syft_proto.messaging.v1.ObjectRequestMessage.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof syft_proto.messaging.v1.ObjectRequestMessage
                 * @static
                 * @param {syft_proto.messaging.v1.IObjectRequestMessage} message ObjectRequestMessage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ObjectRequestMessage.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an ObjectRequestMessage message from the specified reader or buffer.
                 * @function decode
                 * @memberof syft_proto.messaging.v1.ObjectRequestMessage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {syft_proto.messaging.v1.ObjectRequestMessage} ObjectRequestMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ObjectRequestMessage.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.syft_proto.messaging.v1.ObjectRequestMessage();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.object_id = $root.syft_proto.types.syft.v1.Id.decode(reader, reader.uint32());
                            break;
                        case 2:
                            message.reason = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes an ObjectRequestMessage message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof syft_proto.messaging.v1.ObjectRequestMessage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {syft_proto.messaging.v1.ObjectRequestMessage} ObjectRequestMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ObjectRequestMessage.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an ObjectRequestMessage message.
                 * @function verify
                 * @memberof syft_proto.messaging.v1.ObjectRequestMessage
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ObjectRequestMessage.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.object_id != null && message.hasOwnProperty("object_id")) {
                        var error = $root.syft_proto.types.syft.v1.Id.verify(message.object_id);
                        if (error)
                            return "object_id." + error;
                    }
                    if (message.reason != null && message.hasOwnProperty("reason"))
                        if (!$util.isString(message.reason))
                            return "reason: string expected";
                    return null;
                };

                /**
                 * Creates an ObjectRequestMessage message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof syft_proto.messaging.v1.ObjectRequestMessage
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {syft_proto.messaging.v1.ObjectRequestMessage} ObjectRequestMessage
                 */
                ObjectRequestMessage.fromObject = function fromObject(object) {
                    if (object instanceof $root.syft_proto.messaging.v1.ObjectRequestMessage)
                        return object;
                    var message = new $root.syft_proto.messaging.v1.ObjectRequestMessage();
                    if (object.object_id != null) {
                        if (typeof object.object_id !== "object")
                            throw TypeError(".syft_proto.messaging.v1.ObjectRequestMessage.object_id: object expected");
                        message.object_id = $root.syft_proto.types.syft.v1.Id.fromObject(object.object_id);
                    }
                    if (object.reason != null)
                        message.reason = String(object.reason);
                    return message;
                };

                /**
                 * Creates a plain object from an ObjectRequestMessage message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof syft_proto.messaging.v1.ObjectRequestMessage
                 * @static
                 * @param {syft_proto.messaging.v1.ObjectRequestMessage} message ObjectRequestMessage
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ObjectRequestMessage.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.object_id = null;
                        object.reason = "";
                    }
                    if (message.object_id != null && message.hasOwnProperty("object_id"))
                        object.object_id = $root.syft_proto.types.syft.v1.Id.toObject(message.object_id, options);
                    if (message.reason != null && message.hasOwnProperty("reason"))
                        object.reason = message.reason;
                    return object;
                };

                /**
                 * Converts this ObjectRequestMessage to JSON.
                 * @function toJSON
                 * @memberof syft_proto.messaging.v1.ObjectRequestMessage
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ObjectRequestMessage.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return ObjectRequestMessage;
            })();

            v1.PlanCommandMessage = (function() {

                /**
                 * Properties of a PlanCommandMessage.
                 * @memberof syft_proto.messaging.v1
                 * @interface IPlanCommandMessage
                 * @property {string|null} [command_name] PlanCommandMessage command_name
                 * @property {Array.<syft_proto.types.syft.v1.IArg>|null} [args] PlanCommandMessage args
                 */

                /**
                 * Constructs a new PlanCommandMessage.
                 * @memberof syft_proto.messaging.v1
                 * @classdesc Represents a PlanCommandMessage.
                 * @implements IPlanCommandMessage
                 * @constructor
                 * @param {syft_proto.messaging.v1.IPlanCommandMessage=} [properties] Properties to set
                 */
                function PlanCommandMessage(properties) {
                    this.args = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * PlanCommandMessage command_name.
                 * @member {string} command_name
                 * @memberof syft_proto.messaging.v1.PlanCommandMessage
                 * @instance
                 */
                PlanCommandMessage.prototype.command_name = "";

                /**
                 * PlanCommandMessage args.
                 * @member {Array.<syft_proto.types.syft.v1.IArg>} args
                 * @memberof syft_proto.messaging.v1.PlanCommandMessage
                 * @instance
                 */
                PlanCommandMessage.prototype.args = $util.emptyArray;

                /**
                 * Creates a new PlanCommandMessage instance using the specified properties.
                 * @function create
                 * @memberof syft_proto.messaging.v1.PlanCommandMessage
                 * @static
                 * @param {syft_proto.messaging.v1.IPlanCommandMessage=} [properties] Properties to set
                 * @returns {syft_proto.messaging.v1.PlanCommandMessage} PlanCommandMessage instance
                 */
                PlanCommandMessage.create = function create(properties) {
                    return new PlanCommandMessage(properties);
                };

                /**
                 * Encodes the specified PlanCommandMessage message. Does not implicitly {@link syft_proto.messaging.v1.PlanCommandMessage.verify|verify} messages.
                 * @function encode
                 * @memberof syft_proto.messaging.v1.PlanCommandMessage
                 * @static
                 * @param {syft_proto.messaging.v1.IPlanCommandMessage} message PlanCommandMessage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                PlanCommandMessage.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.command_name != null && message.hasOwnProperty("command_name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.command_name);
                    if (message.args != null && message.args.length)
                        for (var i = 0; i < message.args.length; ++i)
                            $root.syft_proto.types.syft.v1.Arg.encode(message.args[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified PlanCommandMessage message, length delimited. Does not implicitly {@link syft_proto.messaging.v1.PlanCommandMessage.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof syft_proto.messaging.v1.PlanCommandMessage
                 * @static
                 * @param {syft_proto.messaging.v1.IPlanCommandMessage} message PlanCommandMessage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                PlanCommandMessage.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a PlanCommandMessage message from the specified reader or buffer.
                 * @function decode
                 * @memberof syft_proto.messaging.v1.PlanCommandMessage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {syft_proto.messaging.v1.PlanCommandMessage} PlanCommandMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                PlanCommandMessage.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.syft_proto.messaging.v1.PlanCommandMessage();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.command_name = reader.string();
                            break;
                        case 2:
                            if (!(message.args && message.args.length))
                                message.args = [];
                            message.args.push($root.syft_proto.types.syft.v1.Arg.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a PlanCommandMessage message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof syft_proto.messaging.v1.PlanCommandMessage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {syft_proto.messaging.v1.PlanCommandMessage} PlanCommandMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                PlanCommandMessage.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a PlanCommandMessage message.
                 * @function verify
                 * @memberof syft_proto.messaging.v1.PlanCommandMessage
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                PlanCommandMessage.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.command_name != null && message.hasOwnProperty("command_name"))
                        if (!$util.isString(message.command_name))
                            return "command_name: string expected";
                    if (message.args != null && message.hasOwnProperty("args")) {
                        if (!Array.isArray(message.args))
                            return "args: array expected";
                        for (var i = 0; i < message.args.length; ++i) {
                            var error = $root.syft_proto.types.syft.v1.Arg.verify(message.args[i]);
                            if (error)
                                return "args." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates a PlanCommandMessage message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof syft_proto.messaging.v1.PlanCommandMessage
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {syft_proto.messaging.v1.PlanCommandMessage} PlanCommandMessage
                 */
                PlanCommandMessage.fromObject = function fromObject(object) {
                    if (object instanceof $root.syft_proto.messaging.v1.PlanCommandMessage)
                        return object;
                    var message = new $root.syft_proto.messaging.v1.PlanCommandMessage();
                    if (object.command_name != null)
                        message.command_name = String(object.command_name);
                    if (object.args) {
                        if (!Array.isArray(object.args))
                            throw TypeError(".syft_proto.messaging.v1.PlanCommandMessage.args: array expected");
                        message.args = [];
                        for (var i = 0; i < object.args.length; ++i) {
                            if (typeof object.args[i] !== "object")
                                throw TypeError(".syft_proto.messaging.v1.PlanCommandMessage.args: object expected");
                            message.args[i] = $root.syft_proto.types.syft.v1.Arg.fromObject(object.args[i]);
                        }
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a PlanCommandMessage message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof syft_proto.messaging.v1.PlanCommandMessage
                 * @static
                 * @param {syft_proto.messaging.v1.PlanCommandMessage} message PlanCommandMessage
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                PlanCommandMessage.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.args = [];
                    if (options.defaults)
                        object.command_name = "";
                    if (message.command_name != null && message.hasOwnProperty("command_name"))
                        object.command_name = message.command_name;
                    if (message.args && message.args.length) {
                        object.args = [];
                        for (var j = 0; j < message.args.length; ++j)
                            object.args[j] = $root.syft_proto.types.syft.v1.Arg.toObject(message.args[j], options);
                    }
                    return object;
                };

                /**
                 * Converts this PlanCommandMessage to JSON.
                 * @function toJSON
                 * @memberof syft_proto.messaging.v1.PlanCommandMessage
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                PlanCommandMessage.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return PlanCommandMessage;
            })();

            v1.WorkerCommandMessage = (function() {

                /**
                 * Properties of a WorkerCommandMessage.
                 * @memberof syft_proto.messaging.v1
                 * @interface IWorkerCommandMessage
                 * @property {string|null} [command_name] WorkerCommandMessage command_name
                 * @property {Array.<syft_proto.types.syft.v1.IArg>|null} [args] WorkerCommandMessage args
                 */

                /**
                 * Constructs a new WorkerCommandMessage.
                 * @memberof syft_proto.messaging.v1
                 * @classdesc Represents a WorkerCommandMessage.
                 * @implements IWorkerCommandMessage
                 * @constructor
                 * @param {syft_proto.messaging.v1.IWorkerCommandMessage=} [properties] Properties to set
                 */
                function WorkerCommandMessage(properties) {
                    this.args = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * WorkerCommandMessage command_name.
                 * @member {string} command_name
                 * @memberof syft_proto.messaging.v1.WorkerCommandMessage
                 * @instance
                 */
                WorkerCommandMessage.prototype.command_name = "";

                /**
                 * WorkerCommandMessage args.
                 * @member {Array.<syft_proto.types.syft.v1.IArg>} args
                 * @memberof syft_proto.messaging.v1.WorkerCommandMessage
                 * @instance
                 */
                WorkerCommandMessage.prototype.args = $util.emptyArray;

                /**
                 * Creates a new WorkerCommandMessage instance using the specified properties.
                 * @function create
                 * @memberof syft_proto.messaging.v1.WorkerCommandMessage
                 * @static
                 * @param {syft_proto.messaging.v1.IWorkerCommandMessage=} [properties] Properties to set
                 * @returns {syft_proto.messaging.v1.WorkerCommandMessage} WorkerCommandMessage instance
                 */
                WorkerCommandMessage.create = function create(properties) {
                    return new WorkerCommandMessage(properties);
                };

                /**
                 * Encodes the specified WorkerCommandMessage message. Does not implicitly {@link syft_proto.messaging.v1.WorkerCommandMessage.verify|verify} messages.
                 * @function encode
                 * @memberof syft_proto.messaging.v1.WorkerCommandMessage
                 * @static
                 * @param {syft_proto.messaging.v1.IWorkerCommandMessage} message WorkerCommandMessage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                WorkerCommandMessage.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.command_name != null && message.hasOwnProperty("command_name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.command_name);
                    if (message.args != null && message.args.length)
                        for (var i = 0; i < message.args.length; ++i)
                            $root.syft_proto.types.syft.v1.Arg.encode(message.args[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified WorkerCommandMessage message, length delimited. Does not implicitly {@link syft_proto.messaging.v1.WorkerCommandMessage.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof syft_proto.messaging.v1.WorkerCommandMessage
                 * @static
                 * @param {syft_proto.messaging.v1.IWorkerCommandMessage} message WorkerCommandMessage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                WorkerCommandMessage.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a WorkerCommandMessage message from the specified reader or buffer.
                 * @function decode
                 * @memberof syft_proto.messaging.v1.WorkerCommandMessage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {syft_proto.messaging.v1.WorkerCommandMessage} WorkerCommandMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                WorkerCommandMessage.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.syft_proto.messaging.v1.WorkerCommandMessage();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.command_name = reader.string();
                            break;
                        case 2:
                            if (!(message.args && message.args.length))
                                message.args = [];
                            message.args.push($root.syft_proto.types.syft.v1.Arg.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a WorkerCommandMessage message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof syft_proto.messaging.v1.WorkerCommandMessage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {syft_proto.messaging.v1.WorkerCommandMessage} WorkerCommandMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                WorkerCommandMessage.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a WorkerCommandMessage message.
                 * @function verify
                 * @memberof syft_proto.messaging.v1.WorkerCommandMessage
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                WorkerCommandMessage.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.command_name != null && message.hasOwnProperty("command_name"))
                        if (!$util.isString(message.command_name))
                            return "command_name: string expected";
                    if (message.args != null && message.hasOwnProperty("args")) {
                        if (!Array.isArray(message.args))
                            return "args: array expected";
                        for (var i = 0; i < message.args.length; ++i) {
                            var error = $root.syft_proto.types.syft.v1.Arg.verify(message.args[i]);
                            if (error)
                                return "args." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates a WorkerCommandMessage message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof syft_proto.messaging.v1.WorkerCommandMessage
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {syft_proto.messaging.v1.WorkerCommandMessage} WorkerCommandMessage
                 */
                WorkerCommandMessage.fromObject = function fromObject(object) {
                    if (object instanceof $root.syft_proto.messaging.v1.WorkerCommandMessage)
                        return object;
                    var message = new $root.syft_proto.messaging.v1.WorkerCommandMessage();
                    if (object.command_name != null)
                        message.command_name = String(object.command_name);
                    if (object.args) {
                        if (!Array.isArray(object.args))
                            throw TypeError(".syft_proto.messaging.v1.WorkerCommandMessage.args: array expected");
                        message.args = [];
                        for (var i = 0; i < object.args.length; ++i) {
                            if (typeof object.args[i] !== "object")
                                throw TypeError(".syft_proto.messaging.v1.WorkerCommandMessage.args: object expected");
                            message.args[i] = $root.syft_proto.types.syft.v1.Arg.fromObject(object.args[i]);
                        }
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a WorkerCommandMessage message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof syft_proto.messaging.v1.WorkerCommandMessage
                 * @static
                 * @param {syft_proto.messaging.v1.WorkerCommandMessage} message WorkerCommandMessage
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                WorkerCommandMessage.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.args = [];
                    if (options.defaults)
                        object.command_name = "";
                    if (message.command_name != null && message.hasOwnProperty("command_name"))
                        object.command_name = message.command_name;
                    if (message.args && message.args.length) {
                        object.args = [];
                        for (var j = 0; j < message.args.length; ++j)
                            object.args[j] = $root.syft_proto.types.syft.v1.Arg.toObject(message.args[j], options);
                    }
                    return object;
                };

                /**
                 * Converts this WorkerCommandMessage to JSON.
                 * @function toJSON
                 * @memberof syft_proto.messaging.v1.WorkerCommandMessage
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                WorkerCommandMessage.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return WorkerCommandMessage;
            })();

            v1.SearchMessage = (function() {

                /**
                 * Properties of a SearchMessage.
                 * @memberof syft_proto.messaging.v1
                 * @interface ISearchMessage
                 * @property {Array.<syft_proto.types.syft.v1.IId>|null} [query] SearchMessage query
                 */

                /**
                 * Constructs a new SearchMessage.
                 * @memberof syft_proto.messaging.v1
                 * @classdesc Represents a SearchMessage.
                 * @implements ISearchMessage
                 * @constructor
                 * @param {syft_proto.messaging.v1.ISearchMessage=} [properties] Properties to set
                 */
                function SearchMessage(properties) {
                    this.query = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * SearchMessage query.
                 * @member {Array.<syft_proto.types.syft.v1.IId>} query
                 * @memberof syft_proto.messaging.v1.SearchMessage
                 * @instance
                 */
                SearchMessage.prototype.query = $util.emptyArray;

                /**
                 * Creates a new SearchMessage instance using the specified properties.
                 * @function create
                 * @memberof syft_proto.messaging.v1.SearchMessage
                 * @static
                 * @param {syft_proto.messaging.v1.ISearchMessage=} [properties] Properties to set
                 * @returns {syft_proto.messaging.v1.SearchMessage} SearchMessage instance
                 */
                SearchMessage.create = function create(properties) {
                    return new SearchMessage(properties);
                };

                /**
                 * Encodes the specified SearchMessage message. Does not implicitly {@link syft_proto.messaging.v1.SearchMessage.verify|verify} messages.
                 * @function encode
                 * @memberof syft_proto.messaging.v1.SearchMessage
                 * @static
                 * @param {syft_proto.messaging.v1.ISearchMessage} message SearchMessage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SearchMessage.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.query != null && message.query.length)
                        for (var i = 0; i < message.query.length; ++i)
                            $root.syft_proto.types.syft.v1.Id.encode(message.query[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified SearchMessage message, length delimited. Does not implicitly {@link syft_proto.messaging.v1.SearchMessage.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof syft_proto.messaging.v1.SearchMessage
                 * @static
                 * @param {syft_proto.messaging.v1.ISearchMessage} message SearchMessage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SearchMessage.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a SearchMessage message from the specified reader or buffer.
                 * @function decode
                 * @memberof syft_proto.messaging.v1.SearchMessage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {syft_proto.messaging.v1.SearchMessage} SearchMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SearchMessage.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.syft_proto.messaging.v1.SearchMessage();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.query && message.query.length))
                                message.query = [];
                            message.query.push($root.syft_proto.types.syft.v1.Id.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a SearchMessage message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof syft_proto.messaging.v1.SearchMessage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {syft_proto.messaging.v1.SearchMessage} SearchMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SearchMessage.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a SearchMessage message.
                 * @function verify
                 * @memberof syft_proto.messaging.v1.SearchMessage
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                SearchMessage.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.query != null && message.hasOwnProperty("query")) {
                        if (!Array.isArray(message.query))
                            return "query: array expected";
                        for (var i = 0; i < message.query.length; ++i) {
                            var error = $root.syft_proto.types.syft.v1.Id.verify(message.query[i]);
                            if (error)
                                return "query." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates a SearchMessage message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof syft_proto.messaging.v1.SearchMessage
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {syft_proto.messaging.v1.SearchMessage} SearchMessage
                 */
                SearchMessage.fromObject = function fromObject(object) {
                    if (object instanceof $root.syft_proto.messaging.v1.SearchMessage)
                        return object;
                    var message = new $root.syft_proto.messaging.v1.SearchMessage();
                    if (object.query) {
                        if (!Array.isArray(object.query))
                            throw TypeError(".syft_proto.messaging.v1.SearchMessage.query: array expected");
                        message.query = [];
                        for (var i = 0; i < object.query.length; ++i) {
                            if (typeof object.query[i] !== "object")
                                throw TypeError(".syft_proto.messaging.v1.SearchMessage.query: object expected");
                            message.query[i] = $root.syft_proto.types.syft.v1.Id.fromObject(object.query[i]);
                        }
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a SearchMessage message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof syft_proto.messaging.v1.SearchMessage
                 * @static
                 * @param {syft_proto.messaging.v1.SearchMessage} message SearchMessage
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                SearchMessage.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.query = [];
                    if (message.query && message.query.length) {
                        object.query = [];
                        for (var j = 0; j < message.query.length; ++j)
                            object.query[j] = $root.syft_proto.types.syft.v1.Id.toObject(message.query[j], options);
                    }
                    return object;
                };

                /**
                 * Converts this SearchMessage to JSON.
                 * @function toJSON
                 * @memberof syft_proto.messaging.v1.SearchMessage
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                SearchMessage.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return SearchMessage;
            })();

            return v1;
        })();

        return messaging;
    })();

    return syft_proto;
})();

$root.google = (function() {

    /**
     * Namespace google.
     * @exports google
     * @namespace
     */
    var google = {};

    google.protobuf = (function() {

        /**
         * Namespace protobuf.
         * @memberof google
         * @namespace
         */
        var protobuf = {};

        protobuf.Empty = (function() {

            /**
             * Properties of an Empty.
             * @memberof google.protobuf
             * @interface IEmpty
             */

            /**
             * Constructs a new Empty.
             * @memberof google.protobuf
             * @classdesc Represents an Empty.
             * @implements IEmpty
             * @constructor
             * @param {google.protobuf.IEmpty=} [properties] Properties to set
             */
            function Empty(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new Empty instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Empty
             * @static
             * @param {google.protobuf.IEmpty=} [properties] Properties to set
             * @returns {google.protobuf.Empty} Empty instance
             */
            Empty.create = function create(properties) {
                return new Empty(properties);
            };

            /**
             * Encodes the specified Empty message. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Empty
             * @static
             * @param {google.protobuf.IEmpty} message Empty message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Empty.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified Empty message, length delimited. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Empty
             * @static
             * @param {google.protobuf.IEmpty} message Empty message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Empty.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Empty message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Empty
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Empty} Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Empty.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Empty();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an Empty message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Empty
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Empty} Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Empty.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Empty message.
             * @function verify
             * @memberof google.protobuf.Empty
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Empty.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates an Empty message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Empty
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Empty} Empty
             */
            Empty.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Empty)
                    return object;
                return new $root.google.protobuf.Empty();
            };

            /**
             * Creates a plain object from an Empty message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Empty
             * @static
             * @param {google.protobuf.Empty} message Empty
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Empty.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this Empty to JSON.
             * @function toJSON
             * @memberof google.protobuf.Empty
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Empty.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Empty;
        })();

        return protobuf;
    })();

    return google;
})();

module.exports = $root;
