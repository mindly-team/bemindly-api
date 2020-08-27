// articles-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const modelName = 'articles';
  const mongooseClient = app.get('mongooseClient');
  const {
    Schema
  } = mongooseClient;
  const schema = new Schema({
    url: {
      type: String,
      unique: true,
      lowercase: true,
      require: true
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'users'
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: 'authors'
    },
    author_images: {
      type: Schema.Types.ObjectId,
      ref: 'authors'
    },
    title: {
      type: String,
      unique: true,
      require: true
    },
    text: {
      type: String,
      require: true
    },
    tags: [{
      type: String
    }],
    issue: {
      type: Schema.Types.ObjectId,
      ref: 'issues'
    },
    category: [{
      type: Schema.Types.ObjectId,
      ref: 'categories'
    }],
    preview_text: {
      type: String,
    },
    preview_image: {
      type: String,
    },
    finalised: {
      type: Boolean,
      default: false
    },
    publish_on: {
      type: Date,
      min: Date.now
    },
  }, {
    timestamps: true
  });

  // This is necessary to avoid model compilation errors in watch mode
  // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
  if (mongooseClient.modelNames().includes(modelName)) {
    mongooseClient.deleteModel(modelName);
  }
  return mongooseClient.model(modelName, schema);

};
