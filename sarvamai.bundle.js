var SarvamAI = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // (disabled):fs
  var require_fs = __commonJS({
    "(disabled):fs"() {
    }
  });

  // (disabled):../../../../node_modules/path/path.js
  var require_path = __commonJS({
    "(disabled):../../../../node_modules/path/path.js"() {
    }
  });

  // (disabled):stream
  var require_stream = __commonJS({
    "(disabled):stream"() {
    }
  });

  // node_modules/ws/browser.js
  var require_browser = __commonJS({
    "node_modules/ws/browser.js"(exports, module) {
      "use strict";
      module.exports = function() {
        throw new Error(
          "ws does not work in the browser. Browser clients must use the native WebSocket object"
        );
      };
    }
  });

  // node_modules/sarvamai/dist/esm/index.mjs
  var esm_exports = {};
  __export(esm_exports, {
    SarvamAI: () => api_exports,
    SarvamAIClient: () => SarvamAIClient,
    SarvamAIEnvironment: () => SarvamAIEnvironment,
    SarvamAIError: () => SarvamAIError,
    SarvamAITimeoutError: () => SarvamAITimeoutError,
    logging: () => logging
  });

  // node_modules/sarvamai/dist/esm/api/index.mjs
  var api_exports = {};
  __export(api_exports, {
    BadRequestError: () => BadRequestError,
    CompletionEventFlag: () => CompletionEventFlag,
    ConfigureConnection: () => ConfigureConnection,
    ContentTooLargeError: () => ContentTooLargeError,
    DocDigitizationErrorCode: () => DocDigitizationErrorCode,
    DocDigitizationJobDetailState: () => DocDigitizationJobDetailState,
    DocDigitizationJobState: () => DocDigitizationJobState,
    DocDigitizationOutputFormat: () => DocDigitizationOutputFormat,
    DocDigitizationSupportedLanguage: () => DocDigitizationSupportedLanguage,
    ErrorCode: () => ErrorCode,
    ErrorCode2: () => ErrorCode2,
    EventsData: () => EventsData,
    FinishReason: () => FinishReason,
    ForbiddenError: () => ForbiddenError,
    InputAudioCodec: () => InputAudioCodec,
    InternalServerError: () => InternalServerError,
    JobState: () => JobState,
    Mode: () => Mode,
    NotFoundError: () => NotFoundError,
    NumeralsFormat: () => NumeralsFormat,
    ReasoningEffort: () => ReasoningEffort,
    ResponseType: () => ResponseType,
    SarvamModelIds: () => SarvamModelIds,
    ServiceUnavailableError: () => ServiceUnavailableError,
    SpeechStreamBitrate: () => SpeechStreamBitrate,
    SpeechStreamCodec: () => SpeechStreamCodec,
    SpeechToTextLanguage: () => SpeechToTextLanguage,
    SpeechToTextModel: () => SpeechToTextModel,
    SpeechToTextStreamingFlushSignal: () => SpeechToTextStreamingFlushSignal,
    SpeechToTextStreamingHighVadSensitivity: () => SpeechToTextStreamingHighVadSensitivity,
    SpeechToTextStreamingInputAudioCodec: () => SpeechToTextStreamingInputAudioCodec,
    SpeechToTextStreamingLanguageCode: () => SpeechToTextStreamingLanguageCode,
    SpeechToTextStreamingMode: () => SpeechToTextStreamingMode,
    SpeechToTextStreamingModel: () => SpeechToTextStreamingModel,
    SpeechToTextStreamingVadSignals: () => SpeechToTextStreamingVadSignals,
    SpeechToTextTranslateLanguage: () => SpeechToTextTranslateLanguage,
    SpeechToTextTranslateStreamingFlushSignal: () => SpeechToTextTranslateStreamingFlushSignal,
    SpeechToTextTranslateStreamingHighVadSensitivity: () => SpeechToTextTranslateStreamingHighVadSensitivity,
    SpeechToTextTranslateStreamingInputAudioCodec: () => SpeechToTextTranslateStreamingInputAudioCodec,
    SpeechToTextTranslateStreamingMode: () => SpeechToTextTranslateStreamingMode,
    SpeechToTextTranslateStreamingModel: () => SpeechToTextTranslateStreamingModel,
    SpeechToTextTranslateStreamingVadSignals: () => SpeechToTextTranslateStreamingVadSignals,
    SpokenFormNumeralsFormat: () => SpokenFormNumeralsFormat,
    StorageContainerType: () => StorageContainerType,
    TaskState: () => TaskState,
    TextToSpeechLanguage: () => TextToSpeechLanguage,
    TextToSpeechModel: () => TextToSpeechModel,
    TextToSpeechOutputAudioCodec: () => TextToSpeechOutputAudioCodec,
    TextToSpeechSpeaker: () => TextToSpeechSpeaker,
    TextToSpeechStreamingModel: () => TextToSpeechStreamingModel,
    TextToSpeechStreamingSendCompletionEvent: () => TextToSpeechStreamingSendCompletionEvent,
    TooManyRequestsError: () => TooManyRequestsError,
    TranslateMode: () => TranslateMode,
    TranslateModel: () => TranslateModel,
    TranslateSourceLanguage: () => TranslateSourceLanguage,
    TranslateSpeakerGender: () => TranslateSpeakerGender,
    TranslateTargetLanguage: () => TranslateTargetLanguage,
    TranslatiterateTargetLanguage: () => TranslatiterateTargetLanguage,
    TransliterateMode: () => TransliterateMode,
    TransliterateSourceLanguage: () => TransliterateSourceLanguage,
    UnprocessableEntityError: () => UnprocessableEntityError,
    chat: () => chat_exports,
    documentIntelligence: () => documentIntelligence_exports,
    pronunciationDictionary: () => pronunciationDictionary_exports,
    speechToText: () => speechToText_exports,
    speechToTextJob: () => speechToTextJob_exports,
    speechToTextStreaming: () => speechToTextStreaming_exports,
    speechToTextTranslateJob: () => speechToTextTranslateJob_exports,
    speechToTextTranslateStreaming: () => speechToTextTranslateStreaming_exports,
    text: () => text_exports,
    textToSpeech: () => textToSpeech_exports,
    textToSpeechStreaming: () => textToSpeechStreaming_exports
  });

  // node_modules/sarvamai/dist/esm/core/json.mjs
  var toJson = (value, replacer, space) => {
    return JSON.stringify(value, replacer, space);
  };
  function fromJson(text, reviver) {
    return JSON.parse(text, reviver);
  }

  // node_modules/sarvamai/dist/esm/errors/SarvamAIError.mjs
  var SarvamAIError = class extends Error {
    constructor({ message, statusCode, body, rawResponse }) {
      super(buildMessage({ message, statusCode, body }));
      Object.setPrototypeOf(this, new.target.prototype);
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, this.constructor);
      }
      this.name = this.constructor.name;
      this.statusCode = statusCode;
      this.body = body;
      this.rawResponse = rawResponse;
    }
  };
  function buildMessage({ message, statusCode, body }) {
    const lines = [];
    if (message != null) {
      lines.push(message);
    }
    if (statusCode != null) {
      lines.push(`Status code: ${statusCode.toString()}`);
    }
    if (body != null) {
      lines.push(`Body: ${toJson(body, void 0, 2)}`);
    }
    return lines.join("\n");
  }

  // node_modules/sarvamai/dist/esm/errors/SarvamAITimeoutError.mjs
  var SarvamAITimeoutError = class extends Error {
    constructor(message) {
      super(message);
      Object.setPrototypeOf(this, new.target.prototype);
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, this.constructor);
      }
      this.name = this.constructor.name;
    }
  };

  // node_modules/sarvamai/dist/esm/api/errors/BadRequestError.mjs
  var BadRequestError = class extends SarvamAIError {
    constructor(body, rawResponse) {
      super({
        message: "BadRequestError",
        statusCode: 400,
        body,
        rawResponse
      });
      Object.setPrototypeOf(this, new.target.prototype);
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, this.constructor);
      }
      this.name = this.constructor.name;
    }
  };

  // node_modules/sarvamai/dist/esm/api/errors/ContentTooLargeError.mjs
  var ContentTooLargeError = class extends SarvamAIError {
    constructor(body, rawResponse) {
      super({
        message: "ContentTooLargeError",
        statusCode: 413,
        body,
        rawResponse
      });
      Object.setPrototypeOf(this, new.target.prototype);
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, this.constructor);
      }
      this.name = this.constructor.name;
    }
  };

  // node_modules/sarvamai/dist/esm/api/errors/ForbiddenError.mjs
  var ForbiddenError = class extends SarvamAIError {
    constructor(body, rawResponse) {
      super({
        message: "ForbiddenError",
        statusCode: 403,
        body,
        rawResponse
      });
      Object.setPrototypeOf(this, new.target.prototype);
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, this.constructor);
      }
      this.name = this.constructor.name;
    }
  };

  // node_modules/sarvamai/dist/esm/api/errors/InternalServerError.mjs
  var InternalServerError = class extends SarvamAIError {
    constructor(body, rawResponse) {
      super({
        message: "InternalServerError",
        statusCode: 500,
        body,
        rawResponse
      });
      Object.setPrototypeOf(this, new.target.prototype);
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, this.constructor);
      }
      this.name = this.constructor.name;
    }
  };

  // node_modules/sarvamai/dist/esm/api/errors/NotFoundError.mjs
  var NotFoundError = class extends SarvamAIError {
    constructor(body, rawResponse) {
      super({
        message: "NotFoundError",
        statusCode: 404,
        body,
        rawResponse
      });
      Object.setPrototypeOf(this, new.target.prototype);
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, this.constructor);
      }
      this.name = this.constructor.name;
    }
  };

  // node_modules/sarvamai/dist/esm/api/errors/ServiceUnavailableError.mjs
  var ServiceUnavailableError = class extends SarvamAIError {
    constructor(body, rawResponse) {
      super({
        message: "ServiceUnavailableError",
        statusCode: 503,
        body,
        rawResponse
      });
      Object.setPrototypeOf(this, new.target.prototype);
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, this.constructor);
      }
      this.name = this.constructor.name;
    }
  };

  // node_modules/sarvamai/dist/esm/api/errors/TooManyRequestsError.mjs
  var TooManyRequestsError = class extends SarvamAIError {
    constructor(body, rawResponse) {
      super({
        message: "TooManyRequestsError",
        statusCode: 429,
        body,
        rawResponse
      });
      Object.setPrototypeOf(this, new.target.prototype);
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, this.constructor);
      }
      this.name = this.constructor.name;
    }
  };

  // node_modules/sarvamai/dist/esm/api/errors/UnprocessableEntityError.mjs
  var UnprocessableEntityError = class extends SarvamAIError {
    constructor(body, rawResponse) {
      super({
        message: "UnprocessableEntityError",
        statusCode: 422,
        body,
        rawResponse
      });
      Object.setPrototypeOf(this, new.target.prototype);
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, this.constructor);
      }
      this.name = this.constructor.name;
    }
  };

  // node_modules/sarvamai/dist/esm/api/resources/chat/index.mjs
  var chat_exports = {};

  // node_modules/sarvamai/dist/esm/api/resources/documentIntelligence/index.mjs
  var documentIntelligence_exports = {};
  __export(documentIntelligence_exports, {
    DocumentIntelligenceJob: () => DocumentIntelligenceJob
  });

  // node_modules/sarvamai/dist/esm/api/resources/documentIntelligence/DocumentIntelligenceJob.mjs
  var __awaiter = function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
  var DocumentIntelligenceJob = class {
    constructor(client, jobId, options = {}) {
      var _a, _b;
      this._status = null;
      this._client = client;
      this._jobId = jobId;
      this._pollingIntervalMs = (_a = options.pollingIntervalMs) !== null && _a !== void 0 ? _a : 2e3;
      this._maxPollingAttempts = (_b = options.maxPollingAttempts) !== null && _b !== void 0 ? _b : 150;
    }
    /** The unique job ID */
    get jobId() {
      return this._jobId;
    }
    /** Alias for jobId (Python SDK compatibility) */
    get job_id() {
      return this._jobId;
    }
    /** The last fetched status (may be null if not yet polled) */
    get status() {
      return this._status;
    }
    /**
     * Upload a file to the job using a presigned URL.
     * Supports file path (Node.js) or File/Blob (browser).
     */
    uploadFile(file) {
      return __awaiter(this, void 0, void 0, function* () {
        let filename;
        let fileContent;
        if (typeof file === "string") {
          const fs3 = yield Promise.resolve().then(() => __toESM(require_fs(), 1));
          const path3 = yield Promise.resolve().then(() => __toESM(require_path(), 1));
          filename = path3.basename(file);
          const buffer = yield fs3.promises.readFile(file);
          fileContent = buffer;
        } else if (file instanceof File) {
          filename = file.name;
          fileContent = file;
        } else {
          filename = "document.pdf";
          fileContent = file;
        }
        const uploadResponse = yield this._client.getUploadLinks({
          job_id: this._jobId,
          files: [filename]
        });
        const uploadUrls = uploadResponse.upload_urls;
        if (!uploadUrls || Object.keys(uploadUrls).length === 0) {
          throw new Error("No upload URL returned from server");
        }
        const uploadInfo = Object.values(uploadUrls)[0];
        if (!(uploadInfo === null || uploadInfo === void 0 ? void 0 : uploadInfo.file_url)) {
          throw new Error("Invalid upload URL response");
        }
        const headers = {
          "x-ms-blob-type": "BlockBlob"
        };
        if (uploadInfo.file_metadata) {
          for (const [key, value] of Object.entries(uploadInfo.file_metadata)) {
            if (typeof value === "string") {
              headers[key] = value;
            }
          }
        }
        const response = yield fetch(uploadInfo.file_url, {
          method: "PUT",
          headers,
          body: fileContent
        });
        if (!response.ok) {
          throw new Error(`Failed to upload file: ${response.status} ${response.statusText}`);
        }
      });
    }
    /**
     * Start processing the job.
     */
    start() {
      return __awaiter(this, void 0, void 0, function* () {
        const response = yield this._client.start(this._jobId);
        this._status = response;
        return response;
      });
    }
    /**
     * Get the current status of the job.
     */
    getStatus() {
      return __awaiter(this, void 0, void 0, function* () {
        const response = yield this._client.getStatus(this._jobId);
        this._status = response;
        return response;
      });
    }
    /**
     * Poll until the job completes (Completed, PartiallyCompleted, or Failed).
     */
    waitUntilComplete() {
      return __awaiter(this, void 0, void 0, function* () {
        const terminalStates = ["Completed", "PartiallyCompleted", "Failed"];
        let attempts = 0;
        while (attempts < this._maxPollingAttempts) {
          const status = yield this.getStatus();
          if (terminalStates.includes(status.job_state)) {
            return status;
          }
          yield this._sleep(this._pollingIntervalMs);
          attempts++;
        }
        throw new Error(`Job did not complete within ${this._maxPollingAttempts * this._pollingIntervalMs / 1e3} seconds`);
      });
    }
    /**
     * Get page-level metrics from the last status.
     */
    getPageMetrics() {
      var _a, _b, _c, _d, _e, _f;
      if (!this._status) {
        throw new Error("No status available. Call getStatus() or waitUntilComplete() first.");
      }
      const jobDetails = (_a = this._status.job_details) === null || _a === void 0 ? void 0 : _a[0];
      return {
        totalPages: (_b = jobDetails === null || jobDetails === void 0 ? void 0 : jobDetails.total_pages) !== null && _b !== void 0 ? _b : 0,
        pagesProcessed: (_c = jobDetails === null || jobDetails === void 0 ? void 0 : jobDetails.pages_processed) !== null && _c !== void 0 ? _c : 0,
        pagesSucceeded: (_d = jobDetails === null || jobDetails === void 0 ? void 0 : jobDetails.pages_succeeded) !== null && _d !== void 0 ? _d : 0,
        pagesFailed: (_e = jobDetails === null || jobDetails === void 0 ? void 0 : jobDetails.pages_failed) !== null && _e !== void 0 ? _e : 0,
        pageErrors: (_f = jobDetails === null || jobDetails === void 0 ? void 0 : jobDetails.page_errors) !== null && _f !== void 0 ? _f : []
      };
    }
    /**
     * Download the output file(s) to the specified path.
     * The output is a ZIP file containing the processed documents.
     *
     * @param outputPath - Path where the output file will be saved
     * @returns The path to the downloaded file
     */
    downloadOutput(outputPath) {
      return __awaiter(this, void 0, void 0, function* () {
        const downloadResponse = yield this._client.getDownloadLinks(this._jobId);
        const downloadUrls = downloadResponse.download_urls;
        if (!downloadUrls || Object.keys(downloadUrls).length === 0) {
          throw new Error("No download URLs available. Job may not be complete.");
        }
        const downloadInfo = Object.values(downloadUrls)[0];
        if (!(downloadInfo === null || downloadInfo === void 0 ? void 0 : downloadInfo.file_url)) {
          throw new Error("Invalid download URL response");
        }
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 3e5);
        try {
          const response = yield fetch(downloadInfo.file_url, {
            signal: controller.signal
          });
          if (!response.ok) {
            throw new Error(`Failed to download file: ${response.status} ${response.statusText}`);
          }
          const arrayBuffer = yield response.arrayBuffer();
          const content = new Uint8Array(arrayBuffer);
          if (typeof window === "undefined") {
            const fs3 = yield Promise.resolve().then(() => __toESM(require_fs(), 1));
            const path3 = yield Promise.resolve().then(() => __toESM(require_path(), 1));
            const outputDir = path3.dirname(outputPath);
            if (outputDir) {
              yield fs3.promises.mkdir(outputDir, { recursive: true });
            }
            yield fs3.promises.writeFile(outputPath, content);
          } else {
            const blob = new Blob([content], { type: "application/zip" });
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = outputPath;
            document.body.appendChild(a);
            a.click();
            a.remove();
            URL.revokeObjectURL(url);
          }
          return outputPath;
        } finally {
          clearTimeout(timeoutId);
        }
      });
    }
    /**
     * Get download links for the output files.
     */
    getDownloadLinks() {
      return __awaiter(this, void 0, void 0, function* () {
        return this._client.getDownloadLinks(this._jobId);
      });
    }
    _sleep(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }
  };

  // node_modules/sarvamai/dist/esm/api/resources/pronunciationDictionary/index.mjs
  var pronunciationDictionary_exports = {};

  // node_modules/sarvamai/dist/esm/api/resources/speechToText/index.mjs
  var speechToText_exports = {};

  // node_modules/sarvamai/dist/esm/api/resources/speechToTextJob/index.mjs
  var speechToTextJob_exports = {};

  // node_modules/sarvamai/dist/esm/api/resources/speechToTextStreaming/index.mjs
  var speechToTextStreaming_exports = {};
  __export(speechToTextStreaming_exports, {
    SpeechToTextStreamingFlushSignal: () => SpeechToTextStreamingFlushSignal,
    SpeechToTextStreamingHighVadSensitivity: () => SpeechToTextStreamingHighVadSensitivity,
    SpeechToTextStreamingInputAudioCodec: () => SpeechToTextStreamingInputAudioCodec,
    SpeechToTextStreamingLanguageCode: () => SpeechToTextStreamingLanguageCode,
    SpeechToTextStreamingMode: () => SpeechToTextStreamingMode,
    SpeechToTextStreamingModel: () => SpeechToTextStreamingModel,
    SpeechToTextStreamingVadSignals: () => SpeechToTextStreamingVadSignals
  });

  // node_modules/sarvamai/dist/esm/api/resources/speechToTextStreaming/types/SpeechToTextStreamingFlushSignal.mjs
  var SpeechToTextStreamingFlushSignal = {
    True: "true",
    False: "false"
  };

  // node_modules/sarvamai/dist/esm/api/resources/speechToTextStreaming/types/SpeechToTextStreamingHighVadSensitivity.mjs
  var SpeechToTextStreamingHighVadSensitivity = {
    True: "true",
    False: "false"
  };

  // node_modules/sarvamai/dist/esm/api/resources/speechToTextStreaming/types/SpeechToTextStreamingInputAudioCodec.mjs
  var SpeechToTextStreamingInputAudioCodec = {
    Wav: "wav",
    PcmS16Le: "pcm_s16le",
    PcmL16: "pcm_l16",
    PcmRaw: "pcm_raw"
  };

  // node_modules/sarvamai/dist/esm/api/resources/speechToTextStreaming/types/SpeechToTextStreamingLanguageCode.mjs
  var SpeechToTextStreamingLanguageCode = {
    Unknown: "unknown",
    EnIn: "en-IN",
    HiIn: "hi-IN",
    BnIn: "bn-IN",
    GuIn: "gu-IN",
    KnIn: "kn-IN",
    MlIn: "ml-IN",
    MrIn: "mr-IN",
    OdIn: "od-IN",
    PaIn: "pa-IN",
    TaIn: "ta-IN",
    TeIn: "te-IN",
    AsIn: "as-IN",
    UrIn: "ur-IN",
    NeIn: "ne-IN",
    KokIn: "kok-IN",
    KsIn: "ks-IN",
    SdIn: "sd-IN",
    SaIn: "sa-IN",
    SatIn: "sat-IN",
    MniIn: "mni-IN",
    BrxIn: "brx-IN",
    MaiIn: "mai-IN",
    DoiIn: "doi-IN"
  };

  // node_modules/sarvamai/dist/esm/api/resources/speechToTextStreaming/types/SpeechToTextStreamingMode.mjs
  var SpeechToTextStreamingMode = {
    Transcribe: "transcribe",
    Translate: "translate",
    Verbatim: "verbatim",
    Translit: "translit",
    Codemix: "codemix"
  };

  // node_modules/sarvamai/dist/esm/api/resources/speechToTextStreaming/types/SpeechToTextStreamingModel.mjs
  var SpeechToTextStreamingModel = {
    SaarasV3: "saaras:v3",
    SaarikaV25: "saarika:v2.5"
  };

  // node_modules/sarvamai/dist/esm/api/resources/speechToTextStreaming/types/SpeechToTextStreamingVadSignals.mjs
  var SpeechToTextStreamingVadSignals = {
    True: "true",
    False: "false"
  };

  // node_modules/sarvamai/dist/esm/api/resources/speechToTextTranslateJob/index.mjs
  var speechToTextTranslateJob_exports = {};

  // node_modules/sarvamai/dist/esm/api/resources/speechToTextTranslateStreaming/index.mjs
  var speechToTextTranslateStreaming_exports = {};
  __export(speechToTextTranslateStreaming_exports, {
    SpeechToTextTranslateStreamingFlushSignal: () => SpeechToTextTranslateStreamingFlushSignal,
    SpeechToTextTranslateStreamingHighVadSensitivity: () => SpeechToTextTranslateStreamingHighVadSensitivity,
    SpeechToTextTranslateStreamingInputAudioCodec: () => SpeechToTextTranslateStreamingInputAudioCodec,
    SpeechToTextTranslateStreamingMode: () => SpeechToTextTranslateStreamingMode,
    SpeechToTextTranslateStreamingModel: () => SpeechToTextTranslateStreamingModel,
    SpeechToTextTranslateStreamingVadSignals: () => SpeechToTextTranslateStreamingVadSignals
  });

  // node_modules/sarvamai/dist/esm/api/resources/speechToTextTranslateStreaming/types/SpeechToTextTranslateStreamingFlushSignal.mjs
  var SpeechToTextTranslateStreamingFlushSignal = {
    True: "true",
    False: "false"
  };

  // node_modules/sarvamai/dist/esm/api/resources/speechToTextTranslateStreaming/types/SpeechToTextTranslateStreamingHighVadSensitivity.mjs
  var SpeechToTextTranslateStreamingHighVadSensitivity = {
    True: "true",
    False: "false"
  };

  // node_modules/sarvamai/dist/esm/api/resources/speechToTextTranslateStreaming/types/SpeechToTextTranslateStreamingInputAudioCodec.mjs
  var SpeechToTextTranslateStreamingInputAudioCodec = {
    Wav: "wav",
    PcmS16Le: "pcm_s16le",
    PcmL16: "pcm_l16",
    PcmRaw: "pcm_raw"
  };

  // node_modules/sarvamai/dist/esm/api/resources/speechToTextTranslateStreaming/types/SpeechToTextTranslateStreamingMode.mjs
  var SpeechToTextTranslateStreamingMode = {
    Translate: "translate",
    Transcribe: "transcribe",
    Verbatim: "verbatim",
    Translit: "translit",
    Codemix: "codemix"
  };

  // node_modules/sarvamai/dist/esm/api/resources/speechToTextTranslateStreaming/types/SpeechToTextTranslateStreamingModel.mjs
  var SpeechToTextTranslateStreamingModel = {
    SaarasV3: "saaras:v3",
    SaarasV25: "saaras:v2.5"
  };

  // node_modules/sarvamai/dist/esm/api/resources/speechToTextTranslateStreaming/types/SpeechToTextTranslateStreamingVadSignals.mjs
  var SpeechToTextTranslateStreamingVadSignals = {
    True: "true",
    False: "false"
  };

  // node_modules/sarvamai/dist/esm/api/resources/text/index.mjs
  var text_exports = {};

  // node_modules/sarvamai/dist/esm/api/resources/textToSpeech/index.mjs
  var textToSpeech_exports = {};

  // node_modules/sarvamai/dist/esm/api/resources/textToSpeechStreaming/index.mjs
  var textToSpeechStreaming_exports = {};
  __export(textToSpeechStreaming_exports, {
    TextToSpeechStreamingModel: () => TextToSpeechStreamingModel,
    TextToSpeechStreamingSendCompletionEvent: () => TextToSpeechStreamingSendCompletionEvent
  });

  // node_modules/sarvamai/dist/esm/api/resources/textToSpeechStreaming/types/TextToSpeechStreamingModel.mjs
  var TextToSpeechStreamingModel = {
    BulbulV2: "bulbul:v2",
    BulbulV3: "bulbul:v3"
  };

  // node_modules/sarvamai/dist/esm/api/resources/textToSpeechStreaming/types/TextToSpeechStreamingSendCompletionEvent.mjs
  var TextToSpeechStreamingSendCompletionEvent = {
    True: "true",
    False: "false"
  };

  // node_modules/sarvamai/dist/esm/api/types/CompletionEventFlag.mjs
  var CompletionEventFlag = {
    True: "true",
    False: "false"
  };

  // node_modules/sarvamai/dist/esm/api/types/ConfigureConnection.mjs
  var ConfigureConnection;
  (function(ConfigureConnection2) {
    let Data;
    (function(Data2) {
      Data2.Model = {
        BulbulV2: "bulbul:v2",
        BulbulV3: "bulbul:v3"
      };
      Data2.TargetLanguageCode = {
        BnIn: "bn-IN",
        EnIn: "en-IN",
        GuIn: "gu-IN",
        HiIn: "hi-IN",
        KnIn: "kn-IN",
        MlIn: "ml-IN",
        MrIn: "mr-IN",
        OdIn: "od-IN",
        PaIn: "pa-IN",
        TaIn: "ta-IN",
        TeIn: "te-IN"
      };
      Data2.Speaker = {
        Anushka: "anushka",
        Abhilash: "abhilash",
        Manisha: "manisha",
        Vidya: "vidya",
        Arya: "arya",
        Karun: "karun",
        Hitesh: "hitesh",
        Aditya: "aditya",
        Ritu: "ritu",
        Priya: "priya",
        Neha: "neha",
        Rahul: "rahul",
        Pooja: "pooja",
        Rohan: "rohan",
        Simran: "simran",
        Kavya: "kavya",
        Amit: "amit",
        Dev: "dev",
        Ishita: "ishita",
        Shreya: "shreya",
        Ratan: "ratan",
        Varun: "varun",
        Manan: "manan",
        Sumit: "sumit",
        Roopa: "roopa",
        Kabir: "kabir",
        Aayan: "aayan",
        Shubh: "shubh",
        Ashutosh: "ashutosh",
        Advait: "advait",
        Amelia: "amelia",
        Sophia: "sophia"
      };
      Data2.OutputAudioCodec = {
        Linear16: "linear16",
        Mulaw: "mulaw",
        Alaw: "alaw",
        Opus: "opus",
        Flac: "flac",
        Aac: "aac",
        Wav: "wav",
        Mp3: "mp3"
      };
      Data2.OutputAudioBitrate = {
        ThirtyTwoK: "32k",
        SixtyFourK: "64k",
        NinetySixK: "96k",
        OneHundredTwentyEightK: "128k",
        OneHundredNinetyTwoK: "192k"
      };
    })(Data = ConfigureConnection2.Data || (ConfigureConnection2.Data = {}));
  })(ConfigureConnection || (ConfigureConnection = {}));

  // node_modules/sarvamai/dist/esm/api/types/DocDigitizationErrorCode.mjs
  var DocDigitizationErrorCode = {
    InvalidRequestError: "invalid_request_error",
    InternalServerError: "internal_server_error",
    InsufficientQuotaError: "insufficient_quota_error",
    InvalidApiKeyError: "invalid_api_key_error",
    RateLimitExceededError: "rate_limit_exceeded_error",
    HighLoadError: "high_load_error"
  };

  // node_modules/sarvamai/dist/esm/api/types/DocDigitizationJobDetailState.mjs
  var DocDigitizationJobDetailState = {
    Pending: "Pending",
    Running: "Running",
    Success: "Success",
    PartialSuccess: "PartialSuccess",
    Failed: "Failed"
  };

  // node_modules/sarvamai/dist/esm/api/types/DocDigitizationJobState.mjs
  var DocDigitizationJobState = {
    Accepted: "Accepted",
    Pending: "Pending",
    Running: "Running",
    Completed: "Completed",
    PartiallyCompleted: "PartiallyCompleted",
    Failed: "Failed"
  };

  // node_modules/sarvamai/dist/esm/api/types/DocDigitizationOutputFormat.mjs
  var DocDigitizationOutputFormat = {
    Html: "html",
    Md: "md",
    Json: "json"
  };

  // node_modules/sarvamai/dist/esm/api/types/DocDigitizationSupportedLanguage.mjs
  var DocDigitizationSupportedLanguage = {
    HiIn: "hi-IN",
    EnIn: "en-IN",
    BnIn: "bn-IN",
    GuIn: "gu-IN",
    KnIn: "kn-IN",
    MlIn: "ml-IN",
    MrIn: "mr-IN",
    OrIn: "or-IN",
    PaIn: "pa-IN",
    TaIn: "ta-IN",
    TeIn: "te-IN",
    UrIn: "ur-IN",
    AsIn: "as-IN",
    BodoIn: "bodo-IN",
    DoiIn: "doi-IN",
    KsIn: "ks-IN",
    KokIn: "kok-IN",
    MaiIn: "mai-IN",
    MniIn: "mni-IN",
    NeIn: "ne-IN",
    SaIn: "sa-IN",
    SatIn: "sat-IN",
    SdIn: "sd-IN"
  };

  // node_modules/sarvamai/dist/esm/api/types/ErrorCode.mjs
  var ErrorCode = {
    InvalidRequestError: "invalid_request_error",
    InternalServerError: "internal_server_error",
    UnprocessableEntityError: "unprocessable_entity_error",
    InsufficientQuotaError: "insufficient_quota_error",
    InvalidApiKeyError: "invalid_api_key_error",
    AuthenticationError: "authentication_error",
    NotFoundError: "not_found_error",
    RateLimitExceededError: "rate_limit_exceeded_error"
  };

  // node_modules/sarvamai/dist/esm/api/types/ErrorCode2.mjs
  var ErrorCode2 = {
    InvalidRequestError: "invalid_request_error",
    InternalServerError: "internal_server_error",
    UnprocessableEntityError: "unprocessable_entity_error",
    InsufficientQuotaError: "insufficient_quota_error",
    InvalidApiKeyError: "invalid_api_key_error",
    AuthenticationError: "authentication_error",
    RateLimitExceededError: "rate_limit_exceeded_error",
    NotFoundError: "not_found_error"
  };

  // node_modules/sarvamai/dist/esm/api/types/EventsData.mjs
  var EventsData;
  (function(EventsData2) {
    EventsData2.SignalType = {
      StartSpeech: "START_SPEECH",
      EndSpeech: "END_SPEECH"
    };
  })(EventsData || (EventsData = {}));

  // node_modules/sarvamai/dist/esm/api/types/FinishReason.mjs
  var FinishReason = {
    Stop: "stop",
    Length: "length",
    ToolCalls: "tool_calls",
    ContentFilter: "content_filter",
    FunctionCall: "function_call"
  };

  // node_modules/sarvamai/dist/esm/api/types/InputAudioCodec.mjs
  var InputAudioCodec = {
    Wav: "wav",
    XWav: "x-wav",
    Wave: "wave",
    Mp3: "mp3",
    Mpeg: "mpeg",
    Mpeg3: "mpeg3",
    XMp3: "x-mp3",
    XMpeg3: "x-mpeg-3",
    Aac: "aac",
    XAac: "x-aac",
    Aiff: "aiff",
    XAiff: "x-aiff",
    Ogg: "ogg",
    Opus: "opus",
    Flac: "flac",
    XFlac: "x-flac",
    Mp4: "mp4",
    Xm4A: "x-m4a",
    Amr: "amr",
    XMsWma: "x-ms-wma",
    Webm: "webm",
    PcmS16Le: "pcm_s16le",
    PcmL16: "pcm_l16",
    PcmRaw: "pcm_raw"
  };

  // node_modules/sarvamai/dist/esm/api/types/JobState.mjs
  var JobState = {
    Accepted: "Accepted",
    Pending: "Pending",
    Running: "Running",
    Completed: "Completed",
    Failed: "Failed"
  };

  // node_modules/sarvamai/dist/esm/api/types/Mode.mjs
  var Mode = {
    Transcribe: "transcribe",
    Translate: "translate",
    Verbatim: "verbatim",
    Translit: "translit",
    Codemix: "codemix"
  };

  // node_modules/sarvamai/dist/esm/api/types/NumeralsFormat.mjs
  var NumeralsFormat = {
    International: "international",
    Native: "native"
  };

  // node_modules/sarvamai/dist/esm/api/types/ReasoningEffort.mjs
  var ReasoningEffort = {
    Low: "low",
    Medium: "medium",
    High: "high"
  };

  // node_modules/sarvamai/dist/esm/api/types/ResponseType.mjs
  var ResponseType = {
    Data: "data",
    Error: "error",
    Events: "events"
  };

  // node_modules/sarvamai/dist/esm/api/types/SarvamModelIds.mjs
  var SarvamModelIds = {
    Sarvam105B: "sarvam-105b",
    Sarvam30B: "sarvam-30b",
    SarvamM: "sarvam-m"
  };

  // node_modules/sarvamai/dist/esm/api/types/SpeechStreamBitrate.mjs
  var SpeechStreamBitrate = {
    ThirtyTwoK: "32k",
    SixtyFourK: "64k",
    NinetySixK: "96k",
    OneHundredTwentyEightK: "128k",
    OneHundredNinetyTwoK: "192k"
  };

  // node_modules/sarvamai/dist/esm/api/types/SpeechStreamCodec.mjs
  var SpeechStreamCodec = {
    Mp3: "mp3",
    Linear16: "linear16",
    Mulaw: "mulaw",
    Alaw: "alaw",
    Opus: "opus",
    Flac: "flac",
    Aac: "aac",
    Wav: "wav"
  };

  // node_modules/sarvamai/dist/esm/api/types/SpeechToTextLanguage.mjs
  var SpeechToTextLanguage = {
    Unknown: "unknown",
    HiIn: "hi-IN",
    BnIn: "bn-IN",
    KnIn: "kn-IN",
    MlIn: "ml-IN",
    MrIn: "mr-IN",
    OdIn: "od-IN",
    PaIn: "pa-IN",
    TaIn: "ta-IN",
    TeIn: "te-IN",
    EnIn: "en-IN",
    GuIn: "gu-IN",
    AsIn: "as-IN",
    UrIn: "ur-IN",
    NeIn: "ne-IN",
    KokIn: "kok-IN",
    KsIn: "ks-IN",
    SdIn: "sd-IN",
    SaIn: "sa-IN",
    SatIn: "sat-IN",
    MniIn: "mni-IN",
    BrxIn: "brx-IN",
    MaiIn: "mai-IN",
    DoiIn: "doi-IN"
  };

  // node_modules/sarvamai/dist/esm/api/types/SpeechToTextModel.mjs
  var SpeechToTextModel = {
    SaarikaV25: "saarika:v2.5",
    SaarasV3: "saaras:v3"
  };

  // node_modules/sarvamai/dist/esm/api/types/SpeechToTextTranslateLanguage.mjs
  var SpeechToTextTranslateLanguage = {
    HiIn: "hi-IN",
    BnIn: "bn-IN",
    KnIn: "kn-IN",
    MlIn: "ml-IN",
    MrIn: "mr-IN",
    OdIn: "od-IN",
    PaIn: "pa-IN",
    TaIn: "ta-IN",
    TeIn: "te-IN",
    GuIn: "gu-IN",
    EnIn: "en-IN",
    AsIn: "as-IN",
    UrIn: "ur-IN",
    NeIn: "ne-IN",
    KokIn: "kok-IN",
    KsIn: "ks-IN",
    SdIn: "sd-IN",
    SaIn: "sa-IN",
    SatIn: "sat-IN",
    MniIn: "mni-IN",
    BrxIn: "brx-IN",
    MaiIn: "mai-IN",
    DoiIn: "doi-IN"
  };

  // node_modules/sarvamai/dist/esm/api/types/SpokenFormNumeralsFormat.mjs
  var SpokenFormNumeralsFormat = {
    English: "english",
    Native: "native"
  };

  // node_modules/sarvamai/dist/esm/api/types/StorageContainerType.mjs
  var StorageContainerType = {
    Azure: "Azure",
    Local: "Local",
    Google: "Google",
    AzureV1: "Azure_V1"
  };

  // node_modules/sarvamai/dist/esm/api/types/TaskState.mjs
  var TaskState = {
    Success: "Success",
    ApiError: "API Error",
    InternalServerError: "Internal Server Error"
  };

  // node_modules/sarvamai/dist/esm/api/types/TextToSpeechLanguage.mjs
  var TextToSpeechLanguage = {
    BnIn: "bn-IN",
    EnIn: "en-IN",
    GuIn: "gu-IN",
    HiIn: "hi-IN",
    KnIn: "kn-IN",
    MlIn: "ml-IN",
    MrIn: "mr-IN",
    OdIn: "od-IN",
    PaIn: "pa-IN",
    TaIn: "ta-IN",
    TeIn: "te-IN"
  };

  // node_modules/sarvamai/dist/esm/api/types/TextToSpeechModel.mjs
  var TextToSpeechModel = {
    BulbulV2: "bulbul:v2",
    BulbulV3: "bulbul:v3"
  };

  // node_modules/sarvamai/dist/esm/api/types/TextToSpeechOutputAudioCodec.mjs
  var TextToSpeechOutputAudioCodec = {
    Mp3: "mp3",
    Linear16: "linear16",
    Mulaw: "mulaw",
    Alaw: "alaw",
    Opus: "opus",
    Flac: "flac",
    Aac: "aac",
    Wav: "wav"
  };

  // node_modules/sarvamai/dist/esm/api/types/TextToSpeechSpeaker.mjs
  var TextToSpeechSpeaker = {
    Anushka: "anushka",
    Abhilash: "abhilash",
    Manisha: "manisha",
    Vidya: "vidya",
    Arya: "arya",
    Karun: "karun",
    Hitesh: "hitesh",
    Aditya: "aditya",
    Ritu: "ritu",
    Priya: "priya",
    Neha: "neha",
    Rahul: "rahul",
    Pooja: "pooja",
    Rohan: "rohan",
    Simran: "simran",
    Kavya: "kavya",
    Amit: "amit",
    Dev: "dev",
    Ishita: "ishita",
    Shreya: "shreya",
    Ratan: "ratan",
    Varun: "varun",
    Manan: "manan",
    Sumit: "sumit",
    Roopa: "roopa",
    Kabir: "kabir",
    Aayan: "aayan",
    Shubh: "shubh",
    Ashutosh: "ashutosh",
    Advait: "advait",
    Anand: "anand",
    Tanya: "tanya",
    Tarun: "tarun",
    Sunny: "sunny",
    Mani: "mani",
    Gokul: "gokul",
    Vijay: "vijay",
    Shruti: "shruti",
    Suhani: "suhani",
    Mohit: "mohit",
    Kavitha: "kavitha",
    Rehan: "rehan",
    Soham: "soham",
    Rupali: "rupali"
  };

  // node_modules/sarvamai/dist/esm/api/types/TranslateMode.mjs
  var TranslateMode = {
    Formal: "formal",
    ModernColloquial: "modern-colloquial",
    ClassicColloquial: "classic-colloquial",
    CodeMixed: "code-mixed"
  };

  // node_modules/sarvamai/dist/esm/api/types/TranslateModel.mjs
  var TranslateModel = {
    MayuraV1: "mayura:v1",
    SarvamTranslateV1: "sarvam-translate:v1"
  };

  // node_modules/sarvamai/dist/esm/api/types/TranslateSourceLanguage.mjs
  var TranslateSourceLanguage = {
    Auto: "auto",
    BnIn: "bn-IN",
    EnIn: "en-IN",
    GuIn: "gu-IN",
    HiIn: "hi-IN",
    KnIn: "kn-IN",
    MlIn: "ml-IN",
    MrIn: "mr-IN",
    OdIn: "od-IN",
    PaIn: "pa-IN",
    TaIn: "ta-IN",
    TeIn: "te-IN",
    AsIn: "as-IN",
    BrxIn: "brx-IN",
    DoiIn: "doi-IN",
    KokIn: "kok-IN",
    KsIn: "ks-IN",
    MaiIn: "mai-IN",
    MniIn: "mni-IN",
    NeIn: "ne-IN",
    SaIn: "sa-IN",
    SatIn: "sat-IN",
    SdIn: "sd-IN",
    UrIn: "ur-IN"
  };

  // node_modules/sarvamai/dist/esm/api/types/TranslateSpeakerGender.mjs
  var TranslateSpeakerGender = {
    Male: "Male",
    Female: "Female"
  };

  // node_modules/sarvamai/dist/esm/api/types/TranslateTargetLanguage.mjs
  var TranslateTargetLanguage = {
    BnIn: "bn-IN",
    EnIn: "en-IN",
    GuIn: "gu-IN",
    HiIn: "hi-IN",
    KnIn: "kn-IN",
    MlIn: "ml-IN",
    MrIn: "mr-IN",
    OdIn: "od-IN",
    PaIn: "pa-IN",
    TaIn: "ta-IN",
    TeIn: "te-IN",
    AsIn: "as-IN",
    BrxIn: "brx-IN",
    DoiIn: "doi-IN",
    KokIn: "kok-IN",
    KsIn: "ks-IN",
    MaiIn: "mai-IN",
    MniIn: "mni-IN",
    NeIn: "ne-IN",
    SaIn: "sa-IN",
    SatIn: "sat-IN",
    SdIn: "sd-IN",
    UrIn: "ur-IN"
  };

  // node_modules/sarvamai/dist/esm/api/types/TranslatiterateTargetLanguage.mjs
  var TranslatiterateTargetLanguage = {
    BnIn: "bn-IN",
    EnIn: "en-IN",
    GuIn: "gu-IN",
    HiIn: "hi-IN",
    KnIn: "kn-IN",
    MlIn: "ml-IN",
    MrIn: "mr-IN",
    OdIn: "od-IN",
    PaIn: "pa-IN",
    TaIn: "ta-IN",
    TeIn: "te-IN"
  };

  // node_modules/sarvamai/dist/esm/api/types/TransliterateMode.mjs
  var TransliterateMode = {
    Roman: "roman",
    FullyNative: "fully-native",
    SpokenFormInNative: "spoken-form-in-native"
  };

  // node_modules/sarvamai/dist/esm/api/types/TransliterateSourceLanguage.mjs
  var TransliterateSourceLanguage = {
    Auto: "auto",
    BnIn: "bn-IN",
    EnIn: "en-IN",
    GuIn: "gu-IN",
    HiIn: "hi-IN",
    KnIn: "kn-IN",
    MlIn: "ml-IN",
    MrIn: "mr-IN",
    OdIn: "od-IN",
    PaIn: "pa-IN",
    TaIn: "ta-IN",
    TeIn: "te-IN"
  };

  // node_modules/sarvamai/dist/esm/core/auth/NoOpAuthProvider.mjs
  var NoOpAuthProvider = class {
    getAuthRequest() {
      return Promise.resolve({ headers: {} });
    }
  };

  // node_modules/sarvamai/dist/esm/core/fetcher/EndpointSupplier.mjs
  var __awaiter2 = function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
  var EndpointSupplier = {
    get: (supplier, arg) => __awaiter2(void 0, void 0, void 0, function* () {
      if (typeof supplier === "function") {
        return supplier(arg);
      } else {
        return supplier;
      }
    })
  };

  // node_modules/sarvamai/dist/esm/core/logging/logger.mjs
  var LogLevel = {
    Debug: "debug",
    Info: "info",
    Warn: "warn",
    Error: "error"
  };
  var logLevelMap = {
    [LogLevel.Debug]: 1,
    [LogLevel.Info]: 2,
    [LogLevel.Warn]: 3,
    [LogLevel.Error]: 4
  };
  var ConsoleLogger = class {
    debug(message, ...args) {
      console.debug(message, ...args);
    }
    info(message, ...args) {
      console.info(message, ...args);
    }
    warn(message, ...args) {
      console.warn(message, ...args);
    }
    error(message, ...args) {
      console.error(message, ...args);
    }
  };
  var Logger = class {
    /**
     * Creates a new logger instance.
     * @param config - Logger configuration
     */
    constructor(config) {
      this.level = logLevelMap[config.level];
      this.logger = config.logger;
      this.silent = config.silent;
    }
    /**
     * Checks if a log level should be output based on configuration.
     * @param level - The log level to check
     * @returns True if the level should be logged
     */
    shouldLog(level) {
      return !this.silent && this.level <= logLevelMap[level];
    }
    /**
     * Checks if debug logging is enabled.
     * @returns True if debug logs should be output
     */
    isDebug() {
      return this.shouldLog(LogLevel.Debug);
    }
    /**
     * Logs a debug message if debug logging is enabled.
     * @param message - The message to log
     * @param args - Additional arguments to log
     */
    debug(message, ...args) {
      if (this.isDebug()) {
        this.logger.debug(message, ...args);
      }
    }
    /**
     * Checks if info logging is enabled.
     * @returns True if info logs should be output
     */
    isInfo() {
      return this.shouldLog(LogLevel.Info);
    }
    /**
     * Logs an info message if info logging is enabled.
     * @param message - The message to log
     * @param args - Additional arguments to log
     */
    info(message, ...args) {
      if (this.isInfo()) {
        this.logger.info(message, ...args);
      }
    }
    /**
     * Checks if warning logging is enabled.
     * @returns True if warning logs should be output
     */
    isWarn() {
      return this.shouldLog(LogLevel.Warn);
    }
    /**
     * Logs a warning message if warning logging is enabled.
     * @param message - The message to log
     * @param args - Additional arguments to log
     */
    warn(message, ...args) {
      if (this.isWarn()) {
        this.logger.warn(message, ...args);
      }
    }
    /**
     * Checks if error logging is enabled.
     * @returns True if error logs should be output
     */
    isError() {
      return this.shouldLog(LogLevel.Error);
    }
    /**
     * Logs an error message if error logging is enabled.
     * @param message - The message to log
     * @param args - Additional arguments to log
     */
    error(message, ...args) {
      if (this.isError()) {
        this.logger.error(message, ...args);
      }
    }
  };
  function createLogger(config) {
    var _a, _b, _c;
    if (config == null) {
      return defaultLogger;
    }
    if (config instanceof Logger) {
      return config;
    }
    config = config !== null && config !== void 0 ? config : {};
    (_a = config.level) !== null && _a !== void 0 ? _a : config.level = LogLevel.Info;
    (_b = config.logger) !== null && _b !== void 0 ? _b : config.logger = new ConsoleLogger();
    (_c = config.silent) !== null && _c !== void 0 ? _c : config.silent = true;
    return new Logger(config);
  }
  var defaultLogger = new Logger({
    level: LogLevel.Info,
    logger: new ConsoleLogger(),
    silent: true
  });

  // node_modules/sarvamai/dist/esm/core/url/qs.mjs
  var defaultQsOptions = {
    arrayFormat: "indices",
    encode: true
  };
  function encodeValue(value, shouldEncode) {
    if (value === void 0) {
      return "";
    }
    if (value === null) {
      return "";
    }
    const stringValue = String(value);
    return shouldEncode ? encodeURIComponent(stringValue) : stringValue;
  }
  function stringifyObject(obj, prefix = "", options) {
    const parts = [];
    for (const [key, value] of Object.entries(obj)) {
      const fullKey = prefix ? `${prefix}[${key}]` : key;
      if (value === void 0) {
        continue;
      }
      if (Array.isArray(value)) {
        if (value.length === 0) {
          continue;
        }
        for (let i = 0; i < value.length; i++) {
          const item = value[i];
          if (item === void 0) {
            continue;
          }
          if (typeof item === "object" && !Array.isArray(item) && item !== null) {
            const arrayKey = options.arrayFormat === "indices" ? `${fullKey}[${i}]` : fullKey;
            parts.push(...stringifyObject(item, arrayKey, options));
          } else {
            const arrayKey = options.arrayFormat === "indices" ? `${fullKey}[${i}]` : fullKey;
            const encodedKey = options.encode ? encodeURIComponent(arrayKey) : arrayKey;
            parts.push(`${encodedKey}=${encodeValue(item, options.encode)}`);
          }
        }
      } else if (typeof value === "object" && value !== null) {
        if (Object.keys(value).length === 0) {
          continue;
        }
        parts.push(...stringifyObject(value, fullKey, options));
      } else {
        const encodedKey = options.encode ? encodeURIComponent(fullKey) : fullKey;
        parts.push(`${encodedKey}=${encodeValue(value, options.encode)}`);
      }
    }
    return parts;
  }
  function toQueryString(obj, options) {
    if (obj == null || typeof obj !== "object") {
      return "";
    }
    const parts = stringifyObject(obj, "", Object.assign(Object.assign({}, defaultQsOptions), options));
    return parts.join("&");
  }

  // node_modules/sarvamai/dist/esm/core/fetcher/createRequestUrl.mjs
  function createRequestUrl(baseUrl, queryParameters) {
    const queryString = toQueryString(queryParameters, { arrayFormat: "repeat" });
    return queryString ? `${baseUrl}?${queryString}` : baseUrl;
  }

  // node_modules/sarvamai/dist/esm/core/fetcher/BinaryResponse.mjs
  function getBinaryResponse(response) {
    const binaryResponse = {
      get bodyUsed() {
        return response.bodyUsed;
      },
      stream: () => response.body,
      arrayBuffer: response.arrayBuffer.bind(response),
      blob: response.blob.bind(response)
    };
    if ("bytes" in response && typeof response.bytes === "function") {
      binaryResponse.bytes = response.bytes.bind(response);
    }
    return binaryResponse;
  }

  // node_modules/sarvamai/dist/esm/core/fetcher/getResponseBody.mjs
  var __awaiter3 = function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
  function getResponseBody(response, responseType) {
    return __awaiter3(this, void 0, void 0, function* () {
      switch (responseType) {
        case "binary-response":
          return getBinaryResponse(response);
        case "blob":
          return yield response.blob();
        case "arrayBuffer":
          return yield response.arrayBuffer();
        case "sse":
          if (response.body == null) {
            return {
              ok: false,
              error: {
                reason: "body-is-null",
                statusCode: response.status
              }
            };
          }
          return response.body;
        case "streaming":
          if (response.body == null) {
            return {
              ok: false,
              error: {
                reason: "body-is-null",
                statusCode: response.status
              }
            };
          }
          return response.body;
        case "text":
          return yield response.text();
      }
      const text = yield response.text();
      if (text.length > 0) {
        try {
          const responseBody = fromJson(text);
          return responseBody;
        } catch (_err) {
          return {
            ok: false,
            error: {
              reason: "non-json",
              statusCode: response.status,
              rawBody: text
            }
          };
        }
      }
      return void 0;
    });
  }

  // node_modules/sarvamai/dist/esm/core/fetcher/getErrorResponseBody.mjs
  var __awaiter4 = function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
  function getErrorResponseBody(response) {
    return __awaiter4(this, void 0, void 0, function* () {
      var _a, _b, _c;
      let contentType = (_a = response.headers.get("Content-Type")) === null || _a === void 0 ? void 0 : _a.toLowerCase();
      if (contentType == null || contentType.length === 0) {
        return getResponseBody(response);
      }
      if (contentType.indexOf(";") !== -1) {
        contentType = (_c = (_b = contentType.split(";")[0]) === null || _b === void 0 ? void 0 : _b.trim()) !== null && _c !== void 0 ? _c : "";
      }
      switch (contentType) {
        case "application/hal+json":
        case "application/json":
        case "application/ld+json":
        case "application/problem+json":
        case "application/vnd.api+json":
        case "text/json": {
          const text = yield response.text();
          return text.length > 0 ? fromJson(text) : void 0;
        }
        default:
          if (contentType.startsWith("application/vnd.") && contentType.endsWith("+json")) {
            const text = yield response.text();
            return text.length > 0 ? fromJson(text) : void 0;
          }
          return yield response.text();
      }
    });
  }

  // node_modules/sarvamai/dist/esm/core/fetcher/getFetchFn.mjs
  var __awaiter5 = function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
  function getFetchFn() {
    return __awaiter5(this, void 0, void 0, function* () {
      return fetch;
    });
  }

  // node_modules/sarvamai/dist/esm/core/fetcher/getRequestBody.mjs
  var __awaiter6 = function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
  function getRequestBody(_a) {
    return __awaiter6(this, arguments, void 0, function* ({ body, type }) {
      if (type === "form") {
        return toQueryString(body, { arrayFormat: "repeat", encode: true });
      }
      if (type.includes("json")) {
        return toJson(body);
      } else {
        return body;
      }
    });
  }

  // node_modules/sarvamai/dist/esm/core/fetcher/Headers.mjs
  var Headers;
  if (typeof globalThis.Headers !== "undefined") {
    Headers = globalThis.Headers;
  } else {
    Headers = class Headers2 {
      constructor(init) {
        this.headers = /* @__PURE__ */ new Map();
        if (init) {
          if (init instanceof Headers2) {
            init.forEach((value, key) => this.append(key, value));
          } else if (Array.isArray(init)) {
            for (const [key, value] of init) {
              if (typeof key === "string" && typeof value === "string") {
                this.append(key, value);
              } else {
                throw new TypeError("Each header entry must be a [string, string] tuple");
              }
            }
          } else {
            for (const [key, value] of Object.entries(init)) {
              if (typeof value === "string") {
                this.append(key, value);
              } else {
                throw new TypeError("Header values must be strings");
              }
            }
          }
        }
      }
      append(name, value) {
        const key = name.toLowerCase();
        const existing = this.headers.get(key) || [];
        this.headers.set(key, [...existing, value]);
      }
      delete(name) {
        const key = name.toLowerCase();
        this.headers.delete(key);
      }
      get(name) {
        const key = name.toLowerCase();
        const values = this.headers.get(key);
        return values ? values.join(", ") : null;
      }
      has(name) {
        const key = name.toLowerCase();
        return this.headers.has(key);
      }
      set(name, value) {
        const key = name.toLowerCase();
        this.headers.set(key, [value]);
      }
      forEach(callbackfn, thisArg) {
        const boundCallback = thisArg ? callbackfn.bind(thisArg) : callbackfn;
        this.headers.forEach((values, key) => boundCallback(values.join(", "), key, this));
      }
      getSetCookie() {
        return this.headers.get("set-cookie") || [];
      }
      *entries() {
        for (const [key, values] of this.headers.entries()) {
          yield [key, values.join(", ")];
        }
      }
      *keys() {
        yield* this.headers.keys();
      }
      *values() {
        for (const values of this.headers.values()) {
          yield values.join(", ");
        }
      }
      [Symbol.iterator]() {
        return this.entries();
      }
    };
  }

  // node_modules/sarvamai/dist/esm/core/fetcher/signals.mjs
  var TIMEOUT = "timeout";
  function getTimeoutSignal(timeoutMs) {
    const controller = new AbortController();
    const abortId = setTimeout(() => controller.abort(TIMEOUT), timeoutMs);
    return { signal: controller.signal, abortId };
  }
  function anySignal(...args) {
    const signals = args.length === 1 && Array.isArray(args[0]) ? args[0] : args;
    const controller = new AbortController();
    for (const signal of signals) {
      if (signal.aborted) {
        controller.abort(signal === null || signal === void 0 ? void 0 : signal.reason);
        break;
      }
      signal.addEventListener("abort", () => controller.abort(signal === null || signal === void 0 ? void 0 : signal.reason), {
        signal: controller.signal
      });
    }
    return controller.signal;
  }

  // node_modules/sarvamai/dist/esm/core/fetcher/makeRequest.mjs
  var __awaiter7 = function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
  var _cacheNoStoreSupported;
  function isCacheNoStoreSupported() {
    if (_cacheNoStoreSupported != null) {
      return _cacheNoStoreSupported;
    }
    try {
      new Request("http://localhost", { cache: "no-store" });
      _cacheNoStoreSupported = true;
    } catch (_a) {
      _cacheNoStoreSupported = false;
    }
    return _cacheNoStoreSupported;
  }
  var makeRequest = (fetchFn, url, method, headers, requestBody, timeoutMs, abortSignal, withCredentials, duplex, disableCache) => __awaiter7(void 0, void 0, void 0, function* () {
    const signals = [];
    let timeoutAbortId;
    if (timeoutMs != null) {
      const { signal, abortId } = getTimeoutSignal(timeoutMs);
      timeoutAbortId = abortId;
      signals.push(signal);
    }
    if (abortSignal != null) {
      signals.push(abortSignal);
    }
    const newSignals = anySignal(signals);
    const response = yield fetchFn(url, Object.assign({
      method,
      headers,
      body: requestBody,
      signal: newSignals,
      credentials: withCredentials ? "include" : void 0,
      // @ts-ignore
      duplex
    }, disableCache && isCacheNoStoreSupported() ? { cache: "no-store" } : {}));
    if (timeoutAbortId != null) {
      clearTimeout(timeoutAbortId);
    }
    return response;
  });

  // node_modules/sarvamai/dist/esm/core/fetcher/RawResponse.mjs
  var abortRawResponse = {
    headers: new Headers(),
    redirected: false,
    status: 499,
    statusText: "Client Closed Request",
    type: "error",
    url: ""
  };
  var unknownRawResponse = {
    headers: new Headers(),
    redirected: false,
    status: 0,
    statusText: "Unknown Error",
    type: "error",
    url: ""
  };
  function toRawResponse(response) {
    return {
      headers: response.headers,
      redirected: response.redirected,
      status: response.status,
      statusText: response.statusText,
      type: response.type,
      url: response.url
    };
  }

  // node_modules/sarvamai/dist/esm/core/fetcher/requestWithRetries.mjs
  var __awaiter8 = function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
  var INITIAL_RETRY_DELAY = 1e3;
  var MAX_RETRY_DELAY = 6e4;
  var DEFAULT_MAX_RETRIES = 2;
  var JITTER_FACTOR = 0.2;
  function addPositiveJitter(delay) {
    const jitterMultiplier = 1 + Math.random() * JITTER_FACTOR;
    return delay * jitterMultiplier;
  }
  function addSymmetricJitter(delay) {
    const jitterMultiplier = 1 + (Math.random() - 0.5) * JITTER_FACTOR;
    return delay * jitterMultiplier;
  }
  function getRetryDelayFromHeaders(response, retryAttempt) {
    const retryAfter = response.headers.get("Retry-After");
    if (retryAfter) {
      const retryAfterSeconds = parseInt(retryAfter, 10);
      if (!Number.isNaN(retryAfterSeconds) && retryAfterSeconds > 0) {
        return Math.min(retryAfterSeconds * 1e3, MAX_RETRY_DELAY);
      }
      const retryAfterDate = new Date(retryAfter);
      if (!Number.isNaN(retryAfterDate.getTime())) {
        const delay = retryAfterDate.getTime() - Date.now();
        if (delay > 0) {
          return Math.min(Math.max(delay, 0), MAX_RETRY_DELAY);
        }
      }
    }
    const rateLimitReset = response.headers.get("X-RateLimit-Reset");
    if (rateLimitReset) {
      const resetTime = parseInt(rateLimitReset, 10);
      if (!Number.isNaN(resetTime)) {
        const delay = resetTime * 1e3 - Date.now();
        if (delay > 0) {
          return addPositiveJitter(Math.min(delay, MAX_RETRY_DELAY));
        }
      }
    }
    return addSymmetricJitter(Math.min(INITIAL_RETRY_DELAY * Math.pow(2, retryAttempt), MAX_RETRY_DELAY));
  }
  function requestWithRetries(requestFn_1) {
    return __awaiter8(this, arguments, void 0, function* (requestFn, maxRetries = DEFAULT_MAX_RETRIES) {
      let response = yield requestFn();
      for (let i = 0; i < maxRetries; ++i) {
        if ([408, 429].includes(response.status) || response.status >= 500) {
          const delay = getRetryDelayFromHeaders(response, i);
          yield new Promise((resolve) => setTimeout(resolve, delay));
          response = yield requestFn();
        } else {
          break;
        }
      }
      return response;
    });
  }

  // node_modules/sarvamai/dist/esm/core/fetcher/Fetcher.mjs
  var __awaiter9 = function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
  var SENSITIVE_HEADERS = /* @__PURE__ */ new Set([
    "authorization",
    "www-authenticate",
    "x-api-key",
    "api-key",
    "apikey",
    "x-api-token",
    "x-auth-token",
    "auth-token",
    "cookie",
    "set-cookie",
    "proxy-authorization",
    "proxy-authenticate",
    "x-csrf-token",
    "x-xsrf-token",
    "x-session-token",
    "x-access-token"
  ]);
  function redactHeaders(headers) {
    const filtered = {};
    for (const [key, value] of headers instanceof Headers ? headers.entries() : Object.entries(headers)) {
      if (SENSITIVE_HEADERS.has(key.toLowerCase())) {
        filtered[key] = "[REDACTED]";
      } else {
        filtered[key] = value;
      }
    }
    return filtered;
  }
  var SENSITIVE_QUERY_PARAMS = /* @__PURE__ */ new Set([
    "api_key",
    "api-key",
    "apikey",
    "token",
    "access_token",
    "access-token",
    "auth_token",
    "auth-token",
    "password",
    "passwd",
    "secret",
    "api_secret",
    "api-secret",
    "apisecret",
    "key",
    "session",
    "session_id",
    "session-id"
  ]);
  function redactQueryParameters(queryParameters) {
    if (queryParameters == null) {
      return queryParameters;
    }
    const redacted = {};
    for (const [key, value] of Object.entries(queryParameters)) {
      if (SENSITIVE_QUERY_PARAMS.has(key.toLowerCase())) {
        redacted[key] = "[REDACTED]";
      } else {
        redacted[key] = value;
      }
    }
    return redacted;
  }
  function redactUrl(url) {
    const protocolIndex = url.indexOf("://");
    if (protocolIndex === -1)
      return url;
    const afterProtocol = protocolIndex + 3;
    const pathStart = url.indexOf("/", afterProtocol);
    let queryStart = url.indexOf("?", afterProtocol);
    let fragmentStart = url.indexOf("#", afterProtocol);
    const firstDelimiter = Math.min(pathStart === -1 ? url.length : pathStart, queryStart === -1 ? url.length : queryStart, fragmentStart === -1 ? url.length : fragmentStart);
    let atIndex = -1;
    for (let i = afterProtocol; i < firstDelimiter; i++) {
      if (url[i] === "@") {
        atIndex = i;
      }
    }
    if (atIndex !== -1) {
      url = `${url.slice(0, afterProtocol)}[REDACTED]@${url.slice(atIndex + 1)}`;
    }
    queryStart = url.indexOf("?");
    if (queryStart === -1)
      return url;
    fragmentStart = url.indexOf("#", queryStart);
    const queryEnd = fragmentStart !== -1 ? fragmentStart : url.length;
    const queryString = url.slice(queryStart + 1, queryEnd);
    if (queryString.length === 0)
      return url;
    const lower = queryString.toLowerCase();
    const hasSensitive = lower.includes("token") || lower.includes("key") || lower.includes("password") || lower.includes("passwd") || lower.includes("secret") || lower.includes("session") || lower.includes("auth");
    if (!hasSensitive) {
      return url;
    }
    const redactedParams = [];
    const params = queryString.split("&");
    for (const param of params) {
      const equalIndex = param.indexOf("=");
      if (equalIndex === -1) {
        redactedParams.push(param);
        continue;
      }
      const key = param.slice(0, equalIndex);
      let shouldRedact = SENSITIVE_QUERY_PARAMS.has(key.toLowerCase());
      if (!shouldRedact && key.includes("%")) {
        try {
          const decodedKey = decodeURIComponent(key);
          shouldRedact = SENSITIVE_QUERY_PARAMS.has(decodedKey.toLowerCase());
        } catch (_a) {
        }
      }
      redactedParams.push(shouldRedact ? `${key}=[REDACTED]` : param);
    }
    return url.slice(0, queryStart + 1) + redactedParams.join("&") + url.slice(queryEnd);
  }
  function getHeaders(args) {
    return __awaiter9(this, void 0, void 0, function* () {
      var _a;
      const newHeaders = new Headers();
      newHeaders.set("Accept", args.responseType === "json" ? "application/json" : args.responseType === "text" ? "text/plain" : args.responseType === "sse" ? "text/event-stream" : "*/*");
      if (args.body !== void 0 && args.contentType != null) {
        newHeaders.set("Content-Type", args.contentType);
      }
      if (args.headers == null) {
        return newHeaders;
      }
      for (const [key, value] of Object.entries(args.headers)) {
        const result = yield EndpointSupplier.get(value, { endpointMetadata: (_a = args.endpointMetadata) !== null && _a !== void 0 ? _a : {} });
        if (typeof result === "string") {
          newHeaders.set(key, result);
          continue;
        }
        if (result == null) {
          continue;
        }
        newHeaders.set(key, `${result}`);
      }
      return newHeaders;
    });
  }
  function fetcherImpl(args) {
    return __awaiter9(this, void 0, void 0, function* () {
      var _a, _b, _c;
      const url = createRequestUrl(args.url, args.queryParameters);
      const requestBody = yield getRequestBody({
        body: args.body,
        type: (_a = args.requestType) !== null && _a !== void 0 ? _a : "other"
      });
      const fetchFn = (_b = args.fetchFn) !== null && _b !== void 0 ? _b : yield getFetchFn();
      const headers = yield getHeaders(args);
      const logger = createLogger(args.logging);
      if (logger.isDebug()) {
        const metadata = {
          method: args.method,
          url: redactUrl(url),
          headers: redactHeaders(headers),
          queryParameters: redactQueryParameters(args.queryParameters),
          hasBody: requestBody != null
        };
        logger.debug("Making HTTP request", metadata);
      }
      try {
        const response = yield requestWithRetries(() => __awaiter9(this, void 0, void 0, function* () {
          return makeRequest(fetchFn, url, args.method, headers, requestBody, args.timeoutMs, args.abortSignal, args.withCredentials, args.duplex, args.responseType === "streaming" || args.responseType === "sse");
        }), args.maxRetries);
        if (response.status >= 200 && response.status < 400) {
          if (logger.isDebug()) {
            const metadata = {
              method: args.method,
              url: redactUrl(url),
              statusCode: response.status,
              responseHeaders: redactHeaders(response.headers)
            };
            logger.debug("HTTP request succeeded", metadata);
          }
          const body = yield getResponseBody(response, args.responseType);
          return {
            ok: true,
            body,
            headers: response.headers,
            rawResponse: toRawResponse(response)
          };
        } else {
          if (logger.isError()) {
            const metadata = {
              method: args.method,
              url: redactUrl(url),
              statusCode: response.status,
              responseHeaders: redactHeaders(Object.fromEntries(response.headers.entries()))
            };
            logger.error("HTTP request failed with error status", metadata);
          }
          return {
            ok: false,
            error: {
              reason: "status-code",
              statusCode: response.status,
              body: yield getErrorResponseBody(response)
            },
            rawResponse: toRawResponse(response)
          };
        }
      } catch (error) {
        if ((_c = args.abortSignal) === null || _c === void 0 ? void 0 : _c.aborted) {
          if (logger.isError()) {
            const metadata = {
              method: args.method,
              url: redactUrl(url)
            };
            logger.error("HTTP request was aborted", metadata);
          }
          return {
            ok: false,
            error: {
              reason: "unknown",
              errorMessage: "The user aborted a request"
            },
            rawResponse: abortRawResponse
          };
        } else if (error instanceof Error && error.name === "AbortError") {
          if (logger.isError()) {
            const metadata = {
              method: args.method,
              url: redactUrl(url),
              timeoutMs: args.timeoutMs
            };
            logger.error("HTTP request timed out", metadata);
          }
          return {
            ok: false,
            error: {
              reason: "timeout"
            },
            rawResponse: abortRawResponse
          };
        } else if (error instanceof Error) {
          if (logger.isError()) {
            const metadata = {
              method: args.method,
              url: redactUrl(url),
              errorMessage: error.message
            };
            logger.error("HTTP request failed with error", metadata);
          }
          return {
            ok: false,
            error: {
              reason: "unknown",
              errorMessage: error.message
            },
            rawResponse: unknownRawResponse
          };
        }
        if (logger.isError()) {
          const metadata = {
            method: args.method,
            url: redactUrl(url),
            error: toJson(error)
          };
          logger.error("HTTP request failed with unknown error", metadata);
        }
        return {
          ok: false,
          error: {
            reason: "unknown",
            errorMessage: toJson(error)
          },
          rawResponse: unknownRawResponse
        };
      }
    });
  }
  var fetcher = fetcherImpl;

  // node_modules/sarvamai/dist/esm/core/fetcher/HttpResponsePromise.mjs
  var __awaiter10 = function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
  var HttpResponsePromise = class _HttpResponsePromise extends Promise {
    constructor(promise) {
      super((resolve) => {
        resolve(void 0);
      });
      this.innerPromise = promise;
    }
    /**
     * Creates an `HttpResponsePromise` from a function that returns a promise.
     *
     * @param fn - A function that returns a promise resolving to a `WithRawResponse` object.
     * @param args - Arguments to pass to the function.
     * @returns An `HttpResponsePromise` instance.
     */
    static fromFunction(fn, ...args) {
      return new _HttpResponsePromise(fn(...args));
    }
    /**
     * Creates a function that returns an `HttpResponsePromise` from a function that returns a promise.
     *
     * @param fn - A function that returns a promise resolving to a `WithRawResponse` object.
     * @returns A function that returns an `HttpResponsePromise` instance.
     */
    static interceptFunction(fn) {
      return (...args) => {
        return _HttpResponsePromise.fromPromise(fn(...args));
      };
    }
    /**
     * Creates an `HttpResponsePromise` from an existing promise.
     *
     * @param promise - A promise resolving to a `WithRawResponse` object.
     * @returns An `HttpResponsePromise` instance.
     */
    static fromPromise(promise) {
      return new _HttpResponsePromise(promise);
    }
    /**
     * Creates an `HttpResponsePromise` from an executor function.
     *
     * @param executor - A function that takes resolve and reject callbacks to create a promise.
     * @returns An `HttpResponsePromise` instance.
     */
    static fromExecutor(executor) {
      const promise = new Promise(executor);
      return new _HttpResponsePromise(promise);
    }
    /**
     * Creates an `HttpResponsePromise` from a resolved result.
     *
     * @param result - A `WithRawResponse` object to resolve immediately.
     * @returns An `HttpResponsePromise` instance.
     */
    static fromResult(result) {
      const promise = Promise.resolve(result);
      return new _HttpResponsePromise(promise);
    }
    unwrap() {
      if (!this.unwrappedPromise) {
        this.unwrappedPromise = this.innerPromise.then(({ data }) => data);
      }
      return this.unwrappedPromise;
    }
    /** @inheritdoc */
    then(onfulfilled, onrejected) {
      return this.unwrap().then(onfulfilled, onrejected);
    }
    /** @inheritdoc */
    catch(onrejected) {
      return this.unwrap().catch(onrejected);
    }
    /** @inheritdoc */
    finally(onfinally) {
      return this.unwrap().finally(onfinally);
    }
    /**
     * Retrieves the data and raw response.
     *
     * @returns A promise resolving to a `WithRawResponse` object.
     */
    withRawResponse() {
      return __awaiter10(this, void 0, void 0, function* () {
        return yield this.innerPromise;
      });
    }
  };

  // node_modules/sarvamai/dist/esm/core/fetcher/Supplier.mjs
  var __awaiter11 = function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
  var Supplier = {
    get: (supplier) => __awaiter11(void 0, void 0, void 0, function* () {
      if (typeof supplier === "function") {
        return supplier();
      } else {
        return supplier;
      }
    })
  };

  // node_modules/sarvamai/dist/esm/core/file/file.mjs
  var __awaiter12 = function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
  function toMultipartDataPart(file) {
    return __awaiter12(this, void 0, void 0, function* () {
      const { data, filename, contentType } = yield getFileWithMetadata(file, {
        noSniffFileSize: true
      });
      return {
        data,
        filename,
        contentType
      };
    });
  }
  function getFileWithMetadata(file_1) {
    return __awaiter12(this, arguments, void 0, function* (file, { noSniffFileSize } = {}) {
      var _a, _b, _c, _d, _e;
      if (isFileLike(file)) {
        return getFileWithMetadata({
          data: file
        }, { noSniffFileSize });
      }
      if ("path" in file) {
        const fs3 = yield Promise.resolve().then(() => __toESM(require_fs(), 1));
        if (!fs3 || !fs3.createReadStream) {
          throw new Error("File path uploads are not supported in this environment.");
        }
        const data = fs3.createReadStream(file.path);
        const contentLength = (_a = file.contentLength) !== null && _a !== void 0 ? _a : noSniffFileSize === true ? void 0 : yield tryGetFileSizeFromPath(file.path);
        const filename = (_b = file.filename) !== null && _b !== void 0 ? _b : getNameFromPath(file.path);
        return {
          data,
          filename,
          contentType: file.contentType,
          contentLength
        };
      }
      if ("data" in file) {
        const data = file.data;
        const contentLength = (_c = file.contentLength) !== null && _c !== void 0 ? _c : yield tryGetContentLengthFromFileLike(data, {
          noSniffFileSize
        });
        const filename = (_d = file.filename) !== null && _d !== void 0 ? _d : tryGetNameFromFileLike(data);
        return {
          data,
          filename,
          contentType: (_e = file.contentType) !== null && _e !== void 0 ? _e : tryGetContentTypeFromFileLike(data),
          contentLength
        };
      }
      throw new Error(`Invalid FileUpload of type ${typeof file}: ${JSON.stringify(file)}`);
    });
  }
  function isFileLike(value) {
    return isBuffer(value) || isArrayBufferView(value) || isArrayBuffer(value) || isUint8Array(value) || isBlob(value) || isFile(value) || isStreamLike(value) || isReadableStream(value);
  }
  function tryGetFileSizeFromPath(path3) {
    return __awaiter12(this, void 0, void 0, function* () {
      try {
        const fs3 = yield Promise.resolve().then(() => __toESM(require_fs(), 1));
        if (!fs3 || !fs3.promises || !fs3.promises.stat) {
          return void 0;
        }
        const fileStat = yield fs3.promises.stat(path3);
        return fileStat.size;
      } catch (_fallbackError) {
        return void 0;
      }
    });
  }
  function tryGetNameFromFileLike(data) {
    if (isNamedValue(data)) {
      return data.name;
    }
    if (isPathedValue(data)) {
      return getNameFromPath(data.path.toString());
    }
    return void 0;
  }
  function tryGetContentLengthFromFileLike(data_1) {
    return __awaiter12(this, arguments, void 0, function* (data, { noSniffFileSize } = {}) {
      if (isBuffer(data)) {
        return data.length;
      }
      if (isArrayBufferView(data)) {
        return data.byteLength;
      }
      if (isArrayBuffer(data)) {
        return data.byteLength;
      }
      if (isBlob(data)) {
        return data.size;
      }
      if (isFile(data)) {
        return data.size;
      }
      if (noSniffFileSize === true) {
        return void 0;
      }
      if (isPathedValue(data)) {
        return yield tryGetFileSizeFromPath(data.path.toString());
      }
      return void 0;
    });
  }
  function tryGetContentTypeFromFileLike(data) {
    if (isBlob(data)) {
      return data.type;
    }
    if (isFile(data)) {
      return data.type;
    }
    return void 0;
  }
  function getNameFromPath(path3) {
    const lastForwardSlash = path3.lastIndexOf("/");
    const lastBackSlash = path3.lastIndexOf("\\");
    const lastSlashIndex = Math.max(lastForwardSlash, lastBackSlash);
    return lastSlashIndex >= 0 ? path3.substring(lastSlashIndex + 1) : path3;
  }
  function isNamedValue(value) {
    return typeof value === "object" && value != null && "name" in value;
  }
  function isPathedValue(value) {
    return typeof value === "object" && value != null && "path" in value;
  }
  function isStreamLike(value) {
    return typeof value === "object" && value != null && ("read" in value || "pipe" in value);
  }
  function isReadableStream(value) {
    return typeof value === "object" && value != null && "getReader" in value;
  }
  function isBuffer(value) {
    return typeof Buffer !== "undefined" && Buffer.isBuffer && Buffer.isBuffer(value);
  }
  function isArrayBufferView(value) {
    return typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView(value);
  }
  function isArrayBuffer(value) {
    return typeof ArrayBuffer !== "undefined" && value instanceof ArrayBuffer;
  }
  function isUint8Array(value) {
    return typeof Uint8Array !== "undefined" && value instanceof Uint8Array;
  }
  function isBlob(value) {
    return typeof Blob !== "undefined" && value instanceof Blob;
  }
  function isFile(value) {
    return typeof File !== "undefined" && value instanceof File;
  }

  // node_modules/sarvamai/dist/esm/core/runtime/runtime.mjs
  var RUNTIME = evaluateRuntime();
  function evaluateRuntime() {
    var _a, _b, _c, _d, _e;
    const isBrowser = typeof window !== "undefined" && typeof window.document !== "undefined";
    if (isBrowser) {
      return {
        type: "browser",
        version: window.navigator.userAgent
      };
    }
    const isCloudflare = typeof globalThis !== "undefined" && ((_a = globalThis === null || globalThis === void 0 ? void 0 : globalThis.navigator) === null || _a === void 0 ? void 0 : _a.userAgent) === "Cloudflare-Workers";
    if (isCloudflare) {
      return {
        type: "workerd"
      };
    }
    const isEdgeRuntime = typeof EdgeRuntime === "string";
    if (isEdgeRuntime) {
      return {
        type: "edge-runtime"
      };
    }
    const isWebWorker = typeof self === "object" && typeof (self === null || self === void 0 ? void 0 : self.importScripts) === "function" && (((_b = self.constructor) === null || _b === void 0 ? void 0 : _b.name) === "DedicatedWorkerGlobalScope" || ((_c = self.constructor) === null || _c === void 0 ? void 0 : _c.name) === "ServiceWorkerGlobalScope" || ((_d = self.constructor) === null || _d === void 0 ? void 0 : _d.name) === "SharedWorkerGlobalScope");
    if (isWebWorker) {
      return {
        type: "web-worker"
      };
    }
    const isDeno = typeof Deno !== "undefined" && typeof Deno.version !== "undefined" && typeof Deno.version.deno !== "undefined";
    if (isDeno) {
      return {
        type: "deno",
        version: Deno.version.deno
      };
    }
    const isBun = typeof Bun !== "undefined" && typeof Bun.version !== "undefined";
    if (isBun) {
      return {
        type: "bun",
        version: Bun.version
      };
    }
    const isReactNative = typeof navigator !== "undefined" && (navigator === null || navigator === void 0 ? void 0 : navigator.product) === "ReactNative";
    if (isReactNative) {
      return {
        type: "react-native"
      };
    }
    const isNode = typeof process !== "undefined" && "version" in process && !!process.version && "versions" in process && !!((_e = process.versions) === null || _e === void 0 ? void 0 : _e.node);
    if (isNode) {
      return {
        type: "node",
        version: process.versions.node,
        parsedVersion: Number(process.versions.node.split(".")[0])
      };
    }
    return {
      type: "unknown"
    };
  }

  // node_modules/sarvamai/dist/esm/core/form-data-utils/FormDataWrapper.mjs
  var __awaiter13 = function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
  var __asyncValues = function(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
      return this;
    }, i);
    function verb(n) {
      i[n] = o[n] && function(v) {
        return new Promise(function(resolve, reject) {
          v = o[n](v), settle(resolve, reject, v.done, v.value);
        });
      };
    }
    function settle(resolve, reject, d, v) {
      Promise.resolve(v).then(function(v2) {
        resolve({ value: v2, done: d });
      }, reject);
    }
  };
  function newFormData() {
    return __awaiter13(this, void 0, void 0, function* () {
      return new FormDataWrapper();
    });
  }
  var FormDataWrapper = class {
    constructor() {
      this.fd = new FormData();
    }
    setup() {
      return __awaiter13(this, void 0, void 0, function* () {
      });
    }
    append(key, value) {
      this.fd.append(key, String(value));
    }
    appendFile(key, value) {
      return __awaiter13(this, void 0, void 0, function* () {
        const { data, filename, contentType } = yield toMultipartDataPart(value);
        const blob = yield convertToBlob(data, contentType);
        if (filename) {
          this.fd.append(key, blob, filename);
        } else {
          this.fd.append(key, blob);
        }
      });
    }
    getRequest() {
      return {
        body: this.fd,
        headers: {},
        duplex: "half"
      };
    }
  };
  function isStreamLike2(value) {
    return typeof value === "object" && value != null && ("read" in value || "pipe" in value);
  }
  function isReadableStream2(value) {
    return typeof value === "object" && value != null && "getReader" in value;
  }
  function isBuffer2(value) {
    return typeof Buffer !== "undefined" && Buffer.isBuffer && Buffer.isBuffer(value);
  }
  function isArrayBufferView2(value) {
    return ArrayBuffer.isView(value);
  }
  function streamToBuffer(stream) {
    return __awaiter13(this, void 0, void 0, function* () {
      var _a, stream_1, stream_1_1;
      var _b, e_1, _c, _d;
      if (RUNTIME.type === "node") {
        const { Readable } = yield Promise.resolve().then(() => __toESM(require_stream(), 1));
        if (stream instanceof Readable) {
          const chunks = [];
          try {
            for (_a = true, stream_1 = __asyncValues(stream); stream_1_1 = yield stream_1.next(), _b = stream_1_1.done, !_b; _a = true) {
              _d = stream_1_1.value;
              _a = false;
              const chunk = _d;
              chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
            }
          } catch (e_1_1) {
            e_1 = { error: e_1_1 };
          } finally {
            try {
              if (!_a && !_b && (_c = stream_1.return)) yield _c.call(stream_1);
            } finally {
              if (e_1) throw e_1.error;
            }
          }
          return Buffer.concat(chunks);
        }
      }
      if (isReadableStream2(stream)) {
        const reader = stream.getReader();
        const chunks = [];
        try {
          while (true) {
            const { done, value } = yield reader.read();
            if (done)
              break;
            chunks.push(value);
          }
        } finally {
          reader.releaseLock();
        }
        const totalLength = chunks.reduce((sum, chunk) => sum + chunk.length, 0);
        const result = new Uint8Array(totalLength);
        let offset = 0;
        for (const chunk of chunks) {
          result.set(chunk, offset);
          offset += chunk.length;
        }
        return Buffer.from(result);
      }
      throw new Error(`Unsupported stream type: ${typeof stream}. Expected Node.js Readable stream or Web ReadableStream.`);
    });
  }
  function convertToBlob(value, contentType) {
    return __awaiter13(this, void 0, void 0, function* () {
      if (isStreamLike2(value) || isReadableStream2(value)) {
        const buffer = yield streamToBuffer(value);
        return new Blob([buffer], { type: contentType });
      }
      if (value instanceof Blob) {
        return value;
      }
      if (isBuffer2(value)) {
        return new Blob([value], { type: contentType });
      }
      if (value instanceof ArrayBuffer) {
        return new Blob([value], { type: contentType });
      }
      if (isArrayBufferView2(value)) {
        return new Blob([value], { type: contentType });
      }
      if (typeof value === "string") {
        return new Blob([value], { type: contentType });
      }
      if (typeof value === "object" && value !== null) {
        return new Blob([toJson(value)], { type: contentType !== null && contentType !== void 0 ? contentType : "application/json" });
      }
      return new Blob([String(value)], { type: contentType });
    });
  }

  // node_modules/sarvamai/dist/esm/core/logging/index.mjs
  var logging_exports = {};
  __export(logging_exports, {
    ConsoleLogger: () => ConsoleLogger,
    LogLevel: () => LogLevel,
    Logger: () => Logger,
    createLogger: () => createLogger
  });

  // node_modules/sarvamai/dist/esm/core/url/index.mjs
  var url_exports = {};
  __export(url_exports, {
    encodePathParam: () => encodePathParam,
    join: () => join,
    toQueryString: () => toQueryString
  });

  // node_modules/sarvamai/dist/esm/core/url/encodePathParam.mjs
  function encodePathParam(param) {
    if (param === null) {
      return "null";
    }
    const typeofParam = typeof param;
    switch (typeofParam) {
      case "undefined":
        return "undefined";
      case "string":
      case "number":
      case "boolean":
        break;
      default:
        param = String(param);
        break;
    }
    return encodeURIComponent(param);
  }

  // node_modules/sarvamai/dist/esm/core/url/join.mjs
  function join(base, ...segments) {
    if (!base) {
      return "";
    }
    if (segments.length === 0) {
      return base;
    }
    if (base.includes("://")) {
      let url;
      try {
        url = new URL(base);
      } catch (_a) {
        return joinPath(base, ...segments);
      }
      const lastSegment = segments[segments.length - 1];
      const shouldPreserveTrailingSlash = lastSegment === null || lastSegment === void 0 ? void 0 : lastSegment.endsWith("/");
      for (const segment of segments) {
        const cleanSegment = trimSlashes(segment);
        if (cleanSegment) {
          url.pathname = joinPathSegments(url.pathname, cleanSegment);
        }
      }
      if (shouldPreserveTrailingSlash && !url.pathname.endsWith("/")) {
        url.pathname += "/";
      }
      return url.toString();
    }
    return joinPath(base, ...segments);
  }
  function joinPath(base, ...segments) {
    if (segments.length === 0) {
      return base;
    }
    let result = base;
    const lastSegment = segments[segments.length - 1];
    const shouldPreserveTrailingSlash = lastSegment === null || lastSegment === void 0 ? void 0 : lastSegment.endsWith("/");
    for (const segment of segments) {
      const cleanSegment = trimSlashes(segment);
      if (cleanSegment) {
        result = joinPathSegments(result, cleanSegment);
      }
    }
    if (shouldPreserveTrailingSlash && !result.endsWith("/")) {
      result += "/";
    }
    return result;
  }
  function joinPathSegments(left, right) {
    if (left.endsWith("/")) {
      return left + right;
    }
    return `${left}/${right}`;
  }
  function trimSlashes(str) {
    if (!str)
      return str;
    let start = 0;
    let end = str.length;
    if (str.startsWith("/"))
      start = 1;
    if (str.endsWith("/"))
      end = str.length - 1;
    return start === 0 && end === str.length ? str : str.slice(start, end);
  }

  // node_modules/sarvamai/dist/esm/core/websocket/ws.mjs
  var import_ws = __toESM(require_browser(), 1);

  // node_modules/sarvamai/dist/esm/core/websocket/events.mjs
  var Event = class {
    constructor(type, target) {
      this.target = target;
      this.type = type;
    }
  };
  var ErrorEvent = class extends Event {
    constructor(error, target) {
      super("error", target);
      this.message = error.message;
      this.error = error;
    }
  };
  var CloseEvent = class extends Event {
    constructor(code = 1e3, reason = "", target) {
      super("close", target);
      this.wasClean = true;
      this.code = code;
      this.reason = reason;
    }
  };

  // node_modules/sarvamai/dist/esm/core/websocket/ws.mjs
  var getGlobalWebSocket = () => {
    if (typeof WebSocket !== "undefined") {
      return WebSocket;
    } else if (RUNTIME.type === "node") {
      return import_ws.WebSocket;
    }
    return void 0;
  };
  var isWebSocket = (w) => typeof w !== "undefined" && !!w && w.CLOSING === 2;
  var DEFAULT_OPTIONS = {
    maxReconnectionDelay: 1e4,
    minReconnectionDelay: 1e3 + Math.random() * 4e3,
    minUptime: 5e3,
    reconnectionDelayGrowFactor: 1.3,
    connectionTimeout: 4e3,
    maxRetries: Infinity,
    maxEnqueuedMessages: Infinity,
    startClosed: false,
    debug: false
  };
  var ReconnectingWebSocket = class _ReconnectingWebSocket {
    constructor({ url, protocols, options, headers, queryParameters }) {
      this._listeners = {
        error: [],
        message: [],
        open: [],
        close: []
      };
      this._retryCount = -1;
      this._shouldReconnect = true;
      this._connectLock = false;
      this._binaryType = "blob";
      this._closeCalled = false;
      this._messageQueue = [];
      this.CONNECTING = _ReconnectingWebSocket.CONNECTING;
      this.OPEN = _ReconnectingWebSocket.OPEN;
      this.CLOSING = _ReconnectingWebSocket.CLOSING;
      this.CLOSED = _ReconnectingWebSocket.CLOSED;
      this.onclose = null;
      this.onerror = null;
      this.onmessage = null;
      this.onopen = null;
      this._handleOpen = (event) => {
        this._debug("open event");
        const { minUptime = DEFAULT_OPTIONS.minUptime } = this._options;
        clearTimeout(this._connectTimeout);
        this._uptimeTimeout = setTimeout(() => this._acceptOpen(), minUptime);
        this._ws.binaryType = this._binaryType;
        this._messageQueue.forEach((message) => {
          var _a;
          return (_a = this._ws) === null || _a === void 0 ? void 0 : _a.send(message);
        });
        this._messageQueue = [];
        if (this.onopen) {
          this.onopen(event);
        }
        this._listeners.open.forEach((listener) => this._callEventListener(event, listener));
      };
      this._handleMessage = (event) => {
        this._debug("message event");
        if (this.onmessage) {
          this.onmessage(event);
        }
        this._listeners.message.forEach((listener) => this._callEventListener(event, listener));
      };
      this._handleError = (event) => {
        this._debug("error event", event.message);
        this._disconnect(void 0, event.message === "TIMEOUT" ? "timeout" : void 0);
        if (this.onerror) {
          this.onerror(event);
        }
        this._debug("exec error listeners");
        this._listeners.error.forEach((listener) => this._callEventListener(event, listener));
        this._connect();
      };
      this._handleClose = (event) => {
        this._debug("close event");
        this._clearTimeouts();
        if (event.code === 1e3) {
          this._shouldReconnect = false;
        }
        if (this._shouldReconnect) {
          this._connect();
        }
        if (this.onclose) {
          this.onclose(event);
        }
        this._listeners.close.forEach((listener) => this._callEventListener(event, listener));
      };
      this._url = url;
      this._protocols = protocols;
      this._options = options !== null && options !== void 0 ? options : DEFAULT_OPTIONS;
      this._headers = headers;
      this._queryParameters = queryParameters;
      if (this._options.startClosed) {
        this._shouldReconnect = false;
      }
      this._connect();
    }
    get binaryType() {
      return this._ws ? this._ws.binaryType : this._binaryType;
    }
    set binaryType(value) {
      this._binaryType = value;
      if (this._ws) {
        this._ws.binaryType = value;
      }
    }
    /**
     * Returns the number or connection retries
     */
    get retryCount() {
      return Math.max(this._retryCount, 0);
    }
    /**
     * The number of bytes of data that have been queued using calls to send() but not yet
     * transmitted to the network. This value resets to zero once all queued data has been sent.
     * This value does not reset to zero when the connection is closed; if you keep calling send(),
     * this will continue to climb. Read only
     */
    get bufferedAmount() {
      const bytes = this._messageQueue.reduce((acc, message) => {
        if (typeof message === "string") {
          acc += message.length;
        } else if (message instanceof Blob) {
          acc += message.size;
        } else {
          acc += message.byteLength;
        }
        return acc;
      }, 0);
      return bytes + (this._ws ? this._ws.bufferedAmount : 0);
    }
    /**
     * The extensions selected by the server. This is currently only the empty string or a list of
     * extensions as negotiated by the connection
     */
    get extensions() {
      return this._ws ? this._ws.extensions : "";
    }
    /**
     * A string indicating the name of the sub-protocol the server selected;
     * this will be one of the strings specified in the protocols parameter when creating the
     * WebSocket object
     */
    get protocol() {
      return this._ws ? this._ws.protocol : "";
    }
    /**
     * The current state of the connection; this is one of the Ready state constants
     */
    get readyState() {
      if (this._ws) {
        return this._ws.readyState;
      }
      return this._options.startClosed ? _ReconnectingWebSocket.CLOSED : _ReconnectingWebSocket.CONNECTING;
    }
    /**
     * The URL as resolved by the constructor
     */
    get url() {
      return this._ws ? this._ws.url : "";
    }
    /**
     * Closes the WebSocket connection or connection attempt, if any. If the connection is already
     * CLOSED, this method does nothing
     */
    close(code = 1e3, reason) {
      this._closeCalled = true;
      this._shouldReconnect = false;
      this._clearTimeouts();
      if (!this._ws) {
        this._debug("close enqueued: no ws instance");
        return;
      }
      if (this._ws.readyState === this.CLOSED) {
        this._debug("close: already closed");
        return;
      }
      this._ws.close(code, reason);
    }
    /**
     * Closes the WebSocket connection or connection attempt and connects again.
     * Resets retry counter;
     */
    reconnect(code, reason) {
      this._shouldReconnect = true;
      this._closeCalled = false;
      this._retryCount = -1;
      if (!this._ws || this._ws.readyState === this.CLOSED) {
        this._connect();
      } else {
        this._disconnect(code, reason);
        this._connect();
      }
    }
    /**
     * Enqueue specified data to be transmitted to the server over the WebSocket connection
     */
    send(data) {
      if (this._ws && this._ws.readyState === this.OPEN) {
        this._debug("send", data);
        this._ws.send(data);
      } else {
        const { maxEnqueuedMessages = DEFAULT_OPTIONS.maxEnqueuedMessages } = this._options;
        if (this._messageQueue.length < maxEnqueuedMessages) {
          this._debug("enqueue", data);
          this._messageQueue.push(data);
        }
      }
    }
    /**
     * Register an event handler of a specific event type
     */
    addEventListener(type, listener) {
      if (this._listeners[type]) {
        this._listeners[type].push(listener);
      }
    }
    dispatchEvent(event) {
      const listeners = this._listeners[event.type];
      if (listeners) {
        for (const listener of listeners) {
          this._callEventListener(event, listener);
        }
      }
      return true;
    }
    /**
     * Removes an event listener
     */
    removeEventListener(type, listener) {
      if (this._listeners[type]) {
        this._listeners[type] = this._listeners[type].filter(
          // @ts-ignore
          (l) => l !== listener
        );
      }
    }
    _debug(...args) {
      if (this._options.debug) {
        console.log.apply(console, ["RWS>", ...args]);
      }
    }
    _getNextDelay() {
      const { reconnectionDelayGrowFactor = DEFAULT_OPTIONS.reconnectionDelayGrowFactor, minReconnectionDelay = DEFAULT_OPTIONS.minReconnectionDelay, maxReconnectionDelay = DEFAULT_OPTIONS.maxReconnectionDelay } = this._options;
      let delay = 0;
      if (this._retryCount > 0) {
        delay = minReconnectionDelay * Math.pow(reconnectionDelayGrowFactor, this._retryCount - 1);
        if (delay > maxReconnectionDelay) {
          delay = maxReconnectionDelay;
        }
      }
      this._debug("next delay", delay);
      return delay;
    }
    _wait() {
      return new Promise((resolve) => {
        setTimeout(resolve, this._getNextDelay());
      });
    }
    _getNextUrl(urlProvider) {
      if (typeof urlProvider === "string") {
        return Promise.resolve(urlProvider);
      }
      if (typeof urlProvider === "function") {
        const url = urlProvider();
        if (typeof url === "string") {
          return Promise.resolve(url);
        }
        if (url.then) {
          return url;
        }
      }
      throw Error("Invalid URL");
    }
    _connect() {
      if (this._connectLock || !this._shouldReconnect) {
        return;
      }
      this._connectLock = true;
      const { maxRetries = DEFAULT_OPTIONS.maxRetries, connectionTimeout = DEFAULT_OPTIONS.connectionTimeout, WebSocket: WebSocket2 = getGlobalWebSocket() } = this._options;
      if (this._retryCount >= maxRetries) {
        this._debug("max retries reached", this._retryCount, ">=", maxRetries);
        return;
      }
      this._retryCount++;
      this._debug("connect", this._retryCount);
      this._removeListeners();
      if (!isWebSocket(WebSocket2)) {
        throw Error("No valid WebSocket class provided");
      }
      this._wait().then(() => this._getNextUrl(this._url)).then((url) => {
        if (this._closeCalled) {
          return;
        }
        const options = {};
        if (this._headers) {
          options.headers = this._headers;
        }
        if (this._queryParameters && Object.keys(this._queryParameters).length > 0) {
          const queryString = toQueryString(this._queryParameters, { arrayFormat: "repeat" });
          if (queryString) {
            url = `${url}?${queryString}`;
          }
        }
        this._ws = new WebSocket2(url, this._protocols, options);
        this._ws.binaryType = this._binaryType;
        this._connectLock = false;
        this._addListeners();
        this._connectTimeout = setTimeout(() => this._handleTimeout(), connectionTimeout);
      });
    }
    _handleTimeout() {
      this._debug("timeout event");
      this._handleError(new ErrorEvent(Error("TIMEOUT"), this));
    }
    _disconnect(code = 1e3, reason) {
      this._clearTimeouts();
      if (!this._ws) {
        return;
      }
      this._removeListeners();
      try {
        this._ws.close(code, reason);
        this._handleClose(new CloseEvent(code, reason, this));
      } catch (_error) {
      }
    }
    _acceptOpen() {
      this._debug("accept open");
      this._retryCount = 0;
    }
    _callEventListener(event, listener) {
      if ("handleEvent" in listener) {
        listener.handleEvent(event);
      } else {
        listener(event);
      }
    }
    _removeListeners() {
      if (!this._ws) {
        return;
      }
      this._debug("removeListeners");
      this._ws.removeEventListener("open", this._handleOpen);
      this._ws.removeEventListener("close", this._handleClose);
      this._ws.removeEventListener("message", this._handleMessage);
      this._ws.removeEventListener("error", this._handleError);
    }
    _addListeners() {
      if (!this._ws) {
        return;
      }
      this._debug("addListeners");
      this._ws.addEventListener("open", this._handleOpen);
      this._ws.addEventListener("close", this._handleClose);
      this._ws.addEventListener("message", this._handleMessage);
      this._ws.addEventListener("error", this._handleError);
    }
    _clearTimeouts() {
      clearTimeout(this._connectTimeout);
      clearTimeout(this._uptimeTimeout);
    }
  };
  ReconnectingWebSocket.CONNECTING = 0;
  ReconnectingWebSocket.OPEN = 1;
  ReconnectingWebSocket.CLOSING = 2;
  ReconnectingWebSocket.CLOSED = 3;

  // node_modules/sarvamai/dist/esm/auth/HeaderAuthProvider.mjs
  var __awaiter14 = function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
  var PARAM_KEY = "apiSubscriptionKey";
  var ENV_HEADER_KEY = "SARVAM_API_KEY";
  var HEADER_NAME = "api-subscription-key";
  var HeaderAuthProvider = class _HeaderAuthProvider {
    constructor(options) {
      this.options = options;
    }
    static canCreate(options) {
      var _a;
      return (options === null || options === void 0 ? void 0 : options[PARAM_KEY]) != null || ((_a = process.env) === null || _a === void 0 ? void 0 : _a[ENV_HEADER_KEY]) != null;
    }
    getAuthRequest() {
      return __awaiter14(this, arguments, void 0, function* ({ endpointMetadata } = {}) {
        var _a, _b;
        const headerValue = (_a = yield Supplier.get(this.options[PARAM_KEY])) !== null && _a !== void 0 ? _a : (_b = process.env) === null || _b === void 0 ? void 0 : _b[ENV_HEADER_KEY];
        if (headerValue == null) {
          throw new SarvamAIError({
            message: _HeaderAuthProvider.AUTH_CONFIG_ERROR_MESSAGE
          });
        }
        return {
          headers: { [HEADER_NAME]: headerValue }
        };
      });
    }
  };
  (function(HeaderAuthProvider2) {
    HeaderAuthProvider2.AUTH_SCHEME = "ApiKeyAuth";
    HeaderAuthProvider2.AUTH_CONFIG_ERROR_MESSAGE = `Please provide '${PARAM_KEY}' when initializing the client, or set the '${ENV_HEADER_KEY}' environment variable`;
    function createInstance(options) {
      return new HeaderAuthProvider2(options);
    }
    HeaderAuthProvider2.createInstance = createInstance;
  })(HeaderAuthProvider || (HeaderAuthProvider = {}));

  // node_modules/sarvamai/dist/esm/core/headers.mjs
  function mergeHeaders(...headersArray) {
    const result = {};
    for (const [key, value] of headersArray.filter((headers) => headers != null).flatMap((headers) => Object.entries(headers))) {
      const insensitiveKey = key.toLowerCase();
      if (value != null) {
        result[insensitiveKey] = value;
      } else if (insensitiveKey in result) {
        delete result[insensitiveKey];
      }
    }
    return result;
  }
  function mergeOnlyDefinedHeaders(...headersArray) {
    const result = {};
    for (const [key, value] of headersArray.filter((headers) => headers != null).flatMap((headers) => Object.entries(headers))) {
      const insensitiveKey = key.toLowerCase();
      if (value != null) {
        result[insensitiveKey] = value;
      }
    }
    return result;
  }

  // node_modules/sarvamai/dist/esm/BaseClient.mjs
  function normalizeClientOptions(options) {
    const headers = mergeHeaders({
      "X-Fern-Language": "JavaScript",
      "X-Fern-SDK-Name": "sarvamai",
      "X-Fern-SDK-Version": "1.1.7",
      "User-Agent": "sarvamai/1.1.7",
      "X-Fern-Runtime": RUNTIME.type,
      "X-Fern-Runtime-Version": RUNTIME.version
    }, options === null || options === void 0 ? void 0 : options.headers);
    return Object.assign(Object.assign({}, options), { logging: logging_exports.createLogger(options === null || options === void 0 ? void 0 : options.logging), headers });
  }
  function normalizeClientOptionsWithAuth(options) {
    var _a;
    const normalized = normalizeClientOptions(options);
    const normalizedWithNoOpAuthProvider = withNoOpAuthProvider(normalized);
    (_a = normalized.authProvider) !== null && _a !== void 0 ? _a : normalized.authProvider = new HeaderAuthProvider(normalizedWithNoOpAuthProvider);
    return normalized;
  }
  function withNoOpAuthProvider(options) {
    return Object.assign(Object.assign({}, options), { authProvider: new NoOpAuthProvider() });
  }

  // node_modules/sarvamai/dist/esm/environments.mjs
  var SarvamAIEnvironment = {
    Production: {
      base: "https://api.sarvam.ai",
      production: "wss://api.sarvam.ai"
    }
  };

  // node_modules/sarvamai/dist/esm/api/resources/chat/client/Client.mjs
  var __awaiter15 = function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
  var __await = function(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
  };
  var __asyncGenerator = function(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function() {
      return this;
    }, i;
    function awaitReturn(f) {
      return function(v) {
        return Promise.resolve(v).then(f, reject);
      };
    }
    function verb(n, f) {
      if (g[n]) {
        i[n] = function(v) {
          return new Promise(function(a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
        if (f) i[n] = f(i[n]);
      }
    }
    function resume(n, v) {
      try {
        step(g[n](v));
      } catch (e) {
        settle(q[0][3], e);
      }
    }
    function step(r) {
      r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
      resume("next", value);
    }
    function reject(value) {
      resume("throw", value);
    }
    function settle(f, v) {
      if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
  };
  var ChatClient = class {
    constructor(options = {}) {
      this._options = normalizeClientOptionsWithAuth(options);
    }
    completions(request, requestOptions) {
      if (request.stream === true) {
        return this.__completionsStream(request, requestOptions);
      }
      return HttpResponsePromise.fromPromise(this.__completions(request, requestOptions));
    }
    __completions(request, requestOptions) {
      return __awaiter15(this, void 0, void 0, function* () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const _authRequest = yield this._options.authProvider.getAuthRequest();
        const _headers = mergeHeaders(_authRequest.headers, (_a = this._options) === null || _a === void 0 ? void 0 : _a.headers, requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.headers);
        const _response = yield fetcher({
          url: url_exports.join((_b = yield Supplier.get(this._options.baseUrl)) !== null && _b !== void 0 ? _b : ((_c = yield Supplier.get(this._options.environment)) !== null && _c !== void 0 ? _c : SarvamAIEnvironment.Production).base, "v1/chat/completions"),
          method: "POST",
          headers: _headers,
          contentType: "application/json",
          queryParameters: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.queryParams,
          requestType: "json",
          body: request,
          timeoutMs: ((_f = (_d = requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.timeoutInSeconds) !== null && _d !== void 0 ? _d : (_e = this._options) === null || _e === void 0 ? void 0 : _e.timeoutInSeconds) !== null && _f !== void 0 ? _f : 60) * 1e3,
          maxRetries: (_g = requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.maxRetries) !== null && _g !== void 0 ? _g : (_h = this._options) === null || _h === void 0 ? void 0 : _h.maxRetries,
          abortSignal: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.abortSignal,
          fetchFn: (_j = this._options) === null || _j === void 0 ? void 0 : _j.fetch,
          logging: this._options.logging
        });
        if (_response.ok) {
          return {
            data: _response.body,
            rawResponse: _response.rawResponse
          };
        }
        if (_response.error.reason === "status-code") {
          this._throwStatusCodeError(_response.error.statusCode, _response.error.body, _response.rawResponse);
        }
        switch (_response.error.reason) {
          case "non-json":
            throw new SarvamAIError({
              statusCode: _response.error.statusCode,
              body: _response.error.rawBody,
              rawResponse: _response.rawResponse
            });
          case "body-is-null":
            throw new SarvamAIError({
              statusCode: _response.error.statusCode,
              rawResponse: _response.rawResponse
            });
          case "timeout":
            throw new SarvamAITimeoutError("Timeout exceeded when calling POST /v1/chat/completions.");
          case "unknown":
            throw new SarvamAIError({
              message: _response.error.errorMessage,
              rawResponse: _response.rawResponse
            });
        }
      });
    }
    __completionsStream(request, requestOptions) {
      return __awaiter15(this, void 0, void 0, function* () {
        var _a, _b, _c, _d, _e;
        const _authRequest = yield this._options.authProvider.getAuthRequest();
        const _headers = {};
        if (_authRequest.headers) {
          for (const [key, value] of Object.entries(_authRequest.headers)) {
            if (value != null) {
              _headers[key] = String(value);
            }
          }
        }
        if ((_a = this._options) === null || _a === void 0 ? void 0 : _a.headers) {
          for (const [key, value] of Object.entries(this._options.headers)) {
            if (value != null) {
              _headers[key] = String(value);
            }
          }
        }
        if (requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.headers) {
          for (const [key, value] of Object.entries(requestOptions.headers)) {
            if (value != null) {
              _headers[key] = String(value);
            }
          }
        }
        _headers["Content-Type"] = "application/json";
        _headers["Accept"] = "text/event-stream";
        const baseUrl = (_b = yield Supplier.get(this._options.baseUrl)) !== null && _b !== void 0 ? _b : ((_c = yield Supplier.get(this._options.environment)) !== null && _c !== void 0 ? _c : SarvamAIEnvironment.Production).base;
        const url = url_exports.join(baseUrl, "v1/chat/completions");
        const fetchFn = (_e = (_d = this._options) === null || _d === void 0 ? void 0 : _d.fetch) !== null && _e !== void 0 ? _e : typeof fetch !== "undefined" ? fetch : void 0;
        if (!fetchFn) {
          throw new Error("No fetch function available. Please provide a fetch function in client options.");
        }
        const response = yield fetchFn(url, {
          method: "POST",
          headers: _headers,
          body: JSON.stringify(request),
          signal: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.abortSignal
        });
        if (!response.ok) {
          let errorBody;
          try {
            errorBody = yield response.json();
          } catch (_f) {
            errorBody = yield response.text();
          }
          this._throwStatusCodeError(response.status, errorBody, toRawResponse(response));
        }
        if (!response.body) {
          throw new SarvamAIError({
            message: "Response body is null for streaming request."
          });
        }
        return this._parseSSEStream(response.body);
      });
    }
    _parseSSEStream(body) {
      return __asyncGenerator(this, arguments, function* _parseSSEStream_1() {
        var _a;
        const reader = body.getReader();
        const decoder = new TextDecoder();
        let buffer = "";
        try {
          while (true) {
            const { done, value } = yield __await(reader.read());
            if (done)
              break;
            buffer += decoder.decode(value, { stream: true });
            const lines = buffer.split("\n");
            buffer = (_a = lines.pop()) !== null && _a !== void 0 ? _a : "";
            for (const line of lines) {
              const trimmed = line.trim();
              if (!trimmed)
                continue;
              if (trimmed.startsWith("data: ")) {
                const dataStr = trimmed.slice(6);
                if (dataStr.trim() === "[DONE]") {
                  return yield __await(void 0);
                }
                try {
                  const chunk = JSON.parse(dataStr);
                  yield yield __await(chunk);
                } catch (_b) {
                  continue;
                }
              }
            }
          }
          if (buffer.trim()) {
            const trimmed = buffer.trim();
            if (trimmed.startsWith("data: ")) {
              const dataStr = trimmed.slice(6);
              if (dataStr.trim() !== "[DONE]") {
                try {
                  const chunk = JSON.parse(dataStr);
                  yield yield __await(chunk);
                } catch (_c) {
                }
              }
            }
          }
        } finally {
          reader.releaseLock();
        }
      });
    }
    _throwStatusCodeError(statusCode, body, rawResponse) {
      switch (statusCode) {
        case 400:
          throw new BadRequestError(body, rawResponse);
        case 403:
          throw new ForbiddenError(body, rawResponse);
        case 422:
          throw new UnprocessableEntityError(body, rawResponse);
        case 429:
          throw new TooManyRequestsError(body, rawResponse);
        case 500:
          throw new InternalServerError(body, rawResponse);
        default:
          throw new SarvamAIError({
            statusCode,
            body,
            rawResponse
          });
      }
    }
  };

  // node_modules/sarvamai/dist/esm/api/resources/documentIntelligence/client/Client.mjs
  var __awaiter16 = function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
  var DocumentIntelligenceClient = class {
    constructor(options = {}) {
      this._options = normalizeClientOptionsWithAuth(options);
    }
    /**
     * Creates a new document intelligence job.
     *
     * **Supported Languages (BCP-47 format):**
     * - `hi-IN`: Hindi (default)
     * - `en-IN`: English
     * - `bn-IN`: Bengali
     * - `gu-IN`: Gujarati
     * - `kn-IN`: Kannada
     * - `ml-IN`: Malayalam
     * - `mr-IN`: Marathi
     * - `or-IN`: Odia
     * - `pa-IN`: Punjabi
     * - `ta-IN`: Tamil
     * - `te-IN`: Telugu
     * - `ur-IN`: Urdu
     * - `as-IN`: Assamese
     * - `bodo-IN`: Bodo
     * - `doi-IN`: Dogri
     * - `ks-IN`: Kashmiri
     * - `kok-IN`: Konkani
     * - `mai-IN`: Maithili
     * - `mni-IN`: Manipuri
     * - `ne-IN`: Nepali
     * - `sa-IN`: Sanskrit
     * - `sat-IN`: Santali
     * - `sd-IN`: Sindhi
     *
     * **Output Formats:**
     * - `html`: Structured HTML with layout preservation (default)
     * - `md`: Markdown format
     *
     * **Prompt Types:**
     * Customize how specific content types are processed:
     * - `default_ocr`: Standard text extraction (default for all text blocks)
     * - `table_to_html`: Convert tables to HTML format
     * - `table_to_markdown`: Convert tables to Markdown format
     * - `chart_to_markdown`: Extract chart data as Markdown table
     * - `chart_to_json`: Extract chart data as JSON
     * - `describe_image`: Generate image caption
     * - `caption_en`: Same as describe_image (English)
     * - `caption_in`: Caption in document language
     *
     * **Webhook Callback:**
     * Optionally provide a callback URL to receive notification when processing completes.
     *
     * @param {SarvamAI.DocumentIntelligenceJobRequest} request
     * @param {DocumentIntelligenceClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link SarvamAI.BadRequestError}
     * @throws {@link SarvamAI.ForbiddenError}
     * @throws {@link SarvamAI.TooManyRequestsError}
     * @throws {@link SarvamAI.InternalServerError}
     * @throws {@link SarvamAI.ServiceUnavailableError}
     *
     * @example
     *     await client.documentIntelligence.initialise()
     */
    initialise(request = {}, requestOptions) {
      return HttpResponsePromise.fromPromise(this.__initialise(request, requestOptions));
    }
    /**
     * Creates a new document intelligence job with a fluent API (matching Python SDK).
     *
     * Returns a {@link DocumentIntelligenceJob} instance with convenience methods:
     * - `uploadFile(path)` - Upload a file
     * - `start()` - Start processing
     * - `waitUntilComplete()` - Poll until done
     * - `getPageMetrics()` - Get processing metrics
     * - `downloadOutput(path)` - Download results
     *
     * @param {DocumentIntelligenceJobOptions} options - Job configuration options
     * @param {DocumentIntelligenceClient.RequestOptions} requestOptions - Request-specific configuration
     *
     * @example
     * ```typescript
     * const job = await client.documentIntelligence.createJob({
     *     language: "hi-IN",
     *     outputFormat: "html"
     * });
     *
     * await job.uploadFile("./document.pdf");
     * await job.start();
     * const status = await job.waitUntilComplete();
     * console.log(`Completed: ${status.job_state}`);
     *
     * const metrics = job.getPageMetrics();
     * console.log(`Processed ${metrics.pagesSucceeded} pages`);
     *
     * await job.downloadOutput("./output.html");
     * ```
     */
    createJob() {
      return __awaiter16(this, arguments, void 0, function* (options = {}, requestOptions) {
        const request = {};
        if (options.language || options.outputFormat) {
          request.job_parameters = {
            language: options.language,
            output_format: options.outputFormat
          };
        }
        if (options.callbackUrl) {
          request.callback = {
            url: options.callbackUrl
          };
        }
        const response = yield this.initialise(request, requestOptions);
        return new DocumentIntelligenceJob(this, response.job_id, options);
      });
    }
    __initialise() {
      return __awaiter16(this, arguments, void 0, function* (request = {}, requestOptions) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const _authRequest = yield this._options.authProvider.getAuthRequest();
        const _headers = mergeHeaders(_authRequest.headers, (_a = this._options) === null || _a === void 0 ? void 0 : _a.headers, requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.headers);
        const _response = yield fetcher({
          url: url_exports.join((_b = yield Supplier.get(this._options.baseUrl)) !== null && _b !== void 0 ? _b : ((_c = yield Supplier.get(this._options.environment)) !== null && _c !== void 0 ? _c : SarvamAIEnvironment.Production).base, "doc-digitization/job/v1"),
          method: "POST",
          headers: _headers,
          contentType: "application/json",
          queryParameters: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.queryParams,
          requestType: "json",
          body: request,
          timeoutMs: ((_f = (_d = requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.timeoutInSeconds) !== null && _d !== void 0 ? _d : (_e = this._options) === null || _e === void 0 ? void 0 : _e.timeoutInSeconds) !== null && _f !== void 0 ? _f : 60) * 1e3,
          maxRetries: (_g = requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.maxRetries) !== null && _g !== void 0 ? _g : (_h = this._options) === null || _h === void 0 ? void 0 : _h.maxRetries,
          abortSignal: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.abortSignal,
          fetchFn: (_j = this._options) === null || _j === void 0 ? void 0 : _j.fetch,
          logging: this._options.logging
        });
        if (_response.ok) {
          return {
            data: _response.body,
            rawResponse: _response.rawResponse
          };
        }
        if (_response.error.reason === "status-code") {
          switch (_response.error.statusCode) {
            case 400:
              throw new BadRequestError(_response.error.body, _response.rawResponse);
            case 403:
              throw new ForbiddenError(_response.error.body, _response.rawResponse);
            case 429:
              throw new TooManyRequestsError(_response.error.body, _response.rawResponse);
            case 500:
              throw new InternalServerError(_response.error.body, _response.rawResponse);
            case 503:
              throw new ServiceUnavailableError(_response.error.body, _response.rawResponse);
            default:
              throw new SarvamAIError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
                rawResponse: _response.rawResponse
              });
          }
        }
        switch (_response.error.reason) {
          case "non-json":
            throw new SarvamAIError({
              statusCode: _response.error.statusCode,
              body: _response.error.rawBody,
              rawResponse: _response.rawResponse
            });
          case "body-is-null":
            throw new SarvamAIError({
              statusCode: _response.error.statusCode,
              rawResponse: _response.rawResponse
            });
          case "timeout":
            throw new SarvamAITimeoutError("Timeout exceeded when calling POST /doc-digitization/job/v1.");
          case "unknown":
            throw new SarvamAIError({
              message: _response.error.errorMessage,
              rawResponse: _response.rawResponse
            });
        }
      });
    }
    /**
     * Returns presigned URLs for uploading input files.
     *
     * **File Constraints:**
     * - Exactly one file required (PDF or ZIP)
     * - PDF files: `.pdf` extension
     * - ZIP files: `.zip` extension
     *
     * @param {SarvamAI.DocDigitizationUploadFilesRequest} request
     * @param {DocumentIntelligenceClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link SarvamAI.BadRequestError}
     * @throws {@link SarvamAI.ForbiddenError}
     * @throws {@link SarvamAI.TooManyRequestsError}
     * @throws {@link SarvamAI.InternalServerError}
     * @throws {@link SarvamAI.ServiceUnavailableError}
     *
     * @example
     *     await client.documentIntelligence.getUploadLinks({
     *         job_id: "job_id",
     *         files: ["files"]
     *     })
     */
    getUploadLinks(request, requestOptions) {
      return HttpResponsePromise.fromPromise(this.__getUploadLinks(request, requestOptions));
    }
    __getUploadLinks(request, requestOptions) {
      return __awaiter16(this, void 0, void 0, function* () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const _authRequest = yield this._options.authProvider.getAuthRequest();
        const _headers = mergeHeaders(_authRequest.headers, (_a = this._options) === null || _a === void 0 ? void 0 : _a.headers, requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.headers);
        const _response = yield fetcher({
          url: url_exports.join((_b = yield Supplier.get(this._options.baseUrl)) !== null && _b !== void 0 ? _b : ((_c = yield Supplier.get(this._options.environment)) !== null && _c !== void 0 ? _c : SarvamAIEnvironment.Production).base, "doc-digitization/job/v1/upload-files"),
          method: "POST",
          headers: _headers,
          contentType: "application/json",
          queryParameters: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.queryParams,
          requestType: "json",
          body: request,
          timeoutMs: ((_f = (_d = requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.timeoutInSeconds) !== null && _d !== void 0 ? _d : (_e = this._options) === null || _e === void 0 ? void 0 : _e.timeoutInSeconds) !== null && _f !== void 0 ? _f : 60) * 1e3,
          maxRetries: (_g = requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.maxRetries) !== null && _g !== void 0 ? _g : (_h = this._options) === null || _h === void 0 ? void 0 : _h.maxRetries,
          abortSignal: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.abortSignal,
          fetchFn: (_j = this._options) === null || _j === void 0 ? void 0 : _j.fetch,
          logging: this._options.logging
        });
        if (_response.ok) {
          return {
            data: _response.body,
            rawResponse: _response.rawResponse
          };
        }
        if (_response.error.reason === "status-code") {
          switch (_response.error.statusCode) {
            case 400:
              throw new BadRequestError(_response.error.body, _response.rawResponse);
            case 403:
              throw new ForbiddenError(_response.error.body, _response.rawResponse);
            case 429:
              throw new TooManyRequestsError(_response.error.body, _response.rawResponse);
            case 500:
              throw new InternalServerError(_response.error.body, _response.rawResponse);
            case 503:
              throw new ServiceUnavailableError(_response.error.body, _response.rawResponse);
            default:
              throw new SarvamAIError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
                rawResponse: _response.rawResponse
              });
          }
        }
        switch (_response.error.reason) {
          case "non-json":
            throw new SarvamAIError({
              statusCode: _response.error.statusCode,
              body: _response.error.rawBody,
              rawResponse: _response.rawResponse
            });
          case "body-is-null":
            throw new SarvamAIError({
              statusCode: _response.error.statusCode,
              rawResponse: _response.rawResponse
            });
          case "timeout":
            throw new SarvamAITimeoutError("Timeout exceeded when calling POST /doc-digitization/job/v1/upload-files.");
          case "unknown":
            throw new SarvamAIError({
              message: _response.error.errorMessage,
              rawResponse: _response.rawResponse
            });
        }
      });
    }
    /**
     * Validates the uploaded file and starts processing.
     *
     * **Validation Checks:**
     * - File must be uploaded before starting
     * - File size must not exceed 200 MB
     * - PDF must be parseable by the PDF parser
     * - ZIP must contain only JPEG/PNG images
     * - ZIP must be flat (no nested folders beyond one level)
     * - ZIP must contain at least one valid image
     * - Page/image count must not exceed 500
     * - User must have sufficient credits
     *
     * **Processing:**
     * Job runs asynchronously. Poll the status endpoint or use webhook callback for completion notification.
     *
     * @param {string} job_id - The unique identifier of the job
     * @param {DocumentIntelligenceClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link SarvamAI.BadRequestError}
     * @throws {@link SarvamAI.ForbiddenError}
     * @throws {@link SarvamAI.TooManyRequestsError}
     * @throws {@link SarvamAI.InternalServerError}
     * @throws {@link SarvamAI.ServiceUnavailableError}
     *
     * @example
     *     await client.documentIntelligence.start("job_id")
     */
    start(job_id, requestOptions) {
      return HttpResponsePromise.fromPromise(this.__start(job_id, requestOptions));
    }
    __start(job_id, requestOptions) {
      return __awaiter16(this, void 0, void 0, function* () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const _authRequest = yield this._options.authProvider.getAuthRequest();
        const _headers = mergeHeaders(_authRequest.headers, (_a = this._options) === null || _a === void 0 ? void 0 : _a.headers, requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.headers);
        const _response = yield fetcher({
          url: url_exports.join((_b = yield Supplier.get(this._options.baseUrl)) !== null && _b !== void 0 ? _b : ((_c = yield Supplier.get(this._options.environment)) !== null && _c !== void 0 ? _c : SarvamAIEnvironment.Production).base, `doc-digitization/job/v1/${url_exports.encodePathParam(job_id)}/start`),
          method: "POST",
          headers: _headers,
          queryParameters: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.queryParams,
          timeoutMs: ((_f = (_d = requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.timeoutInSeconds) !== null && _d !== void 0 ? _d : (_e = this._options) === null || _e === void 0 ? void 0 : _e.timeoutInSeconds) !== null && _f !== void 0 ? _f : 60) * 1e3,
          maxRetries: (_g = requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.maxRetries) !== null && _g !== void 0 ? _g : (_h = this._options) === null || _h === void 0 ? void 0 : _h.maxRetries,
          abortSignal: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.abortSignal,
          fetchFn: (_j = this._options) === null || _j === void 0 ? void 0 : _j.fetch,
          logging: this._options.logging
        });
        if (_response.ok) {
          return {
            data: _response.body,
            rawResponse: _response.rawResponse
          };
        }
        if (_response.error.reason === "status-code") {
          switch (_response.error.statusCode) {
            case 400:
              throw new BadRequestError(_response.error.body, _response.rawResponse);
            case 403:
              throw new ForbiddenError(_response.error.body, _response.rawResponse);
            case 429:
              throw new TooManyRequestsError(_response.error.body, _response.rawResponse);
            case 500:
              throw new InternalServerError(_response.error.body, _response.rawResponse);
            case 503:
              throw new ServiceUnavailableError(_response.error.body, _response.rawResponse);
            default:
              throw new SarvamAIError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
                rawResponse: _response.rawResponse
              });
          }
        }
        switch (_response.error.reason) {
          case "non-json":
            throw new SarvamAIError({
              statusCode: _response.error.statusCode,
              body: _response.error.rawBody,
              rawResponse: _response.rawResponse
            });
          case "body-is-null":
            throw new SarvamAIError({
              statusCode: _response.error.statusCode,
              rawResponse: _response.rawResponse
            });
          case "timeout":
            throw new SarvamAITimeoutError("Timeout exceeded when calling POST /doc-digitization/job/v1/{job_id}/start.");
          case "unknown":
            throw new SarvamAIError({
              message: _response.error.errorMessage,
              rawResponse: _response.rawResponse
            });
        }
      });
    }
    /**
     * Returns the current status of a job with page-level metrics.
     *
     * **Job States:**
     * - `Accepted`: Job created, awaiting file upload
     * - `Pending`: File uploaded, waiting to start
     * - `Running`: Processing in progress
     * - `Completed`: All pages processed successfully
     * - `PartiallyCompleted`: Some pages succeeded, some failed
     * - `Failed`: All pages failed or job-level error
     *
     * **Page Metrics:**
     * Response includes detailed progress: total pages, pages processed, succeeded, failed, and per-page errors.
     *
     * @param {string} job_id - The unique identifier of the job
     * @param {DocumentIntelligenceClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link SarvamAI.BadRequestError}
     * @throws {@link SarvamAI.ForbiddenError}
     * @throws {@link SarvamAI.TooManyRequestsError}
     * @throws {@link SarvamAI.InternalServerError}
     * @throws {@link SarvamAI.ServiceUnavailableError}
     *
     * @example
     *     await client.documentIntelligence.getStatus("job_id")
     */
    getStatus(job_id, requestOptions) {
      return HttpResponsePromise.fromPromise(this.__getStatus(job_id, requestOptions));
    }
    __getStatus(job_id, requestOptions) {
      return __awaiter16(this, void 0, void 0, function* () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const _authRequest = yield this._options.authProvider.getAuthRequest();
        const _headers = mergeHeaders(_authRequest.headers, (_a = this._options) === null || _a === void 0 ? void 0 : _a.headers, requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.headers);
        const _response = yield fetcher({
          url: url_exports.join((_b = yield Supplier.get(this._options.baseUrl)) !== null && _b !== void 0 ? _b : ((_c = yield Supplier.get(this._options.environment)) !== null && _c !== void 0 ? _c : SarvamAIEnvironment.Production).base, `doc-digitization/job/v1/${url_exports.encodePathParam(job_id)}/status`),
          method: "GET",
          headers: _headers,
          queryParameters: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.queryParams,
          timeoutMs: ((_f = (_d = requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.timeoutInSeconds) !== null && _d !== void 0 ? _d : (_e = this._options) === null || _e === void 0 ? void 0 : _e.timeoutInSeconds) !== null && _f !== void 0 ? _f : 60) * 1e3,
          maxRetries: (_g = requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.maxRetries) !== null && _g !== void 0 ? _g : (_h = this._options) === null || _h === void 0 ? void 0 : _h.maxRetries,
          abortSignal: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.abortSignal,
          fetchFn: (_j = this._options) === null || _j === void 0 ? void 0 : _j.fetch,
          logging: this._options.logging
        });
        if (_response.ok) {
          return {
            data: _response.body,
            rawResponse: _response.rawResponse
          };
        }
        if (_response.error.reason === "status-code") {
          switch (_response.error.statusCode) {
            case 400:
              throw new BadRequestError(_response.error.body, _response.rawResponse);
            case 403:
              throw new ForbiddenError(_response.error.body, _response.rawResponse);
            case 429:
              throw new TooManyRequestsError(_response.error.body, _response.rawResponse);
            case 500:
              throw new InternalServerError(_response.error.body, _response.rawResponse);
            case 503:
              throw new ServiceUnavailableError(_response.error.body, _response.rawResponse);
            default:
              throw new SarvamAIError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
                rawResponse: _response.rawResponse
              });
          }
        }
        switch (_response.error.reason) {
          case "non-json":
            throw new SarvamAIError({
              statusCode: _response.error.statusCode,
              body: _response.error.rawBody,
              rawResponse: _response.rawResponse
            });
          case "body-is-null":
            throw new SarvamAIError({
              statusCode: _response.error.statusCode,
              rawResponse: _response.rawResponse
            });
          case "timeout":
            throw new SarvamAITimeoutError("Timeout exceeded when calling GET /doc-digitization/job/v1/{job_id}/status.");
          case "unknown":
            throw new SarvamAIError({
              message: _response.error.errorMessage,
              rawResponse: _response.rawResponse
            });
        }
      });
    }
    /**
     * Returns presigned URLs for downloading output files.
     *
     * **Prerequisites:**
     * - Job must be in `Completed` or `PartiallyCompleted` state
     * - Failed jobs have no output available
     *
     * @param {string} job_id - The unique identifier of the job
     * @param {DocumentIntelligenceClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link SarvamAI.BadRequestError}
     * @throws {@link SarvamAI.ForbiddenError}
     * @throws {@link SarvamAI.TooManyRequestsError}
     * @throws {@link SarvamAI.InternalServerError}
     * @throws {@link SarvamAI.ServiceUnavailableError}
     *
     * @example
     *     await client.documentIntelligence.getDownloadLinks("job_id")
     */
    getDownloadLinks(job_id, requestOptions) {
      return HttpResponsePromise.fromPromise(this.__getDownloadLinks(job_id, requestOptions));
    }
    __getDownloadLinks(job_id, requestOptions) {
      return __awaiter16(this, void 0, void 0, function* () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const _authRequest = yield this._options.authProvider.getAuthRequest();
        const _headers = mergeHeaders(_authRequest.headers, (_a = this._options) === null || _a === void 0 ? void 0 : _a.headers, requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.headers);
        const _response = yield fetcher({
          url: url_exports.join((_b = yield Supplier.get(this._options.baseUrl)) !== null && _b !== void 0 ? _b : ((_c = yield Supplier.get(this._options.environment)) !== null && _c !== void 0 ? _c : SarvamAIEnvironment.Production).base, `doc-digitization/job/v1/${url_exports.encodePathParam(job_id)}/download-files`),
          method: "POST",
          headers: _headers,
          queryParameters: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.queryParams,
          timeoutMs: ((_f = (_d = requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.timeoutInSeconds) !== null && _d !== void 0 ? _d : (_e = this._options) === null || _e === void 0 ? void 0 : _e.timeoutInSeconds) !== null && _f !== void 0 ? _f : 60) * 1e3,
          maxRetries: (_g = requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.maxRetries) !== null && _g !== void 0 ? _g : (_h = this._options) === null || _h === void 0 ? void 0 : _h.maxRetries,
          abortSignal: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.abortSignal,
          fetchFn: (_j = this._options) === null || _j === void 0 ? void 0 : _j.fetch,
          logging: this._options.logging
        });
        if (_response.ok) {
          return {
            data: _response.body,
            rawResponse: _response.rawResponse
          };
        }
        if (_response.error.reason === "status-code") {
          switch (_response.error.statusCode) {
            case 400:
              throw new BadRequestError(_response.error.body, _response.rawResponse);
            case 403:
              throw new ForbiddenError(_response.error.body, _response.rawResponse);
            case 429:
              throw new TooManyRequestsError(_response.error.body, _response.rawResponse);
            case 500:
              throw new InternalServerError(_response.error.body, _response.rawResponse);
            case 503:
              throw new ServiceUnavailableError(_response.error.body, _response.rawResponse);
            default:
              throw new SarvamAIError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
                rawResponse: _response.rawResponse
              });
          }
        }
        switch (_response.error.reason) {
          case "non-json":
            throw new SarvamAIError({
              statusCode: _response.error.statusCode,
              body: _response.error.rawBody,
              rawResponse: _response.rawResponse
            });
          case "body-is-null":
            throw new SarvamAIError({
              statusCode: _response.error.statusCode,
              rawResponse: _response.rawResponse
            });
          case "timeout":
            throw new SarvamAITimeoutError("Timeout exceeded when calling POST /doc-digitization/job/v1/{job_id}/download-files.");
          case "unknown":
            throw new SarvamAIError({
              message: _response.error.errorMessage,
              rawResponse: _response.rawResponse
            });
        }
      });
    }
  };

  // node_modules/sarvamai/dist/esm/errors/handleNonStatusCodeError.mjs
  function handleNonStatusCodeError(error, rawResponse, method, path3) {
    switch (error.reason) {
      case "non-json":
        throw new SarvamAIError({
          statusCode: error.statusCode,
          body: error.rawBody,
          rawResponse
        });
      case "body-is-null":
        throw new SarvamAIError({
          statusCode: error.statusCode,
          rawResponse
        });
      case "timeout":
        throw new SarvamAITimeoutError(`Timeout exceeded when calling ${method} ${path3}.`);
      case "unknown":
        throw new SarvamAIError({
          message: error.errorMessage,
          rawResponse
        });
      default:
        throw new SarvamAIError({
          message: "Unknown error",
          rawResponse
        });
    }
  }

  // node_modules/sarvamai/dist/esm/api/resources/pronunciationDictionary/client/Client.mjs
  var __awaiter17 = function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
  var PronunciationDictionaryClient = class {
    constructor(options = {}) {
      this._options = normalizeClientOptionsWithAuth(options);
    }
    /**
     * Retrieve a list of all pronunciation dictionary IDs associated with the authenticated user.
     *
     * @param {PronunciationDictionaryClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link SarvamAI.BadRequestError}
     * @throws {@link SarvamAI.ForbiddenError}
     * @throws {@link SarvamAI.UnprocessableEntityError}
     * @throws {@link SarvamAI.TooManyRequestsError}
     * @throws {@link SarvamAI.InternalServerError}
     *
     * @example
     *     await client.pronunciationDictionary.list()
     */
    list(requestOptions) {
      return HttpResponsePromise.fromPromise(this.__list(requestOptions));
    }
    __list(requestOptions) {
      return __awaiter17(this, void 0, void 0, function* () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const _authRequest = yield this._options.authProvider.getAuthRequest();
        const _headers = mergeHeaders(_authRequest.headers, (_a = this._options) === null || _a === void 0 ? void 0 : _a.headers, requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.headers);
        const _response = yield fetcher({
          url: url_exports.join((_b = yield Supplier.get(this._options.baseUrl)) !== null && _b !== void 0 ? _b : ((_c = yield Supplier.get(this._options.environment)) !== null && _c !== void 0 ? _c : SarvamAIEnvironment.Production).base, "text-to-speech/pronunciation-dictionary"),
          method: "GET",
          headers: _headers,
          queryParameters: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.queryParams,
          timeoutMs: ((_f = (_d = requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.timeoutInSeconds) !== null && _d !== void 0 ? _d : (_e = this._options) === null || _e === void 0 ? void 0 : _e.timeoutInSeconds) !== null && _f !== void 0 ? _f : 60) * 1e3,
          maxRetries: (_g = requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.maxRetries) !== null && _g !== void 0 ? _g : (_h = this._options) === null || _h === void 0 ? void 0 : _h.maxRetries,
          abortSignal: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.abortSignal,
          fetchFn: (_j = this._options) === null || _j === void 0 ? void 0 : _j.fetch,
          logging: this._options.logging
        });
        if (_response.ok) {
          return {
            data: _response.body,
            rawResponse: _response.rawResponse
          };
        }
        if (_response.error.reason === "status-code") {
          switch (_response.error.statusCode) {
            case 400:
              throw new BadRequestError(_response.error.body, _response.rawResponse);
            case 403:
              throw new ForbiddenError(_response.error.body, _response.rawResponse);
            case 422:
              throw new UnprocessableEntityError(_response.error.body, _response.rawResponse);
            case 429:
              throw new TooManyRequestsError(_response.error.body, _response.rawResponse);
            case 500:
              throw new InternalServerError(_response.error.body, _response.rawResponse);
            default:
              throw new SarvamAIError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
                rawResponse: _response.rawResponse
              });
          }
        }
        return handleNonStatusCodeError(_response.error, _response.rawResponse, "GET", "/text-to-speech/pronunciation-dictionary");
      });
    }
    /**
     * Upload a `.json` file to create a new pronunciation dictionary. Only supported by **bulbul:v3**.
     *
     * The file should contain a JSON object with a `pronunciations` key mapping language codes to word-pronunciation pairs. See the [Pronunciation Dictionary guide](/api-reference-docs/api-guides-tutorials/text-to-speech/pronunciation-dictionary) for format details and examples.
     *
     * The returned `dictionary_id` can be passed as `dict_id` in text-to-speech requests (REST, HTTP Stream, and WebSocket).
     *
     * **Limits:** Max 10 dictionaries per user, 100 words per dictionary, 1 MB file size.
     *
     * @param {SarvamAI.CreatePronunciationDictionaryRequest} request
     * @param {PronunciationDictionaryClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link SarvamAI.BadRequestError}
     * @throws {@link SarvamAI.ForbiddenError}
     * @throws {@link SarvamAI.ContentTooLargeError}
     * @throws {@link SarvamAI.UnprocessableEntityError}
     * @throws {@link SarvamAI.TooManyRequestsError}
     * @throws {@link SarvamAI.InternalServerError}
     *
     * @example
     *     import { createReadStream } from "fs";
     *     await client.pronunciationDictionary.create({
     *         file: fs.createReadStream("/path/to/your/file")
     *     })
     */
    create(request, requestOptions) {
      return HttpResponsePromise.fromPromise(this.__create(request, requestOptions));
    }
    __create(request, requestOptions) {
      return __awaiter17(this, void 0, void 0, function* () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const _body = yield newFormData();
        yield _body.appendFile("file", request.file);
        const _maybeEncodedRequest = yield _body.getRequest();
        const _authRequest = yield this._options.authProvider.getAuthRequest();
        const _headers = mergeHeaders(_authRequest.headers, (_a = this._options) === null || _a === void 0 ? void 0 : _a.headers, mergeOnlyDefinedHeaders(Object.assign({}, _maybeEncodedRequest.headers)), requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.headers);
        const _response = yield fetcher({
          url: url_exports.join((_b = yield Supplier.get(this._options.baseUrl)) !== null && _b !== void 0 ? _b : ((_c = yield Supplier.get(this._options.environment)) !== null && _c !== void 0 ? _c : SarvamAIEnvironment.Production).base, "text-to-speech/pronunciation-dictionary"),
          method: "POST",
          headers: _headers,
          queryParameters: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.queryParams,
          requestType: "file",
          duplex: _maybeEncodedRequest.duplex,
          body: _maybeEncodedRequest.body,
          timeoutMs: ((_f = (_d = requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.timeoutInSeconds) !== null && _d !== void 0 ? _d : (_e = this._options) === null || _e === void 0 ? void 0 : _e.timeoutInSeconds) !== null && _f !== void 0 ? _f : 60) * 1e3,
          maxRetries: (_g = requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.maxRetries) !== null && _g !== void 0 ? _g : (_h = this._options) === null || _h === void 0 ? void 0 : _h.maxRetries,
          abortSignal: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.abortSignal,
          fetchFn: (_j = this._options) === null || _j === void 0 ? void 0 : _j.fetch,
          logging: this._options.logging
        });
        if (_response.ok) {
          return {
            data: _response.body,
            rawResponse: _response.rawResponse
          };
        }
        if (_response.error.reason === "status-code") {
          switch (_response.error.statusCode) {
            case 400:
              throw new BadRequestError(_response.error.body, _response.rawResponse);
            case 403:
              throw new ForbiddenError(_response.error.body, _response.rawResponse);
            case 413:
              throw new ContentTooLargeError(_response.error.body, _response.rawResponse);
            case 422:
              throw new UnprocessableEntityError(_response.error.body, _response.rawResponse);
            case 429:
              throw new TooManyRequestsError(_response.error.body, _response.rawResponse);
            case 500:
              throw new InternalServerError(_response.error.body, _response.rawResponse);
            default:
              throw new SarvamAIError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
                rawResponse: _response.rawResponse
              });
          }
        }
        return handleNonStatusCodeError(_response.error, _response.rawResponse, "POST", "/text-to-speech/pronunciation-dictionary");
      });
    }
    /**
     * Update an existing pronunciation dictionary by uploading a JSON file. You can add new words, change existing pronunciations, or both — entries not included in the uploaded file remain unchanged.
     *
     * **Limits:** Max 100 words per dictionary, 1 MB file size.
     *
     * The response includes the `dictionary_id` and the updated pronunciation mappings for verification.
     *
     * @param {SarvamAI.UpdatePronunciationDictionaryRequest} request
     * @param {PronunciationDictionaryClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link SarvamAI.BadRequestError}
     * @throws {@link SarvamAI.ForbiddenError}
     * @throws {@link SarvamAI.NotFoundError}
     * @throws {@link SarvamAI.ContentTooLargeError}
     * @throws {@link SarvamAI.UnprocessableEntityError}
     * @throws {@link SarvamAI.TooManyRequestsError}
     * @throws {@link SarvamAI.InternalServerError}
     *
     * @example
     *     import { createReadStream } from "fs";
     *     await client.pronunciationDictionary.update({
     *         file: fs.createReadStream("/path/to/your/file"),
     *         dict_id: "dict_id"
     *     })
     */
    update(request, requestOptions) {
      return HttpResponsePromise.fromPromise(this.__update(request, requestOptions));
    }
    __update(request, requestOptions) {
      return __awaiter17(this, void 0, void 0, function* () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const _queryParams = {
          dict_id: request.dict_id
        };
        const _body = yield newFormData();
        yield _body.appendFile("file", request.file);
        const _maybeEncodedRequest = yield _body.getRequest();
        const _authRequest = yield this._options.authProvider.getAuthRequest();
        const _headers = mergeHeaders(_authRequest.headers, (_a = this._options) === null || _a === void 0 ? void 0 : _a.headers, mergeOnlyDefinedHeaders(Object.assign({}, _maybeEncodedRequest.headers)), requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.headers);
        const _response = yield fetcher({
          url: url_exports.join((_b = yield Supplier.get(this._options.baseUrl)) !== null && _b !== void 0 ? _b : ((_c = yield Supplier.get(this._options.environment)) !== null && _c !== void 0 ? _c : SarvamAIEnvironment.Production).base, "text-to-speech/pronunciation-dictionary"),
          method: "PUT",
          headers: _headers,
          queryParameters: Object.assign(Object.assign({}, _queryParams), requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.queryParams),
          requestType: "file",
          duplex: _maybeEncodedRequest.duplex,
          body: _maybeEncodedRequest.body,
          timeoutMs: ((_f = (_d = requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.timeoutInSeconds) !== null && _d !== void 0 ? _d : (_e = this._options) === null || _e === void 0 ? void 0 : _e.timeoutInSeconds) !== null && _f !== void 0 ? _f : 60) * 1e3,
          maxRetries: (_g = requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.maxRetries) !== null && _g !== void 0 ? _g : (_h = this._options) === null || _h === void 0 ? void 0 : _h.maxRetries,
          abortSignal: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.abortSignal,
          fetchFn: (_j = this._options) === null || _j === void 0 ? void 0 : _j.fetch,
          logging: this._options.logging
        });
        if (_response.ok) {
          return {
            data: _response.body,
            rawResponse: _response.rawResponse
          };
        }
        if (_response.error.reason === "status-code") {
          switch (_response.error.statusCode) {
            case 400:
              throw new BadRequestError(_response.error.body, _response.rawResponse);
            case 403:
              throw new ForbiddenError(_response.error.body, _response.rawResponse);
            case 404:
              throw new NotFoundError(_response.error.body, _response.rawResponse);
            case 413:
              throw new ContentTooLargeError(_response.error.body, _response.rawResponse);
            case 422:
              throw new UnprocessableEntityError(_response.error.body, _response.rawResponse);
            case 429:
              throw new TooManyRequestsError(_response.error.body, _response.rawResponse);
            case 500:
              throw new InternalServerError(_response.error.body, _response.rawResponse);
            default:
              throw new SarvamAIError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
                rawResponse: _response.rawResponse
              });
          }
        }
        return handleNonStatusCodeError(_response.error, _response.rawResponse, "PUT", "/text-to-speech/pronunciation-dictionary");
      });
    }
    /**
     * Delete a pronunciation dictionary by its ID. Once deleted, the dictionary can no longer be referenced in text-to-speech requests.
     *
     * @param {SarvamAI.PronunciationDictionaryDeleteRequest} request
     * @param {PronunciationDictionaryClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link SarvamAI.BadRequestError}
     * @throws {@link SarvamAI.ForbiddenError}
     * @throws {@link SarvamAI.NotFoundError}
     * @throws {@link SarvamAI.UnprocessableEntityError}
     * @throws {@link SarvamAI.TooManyRequestsError}
     * @throws {@link SarvamAI.InternalServerError}
     *
     * @example
     *     await client.pronunciationDictionary.delete({
     *         dict_id: "dict_id"
     *     })
     */
    delete(request, requestOptions) {
      return HttpResponsePromise.fromPromise(this.__delete(request, requestOptions));
    }
    __delete(request, requestOptions) {
      return __awaiter17(this, void 0, void 0, function* () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const { dict_id: dictId } = request;
        const _queryParams = {
          dict_id: dictId
        };
        const _authRequest = yield this._options.authProvider.getAuthRequest();
        const _headers = mergeHeaders(_authRequest.headers, (_a = this._options) === null || _a === void 0 ? void 0 : _a.headers, requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.headers);
        const _response = yield fetcher({
          url: url_exports.join((_b = yield Supplier.get(this._options.baseUrl)) !== null && _b !== void 0 ? _b : ((_c = yield Supplier.get(this._options.environment)) !== null && _c !== void 0 ? _c : SarvamAIEnvironment.Production).base, "text-to-speech/pronunciation-dictionary"),
          method: "DELETE",
          headers: _headers,
          queryParameters: Object.assign(Object.assign({}, _queryParams), requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.queryParams),
          timeoutMs: ((_f = (_d = requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.timeoutInSeconds) !== null && _d !== void 0 ? _d : (_e = this._options) === null || _e === void 0 ? void 0 : _e.timeoutInSeconds) !== null && _f !== void 0 ? _f : 60) * 1e3,
          maxRetries: (_g = requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.maxRetries) !== null && _g !== void 0 ? _g : (_h = this._options) === null || _h === void 0 ? void 0 : _h.maxRetries,
          abortSignal: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.abortSignal,
          fetchFn: (_j = this._options) === null || _j === void 0 ? void 0 : _j.fetch,
          logging: this._options.logging
        });
        if (_response.ok) {
          return {
            data: _response.body,
            rawResponse: _response.rawResponse
          };
        }
        if (_response.error.reason === "status-code") {
          switch (_response.error.statusCode) {
            case 400:
              throw new BadRequestError(_response.error.body, _response.rawResponse);
            case 403:
              throw new ForbiddenError(_response.error.body, _response.rawResponse);
            case 404:
              throw new NotFoundError(_response.error.body, _response.rawResponse);
            case 422:
              throw new UnprocessableEntityError(_response.error.body, _response.rawResponse);
            case 429:
              throw new TooManyRequestsError(_response.error.body, _response.rawResponse);
            case 500:
              throw new InternalServerError(_response.error.body, _response.rawResponse);
            default:
              throw new SarvamAIError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
                rawResponse: _response.rawResponse
              });
          }
        }
        return handleNonStatusCodeError(_response.error, _response.rawResponse, "DELETE", "/text-to-speech/pronunciation-dictionary");
      });
    }
    /**
     * Retrieve the full pronunciation mappings for a specific dictionary by its ID.
     *
     * Returns the pronunciation data organized by language code, where each language contains word-to-pronunciation pairs.
     *
     * @param {string} dict_id
     * @param {PronunciationDictionaryClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link SarvamAI.BadRequestError}
     * @throws {@link SarvamAI.ForbiddenError}
     * @throws {@link SarvamAI.NotFoundError}
     * @throws {@link SarvamAI.UnprocessableEntityError}
     * @throws {@link SarvamAI.TooManyRequestsError}
     * @throws {@link SarvamAI.InternalServerError}
     *
     * @example
     *     await client.pronunciationDictionary.get("dict_id")
     */
    get(dict_id, requestOptions) {
      return HttpResponsePromise.fromPromise(this.__get(dict_id, requestOptions));
    }
    __get(dict_id, requestOptions) {
      return __awaiter17(this, void 0, void 0, function* () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const _authRequest = yield this._options.authProvider.getAuthRequest();
        const _headers = mergeHeaders(_authRequest.headers, (_a = this._options) === null || _a === void 0 ? void 0 : _a.headers, requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.headers);
        const _response = yield fetcher({
          url: url_exports.join((_b = yield Supplier.get(this._options.baseUrl)) !== null && _b !== void 0 ? _b : ((_c = yield Supplier.get(this._options.environment)) !== null && _c !== void 0 ? _c : SarvamAIEnvironment.Production).base, `text-to-speech/pronunciation-dictionary/${url_exports.encodePathParam(dict_id)}`),
          method: "GET",
          headers: _headers,
          queryParameters: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.queryParams,
          timeoutMs: ((_f = (_d = requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.timeoutInSeconds) !== null && _d !== void 0 ? _d : (_e = this._options) === null || _e === void 0 ? void 0 : _e.timeoutInSeconds) !== null && _f !== void 0 ? _f : 60) * 1e3,
          maxRetries: (_g = requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.maxRetries) !== null && _g !== void 0 ? _g : (_h = this._options) === null || _h === void 0 ? void 0 : _h.maxRetries,
          abortSignal: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.abortSignal,
          fetchFn: (_j = this._options) === null || _j === void 0 ? void 0 : _j.fetch,
          logging: this._options.logging
        });
        if (_response.ok) {
          return { data: _response.body, rawResponse: _response.rawResponse };
        }
        if (_response.error.reason === "status-code") {
          switch (_response.error.statusCode) {
            case 400:
              throw new BadRequestError(_response.error.body, _response.rawResponse);
            case 403:
              throw new ForbiddenError(_response.error.body, _response.rawResponse);
            case 404:
              throw new NotFoundError(_response.error.body, _response.rawResponse);
            case 422:
              throw new UnprocessableEntityError(_response.error.body, _response.rawResponse);
            case 429:
              throw new TooManyRequestsError(_response.error.body, _response.rawResponse);
            case 500:
              throw new InternalServerError(_response.error.body, _response.rawResponse);
            default:
              throw new SarvamAIError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
                rawResponse: _response.rawResponse
              });
          }
        }
        return handleNonStatusCodeError(_response.error, _response.rawResponse, "GET", "/text-to-speech/pronunciation-dictionary/{dict_id}");
      });
    }
  };

  // node_modules/sarvamai/dist/esm/api/resources/speechToText/client/Client.mjs
  var __awaiter18 = function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
  var SpeechToTextClient = class {
    constructor(options = {}) {
      this._options = normalizeClientOptionsWithAuth(options);
    }
    /**
     * ## Speech to Text API
     *
     * This API transcribes speech to text in multiple Indian languages and English. Supports transcription for interactive applications.
     *
     * ### Available Options:
     * - **REST API** (Current Endpoint): For quick responses under 30 seconds with immediate results
     * - **Batch API**: For longer audio files, [Follow This Documentation](https://docs.sarvam.ai/api-reference-docs/api-guides-tutorials/speech-to-text/batch-api)
     *   - Supports diarization (speaker identification)
     *
     * ### Note:
     * - Pricing differs for REST and Batch APIs
     * - Diarization is only available in Batch API with separate pricing
     * - Please refer to [here](https://docs.sarvam.ai/api-reference-docs/getting-started/pricing) for detailed pricing information
     *
     * @param {SarvamAI.SpeechToTextTranscriptionRequest} request
     * @param {SpeechToTextClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link SarvamAI.BadRequestError}
     * @throws {@link SarvamAI.ForbiddenError}
     * @throws {@link SarvamAI.UnprocessableEntityError}
     * @throws {@link SarvamAI.TooManyRequestsError}
     * @throws {@link SarvamAI.InternalServerError}
     * @throws {@link SarvamAI.ServiceUnavailableError}
     *
     * @example
     *     import { createReadStream } from "fs";
     *     await client.speechToText.transcribe({
     *         file: fs.createReadStream("/path/to/your/file")
     *     })
     */
    transcribe(request, requestOptions) {
      return HttpResponsePromise.fromPromise(this.__transcribe(request, requestOptions));
    }
    __transcribe(request, requestOptions) {
      return __awaiter18(this, void 0, void 0, function* () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const _body = yield newFormData();
        yield _body.appendFile("file", request.file);
        if (request.model != null) {
          _body.append("model", request.model);
        }
        if (request.mode != null) {
          _body.append("mode", request.mode);
        }
        if (request.language_code != null) {
          _body.append("language_code", request.language_code);
        }
        if (request.input_audio_codec != null) {
          _body.append("input_audio_codec", request.input_audio_codec);
        }
        const _maybeEncodedRequest = yield _body.getRequest();
        const _authRequest = yield this._options.authProvider.getAuthRequest();
        const _headers = mergeHeaders(_authRequest.headers, (_a = this._options) === null || _a === void 0 ? void 0 : _a.headers, mergeOnlyDefinedHeaders(Object.assign({}, _maybeEncodedRequest.headers)), requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.headers);
        const _response = yield fetcher({
          url: url_exports.join((_b = yield Supplier.get(this._options.baseUrl)) !== null && _b !== void 0 ? _b : ((_c = yield Supplier.get(this._options.environment)) !== null && _c !== void 0 ? _c : SarvamAIEnvironment.Production).base, "speech-to-text"),
          method: "POST",
          headers: _headers,
          queryParameters: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.queryParams,
          requestType: "file",
          duplex: _maybeEncodedRequest.duplex,
          body: _maybeEncodedRequest.body,
          timeoutMs: ((_f = (_d = requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.timeoutInSeconds) !== null && _d !== void 0 ? _d : (_e = this._options) === null || _e === void 0 ? void 0 : _e.timeoutInSeconds) !== null && _f !== void 0 ? _f : 60) * 1e3,
          maxRetries: (_g = requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.maxRetries) !== null && _g !== void 0 ? _g : (_h = this._options) === null || _h === void 0 ? void 0 : _h.maxRetries,
          abortSignal: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.abortSignal,
          fetchFn: (_j = this._options) === null || _j === void 0 ? void 0 : _j.fetch,
          logging: this._options.logging
        });
        if (_response.ok) {
          return { data: _response.body, rawResponse: _response.rawResponse };
        }
        if (_response.error.reason === "status-code") {
          switch (_response.error.statusCode) {
            case 400:
              throw new BadRequestError(_response.error.body, _response.rawResponse);
            case 403:
              throw new ForbiddenError(_response.error.body, _response.rawResponse);
            case 422:
              throw new UnprocessableEntityError(_response.error.body, _response.rawResponse);
            case 429:
              throw new TooManyRequestsError(_response.error.body, _response.rawResponse);
            case 500:
              throw new InternalServerError(_response.error.body, _response.rawResponse);
            case 503:
              throw new ServiceUnavailableError(_response.error.body, _response.rawResponse);
            default:
              throw new SarvamAIError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
                rawResponse: _response.rawResponse
              });
          }
        }
        return handleNonStatusCodeError(_response.error, _response.rawResponse, "POST", "/speech-to-text");
      });
    }
    /**
     * ## Speech to Text Translation API
     *
     * This API automatically detects the input language, transcribes the speech, and translates the text to English.
     *
     * ### Available Options:
     * - **REST API** (Current Endpoint): For quick responses under 30 seconds with immediate results
     * - **Batch API**: For longer audio files [Follow this documentation](https://docs.sarvam.ai/api-reference-docs/api-guides-tutorials/speech-to-text/batch-api)
     *   - Supports diarization (speaker identification)
     *
     * ### Note:
     * - Pricing differs for REST and Batch APIs
     * - Diarization is only available in Batch API with separate pricing
     * - Please refer to [here](https://docs.sarvam.ai/api-reference-docs/getting-started/pricing) for detailed pricing information
     *
     * @param {SarvamAI.SpeechToTextTranslationRequest} request
     * @param {SpeechToTextClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link SarvamAI.BadRequestError}
     * @throws {@link SarvamAI.ForbiddenError}
     * @throws {@link SarvamAI.UnprocessableEntityError}
     * @throws {@link SarvamAI.TooManyRequestsError}
     * @throws {@link SarvamAI.InternalServerError}
     * @throws {@link SarvamAI.ServiceUnavailableError}
     *
     * @example
     *     import { createReadStream } from "fs";
     *     await client.speechToText.translate({
     *         file: fs.createReadStream("/path/to/your/file")
     *     })
     */
    translate(request, requestOptions) {
      return HttpResponsePromise.fromPromise(this.__translate(request, requestOptions));
    }
    __translate(request, requestOptions) {
      return __awaiter18(this, void 0, void 0, function* () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const _body = yield newFormData();
        yield _body.appendFile("file", request.file);
        if (request.prompt != null) {
          _body.append("prompt", request.prompt);
        }
        if (request.model != null) {
          _body.append("model", request.model);
        }
        if (request.input_audio_codec != null) {
          _body.append("input_audio_codec", request.input_audio_codec);
        }
        const _maybeEncodedRequest = yield _body.getRequest();
        const _authRequest = yield this._options.authProvider.getAuthRequest();
        const _headers = mergeHeaders(_authRequest.headers, (_a = this._options) === null || _a === void 0 ? void 0 : _a.headers, mergeOnlyDefinedHeaders(Object.assign({}, _maybeEncodedRequest.headers)), requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.headers);
        const _response = yield fetcher({
          url: url_exports.join((_b = yield Supplier.get(this._options.baseUrl)) !== null && _b !== void 0 ? _b : ((_c = yield Supplier.get(this._options.environment)) !== null && _c !== void 0 ? _c : SarvamAIEnvironment.Production).base, "speech-to-text-translate"),
          method: "POST",
          headers: _headers,
          queryParameters: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.queryParams,
          requestType: "file",
          duplex: _maybeEncodedRequest.duplex,
          body: _maybeEncodedRequest.body,
          timeoutMs: ((_f = (_d = requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.timeoutInSeconds) !== null && _d !== void 0 ? _d : (_e = this._options) === null || _e === void 0 ? void 0 : _e.timeoutInSeconds) !== null && _f !== void 0 ? _f : 60) * 1e3,
          maxRetries: (_g = requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.maxRetries) !== null && _g !== void 0 ? _g : (_h = this._options) === null || _h === void 0 ? void 0 : _h.maxRetries,
          abortSignal: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.abortSignal,
          fetchFn: (_j = this._options) === null || _j === void 0 ? void 0 : _j.fetch,
          logging: this._options.logging
        });
        if (_response.ok) {
          return {
            data: _response.body,
            rawResponse: _response.rawResponse
          };
        }
        if (_response.error.reason === "status-code") {
          switch (_response.error.statusCode) {
            case 400:
              throw new BadRequestError(_response.error.body, _response.rawResponse);
            case 403:
              throw new ForbiddenError(_response.error.body, _response.rawResponse);
            case 422:
              throw new UnprocessableEntityError(_response.error.body, _response.rawResponse);
            case 429:
              throw new TooManyRequestsError(_response.error.body, _response.rawResponse);
            case 500:
              throw new InternalServerError(_response.error.body, _response.rawResponse);
            case 503:
              throw new ServiceUnavailableError(_response.error.body, _response.rawResponse);
            default:
              throw new SarvamAIError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
                rawResponse: _response.rawResponse
              });
          }
        }
        return handleNonStatusCodeError(_response.error, _response.rawResponse, "POST", "/speech-to-text-translate");
      });
    }
  };

  // node_modules/sarvamai/dist/esm/api/resources/speechToTextJob/client/SpeechToTextJobInstance.mjs
  var fs = __toESM(require_fs(), 1);
  var path = __toESM(require_path(), 1);
  var __awaiter19 = function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
  var SpeechToTextJobInstance = class {
    constructor(jobId, client) {
      this._jobId = jobId;
      this._client = client;
    }
    /**
     * Returns the job ID associated with this job instance.
     */
    get jobId() {
      return this._jobId;
    }
    /**
     * Upload input audio files for the speech-to-text job.
     *
     * @param filePaths - Array of full paths to local audio files
     * @param timeoutInSeconds - The maximum time to wait for the upload to complete (default: 60)
     * @returns Promise<boolean> - True if all files are uploaded successfully
     */
    uploadFiles(filePaths_1) {
      return __awaiter19(this, arguments, void 0, function* (filePaths, _timeoutInSeconds = 60) {
        const fileNames = filePaths.map((p) => (void 0)(p));
        const uploadLinksResponse = yield this._client.getUploadLinks({
          job_id: this._jobId,
          files: fileNames
        });
        for (const filePath of filePaths) {
          const fileName = (void 0)(filePath);
          const url = uploadLinksResponse.upload_urls[fileName].file_url;
          const fileBuffer = (void 0)(filePath);
          const mimeType = this.getMimeType(filePath);
          const response = yield fetch(url, {
            method: "PUT",
            body: fileBuffer,
            headers: {
              "x-ms-blob-type": "BlockBlob",
              "Content-Type": mimeType
            }
          });
          if (response.status < 200 || response.status > 226) {
            throw new Error(`Upload failed for ${fileName}: ${response.status}`);
          }
        }
        return true;
      });
    }
    /**
     * Polls job status until it completes or fails.
     *
     * @param pollIntervalSeconds - Time in seconds between polling attempts (default: 5)
     * @param timeoutSeconds - Maximum time to wait for completion in seconds (default: 600)
     * @returns Promise<SarvamAI.JobStatusResponse> - Final job status
     * @throws Error if the job does not complete within the given timeout
     */
    waitUntilComplete() {
      return __awaiter19(this, arguments, void 0, function* (pollIntervalSeconds = 5, timeoutSeconds = 600) {
        const startTime = Date.now();
        while (true) {
          const status = yield this.getStatus();
          const state = status.job_state.toLowerCase();
          if (state === "completed" || state === "failed") {
            return status;
          }
          if (Date.now() - startTime > timeoutSeconds * 1e3) {
            throw new Error(`Job ${this._jobId} did not complete within ${timeoutSeconds} seconds.`);
          }
          yield new Promise((resolve) => setTimeout(resolve, pollIntervalSeconds * 1e3));
        }
      });
    }
    /**
     * Get the mapping of input files to their corresponding output files.
     *
     * @returns Promise<Array<{input_file: string, output_file: string}>> - List of mappings
     */
    getOutputMappings() {
      return __awaiter19(this, void 0, void 0, function* () {
        const jobStatus = yield this.getStatus();
        return (jobStatus.job_details || []).filter((detail) => detail.inputs && detail.outputs && detail.inputs.length > 0 && detail.outputs.length > 0 && detail.state === "Success").map((detail) => ({
          input_file: detail.inputs[0].file_name,
          output_file: detail.outputs[0].file_name
        }));
      });
    }
    /**
     * Get detailed results for each file in the batch job.
     *
     * @returns Promise<{successful: Array<FileResult>, failed: Array<FileResult>}>
     *   Object with 'successful' and 'failed' keys, each containing a list of file details.
     *   Each file detail includes:
     *   - file_name: Name of the input file
     *   - status: Status of processing ('Success' or other states)
     *   - error_message: Error message if failed (undefined if successful)
     *   - output_file: Name of output file if successful (undefined if failed)
     */
    getFileResults() {
      return __awaiter19(this, void 0, void 0, function* () {
        const jobStatus = yield this.getStatus();
        const results = {
          successful: [],
          failed: []
        };
        for (const detail of jobStatus.job_details || []) {
          if (!detail.inputs || detail.inputs.length === 0) {
            continue;
          }
          try {
            const fileInfo = {
              file_name: detail.inputs[0].file_name,
              status: detail.state || "Unknown",
              error_message: detail.error_message,
              output_file: detail.outputs && detail.outputs.length > 0 ? detail.outputs[0].file_name : void 0
            };
            if (detail.state === "Success") {
              results.successful.push(fileInfo);
            } else {
              results.failed.push(fileInfo);
            }
          } catch (error) {
            continue;
          }
        }
        return results;
      });
    }
    /**
     * Download output files to the specified directory.
     *
     * @param outputDir - Local directory where outputs will be saved
     * @returns Promise<boolean> - True if all files downloaded successfully
     * @throws Error if a file fails to download
     */
    downloadOutputs(outputDir) {
      return __awaiter19(this, void 0, void 0, function* () {
        const mappings = yield this.getOutputMappings();
        const fileNames = mappings.map((m) => m.output_file);
        const downloadLinksResponse = yield this._client.getDownloadLinks({
          job_id: this._jobId,
          files: fileNames
        });
        if (!(void 0)(outputDir)) {
          (void 0)(outputDir, { recursive: true });
        }
        for (const mapping of mappings) {
          const url = downloadLinksResponse.download_urls[mapping.output_file].file_url;
          const response = yield fetch(url);
          if (response.status < 200 || response.status > 226) {
            throw new Error(`Download failed for ${mapping.output_file}: ${response.status}`);
          }
          const outputPath = (void 0)(outputDir, `${mapping.input_file}.json`);
          const buffer = yield response.arrayBuffer();
          (void 0)(outputPath, Buffer.from(buffer));
        }
        return true;
      });
    }
    /**
     * Retrieve the current status of the job.
     */
    getStatus() {
      return __awaiter19(this, void 0, void 0, function* () {
        const response = yield this._client.getStatus(this._jobId);
        return response;
      });
    }
    /**
     * Start the speech-to-text job processing.
     */
    start() {
      return __awaiter19(this, void 0, void 0, function* () {
        const response = yield this._client.start(this._jobId);
        return response;
      });
    }
    /**
     * Check if the job exists in the system.
     */
    exists() {
      return __awaiter19(this, void 0, void 0, function* () {
        try {
          yield this.getStatus();
          return true;
        } catch (error) {
          if (error.statusCode && (error.statusCode === 404 || error.statusCode === 400)) {
            return false;
          }
          throw error;
        }
      });
    }
    /**
     * Check if the job is either completed or failed.
     */
    isComplete() {
      return __awaiter19(this, void 0, void 0, function* () {
        const status = yield this.getStatus();
        const state = status.job_state.toLowerCase();
        return state === "completed" || state === "failed";
      });
    }
    /**
     * Check if the job completed successfully.
     */
    isSuccessful() {
      return __awaiter19(this, void 0, void 0, function* () {
        const status = yield this.getStatus();
        return status.job_state.toLowerCase() === "completed";
      });
    }
    /**
     * Check if the job has failed.
     */
    isFailed() {
      return __awaiter19(this, void 0, void 0, function* () {
        const status = yield this.getStatus();
        return status.job_state.toLowerCase() === "failed";
      });
    }
    getMimeType(filePath) {
      const ext = (void 0)(filePath).toLowerCase();
      const mimeTypes = {
        ".wav": "audio/wav",
        ".mp3": "audio/mpeg",
        ".m4a": "audio/mp4",
        ".aac": "audio/aac",
        ".ogg": "audio/ogg",
        ".flac": "audio/flac"
      };
      return mimeTypes[ext] || "audio/wav";
    }
  };

  // node_modules/sarvamai/dist/esm/api/resources/speechToTextJob/client/Client.mjs
  var __awaiter20 = function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
  var SpeechToTextJobClient = class {
    constructor(options = {}) {
      this._options = normalizeClientOptionsWithAuth(options);
    }
    /**
     * Create a new speech to text bulk job and receive a job UUID and storage folder details for processing multiple audio files
     *
     * @param {SarvamAI.SpeechToTextJobRequest} request
     * @param {SpeechToTextJobClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link SarvamAI.BadRequestError}
     * @throws {@link SarvamAI.ForbiddenError}
     * @throws {@link SarvamAI.UnprocessableEntityError}
     * @throws {@link SarvamAI.TooManyRequestsError}
     * @throws {@link SarvamAI.InternalServerError}
     * @throws {@link SarvamAI.ServiceUnavailableError}
     *
     * @example
     *     await client.speechToTextJob.initialise({
     *         job_parameters: {}
     *     })
     */
    initialise(request, requestOptions) {
      return HttpResponsePromise.fromPromise(this.__initialise(request, requestOptions));
    }
    __initialise(request, requestOptions) {
      return __awaiter20(this, void 0, void 0, function* () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const _authRequest = yield this._options.authProvider.getAuthRequest();
        const _headers = mergeHeaders(_authRequest.headers, (_a = this._options) === null || _a === void 0 ? void 0 : _a.headers, requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.headers);
        const _response = yield fetcher({
          url: url_exports.join((_b = yield Supplier.get(this._options.baseUrl)) !== null && _b !== void 0 ? _b : ((_c = yield Supplier.get(this._options.environment)) !== null && _c !== void 0 ? _c : SarvamAIEnvironment.Production).base, "speech-to-text/job/v1"),
          method: "POST",
          headers: _headers,
          contentType: "application/json",
          queryParameters: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.queryParams,
          requestType: "json",
          body: request,
          timeoutMs: ((_f = (_d = requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.timeoutInSeconds) !== null && _d !== void 0 ? _d : (_e = this._options) === null || _e === void 0 ? void 0 : _e.timeoutInSeconds) !== null && _f !== void 0 ? _f : 60) * 1e3,
          maxRetries: (_g = requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.maxRetries) !== null && _g !== void 0 ? _g : (_h = this._options) === null || _h === void 0 ? void 0 : _h.maxRetries,
          abortSignal: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.abortSignal,
          fetchFn: (_j = this._options) === null || _j === void 0 ? void 0 : _j.fetch,
          logging: this._options.logging
        });
        if (_response.ok) {
          return { data: _response.body, rawResponse: _response.rawResponse };
        }
        if (_response.error.reason === "status-code") {
          switch (_response.error.statusCode) {
            case 400:
              throw new BadRequestError(_response.error.body, _response.rawResponse);
            case 403:
              throw new ForbiddenError(_response.error.body, _response.rawResponse);
            case 422:
              throw new UnprocessableEntityError(_response.error.body, _response.rawResponse);
            case 429:
              throw new TooManyRequestsError(_response.error.body, _response.rawResponse);
            case 500:
              throw new InternalServerError(_response.error.body, _response.rawResponse);
            case 503:
              throw new ServiceUnavailableError(_response.error.body, _response.rawResponse);
            default:
              throw new SarvamAIError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
                rawResponse: _response.rawResponse
              });
          }
        }
        switch (_response.error.reason) {
          case "non-json":
            throw new SarvamAIError({
              statusCode: _response.error.statusCode,
              body: _response.error.rawBody,
              rawResponse: _response.rawResponse
            });
          case "body-is-null":
            throw new SarvamAIError({
              statusCode: _response.error.statusCode,
              rawResponse: _response.rawResponse
            });
          case "timeout":
            throw new SarvamAITimeoutError("Timeout exceeded when calling POST /speech-to-text/job/v1.");
          case "unknown":
            throw new SarvamAIError({
              message: _response.error.errorMessage,
              rawResponse: _response.rawResponse
            });
        }
      });
    }
    /**
     * Retrieve the current status and details of a speech to text bulk job, including progress and file-level information.
     *
     * **Rate Limiting Best Practice:** To prevent rate limit errors and ensure optimal server performance, we recommend implementing a minimum 5-millisecond delay between consecutive status polling requests. This helps maintain system stability while still providing timely status updates.
     *
     * @param {string} job_id - The unique identifier of the job
     * @param {SpeechToTextJobClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link SarvamAI.BadRequestError}
     * @throws {@link SarvamAI.ForbiddenError}
     * @throws {@link SarvamAI.UnprocessableEntityError}
     * @throws {@link SarvamAI.TooManyRequestsError}
     * @throws {@link SarvamAI.InternalServerError}
     * @throws {@link SarvamAI.ServiceUnavailableError}
     *
     * @example
     *     await client.speechToTextJob.getStatus("job_id")
     */
    getStatus(job_id, requestOptions) {
      return HttpResponsePromise.fromPromise(this.__getStatus(job_id, requestOptions));
    }
    __getStatus(job_id, requestOptions) {
      return __awaiter20(this, void 0, void 0, function* () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const _authRequest = yield this._options.authProvider.getAuthRequest();
        const _headers = mergeHeaders(_authRequest.headers, (_a = this._options) === null || _a === void 0 ? void 0 : _a.headers, requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.headers);
        const _response = yield fetcher({
          url: url_exports.join((_b = yield Supplier.get(this._options.baseUrl)) !== null && _b !== void 0 ? _b : ((_c = yield Supplier.get(this._options.environment)) !== null && _c !== void 0 ? _c : SarvamAIEnvironment.Production).base, `speech-to-text/job/v1/${url_exports.encodePathParam(job_id)}/status`),
          method: "GET",
          headers: _headers,
          queryParameters: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.queryParams,
          timeoutMs: ((_f = (_d = requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.timeoutInSeconds) !== null && _d !== void 0 ? _d : (_e = this._options) === null || _e === void 0 ? void 0 : _e.timeoutInSeconds) !== null && _f !== void 0 ? _f : 60) * 1e3,
          maxRetries: (_g = requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.maxRetries) !== null && _g !== void 0 ? _g : (_h = this._options) === null || _h === void 0 ? void 0 : _h.maxRetries,
          abortSignal: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.abortSignal,
          fetchFn: (_j = this._options) === null || _j === void 0 ? void 0 : _j.fetch,
          logging: this._options.logging
        });
        if (_response.ok) {
          return { data: _response.body, rawResponse: _response.rawResponse };
        }
        if (_response.error.reason === "status-code") {
          switch (_response.error.statusCode) {
            case 400:
              throw new BadRequestError(_response.error.body, _response.rawResponse);
            case 403:
              throw new ForbiddenError(_response.error.body, _response.rawResponse);
            case 422:
              throw new UnprocessableEntityError(_response.error.body, _response.rawResponse);
            case 429:
              throw new TooManyRequestsError(_response.error.body, _response.rawResponse);
            case 500:
              throw new InternalServerError(_response.error.body, _response.rawResponse);
            case 503:
              throw new ServiceUnavailableError(_response.error.body, _response.rawResponse);
            default:
              throw new SarvamAIError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
                rawResponse: _response.rawResponse
              });
          }
        }
        switch (_response.error.reason) {
          case "non-json":
            throw new SarvamAIError({
              statusCode: _response.error.statusCode,
              body: _response.error.rawBody,
              rawResponse: _response.rawResponse
            });
          case "body-is-null":
            throw new SarvamAIError({
              statusCode: _response.error.statusCode,
              rawResponse: _response.rawResponse
            });
          case "timeout":
            throw new SarvamAITimeoutError("Timeout exceeded when calling GET /speech-to-text/job/v1/{job_id}/status.");
          case "unknown":
            throw new SarvamAIError({
              message: _response.error.errorMessage,
              rawResponse: _response.rawResponse
            });
        }
      });
    }
    /**
     * Start processing a speech to text bulk job after all audio files have been uploaded
     *
     * @param {string} job_id - The unique identifier of the job
     * @param {SarvamAI.SpeechToTextJobStartRequest} request
     * @param {SpeechToTextJobClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link SarvamAI.BadRequestError}
     * @throws {@link SarvamAI.ForbiddenError}
     * @throws {@link SarvamAI.UnprocessableEntityError}
     * @throws {@link SarvamAI.TooManyRequestsError}
     * @throws {@link SarvamAI.InternalServerError}
     * @throws {@link SarvamAI.ServiceUnavailableError}
     *
     * @example
     *     await client.speechToTextJob.start("job_id", {
     *         ptu_id: 1
     *     })
     */
    start(job_id, request = {}, requestOptions) {
      return HttpResponsePromise.fromPromise(this.__start(job_id, request, requestOptions));
    }
    __start(job_id_1) {
      return __awaiter20(this, arguments, void 0, function* (job_id, request = {}, requestOptions) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const { ptu_id: ptuId } = request;
        const _queryParams = {};
        if (ptuId != null) {
          _queryParams.ptu_id = ptuId.toString();
        }
        const _authRequest = yield this._options.authProvider.getAuthRequest();
        const _headers = mergeHeaders(_authRequest.headers, (_a = this._options) === null || _a === void 0 ? void 0 : _a.headers, requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.headers);
        const _response = yield fetcher({
          url: url_exports.join((_b = yield Supplier.get(this._options.baseUrl)) !== null && _b !== void 0 ? _b : ((_c = yield Supplier.get(this._options.environment)) !== null && _c !== void 0 ? _c : SarvamAIEnvironment.Production).base, `speech-to-text/job/v1/${url_exports.encodePathParam(job_id)}/start`),
          method: "POST",
          headers: _headers,
          queryParameters: Object.assign(Object.assign({}, _queryParams), requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.queryParams),
          timeoutMs: ((_f = (_d = requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.timeoutInSeconds) !== null && _d !== void 0 ? _d : (_e = this._options) === null || _e === void 0 ? void 0 : _e.timeoutInSeconds) !== null && _f !== void 0 ? _f : 60) * 1e3,
          maxRetries: (_g = requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.maxRetries) !== null && _g !== void 0 ? _g : (_h = this._options) === null || _h === void 0 ? void 0 : _h.maxRetries,
          abortSignal: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.abortSignal,
          fetchFn: (_j = this._options) === null || _j === void 0 ? void 0 : _j.fetch,
          logging: this._options.logging
        });
        if (_response.ok) {
          return { data: _response.body, rawResponse: _response.rawResponse };
        }
        if (_response.error.reason === "status-code") {
          switch (_response.error.statusCode) {
            case 400:
              throw new BadRequestError(_response.error.body, _response.rawResponse);
            case 403:
              throw new ForbiddenError(_response.error.body, _response.rawResponse);
            case 422:
              throw new UnprocessableEntityError(_response.error.body, _response.rawResponse);
            case 429:
              throw new TooManyRequestsError(_response.error.body, _response.rawResponse);
            case 500:
              throw new InternalServerError(_response.error.body, _response.rawResponse);
            case 503:
              throw new ServiceUnavailableError(_response.error.body, _response.rawResponse);
            default:
              throw new SarvamAIError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
                rawResponse: _response.rawResponse
              });
          }
        }
        switch (_response.error.reason) {
          case "non-json":
            throw new SarvamAIError({
              statusCode: _response.error.statusCode,
              body: _response.error.rawBody,
              rawResponse: _response.rawResponse
            });
          case "body-is-null":
            throw new SarvamAIError({
              statusCode: _response.error.statusCode,
              rawResponse: _response.rawResponse
            });
          case "timeout":
            throw new SarvamAITimeoutError("Timeout exceeded when calling POST /speech-to-text/job/v1/{job_id}/start.");
          case "unknown":
            throw new SarvamAIError({
              message: _response.error.errorMessage,
              rawResponse: _response.rawResponse
            });
        }
      });
    }
    /**
     * Generate presigned upload URLs for audio files that will be processed in a speech to text bulk job
     *
     * @param {SarvamAI.FilesRequest} request
     * @param {SpeechToTextJobClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link SarvamAI.BadRequestError}
     * @throws {@link SarvamAI.ForbiddenError}
     * @throws {@link SarvamAI.UnprocessableEntityError}
     * @throws {@link SarvamAI.TooManyRequestsError}
     * @throws {@link SarvamAI.InternalServerError}
     * @throws {@link SarvamAI.ServiceUnavailableError}
     *
     * @example
     *     await client.speechToTextJob.getUploadLinks({
     *         job_id: "job_id",
     *         files: ["files"]
     *     })
     */
    getUploadLinks(request, requestOptions) {
      return HttpResponsePromise.fromPromise(this.__getUploadLinks(request, requestOptions));
    }
    __getUploadLinks(request, requestOptions) {
      return __awaiter20(this, void 0, void 0, function* () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const _authRequest = yield this._options.authProvider.getAuthRequest();
        const _headers = mergeHeaders(_authRequest.headers, (_a = this._options) === null || _a === void 0 ? void 0 : _a.headers, requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.headers);
        const _response = yield fetcher({
          url: url_exports.join((_b = yield Supplier.get(this._options.baseUrl)) !== null && _b !== void 0 ? _b : ((_c = yield Supplier.get(this._options.environment)) !== null && _c !== void 0 ? _c : SarvamAIEnvironment.Production).base, "speech-to-text/job/v1/upload-files"),
          method: "POST",
          headers: _headers,
          contentType: "application/json",
          queryParameters: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.queryParams,
          requestType: "json",
          body: request,
          timeoutMs: ((_f = (_d = requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.timeoutInSeconds) !== null && _d !== void 0 ? _d : (_e = this._options) === null || _e === void 0 ? void 0 : _e.timeoutInSeconds) !== null && _f !== void 0 ? _f : 60) * 1e3,
          maxRetries: (_g = requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.maxRetries) !== null && _g !== void 0 ? _g : (_h = this._options) === null || _h === void 0 ? void 0 : _h.maxRetries,
          abortSignal: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.abortSignal,
          fetchFn: (_j = this._options) === null || _j === void 0 ? void 0 : _j.fetch,
          logging: this._options.logging
        });
        if (_response.ok) {
          return { data: _response.body, rawResponse: _response.rawResponse };
        }
        if (_response.error.reason === "status-code") {
          switch (_response.error.statusCode) {
            case 400:
              throw new BadRequestError(_response.error.body, _response.rawResponse);
            case 403:
              throw new ForbiddenError(_response.error.body, _response.rawResponse);
            case 422:
              throw new UnprocessableEntityError(_response.error.body, _response.rawResponse);
            case 429:
              throw new TooManyRequestsError(_response.error.body, _response.rawResponse);
            case 500:
              throw new InternalServerError(_response.error.body, _response.rawResponse);
            case 503:
              throw new ServiceUnavailableError(_response.error.body, _response.rawResponse);
            default:
              throw new SarvamAIError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
                rawResponse: _response.rawResponse
              });
          }
        }
        switch (_response.error.reason) {
          case "non-json":
            throw new SarvamAIError({
              statusCode: _response.error.statusCode,
              body: _response.error.rawBody,
              rawResponse: _response.rawResponse
            });
          case "body-is-null":
            throw new SarvamAIError({
              statusCode: _response.error.statusCode,
              rawResponse: _response.rawResponse
            });
          case "timeout":
            throw new SarvamAITimeoutError("Timeout exceeded when calling POST /speech-to-text/job/v1/upload-files.");
          case "unknown":
            throw new SarvamAIError({
              message: _response.error.errorMessage,
              rawResponse: _response.rawResponse
            });
        }
      });
    }
    /**
     * Generate presigned download URLs for the transcription output files of a completed speech to text bulk job
     *
     * @param {SarvamAI.FilesRequest} request
     * @param {SpeechToTextJobClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link SarvamAI.BadRequestError}
     * @throws {@link SarvamAI.ForbiddenError}
     * @throws {@link SarvamAI.UnprocessableEntityError}
     * @throws {@link SarvamAI.TooManyRequestsError}
     * @throws {@link SarvamAI.InternalServerError}
     * @throws {@link SarvamAI.ServiceUnavailableError}
     *
     * @example
     *     await client.speechToTextJob.getDownloadLinks({
     *         job_id: "job_id",
     *         files: ["files"]
     *     })
     */
    getDownloadLinks(request, requestOptions) {
      return HttpResponsePromise.fromPromise(this.__getDownloadLinks(request, requestOptions));
    }
    __getDownloadLinks(request, requestOptions) {
      return __awaiter20(this, void 0, void 0, function* () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const _authRequest = yield this._options.authProvider.getAuthRequest();
        const _headers = mergeHeaders(_authRequest.headers, (_a = this._options) === null || _a === void 0 ? void 0 : _a.headers, requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.headers);
        const _response = yield fetcher({
          url: url_exports.join((_b = yield Supplier.get(this._options.baseUrl)) !== null && _b !== void 0 ? _b : ((_c = yield Supplier.get(this._options.environment)) !== null && _c !== void 0 ? _c : SarvamAIEnvironment.Production).base, "speech-to-text/job/v1/download-files"),
          method: "POST",
          headers: _headers,
          contentType: "application/json",
          queryParameters: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.queryParams,
          requestType: "json",
          body: request,
          timeoutMs: ((_f = (_d = requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.timeoutInSeconds) !== null && _d !== void 0 ? _d : (_e = this._options) === null || _e === void 0 ? void 0 : _e.timeoutInSeconds) !== null && _f !== void 0 ? _f : 60) * 1e3,
          maxRetries: (_g = requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.maxRetries) !== null && _g !== void 0 ? _g : (_h = this._options) === null || _h === void 0 ? void 0 : _h.maxRetries,
          abortSignal: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.abortSignal,
          fetchFn: (_j = this._options) === null || _j === void 0 ? void 0 : _j.fetch,
          logging: this._options.logging
        });
        if (_response.ok) {
          return { data: _response.body, rawResponse: _response.rawResponse };
        }
        if (_response.error.reason === "status-code") {
          switch (_response.error.statusCode) {
            case 400:
              throw new BadRequestError(_response.error.body, _response.rawResponse);
            case 403:
              throw new ForbiddenError(_response.error.body, _response.rawResponse);
            case 422:
              throw new UnprocessableEntityError(_response.error.body, _response.rawResponse);
            case 429:
              throw new TooManyRequestsError(_response.error.body, _response.rawResponse);
            case 500:
              throw new InternalServerError(_response.error.body, _response.rawResponse);
            case 503:
              throw new ServiceUnavailableError(_response.error.body, _response.rawResponse);
            default:
              throw new SarvamAIError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
                rawResponse: _response.rawResponse
              });
          }
        }
        switch (_response.error.reason) {
          case "non-json":
            throw new SarvamAIError({
              statusCode: _response.error.statusCode,
              body: _response.error.rawBody,
              rawResponse: _response.rawResponse
            });
          case "body-is-null":
            throw new SarvamAIError({
              statusCode: _response.error.statusCode,
              rawResponse: _response.rawResponse
            });
          case "timeout":
            throw new SarvamAITimeoutError("Timeout exceeded when calling POST /speech-to-text/job/v1/download-files.");
          case "unknown":
            throw new SarvamAIError({
              message: _response.error.errorMessage,
              rawResponse: _response.rawResponse
            });
        }
      });
    }
    /**
     * Create a new Speech-to-Text bulk job.
     *
     * @param params - Job creation parameters
     * @param params.model - The model to use for transcription (default: "saarika:v2.5")
     * @param params.withDiarization - Whether to enable speaker diarization (default: false)
     * @param params.withTimestamps - Whether to include word-level timestamps (default: false)
     * @param params.languageCode - The language code of the input audio (e.g., "hi-IN", "bn-IN")
     * @param params.numSpeakers - The number of distinct speakers in the audio, if known
     * @param params.mode - Output mode for **saaras:v3** only (e.g. transcribe, translate, verbatim)
     * @param params.callback - Optional callback configuration to receive job completion events
     * @param requestOptions - Request-specific configuration
     * @returns A handle to the newly created Speech-to-Text job
     */
    createJob() {
      return __awaiter20(this, arguments, void 0, function* (params = {}, requestOptions) {
        const { model = "saarika:v2.5", withDiarization = false, withTimestamps = false, languageCode, numSpeakers, mode, callback } = params;
        const response = yield this.initialise({
          job_parameters: Object.assign({ language_code: languageCode, model, num_speakers: numSpeakers, with_diarization: withDiarization, with_timestamps: withTimestamps }, mode !== void 0 ? { mode } : {}),
          callback
        }, requestOptions);
        return new SpeechToTextJobInstance(response.job_id, this);
      });
    }
    /**
     * Get an existing Speech-to-Text job handle by job ID.
     *
     * @param jobId - The job ID of the previously created Speech-to-Text job
     * @returns A job handle which can be used to check status or retrieve results
     */
    getJob(jobId) {
      return new SpeechToTextJobInstance(jobId, this);
    }
  };

  // node_modules/sarvamai/dist/esm/api/resources/speechToTextStreaming/client/Socket.mjs
  var __awaiter21 = function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
  var SpeechToTextStreamingSocket = class {
    constructor(args) {
      this.eventHandlers = {};
      this.handleOpen = () => {
        var _a, _b;
        (_b = (_a = this.eventHandlers).open) === null || _b === void 0 ? void 0 : _b.call(_a);
      };
      this.handleMessage = (event) => {
        var _a, _b;
        const data = fromJson(event.data);
        (_b = (_a = this.eventHandlers).message) === null || _b === void 0 ? void 0 : _b.call(_a, data);
      };
      this.handleClose = (event) => {
        var _a, _b;
        (_b = (_a = this.eventHandlers).close) === null || _b === void 0 ? void 0 : _b.call(_a, event);
      };
      this.handleError = (event) => {
        var _a, _b;
        const message = event.message;
        (_b = (_a = this.eventHandlers).error) === null || _b === void 0 ? void 0 : _b.call(_a, new Error(message));
      };
      this.socket = args.socket;
      this.socket.addEventListener("open", this.handleOpen);
      this.socket.addEventListener("message", this.handleMessage);
      this.socket.addEventListener("close", this.handleClose);
      this.socket.addEventListener("error", this.handleError);
    }
    /** The current state of the connection; this is one of the readyState constants. */
    get readyState() {
      return this.socket.readyState;
    }
    /**
     * @param event - The event to attach to.
     * @param callback - The callback to run when the event is triggered.
     * Usage:
     * ```typescript
     * this.on('open', () => {
     *     console.log('The websocket is open');
     * });
     * ```
     */
    on(event, callback) {
      this.eventHandlers[event] = callback;
    }
    /** @param params - Object containing audio (base64), sample_rate, and encoding*/
    transcribe(params) {
      var _a, _b;
      this.assertSocketIsOpen();
      const message = {
        audio: {
          data: params.audio,
          sample_rate: (_a = params.sample_rate) !== null && _a !== void 0 ? _a : 16e3,
          encoding: (_b = params.encoding) !== null && _b !== void 0 ? _b : "audio/wav"
        }
      };
      this.sendJson(message);
    }
    sendConfigMessage(message) {
      this.assertSocketIsOpen();
      this.sendJson(message);
    }
    /** Signal to flush the audio buffer and force finalize partial transcriptions */
    flush() {
      this.assertSocketIsOpen();
      const flushMessage = {
        type: "flush"
      };
      this.sendJson(flushMessage);
    }
    /** Connect to the websocket and register event handlers. */
    connect() {
      this.socket.reconnect();
      this.socket.addEventListener("open", this.handleOpen);
      this.socket.addEventListener("message", this.handleMessage);
      this.socket.addEventListener("close", this.handleClose);
      this.socket.addEventListener("error", this.handleError);
      return this;
    }
    /** Close the websocket and unregister event handlers. */
    close() {
      this.socket.close();
      this.handleClose({ code: 1e3 });
      this.socket.removeEventListener("open", this.handleOpen);
      this.socket.removeEventListener("message", this.handleMessage);
      this.socket.removeEventListener("close", this.handleClose);
      this.socket.removeEventListener("error", this.handleError);
    }
    /** Returns a promise that resolves when the websocket is open. */
    waitForOpen() {
      return __awaiter21(this, void 0, void 0, function* () {
        if (this.socket.readyState === ReconnectingWebSocket.OPEN) {
          return this.socket;
        }
        return new Promise((resolve, reject) => {
          this.socket.addEventListener("open", () => {
            resolve(this.socket);
          });
          this.socket.addEventListener("error", (event) => {
            reject(event);
          });
        });
      });
    }
    /** Asserts that the websocket is open. */
    assertSocketIsOpen() {
      if (!this.socket) {
        throw new Error("Socket is not connected.");
      }
      if (this.socket.readyState !== ReconnectingWebSocket.OPEN) {
        throw new Error("Socket is not open.");
      }
    }
    /** Send a binary payload to the websocket. */
    sendBinary(payload) {
      this.socket.send(payload);
    }
    /** Send a JSON payload to the websocket. */
    sendJson(payload) {
      const jsonPayload = toJson(payload);
      this.socket.send(jsonPayload);
    }
  };

  // node_modules/sarvamai/dist/esm/api/resources/speechToTextStreaming/client/Client.mjs
  var __awaiter22 = function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
  var SpeechToTextStreamingClient = class {
    constructor(options = {}) {
      this._options = normalizeClientOptionsWithAuth(options);
    }
    connect(args) {
      return __awaiter22(this, void 0, void 0, function* () {
        var _a, _b;
        const { "language-code": languageCode, model, input_audio_codec: inputAudioCodec, sample_rate: sampleRate, high_vad_sensitivity: highVadSensitivity, vad_signals: vadSignals, flush_signal: flushSignal, headers, debug, reconnectAttempts } = args;
        const _queryParams = {};
        _queryParams["language-code"] = languageCode;
        if (model != null) {
          _queryParams.model = model;
        }
        if (inputAudioCodec != null) {
          _queryParams.input_audio_codec = inputAudioCodec;
        }
        if (sampleRate != null) {
          _queryParams.sample_rate = sampleRate;
        }
        if (highVadSensitivity != null) {
          _queryParams.high_vad_sensitivity = highVadSensitivity;
        }
        if (vadSignals != null) {
          _queryParams.vad_signals = vadSignals;
        }
        if (flushSignal != null) {
          _queryParams.flush_signal = flushSignal;
        }
        const _authRequest = yield this._options.authProvider.getAuthRequest();
        const _headers = mergeHeaders(_authRequest.headers, mergeOnlyDefinedHeaders({ "Api-Subscription-Key": args["Api-Subscription-Key"] }), headers);
        const apiSubscriptionKeyValue = _headers["api-subscription-key"];
        const socket = new ReconnectingWebSocket({
          url: url_exports.join((_a = yield Supplier.get(this._options.baseUrl)) !== null && _a !== void 0 ? _a : ((_b = yield Supplier.get(this._options.environment)) !== null && _b !== void 0 ? _b : SarvamAIEnvironment.Production).production, "/speech-to-text/ws"),
          protocols: [`api-subscription-key.${apiSubscriptionKeyValue}`],
          queryParameters: _queryParams,
          headers: _headers,
          options: { debug: debug !== null && debug !== void 0 ? debug : false, maxRetries: reconnectAttempts !== null && reconnectAttempts !== void 0 ? reconnectAttempts : 30 }
        });
        return new SpeechToTextStreamingSocket({ socket });
      });
    }
  };

  // node_modules/sarvamai/dist/esm/api/resources/speechToTextTranslateJob/client/SpeechToTextTranslateJobInstance.mjs
  var fs2 = __toESM(require_fs(), 1);
  var path2 = __toESM(require_path(), 1);
  var __awaiter23 = function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
  var SpeechToTextTranslateJobInstance = class {
    constructor(jobId, client) {
      this._jobId = jobId;
      this._client = client;
    }
    /**
     * Returns the job ID associated with this job instance.
     */
    get jobId() {
      return this._jobId;
    }
    /**
     * Upload input audio files for the speech-to-text-translate job.
     *
     * @param filePaths - Array of full paths to local audio files
     * @param timeoutInSeconds - The maximum time to wait for the upload to complete (default: 60)
     * @returns Promise<boolean> - True if all files are uploaded successfully
     */
    uploadFiles(filePaths_1) {
      return __awaiter23(this, arguments, void 0, function* (filePaths, _timeoutInSeconds = 60) {
        const fileNames = filePaths.map((p) => (void 0)(p));
        const uploadLinksResponse = yield this._client.getUploadLinks({
          body: {
            job_id: this._jobId,
            files: fileNames
          }
        });
        for (const filePath of filePaths) {
          const fileName = (void 0)(filePath);
          const url = uploadLinksResponse.upload_urls[fileName].file_url;
          const fileBuffer = (void 0)(filePath);
          const mimeType = this.getMimeType(filePath);
          const response = yield fetch(url, {
            method: "PUT",
            body: fileBuffer,
            headers: {
              "x-ms-blob-type": "BlockBlob",
              "Content-Type": mimeType
            }
          });
          if (response.status < 200 || response.status > 226) {
            throw new Error(`Upload failed for ${fileName}: ${response.status}`);
          }
        }
        return true;
      });
    }
    /**
     * Polls job status until it completes or fails.
     *
     * @param pollIntervalSeconds - Time in seconds between polling attempts (default: 5)
     * @param timeoutSeconds - Maximum time to wait for completion in seconds (default: 600)
     * @returns Promise<SarvamAI.JobStatusResponse> - Final job status
     * @throws Error if the job does not complete within the given timeout
     */
    waitUntilComplete() {
      return __awaiter23(this, arguments, void 0, function* (pollIntervalSeconds = 5, timeoutSeconds = 600) {
        const startTime = Date.now();
        while (true) {
          const status = yield this.getStatus();
          const state = status.job_state.toLowerCase();
          if (state === "completed" || state === "failed") {
            return status;
          }
          if (Date.now() - startTime > timeoutSeconds * 1e3) {
            throw new Error(`Job ${this._jobId} did not complete within ${timeoutSeconds} seconds.`);
          }
          yield new Promise((resolve) => setTimeout(resolve, pollIntervalSeconds * 1e3));
        }
      });
    }
    /**
     * Get the mapping of input files to their corresponding output files.
     *
     * @returns Promise<Array<{input_file: string, output_file: string}>> - List of mappings
     */
    getOutputMappings() {
      return __awaiter23(this, void 0, void 0, function* () {
        const jobStatus = yield this.getStatus();
        return (jobStatus.job_details || []).filter((detail) => detail.inputs && detail.outputs && detail.inputs.length > 0 && detail.outputs.length > 0 && detail.state === "Success").map((detail) => ({
          input_file: detail.inputs[0].file_name,
          output_file: detail.outputs[0].file_name
        }));
      });
    }
    /**
     * Get detailed results for each file in the batch job.
     *
     * @returns Promise<{successful: Array<FileResult>, failed: Array<FileResult>}>
     *   Object with 'successful' and 'failed' keys, each containing a list of file details.
     *   Each file detail includes:
     *   - file_name: Name of the input file
     *   - status: Status of processing ('Success' or other states)
     *   - error_message: Error message if failed (undefined if successful)
     *   - output_file: Name of output file if successful (undefined if failed)
     */
    getFileResults() {
      return __awaiter23(this, void 0, void 0, function* () {
        const jobStatus = yield this.getStatus();
        const results = {
          successful: [],
          failed: []
        };
        for (const detail of jobStatus.job_details || []) {
          if (!detail.inputs || detail.inputs.length === 0) {
            continue;
          }
          try {
            const fileInfo = {
              file_name: detail.inputs[0].file_name,
              status: detail.state || "Unknown",
              error_message: detail.error_message,
              output_file: detail.outputs && detail.outputs.length > 0 ? detail.outputs[0].file_name : void 0
            };
            if (detail.state === "Success") {
              results.successful.push(fileInfo);
            } else {
              results.failed.push(fileInfo);
            }
          } catch (error) {
            continue;
          }
        }
        return results;
      });
    }
    /**
     * Download output files to the specified directory.
     *
     * @param outputDir - Local directory where outputs will be saved
     * @returns Promise<boolean> - True if all files downloaded successfully
     * @throws Error if a file fails to download
     */
    downloadOutputs(outputDir) {
      return __awaiter23(this, void 0, void 0, function* () {
        const mappings = yield this.getOutputMappings();
        const fileNames = mappings.map((m) => m.output_file);
        const downloadLinksResponse = yield this._client.getDownloadLinks({
          body: {
            job_id: this._jobId,
            files: fileNames
          }
        });
        if (!(void 0)(outputDir)) {
          (void 0)(outputDir, { recursive: true });
        }
        for (const mapping of mappings) {
          const url = downloadLinksResponse.download_urls[mapping.output_file].file_url;
          const response = yield fetch(url);
          if (response.status < 200 || response.status > 226) {
            throw new Error(`Download failed for ${mapping.output_file}: ${response.status}`);
          }
          const outputPath = (void 0)(outputDir, `${mapping.input_file}.json`);
          const buffer = yield response.arrayBuffer();
          (void 0)(outputPath, Buffer.from(buffer));
        }
        return true;
      });
    }
    /**
     * Retrieve the current status of the job.
     */
    getStatus() {
      return __awaiter23(this, void 0, void 0, function* () {
        const response = yield this._client.getStatus(this._jobId);
        return response;
      });
    }
    /**
     * Start the speech-to-text-translate job processing.
     */
    start() {
      return __awaiter23(this, void 0, void 0, function* () {
        const response = yield this._client.start(this._jobId);
        return response;
      });
    }
    /**
     * Check if the job exists in the system.
     */
    exists() {
      return __awaiter23(this, void 0, void 0, function* () {
        try {
          yield this.getStatus();
          return true;
        } catch (error) {
          if (error.statusCode && (error.statusCode === 404 || error.statusCode === 400)) {
            return false;
          }
          throw error;
        }
      });
    }
    /**
     * Check if the job is either completed or failed.
     */
    isComplete() {
      return __awaiter23(this, void 0, void 0, function* () {
        const status = yield this.getStatus();
        const state = status.job_state.toLowerCase();
        return state === "completed" || state === "failed";
      });
    }
    /**
     * Check if the job completed successfully.
     */
    isSuccessful() {
      return __awaiter23(this, void 0, void 0, function* () {
        const status = yield this.getStatus();
        return status.job_state.toLowerCase() === "completed";
      });
    }
    /**
     * Check if the job has failed.
     */
    isFailed() {
      return __awaiter23(this, void 0, void 0, function* () {
        const status = yield this.getStatus();
        return status.job_state.toLowerCase() === "failed";
      });
    }
    getMimeType(filePath) {
      const ext = (void 0)(filePath).toLowerCase();
      const mimeTypes = {
        ".wav": "audio/wav",
        ".mp3": "audio/mpeg",
        ".m4a": "audio/mp4",
        ".aac": "audio/aac",
        ".ogg": "audio/ogg",
        ".flac": "audio/flac"
      };
      return mimeTypes[ext] || "audio/wav";
    }
  };

  // node_modules/sarvamai/dist/esm/api/resources/speechToTextTranslateJob/client/Client.mjs
  var __awaiter24 = function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
  var __rest = function(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
          t[p[i]] = s[p[i]];
      }
    return t;
  };
  var SpeechToTextTranslateJobClient = class {
    constructor(options = {}) {
      this._options = normalizeClientOptionsWithAuth(options);
    }
    /**
     * Create a new speech to text translate bulk job and receive a job UUID and storage folder details for processing multiple audio files with translation
     *
     * @param {SarvamAI.SpeechToTextTranslateJobRequest} request
     * @param {SpeechToTextTranslateJobClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link SarvamAI.BadRequestError}
     * @throws {@link SarvamAI.ForbiddenError}
     * @throws {@link SarvamAI.UnprocessableEntityError}
     * @throws {@link SarvamAI.TooManyRequestsError}
     * @throws {@link SarvamAI.InternalServerError}
     * @throws {@link SarvamAI.ServiceUnavailableError}
     *
     * @example
     *     await client.speechToTextTranslateJob.initialise({
     *         ptu_id: 1,
     *         job_parameters: {}
     *     })
     */
    initialise(request, requestOptions) {
      return HttpResponsePromise.fromPromise(this.__initialise(request, requestOptions));
    }
    __initialise(request, requestOptions) {
      return __awaiter24(this, void 0, void 0, function* () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const { ptu_id: ptuId } = request, _body = __rest(request, ["ptu_id"]);
        const _queryParams = {};
        if (ptuId != null) {
          _queryParams.ptu_id = ptuId.toString();
        }
        const _authRequest = yield this._options.authProvider.getAuthRequest();
        const _headers = mergeHeaders(_authRequest.headers, (_a = this._options) === null || _a === void 0 ? void 0 : _a.headers, requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.headers);
        const _response = yield fetcher({
          url: url_exports.join((_b = yield Supplier.get(this._options.baseUrl)) !== null && _b !== void 0 ? _b : ((_c = yield Supplier.get(this._options.environment)) !== null && _c !== void 0 ? _c : SarvamAIEnvironment.Production).base, "speech-to-text-translate/job/v1"),
          method: "POST",
          headers: _headers,
          contentType: "application/json",
          queryParameters: Object.assign(Object.assign({}, _queryParams), requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.queryParams),
          requestType: "json",
          body: _body,
          timeoutMs: ((_f = (_d = requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.timeoutInSeconds) !== null && _d !== void 0 ? _d : (_e = this._options) === null || _e === void 0 ? void 0 : _e.timeoutInSeconds) !== null && _f !== void 0 ? _f : 60) * 1e3,
          maxRetries: (_g = requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.maxRetries) !== null && _g !== void 0 ? _g : (_h = this._options) === null || _h === void 0 ? void 0 : _h.maxRetries,
          abortSignal: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.abortSignal,
          fetchFn: (_j = this._options) === null || _j === void 0 ? void 0 : _j.fetch,
          logging: this._options.logging
        });
        if (_response.ok) {
          return { data: _response.body, rawResponse: _response.rawResponse };
        }
        if (_response.error.reason === "status-code") {
          switch (_response.error.statusCode) {
            case 400:
              throw new BadRequestError(_response.error.body, _response.rawResponse);
            case 403:
              throw new ForbiddenError(_response.error.body, _response.rawResponse);
            case 422:
              throw new UnprocessableEntityError(_response.error.body, _response.rawResponse);
            case 429:
              throw new TooManyRequestsError(_response.error.body, _response.rawResponse);
            case 500:
              throw new InternalServerError(_response.error.body, _response.rawResponse);
            case 503:
              throw new ServiceUnavailableError(_response.error.body, _response.rawResponse);
            default:
              throw new SarvamAIError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
                rawResponse: _response.rawResponse
              });
          }
        }
        switch (_response.error.reason) {
          case "non-json":
            throw new SarvamAIError({
              statusCode: _response.error.statusCode,
              body: _response.error.rawBody,
              rawResponse: _response.rawResponse
            });
          case "body-is-null":
            throw new SarvamAIError({
              statusCode: _response.error.statusCode,
              rawResponse: _response.rawResponse
            });
          case "timeout":
            throw new SarvamAITimeoutError("Timeout exceeded when calling POST /speech-to-text-translate/job/v1.");
          case "unknown":
            throw new SarvamAIError({
              message: _response.error.errorMessage,
              rawResponse: _response.rawResponse
            });
        }
      });
    }
    /**
     * Retrieve the current status and details of a speech to text translate bulk job, including progress and file-level information.
     *
     * **Rate Limiting Best Practice:** To prevent rate limit errors and ensure optimal server performance, we recommend implementing a minimum 5-millisecond delay between consecutive status polling requests. This helps maintain system stability while still providing timely status updates.
     *
     * @param {string} job_id - The unique identifier of the job
     * @param {SpeechToTextTranslateJobClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link SarvamAI.BadRequestError}
     * @throws {@link SarvamAI.ForbiddenError}
     * @throws {@link SarvamAI.UnprocessableEntityError}
     * @throws {@link SarvamAI.TooManyRequestsError}
     * @throws {@link SarvamAI.InternalServerError}
     * @throws {@link SarvamAI.ServiceUnavailableError}
     *
     * @example
     *     await client.speechToTextTranslateJob.getStatus("job_id")
     */
    getStatus(job_id, requestOptions) {
      return HttpResponsePromise.fromPromise(this.__getStatus(job_id, requestOptions));
    }
    __getStatus(job_id, requestOptions) {
      return __awaiter24(this, void 0, void 0, function* () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const _authRequest = yield this._options.authProvider.getAuthRequest();
        const _headers = mergeHeaders(_authRequest.headers, (_a = this._options) === null || _a === void 0 ? void 0 : _a.headers, requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.headers);
        const _response = yield fetcher({
          url: url_exports.join((_b = yield Supplier.get(this._options.baseUrl)) !== null && _b !== void 0 ? _b : ((_c = yield Supplier.get(this._options.environment)) !== null && _c !== void 0 ? _c : SarvamAIEnvironment.Production).base, `speech-to-text-translate/job/v1/${url_exports.encodePathParam(job_id)}/status`),
          method: "GET",
          headers: _headers,
          queryParameters: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.queryParams,
          timeoutMs: ((_f = (_d = requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.timeoutInSeconds) !== null && _d !== void 0 ? _d : (_e = this._options) === null || _e === void 0 ? void 0 : _e.timeoutInSeconds) !== null && _f !== void 0 ? _f : 60) * 1e3,
          maxRetries: (_g = requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.maxRetries) !== null && _g !== void 0 ? _g : (_h = this._options) === null || _h === void 0 ? void 0 : _h.maxRetries,
          abortSignal: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.abortSignal,
          fetchFn: (_j = this._options) === null || _j === void 0 ? void 0 : _j.fetch,
          logging: this._options.logging
        });
        if (_response.ok) {
          return { data: _response.body, rawResponse: _response.rawResponse };
        }
        if (_response.error.reason === "status-code") {
          switch (_response.error.statusCode) {
            case 400:
              throw new BadRequestError(_response.error.body, _response.rawResponse);
            case 403:
              throw new ForbiddenError(_response.error.body, _response.rawResponse);
            case 422:
              throw new UnprocessableEntityError(_response.error.body, _response.rawResponse);
            case 429:
              throw new TooManyRequestsError(_response.error.body, _response.rawResponse);
            case 500:
              throw new InternalServerError(_response.error.body, _response.rawResponse);
            case 503:
              throw new ServiceUnavailableError(_response.error.body, _response.rawResponse);
            default:
              throw new SarvamAIError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
                rawResponse: _response.rawResponse
              });
          }
        }
        switch (_response.error.reason) {
          case "non-json":
            throw new SarvamAIError({
              statusCode: _response.error.statusCode,
              body: _response.error.rawBody,
              rawResponse: _response.rawResponse
            });
          case "body-is-null":
            throw new SarvamAIError({
              statusCode: _response.error.statusCode,
              rawResponse: _response.rawResponse
            });
          case "timeout":
            throw new SarvamAITimeoutError("Timeout exceeded when calling GET /speech-to-text-translate/job/v1/{job_id}/status.");
          case "unknown":
            throw new SarvamAIError({
              message: _response.error.errorMessage,
              rawResponse: _response.rawResponse
            });
        }
      });
    }
    /**
     * Start processing a speech to text translate bulk job after all audio files have been uploaded
     *
     * @param {string} job_id - The unique identifier of the job
     * @param {SarvamAI.SpeechToTextTranslateJobStartRequest} request
     * @param {SpeechToTextTranslateJobClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link SarvamAI.BadRequestError}
     * @throws {@link SarvamAI.ForbiddenError}
     * @throws {@link SarvamAI.UnprocessableEntityError}
     * @throws {@link SarvamAI.TooManyRequestsError}
     * @throws {@link SarvamAI.InternalServerError}
     * @throws {@link SarvamAI.ServiceUnavailableError}
     *
     * @example
     *     await client.speechToTextTranslateJob.start("job_id", {
     *         ptu_id: 1
     *     })
     */
    start(job_id, request = {}, requestOptions) {
      return HttpResponsePromise.fromPromise(this.__start(job_id, request, requestOptions));
    }
    __start(job_id_1) {
      return __awaiter24(this, arguments, void 0, function* (job_id, request = {}, requestOptions) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const { ptu_id: ptuId } = request;
        const _queryParams = {};
        if (ptuId != null) {
          _queryParams.ptu_id = ptuId.toString();
        }
        const _authRequest = yield this._options.authProvider.getAuthRequest();
        const _headers = mergeHeaders(_authRequest.headers, (_a = this._options) === null || _a === void 0 ? void 0 : _a.headers, requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.headers);
        const _response = yield fetcher({
          url: url_exports.join((_b = yield Supplier.get(this._options.baseUrl)) !== null && _b !== void 0 ? _b : ((_c = yield Supplier.get(this._options.environment)) !== null && _c !== void 0 ? _c : SarvamAIEnvironment.Production).base, `speech-to-text-translate/job/v1/${url_exports.encodePathParam(job_id)}/start`),
          method: "POST",
          headers: _headers,
          queryParameters: Object.assign(Object.assign({}, _queryParams), requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.queryParams),
          timeoutMs: ((_f = (_d = requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.timeoutInSeconds) !== null && _d !== void 0 ? _d : (_e = this._options) === null || _e === void 0 ? void 0 : _e.timeoutInSeconds) !== null && _f !== void 0 ? _f : 60) * 1e3,
          maxRetries: (_g = requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.maxRetries) !== null && _g !== void 0 ? _g : (_h = this._options) === null || _h === void 0 ? void 0 : _h.maxRetries,
          abortSignal: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.abortSignal,
          fetchFn: (_j = this._options) === null || _j === void 0 ? void 0 : _j.fetch,
          logging: this._options.logging
        });
        if (_response.ok) {
          return { data: _response.body, rawResponse: _response.rawResponse };
        }
        if (_response.error.reason === "status-code") {
          switch (_response.error.statusCode) {
            case 400:
              throw new BadRequestError(_response.error.body, _response.rawResponse);
            case 403:
              throw new ForbiddenError(_response.error.body, _response.rawResponse);
            case 422:
              throw new UnprocessableEntityError(_response.error.body, _response.rawResponse);
            case 429:
              throw new TooManyRequestsError(_response.error.body, _response.rawResponse);
            case 500:
              throw new InternalServerError(_response.error.body, _response.rawResponse);
            case 503:
              throw new ServiceUnavailableError(_response.error.body, _response.rawResponse);
            default:
              throw new SarvamAIError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
                rawResponse: _response.rawResponse
              });
          }
        }
        switch (_response.error.reason) {
          case "non-json":
            throw new SarvamAIError({
              statusCode: _response.error.statusCode,
              body: _response.error.rawBody,
              rawResponse: _response.rawResponse
            });
          case "body-is-null":
            throw new SarvamAIError({
              statusCode: _response.error.statusCode,
              rawResponse: _response.rawResponse
            });
          case "timeout":
            throw new SarvamAITimeoutError("Timeout exceeded when calling POST /speech-to-text-translate/job/v1/{job_id}/start.");
          case "unknown":
            throw new SarvamAIError({
              message: _response.error.errorMessage,
              rawResponse: _response.rawResponse
            });
        }
      });
    }
    /**
     * Generate presigned upload URLs for audio files that will be processed in a speech to text translate bulk job
     *
     * @param {SarvamAI.SpeechToTextTranslateJobGetUploadLinksRequest} request
     * @param {SpeechToTextTranslateJobClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link SarvamAI.BadRequestError}
     * @throws {@link SarvamAI.ForbiddenError}
     * @throws {@link SarvamAI.UnprocessableEntityError}
     * @throws {@link SarvamAI.TooManyRequestsError}
     * @throws {@link SarvamAI.InternalServerError}
     * @throws {@link SarvamAI.ServiceUnavailableError}
     *
     * @example
     *     await client.speechToTextTranslateJob.getUploadLinks({
     *         ptu_id: 1,
     *         body: {
     *             job_id: "job_id",
     *             files: ["files"]
     *         }
     *     })
     */
    getUploadLinks(request, requestOptions) {
      return HttpResponsePromise.fromPromise(this.__getUploadLinks(request, requestOptions));
    }
    __getUploadLinks(request, requestOptions) {
      return __awaiter24(this, void 0, void 0, function* () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const { ptu_id: ptuId, body: _body } = request;
        const _queryParams = {};
        if (ptuId != null) {
          _queryParams.ptu_id = ptuId.toString();
        }
        const _authRequest = yield this._options.authProvider.getAuthRequest();
        const _headers = mergeHeaders(_authRequest.headers, (_a = this._options) === null || _a === void 0 ? void 0 : _a.headers, requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.headers);
        const _response = yield fetcher({
          url: url_exports.join((_b = yield Supplier.get(this._options.baseUrl)) !== null && _b !== void 0 ? _b : ((_c = yield Supplier.get(this._options.environment)) !== null && _c !== void 0 ? _c : SarvamAIEnvironment.Production).base, "speech-to-text-translate/job/v1/upload-files"),
          method: "POST",
          headers: _headers,
          contentType: "application/json",
          queryParameters: Object.assign(Object.assign({}, _queryParams), requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.queryParams),
          requestType: "json",
          body: _body,
          timeoutMs: ((_f = (_d = requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.timeoutInSeconds) !== null && _d !== void 0 ? _d : (_e = this._options) === null || _e === void 0 ? void 0 : _e.timeoutInSeconds) !== null && _f !== void 0 ? _f : 60) * 1e3,
          maxRetries: (_g = requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.maxRetries) !== null && _g !== void 0 ? _g : (_h = this._options) === null || _h === void 0 ? void 0 : _h.maxRetries,
          abortSignal: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.abortSignal,
          fetchFn: (_j = this._options) === null || _j === void 0 ? void 0 : _j.fetch,
          logging: this._options.logging
        });
        if (_response.ok) {
          return { data: _response.body, rawResponse: _response.rawResponse };
        }
        if (_response.error.reason === "status-code") {
          switch (_response.error.statusCode) {
            case 400:
              throw new BadRequestError(_response.error.body, _response.rawResponse);
            case 403:
              throw new ForbiddenError(_response.error.body, _response.rawResponse);
            case 422:
              throw new UnprocessableEntityError(_response.error.body, _response.rawResponse);
            case 429:
              throw new TooManyRequestsError(_response.error.body, _response.rawResponse);
            case 500:
              throw new InternalServerError(_response.error.body, _response.rawResponse);
            case 503:
              throw new ServiceUnavailableError(_response.error.body, _response.rawResponse);
            default:
              throw new SarvamAIError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
                rawResponse: _response.rawResponse
              });
          }
        }
        switch (_response.error.reason) {
          case "non-json":
            throw new SarvamAIError({
              statusCode: _response.error.statusCode,
              body: _response.error.rawBody,
              rawResponse: _response.rawResponse
            });
          case "body-is-null":
            throw new SarvamAIError({
              statusCode: _response.error.statusCode,
              rawResponse: _response.rawResponse
            });
          case "timeout":
            throw new SarvamAITimeoutError("Timeout exceeded when calling POST /speech-to-text-translate/job/v1/upload-files.");
          case "unknown":
            throw new SarvamAIError({
              message: _response.error.errorMessage,
              rawResponse: _response.rawResponse
            });
        }
      });
    }
    /**
     * Generate presigned download URLs for the translated transcription output files of a completed speech to text translate bulk job
     *
     * @param {SarvamAI.SpeechToTextTranslateJobGetDownloadLinksRequest} request
     * @param {SpeechToTextTranslateJobClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link SarvamAI.BadRequestError}
     * @throws {@link SarvamAI.ForbiddenError}
     * @throws {@link SarvamAI.UnprocessableEntityError}
     * @throws {@link SarvamAI.TooManyRequestsError}
     * @throws {@link SarvamAI.InternalServerError}
     * @throws {@link SarvamAI.ServiceUnavailableError}
     *
     * @example
     *     await client.speechToTextTranslateJob.getDownloadLinks({
     *         ptu_id: 1,
     *         body: {
     *             job_id: "job_id",
     *             files: ["files"]
     *         }
     *     })
     */
    getDownloadLinks(request, requestOptions) {
      return HttpResponsePromise.fromPromise(this.__getDownloadLinks(request, requestOptions));
    }
    __getDownloadLinks(request, requestOptions) {
      return __awaiter24(this, void 0, void 0, function* () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const { ptu_id: ptuId, body: _body } = request;
        const _queryParams = {};
        if (ptuId != null) {
          _queryParams.ptu_id = ptuId.toString();
        }
        const _authRequest = yield this._options.authProvider.getAuthRequest();
        const _headers = mergeHeaders(_authRequest.headers, (_a = this._options) === null || _a === void 0 ? void 0 : _a.headers, requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.headers);
        const _response = yield fetcher({
          url: url_exports.join((_b = yield Supplier.get(this._options.baseUrl)) !== null && _b !== void 0 ? _b : ((_c = yield Supplier.get(this._options.environment)) !== null && _c !== void 0 ? _c : SarvamAIEnvironment.Production).base, "speech-to-text-translate/job/v1/download-files"),
          method: "POST",
          headers: _headers,
          contentType: "application/json",
          queryParameters: Object.assign(Object.assign({}, _queryParams), requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.queryParams),
          requestType: "json",
          body: _body,
          timeoutMs: ((_f = (_d = requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.timeoutInSeconds) !== null && _d !== void 0 ? _d : (_e = this._options) === null || _e === void 0 ? void 0 : _e.timeoutInSeconds) !== null && _f !== void 0 ? _f : 60) * 1e3,
          maxRetries: (_g = requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.maxRetries) !== null && _g !== void 0 ? _g : (_h = this._options) === null || _h === void 0 ? void 0 : _h.maxRetries,
          abortSignal: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.abortSignal,
          fetchFn: (_j = this._options) === null || _j === void 0 ? void 0 : _j.fetch,
          logging: this._options.logging
        });
        if (_response.ok) {
          return { data: _response.body, rawResponse: _response.rawResponse };
        }
        if (_response.error.reason === "status-code") {
          switch (_response.error.statusCode) {
            case 400:
              throw new BadRequestError(_response.error.body, _response.rawResponse);
            case 403:
              throw new ForbiddenError(_response.error.body, _response.rawResponse);
            case 422:
              throw new UnprocessableEntityError(_response.error.body, _response.rawResponse);
            case 429:
              throw new TooManyRequestsError(_response.error.body, _response.rawResponse);
            case 500:
              throw new InternalServerError(_response.error.body, _response.rawResponse);
            case 503:
              throw new ServiceUnavailableError(_response.error.body, _response.rawResponse);
            default:
              throw new SarvamAIError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
                rawResponse: _response.rawResponse
              });
          }
        }
        switch (_response.error.reason) {
          case "non-json":
            throw new SarvamAIError({
              statusCode: _response.error.statusCode,
              body: _response.error.rawBody,
              rawResponse: _response.rawResponse
            });
          case "body-is-null":
            throw new SarvamAIError({
              statusCode: _response.error.statusCode,
              rawResponse: _response.rawResponse
            });
          case "timeout":
            throw new SarvamAITimeoutError("Timeout exceeded when calling POST /speech-to-text-translate/job/v1/download-files.");
          case "unknown":
            throw new SarvamAIError({
              message: _response.error.errorMessage,
              rawResponse: _response.rawResponse
            });
        }
      });
    }
    /**
     * Create a new Speech-to-Text-Translate bulk job.
     *
     * @param params - Job creation parameters
     * @param params.model - The model to use for speech-to-text translation (default: "saaras:v2.5")
     * @param params.withDiarization - Whether to enable speaker diarization (default: false)
     * @param params.prompt - An optional prompt to guide the transcription and translation model
     * @param params.numSpeakers - The number of distinct speakers in the audio, if known
     * @param params.callback - Optional callback configuration to receive job completion events
     * @param requestOptions - Request-specific configuration
     * @returns A handle to the newly created Speech-to-Text-Translate job
     */
    createJob() {
      return __awaiter24(this, arguments, void 0, function* (params = {}, requestOptions) {
        const { model = "saaras:v2.5", withDiarization = false, prompt, numSpeakers, callback } = params;
        const response = yield this.initialise({
          job_parameters: {
            prompt,
            model,
            num_speakers: numSpeakers,
            with_diarization: withDiarization
          },
          callback
        }, requestOptions);
        return new SpeechToTextTranslateJobInstance(response.job_id, this);
      });
    }
    /**
     * Get an existing Speech-to-Text-Translate job handle by job ID.
     *
     * @param jobId - The job ID of the previously created Speech-to-Text-Translate job
     * @returns A job handle which can be used to check status or retrieve results
     */
    getJob(jobId) {
      return new SpeechToTextTranslateJobInstance(jobId, this);
    }
  };

  // node_modules/sarvamai/dist/esm/api/resources/speechToTextTranslateStreaming/client/Socket.mjs
  var __awaiter25 = function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
  var SpeechToTextTranslateStreamingSocket = class {
    constructor(args) {
      this.eventHandlers = {};
      this.handleOpen = () => {
        var _a, _b;
        (_b = (_a = this.eventHandlers).open) === null || _b === void 0 ? void 0 : _b.call(_a);
      };
      this.handleMessage = (event) => {
        var _a, _b;
        const data = fromJson(event.data);
        (_b = (_a = this.eventHandlers).message) === null || _b === void 0 ? void 0 : _b.call(_a, data);
      };
      this.handleClose = (event) => {
        var _a, _b;
        (_b = (_a = this.eventHandlers).close) === null || _b === void 0 ? void 0 : _b.call(_a, event);
      };
      this.handleError = (event) => {
        var _a, _b;
        const message = event.message;
        (_b = (_a = this.eventHandlers).error) === null || _b === void 0 ? void 0 : _b.call(_a, new Error(message));
      };
      this.socket = args.socket;
      this.socket.addEventListener("open", this.handleOpen);
      this.socket.addEventListener("message", this.handleMessage);
      this.socket.addEventListener("close", this.handleClose);
      this.socket.addEventListener("error", this.handleError);
    }
    /** The current state of the connection; this is one of the readyState constants. */
    get readyState() {
      return this.socket.readyState;
    }
    /**
     * @param event - The event to attach to.
     * @param callback - The callback to run when the event is triggered.
     * Usage:
     * ```typescript
     * this.on('open', () => {
     *     console.log('The websocket is open');
     * });
     * ```
     */
    on(event, callback) {
      this.eventHandlers[event] = callback;
    }
    /** @param params - Object containing audio (base64), sample_rate, and encoding */
    translate(params) {
      var _a, _b;
      this.assertSocketIsOpen();
      const message = {
        audio: {
          data: params.audio,
          sample_rate: (_a = params.sample_rate) !== null && _a !== void 0 ? _a : 16e3,
          encoding: (_b = params.encoding) !== null && _b !== void 0 ? _b : "audio/wav"
        }
      };
      this.sendJson(message);
    }
    sendConfigMessage(message) {
      this.assertSocketIsOpen();
      this.sendJson(message);
    }
    /** Flush the audio buffer and finalize transcriptions and translations */
    flush() {
      this.assertSocketIsOpen();
      const flushMessage = {
        type: "flush"
      };
      this.sendJson(flushMessage);
    }
    /** Connect to the websocket and register event handlers. */
    connect() {
      this.socket.reconnect();
      this.socket.addEventListener("open", this.handleOpen);
      this.socket.addEventListener("message", this.handleMessage);
      this.socket.addEventListener("close", this.handleClose);
      this.socket.addEventListener("error", this.handleError);
      return this;
    }
    /** Close the websocket and unregister event handlers. */
    close() {
      this.socket.close();
      this.handleClose({ code: 1e3 });
      this.socket.removeEventListener("open", this.handleOpen);
      this.socket.removeEventListener("message", this.handleMessage);
      this.socket.removeEventListener("close", this.handleClose);
      this.socket.removeEventListener("error", this.handleError);
    }
    /** Returns a promise that resolves when the websocket is open. */
    waitForOpen() {
      return __awaiter25(this, void 0, void 0, function* () {
        if (this.socket.readyState === ReconnectingWebSocket.OPEN) {
          return this.socket;
        }
        return new Promise((resolve, reject) => {
          this.socket.addEventListener("open", () => {
            resolve(this.socket);
          });
          this.socket.addEventListener("error", (event) => {
            reject(event);
          });
        });
      });
    }
    /** Asserts that the websocket is open. */
    assertSocketIsOpen() {
      if (!this.socket) {
        throw new Error("Socket is not connected.");
      }
      if (this.socket.readyState !== ReconnectingWebSocket.OPEN) {
        throw new Error("Socket is not open.");
      }
    }
    /** Send a binary payload to the websocket. */
    sendBinary(payload) {
      this.socket.send(payload);
    }
    /** Send a JSON payload to the websocket. */
    sendJson(payload) {
      const jsonPayload = toJson(payload);
      this.socket.send(jsonPayload);
    }
  };

  // node_modules/sarvamai/dist/esm/api/resources/speechToTextTranslateStreaming/client/Client.mjs
  var __awaiter26 = function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
  var SpeechToTextTranslateStreamingClient = class {
    constructor(options = {}) {
      this._options = normalizeClientOptionsWithAuth(options);
    }
    connect(args) {
      return __awaiter26(this, void 0, void 0, function* () {
        var _a, _b;
        const { model, input_audio_codec: inputAudioCodec, sample_rate: sampleRate, high_vad_sensitivity: highVadSensitivity, vad_signals: vadSignals, flush_signal: flushSignal, headers, debug, reconnectAttempts } = args;
        const _queryParams = {};
        if (model != null) {
          _queryParams.model = model;
        }
        if (inputAudioCodec != null) {
          _queryParams.input_audio_codec = inputAudioCodec;
        }
        if (sampleRate != null) {
          _queryParams.sample_rate = sampleRate;
        }
        if (highVadSensitivity != null) {
          _queryParams.high_vad_sensitivity = highVadSensitivity;
        }
        if (vadSignals != null) {
          _queryParams.vad_signals = vadSignals;
        }
        if (flushSignal != null) {
          _queryParams.flush_signal = flushSignal;
        }
        const _authRequest = yield this._options.authProvider.getAuthRequest();
        const _headers = mergeHeaders(_authRequest.headers, mergeOnlyDefinedHeaders({ "Api-Subscription-Key": args["Api-Subscription-Key"] }), headers);
        const apiSubscriptionKeyValue = _headers["api-subscription-key"];
        const socket = new ReconnectingWebSocket({
          url: url_exports.join((_a = yield Supplier.get(this._options.baseUrl)) !== null && _a !== void 0 ? _a : ((_b = yield Supplier.get(this._options.environment)) !== null && _b !== void 0 ? _b : SarvamAIEnvironment.Production).production, "/speech-to-text-translate/ws"),
          protocols: [`api-subscription-key.${apiSubscriptionKeyValue}`],
          queryParameters: _queryParams,
          headers: _headers,
          options: { debug: debug !== null && debug !== void 0 ? debug : false, maxRetries: reconnectAttempts !== null && reconnectAttempts !== void 0 ? reconnectAttempts : 30 }
        });
        return new SpeechToTextTranslateStreamingSocket({ socket });
      });
    }
  };

  // node_modules/sarvamai/dist/esm/api/resources/text/client/Client.mjs
  var __awaiter27 = function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
  var TextClient = class {
    constructor(options = {}) {
      this._options = normalizeClientOptionsWithAuth(options);
    }
    /**
     * **Translation** converts text from one language to another while preserving its meaning.
     * For Example: **'मैं ऑफिस जा रहा हूँ'** translates to **'I am going to the office'** in English, where the script and language change, but the original meaning remains the same.
     *
     * Available languages:
     * - **`bn-IN`**: Bengali
     * - **`en-IN`**: English
     * - **`gu-IN`**: Gujarati
     * - **`hi-IN`**: Hindi
     * - **`kn-IN`**: Kannada
     * - **`ml-IN`**: Malayalam
     * - **`mr-IN`**: Marathi
     * - **`od-IN`**: Odia
     * - **`pa-IN`**: Punjabi
     * - **`ta-IN`**: Tamil
     * - **`te-IN`**: Telugu
     *
     * ### Newly added languages:
     * - **`as-IN`**: Assamese
     * - **`brx-IN`**: Bodo
     * - **`doi-IN`**: Dogri
     * - **`kok-IN`**: Konkani
     * - **`ks-IN`**: Kashmiri
     * - **`mai-IN`**: Maithili
     * - **`mni-IN`**: Manipuri (Meiteilon)
     * - **`ne-IN`**: Nepali
     * - **`sa-IN`**: Sanskrit
     * - **`sat-IN`**: Santali
     * - **`sd-IN`**: Sindhi
     * - **`ur-IN`**: Urdu
     *
     * For hands-on practice, you can explore the notebook tutorial on [Translate API Tutorial](https://github.com/sarvamai/sarvam-ai-cookbook/blob/main/notebooks/translate/Translate_API_Tutorial.ipynb).
     *
     * @param {SarvamAI.TranslationRequest} request
     * @param {TextClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link SarvamAI.BadRequestError}
     * @throws {@link SarvamAI.ForbiddenError}
     * @throws {@link SarvamAI.UnprocessableEntityError}
     * @throws {@link SarvamAI.TooManyRequestsError}
     * @throws {@link SarvamAI.InternalServerError}
     *
     * @example
     *     await client.text.translate({
     *         input: "input",
     *         source_language_code: "auto",
     *         target_language_code: "bn-IN"
     *     })
     */
    translate(request, requestOptions) {
      return HttpResponsePromise.fromPromise(this.__translate(request, requestOptions));
    }
    __translate(request, requestOptions) {
      return __awaiter27(this, void 0, void 0, function* () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const _authRequest = yield this._options.authProvider.getAuthRequest();
        const _headers = mergeHeaders(_authRequest.headers, (_a = this._options) === null || _a === void 0 ? void 0 : _a.headers, requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.headers);
        const _response = yield fetcher({
          url: url_exports.join((_b = yield Supplier.get(this._options.baseUrl)) !== null && _b !== void 0 ? _b : ((_c = yield Supplier.get(this._options.environment)) !== null && _c !== void 0 ? _c : SarvamAIEnvironment.Production).base, "translate"),
          method: "POST",
          headers: _headers,
          contentType: "application/json",
          queryParameters: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.queryParams,
          requestType: "json",
          body: request,
          timeoutMs: ((_f = (_d = requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.timeoutInSeconds) !== null && _d !== void 0 ? _d : (_e = this._options) === null || _e === void 0 ? void 0 : _e.timeoutInSeconds) !== null && _f !== void 0 ? _f : 60) * 1e3,
          maxRetries: (_g = requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.maxRetries) !== null && _g !== void 0 ? _g : (_h = this._options) === null || _h === void 0 ? void 0 : _h.maxRetries,
          abortSignal: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.abortSignal,
          fetchFn: (_j = this._options) === null || _j === void 0 ? void 0 : _j.fetch,
          logging: this._options.logging
        });
        if (_response.ok) {
          return { data: _response.body, rawResponse: _response.rawResponse };
        }
        if (_response.error.reason === "status-code") {
          switch (_response.error.statusCode) {
            case 400:
              throw new BadRequestError(_response.error.body, _response.rawResponse);
            case 403:
              throw new ForbiddenError(_response.error.body, _response.rawResponse);
            case 422:
              throw new UnprocessableEntityError(_response.error.body, _response.rawResponse);
            case 429:
              throw new TooManyRequestsError(_response.error.body, _response.rawResponse);
            case 500:
              throw new InternalServerError(_response.error.body, _response.rawResponse);
            default:
              throw new SarvamAIError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
                rawResponse: _response.rawResponse
              });
          }
        }
        return handleNonStatusCodeError(_response.error, _response.rawResponse, "POST", "/translate");
      });
    }
    /**
     * Identifies the language (e.g., en-IN, hi-IN) and script (e.g., Latin, Devanagari) of the input text, supporting multiple languages.
     *
     * @param {SarvamAI.LanguageIdentificationRequest} request
     * @param {TextClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link SarvamAI.BadRequestError}
     * @throws {@link SarvamAI.ForbiddenError}
     * @throws {@link SarvamAI.UnprocessableEntityError}
     * @throws {@link SarvamAI.TooManyRequestsError}
     * @throws {@link SarvamAI.InternalServerError}
     *
     * @example
     *     await client.text.identifyLanguage({
     *         input: "input"
     *     })
     */
    identifyLanguage(request, requestOptions) {
      return HttpResponsePromise.fromPromise(this.__identifyLanguage(request, requestOptions));
    }
    __identifyLanguage(request, requestOptions) {
      return __awaiter27(this, void 0, void 0, function* () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const _authRequest = yield this._options.authProvider.getAuthRequest();
        const _headers = mergeHeaders(_authRequest.headers, (_a = this._options) === null || _a === void 0 ? void 0 : _a.headers, requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.headers);
        const _response = yield fetcher({
          url: url_exports.join((_b = yield Supplier.get(this._options.baseUrl)) !== null && _b !== void 0 ? _b : ((_c = yield Supplier.get(this._options.environment)) !== null && _c !== void 0 ? _c : SarvamAIEnvironment.Production).base, "text-lid"),
          method: "POST",
          headers: _headers,
          contentType: "application/json",
          queryParameters: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.queryParams,
          requestType: "json",
          body: request,
          timeoutMs: ((_f = (_d = requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.timeoutInSeconds) !== null && _d !== void 0 ? _d : (_e = this._options) === null || _e === void 0 ? void 0 : _e.timeoutInSeconds) !== null && _f !== void 0 ? _f : 60) * 1e3,
          maxRetries: (_g = requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.maxRetries) !== null && _g !== void 0 ? _g : (_h = this._options) === null || _h === void 0 ? void 0 : _h.maxRetries,
          abortSignal: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.abortSignal,
          fetchFn: (_j = this._options) === null || _j === void 0 ? void 0 : _j.fetch,
          logging: this._options.logging
        });
        if (_response.ok) {
          return {
            data: _response.body,
            rawResponse: _response.rawResponse
          };
        }
        if (_response.error.reason === "status-code") {
          switch (_response.error.statusCode) {
            case 400:
              throw new BadRequestError(_response.error.body, _response.rawResponse);
            case 403:
              throw new ForbiddenError(_response.error.body, _response.rawResponse);
            case 422:
              throw new UnprocessableEntityError(_response.error.body, _response.rawResponse);
            case 429:
              throw new TooManyRequestsError(_response.error.body, _response.rawResponse);
            case 500:
              throw new InternalServerError(_response.error.body, _response.rawResponse);
            default:
              throw new SarvamAIError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
                rawResponse: _response.rawResponse
              });
          }
        }
        return handleNonStatusCodeError(_response.error, _response.rawResponse, "POST", "/text-lid");
      });
    }
    /**
     * **Transliteration** converts text from one script to another while preserving the original pronunciation. For example, **'नमस्ते'** becomes **'namaste'** in English, and **'how are you'** can be written as **'हाउ आर यू'** in Devanagari. This process ensures that the sound of the original text remains intact, even when written in a different script.
     *
     * Transliteration is useful when you want to represent words phonetically across different writing systems, such as converting **'मैं ऑफिस जा रहा हूँ'** to **'main office ja raha hun'** in English letters.
     *
     * **Translation**, on the other hand, converts text from one language to another while preserving the meaning rather than pronunciation. For example, **'मैं ऑफिस जा रहा हूँ'** translates to **'I am going to the office'** in English, changing both the script and the language while conveying the intended message.
     * ### Examples of **Transliteration**:
     * - **'Good morning'** becomes **'गुड मॉर्निंग'** in Hindi, where the pronunciation is preserved but the meaning is not translated.
     * - **'सुप्रभात'** becomes **'suprabhat'** in English.
     *
     * Available languages:
     * - **`en-IN`**: English
     * - **`hi-IN`**: Hindi
     * - **`bn-IN`**: Bengali
     * - **`gu-IN`**: Gujarati
     * - **`kn-IN`**: Kannada
     * - **`ml-IN`**: Malayalam
     * - **`mr-IN`**: Marathi
     * - **`od-IN`**: Odia
     * - **`pa-IN`**: Punjabi
     * - **`ta-IN`**: Tamil
     * - **`te-IN`**: Telugu
     *
     * For hands-on practice, you can explore the notebook tutorial on [Transliterate API Tutorial](https://github.com/sarvamai/sarvam-ai-cookbook/blob/main/notebooks/transliterate/Transliterate_API_Tutorial.ipynb).
     *
     * @param {SarvamAI.TransliterationRequest} request
     * @param {TextClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link SarvamAI.BadRequestError}
     * @throws {@link SarvamAI.ForbiddenError}
     * @throws {@link SarvamAI.UnprocessableEntityError}
     * @throws {@link SarvamAI.TooManyRequestsError}
     * @throws {@link SarvamAI.InternalServerError}
     *
     * @example
     *     await client.text.transliterate({
     *         input: "input",
     *         source_language_code: "auto",
     *         target_language_code: "bn-IN"
     *     })
     */
    transliterate(request, requestOptions) {
      return HttpResponsePromise.fromPromise(this.__transliterate(request, requestOptions));
    }
    __transliterate(request, requestOptions) {
      return __awaiter27(this, void 0, void 0, function* () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const _authRequest = yield this._options.authProvider.getAuthRequest();
        const _headers = mergeHeaders(_authRequest.headers, (_a = this._options) === null || _a === void 0 ? void 0 : _a.headers, requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.headers);
        const _response = yield fetcher({
          url: url_exports.join((_b = yield Supplier.get(this._options.baseUrl)) !== null && _b !== void 0 ? _b : ((_c = yield Supplier.get(this._options.environment)) !== null && _c !== void 0 ? _c : SarvamAIEnvironment.Production).base, "transliterate"),
          method: "POST",
          headers: _headers,
          contentType: "application/json",
          queryParameters: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.queryParams,
          requestType: "json",
          body: request,
          timeoutMs: ((_f = (_d = requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.timeoutInSeconds) !== null && _d !== void 0 ? _d : (_e = this._options) === null || _e === void 0 ? void 0 : _e.timeoutInSeconds) !== null && _f !== void 0 ? _f : 60) * 1e3,
          maxRetries: (_g = requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.maxRetries) !== null && _g !== void 0 ? _g : (_h = this._options) === null || _h === void 0 ? void 0 : _h.maxRetries,
          abortSignal: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.abortSignal,
          fetchFn: (_j = this._options) === null || _j === void 0 ? void 0 : _j.fetch,
          logging: this._options.logging
        });
        if (_response.ok) {
          return { data: _response.body, rawResponse: _response.rawResponse };
        }
        if (_response.error.reason === "status-code") {
          switch (_response.error.statusCode) {
            case 400:
              throw new BadRequestError(_response.error.body, _response.rawResponse);
            case 403:
              throw new ForbiddenError(_response.error.body, _response.rawResponse);
            case 422:
              throw new UnprocessableEntityError(_response.error.body, _response.rawResponse);
            case 429:
              throw new TooManyRequestsError(_response.error.body, _response.rawResponse);
            case 500:
              throw new InternalServerError(_response.error.body, _response.rawResponse);
            default:
              throw new SarvamAIError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
                rawResponse: _response.rawResponse
              });
          }
        }
        return handleNonStatusCodeError(_response.error, _response.rawResponse, "POST", "/transliterate");
      });
    }
  };

  // node_modules/sarvamai/dist/esm/api/resources/textToSpeech/client/Client.mjs
  var __awaiter28 = function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
  var TextToSpeechClient = class {
    constructor(options = {}) {
      this._options = normalizeClientOptionsWithAuth(options);
    }
    /**
     * Convert text into spoken audio. The output is a base64-encoded audio string that must be decoded before use.
     *
     * **Available Models:**
     * - **bulbul:v3**: Latest model with improved quality, 30+ voices, and temperature control
     * - **bulbul:v2**: Legacy model with pitch and loudness controls
     *
     * **Important Notes for bulbul:v3:**
     * - Pitch and loudness parameters are NOT supported
     * - Pace range: 0.5 to 2.0
     * - Preprocessing is automatically enabled
     * - Default sample rate is 24000 Hz
     * - Supports sample rates: 8000, 16000, 22050, 24000 Hz (REST API also supports 32000, 44100, 48000 Hz)
     *
     * @param {SarvamAI.TextToSpeechRequest} request
     * @param {TextToSpeechClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link SarvamAI.BadRequestError}
     * @throws {@link SarvamAI.ForbiddenError}
     * @throws {@link SarvamAI.UnprocessableEntityError}
     * @throws {@link SarvamAI.TooManyRequestsError}
     * @throws {@link SarvamAI.InternalServerError}
     *
     * @example
     *     await client.textToSpeech.convert({
     *         text: "text",
     *         target_language_code: "bn-IN"
     *     })
     */
    convert(request, requestOptions) {
      return HttpResponsePromise.fromPromise(this.__convert(request, requestOptions));
    }
    __convert(request, requestOptions) {
      return __awaiter28(this, void 0, void 0, function* () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const _authRequest = yield this._options.authProvider.getAuthRequest();
        const _headers = mergeHeaders(_authRequest.headers, (_a = this._options) === null || _a === void 0 ? void 0 : _a.headers, requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.headers);
        const _response = yield fetcher({
          url: url_exports.join((_b = yield Supplier.get(this._options.baseUrl)) !== null && _b !== void 0 ? _b : ((_c = yield Supplier.get(this._options.environment)) !== null && _c !== void 0 ? _c : SarvamAIEnvironment.Production).base, "text-to-speech"),
          method: "POST",
          headers: _headers,
          contentType: "application/json",
          queryParameters: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.queryParams,
          requestType: "json",
          body: request,
          timeoutMs: ((_f = (_d = requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.timeoutInSeconds) !== null && _d !== void 0 ? _d : (_e = this._options) === null || _e === void 0 ? void 0 : _e.timeoutInSeconds) !== null && _f !== void 0 ? _f : 60) * 1e3,
          maxRetries: (_g = requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.maxRetries) !== null && _g !== void 0 ? _g : (_h = this._options) === null || _h === void 0 ? void 0 : _h.maxRetries,
          abortSignal: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.abortSignal,
          fetchFn: (_j = this._options) === null || _j === void 0 ? void 0 : _j.fetch,
          logging: this._options.logging
        });
        if (_response.ok) {
          return { data: _response.body, rawResponse: _response.rawResponse };
        }
        if (_response.error.reason === "status-code") {
          switch (_response.error.statusCode) {
            case 400:
              throw new BadRequestError(_response.error.body, _response.rawResponse);
            case 403:
              throw new ForbiddenError(_response.error.body, _response.rawResponse);
            case 422:
              throw new UnprocessableEntityError(_response.error.body, _response.rawResponse);
            case 429:
              throw new TooManyRequestsError(_response.error.body, _response.rawResponse);
            case 500:
              throw new InternalServerError(_response.error.body, _response.rawResponse);
            default:
              throw new SarvamAIError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
                rawResponse: _response.rawResponse
              });
          }
        }
        return handleNonStatusCodeError(_response.error, _response.rawResponse, "POST", "/text-to-speech");
      });
    }
    /**
     * Converts the input text into a streamed spoken audio response.
     *
     * This endpoint supports streaming audio using the specified output codec (e.g., `audio/mpeg` for MP3). The response is returned as a binary audio stream, which can be played or saved directly by the client.
     *
     * Supports the `dict_id` parameter to apply a [pronunciation dictionary](https://docs.sarvam.ai/api-reference-docs/pronunciation-dictionary/create) during synthesis.
     * @throws {@link SarvamAI.BadRequestError}
     * @throws {@link SarvamAI.ForbiddenError}
     * @throws {@link SarvamAI.UnprocessableEntityError}
     * @throws {@link SarvamAI.TooManyRequestsError}
     * @throws {@link SarvamAI.InternalServerError}
     */
    convertStream(request, requestOptions) {
      return HttpResponsePromise.fromPromise(this.__convertStream(request, requestOptions));
    }
    __convertStream(request, requestOptions) {
      return __awaiter28(this, void 0, void 0, function* () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const _authRequest = yield this._options.authProvider.getAuthRequest();
        const _headers = mergeHeaders(_authRequest.headers, (_a = this._options) === null || _a === void 0 ? void 0 : _a.headers, requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.headers);
        const _response = yield fetcher({
          url: url_exports.join((_b = yield Supplier.get(this._options.baseUrl)) !== null && _b !== void 0 ? _b : ((_c = yield Supplier.get(this._options.environment)) !== null && _c !== void 0 ? _c : SarvamAIEnvironment.Production).base, "text-to-speech/stream"),
          method: "POST",
          headers: _headers,
          contentType: "application/json",
          queryParameters: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.queryParams,
          requestType: "json",
          body: request,
          responseType: "binary-response",
          timeoutMs: ((_f = (_d = requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.timeoutInSeconds) !== null && _d !== void 0 ? _d : (_e = this._options) === null || _e === void 0 ? void 0 : _e.timeoutInSeconds) !== null && _f !== void 0 ? _f : 60) * 1e3,
          maxRetries: (_g = requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.maxRetries) !== null && _g !== void 0 ? _g : (_h = this._options) === null || _h === void 0 ? void 0 : _h.maxRetries,
          abortSignal: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.abortSignal,
          fetchFn: (_j = this._options) === null || _j === void 0 ? void 0 : _j.fetch,
          logging: this._options.logging
        });
        if (_response.ok) {
          return { data: _response.body, rawResponse: _response.rawResponse };
        }
        if (_response.error.reason === "status-code") {
          switch (_response.error.statusCode) {
            case 400:
              throw new BadRequestError(_response.error.body, _response.rawResponse);
            case 403:
              throw new ForbiddenError(_response.error.body, _response.rawResponse);
            case 422:
              throw new UnprocessableEntityError(_response.error.body, _response.rawResponse);
            case 429:
              throw new TooManyRequestsError(_response.error.body, _response.rawResponse);
            case 500:
              throw new InternalServerError(_response.error.body, _response.rawResponse);
            default:
              throw new SarvamAIError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
                rawResponse: _response.rawResponse
              });
          }
        }
        return handleNonStatusCodeError(_response.error, _response.rawResponse, "POST", "/text-to-speech/stream");
      });
    }
  };

  // node_modules/sarvamai/dist/esm/api/resources/textToSpeechStreaming/client/Socket.mjs
  var __awaiter29 = function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
  var TextToSpeechStreamingSocket = class {
    constructor(args) {
      this.eventHandlers = {};
      this.handleOpen = () => {
        var _a, _b;
        (_b = (_a = this.eventHandlers).open) === null || _b === void 0 ? void 0 : _b.call(_a);
      };
      this.handleMessage = (event) => {
        var _a, _b;
        const data = fromJson(event.data);
        (_b = (_a = this.eventHandlers).message) === null || _b === void 0 ? void 0 : _b.call(_a, data);
      };
      this.handleClose = (event) => {
        var _a, _b;
        (_b = (_a = this.eventHandlers).close) === null || _b === void 0 ? void 0 : _b.call(_a, event);
      };
      this.handleError = (event) => {
        var _a, _b;
        const message = event.message;
        (_b = (_a = this.eventHandlers).error) === null || _b === void 0 ? void 0 : _b.call(_a, new Error(message));
      };
      this.socket = args.socket;
      this.socket.addEventListener("open", this.handleOpen);
      this.socket.addEventListener("message", this.handleMessage);
      this.socket.addEventListener("close", this.handleClose);
      this.socket.addEventListener("error", this.handleError);
    }
    /** The current state of the connection; this is one of the readyState constants. */
    get readyState() {
      return this.socket.readyState;
    }
    /**
     * @param event - The event to attach to.
     * @param callback - The callback to run when the event is triggered.
     * Usage:
     * ```typescript
     * this.on('open', () => {
     *     console.log('The websocket is open');
     * });
     * ```
     */
    on(event, callback) {
      this.eventHandlers[event] = callback;
    }
    /**
     * Configure the connection with various options including output audio codec.
     * Accepts both formats:
     * - Flat params: { speaker: "anushka", target_language_code: "hi-IN", ... }
     * - Wire format: { type: "config", data: { speaker: "anushka", target_language_code: "hi-IN", ... } }
     */
    configureConnection(config) {
      var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
      this.assertSocketIsOpen();
      let data;
      if ("type" in config && config.type === "config" && "data" in config) {
        data = config.data;
      } else {
        data = config;
      }
      const speaker = (_a = data.speaker) !== null && _a !== void 0 ? _a : "anushka";
      const message = {
        type: "config",
        data: {
          target_language_code: data.target_language_code,
          speaker,
          pitch: (_b = data.pitch) !== null && _b !== void 0 ? _b : 0,
          pace: (_c = data.pace) !== null && _c !== void 0 ? _c : 1,
          loudness: (_d = data.loudness) !== null && _d !== void 0 ? _d : 1,
          speech_sample_rate: (_e = data.speech_sample_rate) !== null && _e !== void 0 ? _e : 22050,
          enable_preprocessing: (_f = data.enable_preprocessing) !== null && _f !== void 0 ? _f : false,
          output_audio_codec: (_g = data.output_audio_codec) !== null && _g !== void 0 ? _g : "mp3",
          output_audio_bitrate: (_h = data.output_audio_bitrate) !== null && _h !== void 0 ? _h : "128k",
          dict_id: data.dict_id,
          min_buffer_size: (_j = data.min_buffer_size) !== null && _j !== void 0 ? _j : 50,
          max_chunk_length: (_k = data.max_chunk_length) !== null && _k !== void 0 ? _k : 150
        }
      };
      this.sendJson(message);
    }
    convert(text) {
      this.assertSocketIsOpen();
      const message = {
        type: "text",
        data: { text }
      };
      this.sendJson(message);
    }
    flush() {
      this.assertSocketIsOpen();
      const message = { type: "flush" };
      this.sendJson(message);
    }
    ping() {
      this.assertSocketIsOpen();
      const message = { type: "ping" };
      this.sendJson(message);
    }
    /** Connect to the websocket and register event handlers. */
    connect() {
      this.socket.reconnect();
      this.socket.addEventListener("open", this.handleOpen);
      this.socket.addEventListener("message", this.handleMessage);
      this.socket.addEventListener("close", this.handleClose);
      this.socket.addEventListener("error", this.handleError);
      return this;
    }
    /** Close the websocket and unregister event handlers. */
    close() {
      this.socket.close();
      this.handleClose({ code: 1e3 });
      this.socket.removeEventListener("open", this.handleOpen);
      this.socket.removeEventListener("message", this.handleMessage);
      this.socket.removeEventListener("close", this.handleClose);
      this.socket.removeEventListener("error", this.handleError);
    }
    /** Returns a promise that resolves when the websocket is open. */
    waitForOpen() {
      return __awaiter29(this, void 0, void 0, function* () {
        if (this.socket.readyState === ReconnectingWebSocket.OPEN) {
          return this.socket;
        }
        return new Promise((resolve, reject) => {
          this.socket.addEventListener("open", () => {
            resolve(this.socket);
          });
          this.socket.addEventListener("error", (event) => {
            reject(event);
          });
        });
      });
    }
    /** Asserts that the websocket is open. */
    assertSocketIsOpen() {
      if (!this.socket) {
        throw new Error("Socket is not connected.");
      }
      if (this.socket.readyState !== ReconnectingWebSocket.OPEN) {
        throw new Error("Socket is not open.");
      }
    }
    /** Send a binary payload to the websocket. */
    sendBinary(payload) {
      this.socket.send(payload);
    }
    /** Send a JSON payload to the websocket. */
    sendJson(payload) {
      const jsonPayload = toJson(payload);
      this.socket.send(jsonPayload);
    }
  };

  // node_modules/sarvamai/dist/esm/api/resources/textToSpeechStreaming/client/Client.mjs
  var __awaiter30 = function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
  var TextToSpeechStreamingClient = class {
    constructor(options = {}) {
      this._options = normalizeClientOptionsWithAuth(options);
    }
    connect(args) {
      return __awaiter30(this, void 0, void 0, function* () {
        var _a, _b;
        const { model, send_completion_event: sendCompletionEvent, headers, debug, reconnectAttempts } = args;
        const _queryParams = {};
        if (model != null) {
          _queryParams.model = model;
        }
        if (sendCompletionEvent != null) {
          _queryParams.send_completion_event = sendCompletionEvent;
        }
        const _authRequest = yield this._options.authProvider.getAuthRequest();
        const _headers = mergeHeaders(_authRequest.headers, mergeOnlyDefinedHeaders({ "Api-Subscription-Key": args["Api-Subscription-Key"] }), headers);
        const apiSubscriptionKeyValue = _headers["api-subscription-key"];
        const socket = new ReconnectingWebSocket({
          url: url_exports.join((_a = yield Supplier.get(this._options.baseUrl)) !== null && _a !== void 0 ? _a : ((_b = yield Supplier.get(this._options.environment)) !== null && _b !== void 0 ? _b : SarvamAIEnvironment.Production).production, "/text-to-speech/ws"),
          protocols: [`api-subscription-key.${apiSubscriptionKeyValue}`],
          queryParameters: _queryParams,
          headers: _headers,
          options: { debug: debug !== null && debug !== void 0 ? debug : false, maxRetries: reconnectAttempts !== null && reconnectAttempts !== void 0 ? reconnectAttempts : 30 }
        });
        return new TextToSpeechStreamingSocket({ socket });
      });
    }
  };

  // node_modules/sarvamai/dist/esm/Client.mjs
  var SarvamAIClient = class {
    constructor(options = {}) {
      this._options = normalizeClientOptionsWithAuth(options);
    }
    get text() {
      var _a;
      return (_a = this._text) !== null && _a !== void 0 ? _a : this._text = new TextClient(this._options);
    }
    get speechToText() {
      var _a;
      return (_a = this._speechToText) !== null && _a !== void 0 ? _a : this._speechToText = new SpeechToTextClient(this._options);
    }
    get textToSpeech() {
      var _a;
      return (_a = this._textToSpeech) !== null && _a !== void 0 ? _a : this._textToSpeech = new TextToSpeechClient(this._options);
    }
    get pronunciationDictionary() {
      var _a;
      return (_a = this._pronunciationDictionary) !== null && _a !== void 0 ? _a : this._pronunciationDictionary = new PronunciationDictionaryClient(this._options);
    }
    get chat() {
      var _a;
      return (_a = this._chat) !== null && _a !== void 0 ? _a : this._chat = new ChatClient(this._options);
    }
    get speechToTextJob() {
      var _a;
      return (_a = this._speechToTextJob) !== null && _a !== void 0 ? _a : this._speechToTextJob = new SpeechToTextJobClient(this._options);
    }
    get speechToTextTranslateJob() {
      var _a;
      return (_a = this._speechToTextTranslateJob) !== null && _a !== void 0 ? _a : this._speechToTextTranslateJob = new SpeechToTextTranslateJobClient(this._options);
    }
    get documentIntelligence() {
      var _a;
      return (_a = this._documentIntelligence) !== null && _a !== void 0 ? _a : this._documentIntelligence = new DocumentIntelligenceClient(this._options);
    }
    get speechToTextStreaming() {
      var _a;
      return (_a = this._speechToTextStreaming) !== null && _a !== void 0 ? _a : this._speechToTextStreaming = new SpeechToTextStreamingClient(this._options);
    }
    get speechToTextTranslateStreaming() {
      var _a;
      return (_a = this._speechToTextTranslateStreaming) !== null && _a !== void 0 ? _a : this._speechToTextTranslateStreaming = new SpeechToTextTranslateStreamingClient(this._options);
    }
    get textToSpeechStreaming() {
      var _a;
      return (_a = this._textToSpeechStreaming) !== null && _a !== void 0 ? _a : this._textToSpeechStreaming = new TextToSpeechStreamingClient(this._options);
    }
  };

  // node_modules/sarvamai/dist/esm/core/logging/exports.mjs
  var logging;
  (function(logging2) {
    logging2.LogLevel = LogLevel;
    logging2.ConsoleLogger = ConsoleLogger;
  })(logging || (logging = {}));
  return __toCommonJS(esm_exports);
})();
