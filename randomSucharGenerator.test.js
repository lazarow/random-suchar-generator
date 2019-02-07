const randomSucharGenerator = require('./randomSucharGenerator');

it('suchar should be retrieved', () => {
    expect.assertions(1);
    return randomSucharGenerator().then(
        suchar => {
            console.log(suchar);
            expect(suchar).not.toEqual('');
        },
        error => {
            console.log(error);
            expect(error).not.toEqual('');
        }
    );
});