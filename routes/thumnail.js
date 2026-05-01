const thumbnailController = require("../controllers/thumbnailController.js");

module.exports = async function (fastify, opts) {
  fastify.register(async function (fastify) {
    fastify.addHook("preHandler", fastify.authenticate);

    fastify.post("/", thumbnailController.createThumbnail)
    fastify.post("/", thumbnailController.getThumbnail)
    fastify.post("/:id", thumbnailController.getThumbnail)
    fastify.post("/:id", thumbnailController.updateThumbnail)
    fastify.post("/:id", thumbnailController.deleteThumbnail)
    fastify.post("/", thumbnailController.deleteAllThumbnails)
  });
};
