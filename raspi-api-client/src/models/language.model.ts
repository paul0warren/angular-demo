/**
 * Language interface
 */
export interface Language {
    /**
     * Mongo Id
     */
    _id: string;
    CountryCode: string;
    Language: string;
    IsOfficial: string;
}
