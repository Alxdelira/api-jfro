function buildQuery(params: Record<string, string | undefined>) {
    let query = {};
    for (const key in params) {
        if (params[key]) {
            query = { ...query, [key]: { $regex: new RegExp(params[key] as string, 'i') } };
        }
    }
    return query;
}

function getPaginationOptions(page: string | undefined, perPage: string | undefined) {
    return {
        page: parseInt(page as string, 10) || 1,
        limit: parseInt(perPage as string, 10) || 10
    };
}

export { buildQuery, getPaginationOptions };