using BookStoreApi.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace BookStoreApi.Services;

public class BooksService
{
	private readonly IMongoCollection<Book> _booksCollection;

	public BooksService(IOptions<BookStoreDatabaseSettings> bookStoreDatabaseSettings)
	{
		var mongoClient = new MongoClient(bookStoreDatabaseSettings.Value.ConnectionString);
		
		var mongoDatabase = mongoClient.GetDatabase(bookStoreDatabaseSettings.Value.DatabaseName);

		_booksCollection = mongoDatabase.GetCollection<Book>(bookStoreDatabaseSettings.Value.BooksCollectionName);
	}

	public async Task<List<Book>> GetAsyncAll() => await _booksCollection.Find(_=> true).ToListAsync();

	public async Task<Book?> GetAsync(string id) => await _booksCollection.Find(u => u.Id == id).FirstOrDefaultAsync();
	
	public async Task CreateAsync(Book newBook) => await _booksCollection.InsertOneAsync(newBook);

	public async Task UpdateAsync(string id, Book updateBook) => await _booksCollection.ReplaceOneAsync(v => v.Id == id, updateBook);
	
	public async Task DeleteAsync(string id) => await _booksCollection.DeleteOneAsync(w => w.Id == id);
}
