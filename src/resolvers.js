const users = [
    { id: 1, name: 'Diego', email: 'diego@rocketseat.com.br' },
    { id: 1, name: 'Cleiton', email: 'cleiton@rocketseat.com.br' },
];

module.exports = {
    Query: {
        users: () => users,
        user : () => users[0]
    },

    Mutation: {
        createUser: () => users[0],
    },
};