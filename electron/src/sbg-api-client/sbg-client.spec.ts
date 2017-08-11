import {assert} from "chai";
import {RequestError, StatusCodeError} from "request-promise-native/errors";
import {SBGClient} from "./sbg-client";

describe("SBGClient", () => {
    let client: SBGClient;

    beforeEach(() => {
        client = new SBGClient("https://api.sbgenomics.com", "");
    });

    describe("user", () => {
        it("should have a get method", () => {
            assert.isFunction(client.user.get);
        });

        it("can be tested", (done) => {
            const req = client.user.get();

            req.then(result => {
                done();
            }, (fail: StatusCodeError | RequestError) => {
                done()
            })
        });
    });

    describe("projects", () => {
        it("should have the `all` method", () => {
        });

    });
});
