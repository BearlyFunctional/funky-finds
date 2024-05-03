const typeDefs = `
    type Product {
        _id: ID
        title: String
        price: Int
        description: String
        imageUrl: String
    }
    type Query {
        products: [Product]
        product(id: ID!): Product
    }
    type Mutation {
        createProduct(
            title: String!,
            price: Int!,
            description: String!,
            imageUrl: String!
        ): Product

        updateProduct(
            id: ID!,
            title: String,
            price: Int,
            description: String,
            imageUrl: String
        ): Product

        deleteProduct(
            id: ID!
        ): Product
    }
`

module.exports = typeDefs;