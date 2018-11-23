describe('foo', () => {
	test('bar', () => {
		expect(1).toEqual(1);
	})

	test('env var is set', () => {
		expect(process.env['FOOBAR']).toEqual('dog');
	});

	test('read from .env file', () => {
		expect(process.env['DOTENV_TEST_VALUE']).toEqual('cat');
	});
});
