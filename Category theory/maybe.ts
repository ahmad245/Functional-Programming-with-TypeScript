// Maybe
// The following Maybe data type is a Functor and an Applicative , which means that it
// contains a value and implements the map method. The main difference with the
// preceding implementation of Functor is that the value contained is optional:

class MayBe<T>{
    public constructor(private _value?: T) { }
    public static of<TVal>(val: TVal) {
        return new MayBe(val)
    }
    public isNothing() {
        return (this._value !== undefined || this._value !== null)
    }
    public map<TMap>(transform: (val: T) => TMap) {
        return this.isNothing() ? new MayBe<TMap>(transform(this._value!)) : new MayBe<TMap>()
    }

    public ap<TMap>(m: MayBe<(val: T) => TMap>) {
        return m.map(transform => this.map(transform))
    }

}
interface New {
    subreddit: string;
    id: string;
    title: string;
    score: number;
    over_18: boolean;
    url: string;
    author: string;
    ups: number;
    num_comments: number;
    created_utc: number;
}
interface Response {
    kind: string;
    data: {
        modhash: string;
        whitelist_status: boolean | null;
        children: Array<{ kind: string, data: New }>;
        after: string | null;
        before: string | null;
    };
}
const fetchNews = async () => {
    return new Promise<MayBe<Response>>((resolve, reject) => {
        const url = "https://www.reddit.com/r/typescript/new.json";
        fetch(url)
            .then((response) => {
                return response.json();
            }).then((json) => {
                resolve(new MayBe(json));
            }).catch(() => {
                resolve(new MayBe());
            });
    })
}
const resultResponseMaybe=async()=>{
    const maybeOfResponse = await fetchNews();
    const maybeOfNews =   maybeOfResponse
    .map(r=>r.data)
    .map(d=>d.children)
    .map(children=>children.map(c=>c.data))
    maybeOfNews.map((news)=>{
        news.forEach((el)=>console.log(el.author)
        )
    })
}

// concerning TypeScript from Reddit. If the request is completed successfully, the
// fetchNews function returns the HTTP response wrapped in a MayBe instance. We
// then use the map method to find the list of posts within the response. The nice
// thing about using a MayBe instance is that mapping logic is only executed if there
// is an actual response, so we don't need to worry about potential null or undefined
// errors.