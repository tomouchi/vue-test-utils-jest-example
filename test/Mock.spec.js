import { shallowMount } from "@vue/test-utils";
import Mock from "@/components/Mock.vue";
import moxios from "moxios";

describe("Mock.vue", function() {
  beforeEach(function() {
    // import and pass your custom axios instance to this method
    moxios.install();
  });
  afterEach(function() {
    // import and pass your custom axios instance to this method
    moxios.uninstall();
  });
  it("just for a single spec", function(done) {
    moxios.withMock(function() {
      const responses = {
        "http://test1.test": { status: 200, response: "test1" },
        "http://test2.test": { status: 404 },
        "http://test3.test": { status: 200, response: "test3" }
      };

      let wrapper = shallowMount(Mock);

      moxios.wait(function() {
        respondAllWith(moxios, responses).then(() => {
          expect(wrapper.html()).toMatchSnapshot();
          done();
        });
      });
    });
  });
});

function respondAllWith(moxios, responses) {
  return moxios.requests.__items.reduce((accumulator, promise) => {
    return promise.respondWith(responses[promise.url]);
  }, null);
}
