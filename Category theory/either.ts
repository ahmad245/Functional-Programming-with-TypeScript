class Nothing<T>{
    public constructor(private _value?: T | undefined) { }
    public static of<TVal>(val?: TVal) {
        return new Nothing(val)
    }
    public map<TMap>(transform: (val: T) => TMap) {
        if (this._value !== undefined) return new Nothing<TMap>(transform(this._value))
        return new Nothing<TMap>(this._value as any)
    }
}

class Just<T>{
    public constructor(private _value: T) { }
    public static of<TVal>(val: TVal) { }
    public map<TMap>(transform: (val: T) => TMap) {
        return new Just(transform(this._value))
    }
}

type Either<T1, T2> = Just<T1> | Nothing<T2>

const fetchNewsEither = async () => {
    return new Promise<Either<Response, Error>>((resolve, reject) => {
        const url = "https://www.reddit.com/r/typescript/new.json";
        fetch(url)
            .then((response) => {
                return response.json();
            }).then((json) => {
                resolve(new Just(json));
            }).catch((e) => {
                resolve(new Nothing(e));
            });
    })
}
const resultResponseEither = async () => {
    const maybeOfResponse = await fetchNewsEither();
    if (maybeOfResponse instanceof Nothing) {
        maybeOfResponse
            .map(r => r.message)
            .map(msg => {
                console.log(`Error: ${msg}`);
                return msg;
            });
    } else {
        const maybeOfNews = maybeOfResponse
            .map(r => r.data)
            .map(d => d.children)
            .map(children => children.map(c => c.data))
        maybeOfNews.map((news) => {
            news.forEach((el) => console.log(el.author)
            )
        })
    }

}