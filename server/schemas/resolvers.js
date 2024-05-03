const { Product } = require('../models');

const resolvers = {
    Query: {
        products: async () => {
            return await Product.find();
        },
        product: async (_, { id }) => {
            return await Product.findById(id);
        }
    },
    Mutation: {
        createProduct: async (_, { product }) => {
            return await Product.create(product);
        },
        updateProduct: async (_, { id, product }) => {
            return await Product.findByIdAndUpdate(id, product, { new: true });
        },
        deleteProduct: async (_, { id }) => {
            return await Product.findByIdAndDelete(id);
        }
    }
};

module.exports = resolvers;