// ACL: Incident - Read - Only Caller can view
// Table: incident
// Type: record

(function executeRule(current, previous) {
    // Admin and ITIL can see all
    if (gs.hasRole('admin') || gs.hasRole('itil')) {
        answer = true;
    } else {
        // Normal users can only see their own tickets
        answer = (current.caller_id == gs.getUserID());
    }
})(current, previous);
