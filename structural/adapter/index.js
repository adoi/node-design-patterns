function Membership() {
    this.processRequest = (start, end) => {
        /* ... */
        return {
            requested: true,
            message: 'Membership requested.'
        }
    }
}

function SpecialMembership() {
    this.getLink = (token) => { /* ... */ }
    this.setStart = (start) => { /* ... */ }
    this.setEnd = (end) => { /* ... */ }
    this.processRequest = () => {
        /* ... */
        return {
            requested: true,
            message: 'Special Membership requested'
        }
    }
}

function MembershipAdapter(token) {
    const membership = new SpecialMembership();

    membership.getLink(token);

    return {
        request: (start, end) => {
            membership.setStart(start);
            membership.setEnd(end);
            return membership.processRequest();
        }
    }
}

const adapter = new MembershipAdapter({
    token: '0x3f01b98dce'
});

const request = adapter.request('12-11-2018', '12-11-2019');
console.log(request.message);