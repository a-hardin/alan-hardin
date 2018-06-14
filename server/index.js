const { GraphQLServer } = require('graphql-yoga');
const mongoose = require("mongoose");
const config = require('../config/config');

mongoose.connect("mongodb://localhost:27017/test2");

const Comment = mongoose.model('Comment', {
    text: String
});

const typeDefs = `
    type Query {
        hello(name: String): String!
        comments: [Comment]
    }
    type Comment{
        id: ID
        text: String!
    }
    type Mutation {
        createComment(text: String!) : Comment
        updateComment(id: ID!, test: String!): Boolean
        removeComment(id: ID!): Boolean
    }
`;

const resolvers = {
    Query: {
        hello: (_, { name } ) => `Hello ${name || 'World'}`,
        comments: () => Comment.find()
    },
    Mutation:{
        createComment: async (_, {text}) => {
            const todo = new Comment({text});
            await todo.save();
            return todo;
        },
        updateComment: async (_, {id, text}) => {
            await Comment.findByIdAndUpdate(id, {text});
            return true;
        },
        removeComment: async (_, {id}) => {
            await Comment.findByIdAndRemove(id);
            return true;
        }
    }
}

const server = new GraphQLServer({ typeDefs,resolvers })

mongoose.connection.once("open", function() {
    server.start(() => console.log('Server is running on localhost:4000'))
});
